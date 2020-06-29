import {
  ADD_FILES_REQUEST,
  ADD_FILES_SUCCESS,
  ADD_FILES_FAIL,
  REMOVE_FILE_REQUEST,
  REMOVE_FILE_SUCCESS,
  REMOVE_FILE_FAIL,
  ADD_TAG_REQUEST,
  ADD_TAG_SUCCESS,
  ADD_TAG_FAIL,
  REMOVE_TAG_REQUEST,
  REMOVE_TAG_SUCCESS,
  REMOVE_TAG_FAIL,
  CLEAR_REQUEST,
  CLEAR_SUCCESS,
  CLEAR_FAIL,
} from "../constants/metaDataConstants";
import {
  addFilesApi,
  removeFileApi,
  addTagApi,
  removeTagApi,
  clearApi,
} from "../api/lattice";
import { getAncestors, getDescendants } from "../utils/tree";
import { getFileName } from "../utils/file";
import { unique } from "../utils/array";

const addFiles = (addFilePaths, addFlieTags) => async (dispatch, getState) => {
  try {
    //1.发出请求
    dispatch({
      type: ADD_FILES_REQUEST,
      payload: {
        addFilePaths,
        addFlieTags,
      },
    });
    //2.修改状态副本
    const state = getState().metaData;
    const addFileNames = addFilePaths.map((filePath) => getFileName(filePath));
    const addFileState = JSON.parse(JSON.stringify(state));
    //2.1先删除重复的文件
    const duplicateFilePaths = addFilePaths.filter(
      (filePath) => state.files[filePath]
    );
    // console.log(duplicateFilePaths);
    duplicateFilePaths.forEach((filePath) => {
      const fileTags = state.files[filePath].tags;
      //删除文件属性
      delete addFileState.files[filePath];
      //更新标签文件
      fileTags.forEach((tag) => {
        addFileState.tags[tag].files = addFileState.tags[tag].files.filter(
          (file) => file !== filePath
        );
      });
    });

    //2.2文件标签的所有祖先标签和其自身
    let addFilesTagsAll = [...addFlieTags];
    addFlieTags.forEach((tag) => {
      addFilesTagsAll = [...addFilesTagsAll, ...getAncestors(state, tag)];
    });
    addFilesTagsAll.forEach((tagName) => {
      addFileState.tags[tagName].files = [
        ...addFileState.tags[tagName].files,
        ...addFilePaths,
      ];
      //数组去重
      addFileState.tags[tagName].files = unique(
        addFileState.tags[tagName].files
      );
    });
    //2.3增加文件属性(或覆盖)
    addFilePaths.forEach((filepath, index) => {
      addFileState.files[filepath] = {
        name: addFileNames[index],
        path: filepath,
        tags: addFilesTagsAll,
      };
    });
    // console.log(state);
    // console.log(addFileState);
    //3.API
    const apiData = await addFilesApi(
      addFilePaths,
      addFilesTagsAll,
      duplicateFilePaths
    );
    console.log(apiData);
    addFileState.tags = { ...apiData };
    //4.请求成功
    dispatch({
      type: ADD_FILES_SUCCESS,
      payload: { addFileState, apiData },
    });
    //5.保存到本地
    const { metaData } = getState();
    window.ipcRenderer.send("setMetaData", {
      tags: metaData.tags,
      files: metaData.files,
    });
  } catch (error) {
    //请求异常
    dispatch({
      type: ADD_FILES_FAIL,
      payload: error,
    });
  }
};

const removeFile = (removeFilePath) => async (dispatch, getState) => {
  try {
    //1.发出请求
    dispatch({
      type: REMOVE_FILE_REQUEST,
      payload: removeFilePath,
    });
    //2.修改状态
    const state = getState().metaData;
    const fileTags = state.files[removeFilePath].tags;
    const removeFileState = JSON.parse(JSON.stringify(state));
    //删除文件属性
    delete removeFileState.files[removeFilePath];
    //更新标签文件
    fileTags.forEach((tag) => {
      removeFileState.tags[tag].files = removeFileState.tags[tag].files.filter(
        (file) => file !== removeFilePath
      );
    });
    //3.API
    const apiData = await removeFileApi(removeFilePath);
    console.log(apiData);
    removeFileState.tags = { ...apiData };
    //4.请求成功
    dispatch({
      type: REMOVE_FILE_SUCCESS,
      payload: { removeFileState, apiData },
    });
    //5.保存到本地
    const { metaData } = getState();
    window.ipcRenderer.send("setMetaData", {
      tags: metaData.tags,
      files: metaData.files,
    });
  } catch (error) {
    console.log(error);
    //6.请求异常
    dispatch({
      type: REMOVE_FILE_FAIL,
      payload: error,
    });
  }
};

