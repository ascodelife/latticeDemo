import React from "react";
import { Redirect } from "react-router-dom";
import FileBar from "../components/fileBar/FileBar";
import File from "../components/fileBar/File";
import Folder from "../components/fileBar/Folder";
import step1Data from "../data/step1Data";
import step2Data from "../data/step2Data";
import step3Data from "../data/step3Data";

import { useSelector, useDispatch } from "react-redux";

import { setSeletedFile } from "../actions/fileActions";

function FilesScreen(props) {
  const dispatch = useDispatch();

  const { current } = useSelector((state) => state.step);
  const { metaData, levelData } =
    current === 0 ? step1Data : current === 1 ? step2Data : step3Data;
  const tagName = props.match.params.tagName;

  if (!metaData.tags[tagName] && tagName) {
    return <Redirect to="/" />;
  }

  const { name, files } = tagName
    ? metaData.tags[tagName]
    : { name: "所有", files: Object.keys(metaData.files) };

  function renderFolder(type) {
    const typeName = type === 0 ? "parents" : "children";
    const info = `${name}${type === 0 ? "父" : "子"}目录`;
    const arr = levelData[tagName][typeName];
    if (arr) {
      return (
        <FileBar info={info}>
          {arr.map((folderName, index) => (
            <Folder
              tabIndex={index + files.length}
              key={folderName}
              folder={levelData[folderName]}
              onDoubleClick={() => props.history.push(`/tags/${folderName}`)}
            ></Folder>
          ))}
        </FileBar>
      );
    }
  }

  return (
    <div>
      <h3 className="text-center">{name}</h3>
      {
        <FileBar info={`${name}的文件（${files.length}）`}>
          {files.map((fileName, index) => (
            <File
              tabIndex={index}
              onFocus={() => dispatch(setSeletedFile(metaData.files[fileName]))}
              onBlur={() => dispatch(setSeletedFile(null))}
              key={metaData.files[fileName].name}
              file={metaData.files[fileName]}
            ></File>
          ))}
        </FileBar>
      }
      {current >= 1 && tagName ? renderFolder(0) : null}
      {current >= 1 && tagName ? renderFolder(1) : null}
    </div>
  );
}

export default FilesScreen;
