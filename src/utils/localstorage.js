const Store = require("electron-store");
const store = new Store({});

/**
 * @description: 设置metaData
 * @param {type} metaData
 * @return:
 */
const setMetaData = (metaData) => {
  store.set("metaData", metaData);
};

/**
 * @description: 获取metaData
 * @param {type}
 * @return:
 */
const getMetaData = () => {
  return store.get("metaData");
};

/**
 * @description: 设置fileView
 * @param {type} fileView
 * @return:
 */
const setFileView = (fileView) => {
  store.set("fileView", fileView);
};

/**
 * @description: 获取fileView
 * @param {type}
 * @return:
 */
const getFileView = () => {
  return store.get("fileView");
};

/**
 * @description: 清空配置信息
 * @param {type}
 * @return:
 */
const clear = () => {
  return store.clear();
};

module.exports = {
  setMetaData,
  getMetaData,
  setFileView,
  getFileView,
  clear,
};