const addTag = (addTagName, addTagParents = []) => async (
  dispatch,
  getState
) => {
  try {
    //1.发出请求
    dispatch({
      type: ADD_TAG_REQUEST,
      payload: addTagName,
    });
    //2.修改状态副本
    const addTagState = JSON.parse(JSON.stringify(getState().metaData));
    //更新父标签
    if (addTagParents && addTagState.tags[addTagParents]) {
      addTagState.tags[addTagParents].children.push(addTagName);
    }
    //增加标签属性
    addTagState.tags[addTagName] = {
      name: addTagName,
      files: [],
      parents: addTagParents,
      children: [],
    };
    //3.API
    const apiData = await addTagApi(
      addTagName,
      getAncestors(addTagState, addTagName)
    );
    console.log(apiData);
    addTagState.tags = { ...apiData };
    //4.请求成功
    dispatch({
      type: ADD_TAG_SUCCESS,
      payload: { addTagState, apiData },
    });
    //5.保存到本地
    const { metaData } = getState();
    window.ipcRenderer.send("setMetaData", {
      tags: metaData.tags,
      files: metaData.files,
    });
  } catch (error) {
    //请求异常
    dispatch({
      type: ADD_TAG_FAIL,
      payload: error,
    });
  }
};

const removeTag = (removeTagName) => async (dispatch, getState) => {
  try {
    //1.发出请求
    dispatch({
      type: REMOVE_TAG_REQUEST,
      payload: removeTagName,
    });
    //2.修改状态副本
    const state = getState().metaData;
    const removeTagFiles = state.tags[removeTagName].files;
    const removeTagState = JSON.parse(JSON.stringify(state));
    //更新父标签
    const parents = state.tags[removeTagName].parents;
    parents.forEach((parent) => {
      removeTagState.tags[parent].children = state.tags[parent].children.filter(
        (child) => child !== removeTagName
      );
    });
    //将所有后代标签加入待删除列表
    let removeTagNodeArr = getDescendants(state, removeTagName);
    const removeTagNames = [removeTagName, ...removeTagNodeArr];
    removeTagNames.forEach((tagName) => {
      delete removeTagState.tags[tagName];
    });
    //更新文件对象
    removeTagFiles.forEach((fileName) => {
      removeTagState.files[fileName].tags = removeTagState.files[
        fileName
      ].tags.filter((tag) => removeTagNames.indexOf(tag) !== -1);
      //如果标签数组为空，直接删除文件对象
      if (!removeTagState.files[fileName].tags.length) {
        delete removeTagState.files[fileName];
      }
    });
    //3.API
    const apiData = await removeTagApi(
      removeTagName,
      getDescendants(state, removeTagName)
    );
    console.log(apiData);
    removeTagState.tags = { ...apiData };
    //4.请求成功
    dispatch({
      type: REMOVE_TAG_SUCCESS,
      payload: { removeTagState, apiData },
    });
    //5.保存到本地
    const { metaData } = getState();
    window.ipcRenderer.send("setMetaData", {
      tags: metaData.tags,
      files: metaData.files,
    });
  } catch (error) {
    console.log(error);
    //6.请求异常
    dispatch({
      type: REMOVE_TAG_FAIL,
      payload: error,
    });
  }
};

const clear = () => async (dispatch, getState) => {
  try {
    //1.发出请求
    dispatch({
      type: CLEAR_REQUEST,
      payload: {},
    });
    //2.修改状态副本
    const state = getState().metaData;
    const clearState = { ...state, files: {}, tags: {} };
    //3.API
    const apiData = await clearApi();
    console.log(apiData);
    //4.请求成功
    dispatch({
      type: CLEAR_SUCCESS,
      payload: { clearState },
    });
    //5.保存到本地
    const { metaData } = getState();
    window.ipcRenderer.send("setMetaData", {
      tags: metaData.tags,
      files: metaData.files,
    });
  } catch (error) {
    //6.请求异常
    dispatch({
      type: CLEAR_FAIL,
      payload: error,
    });
  }
};

export { addFiles, removeFile, addTag, removeTag, clear };
