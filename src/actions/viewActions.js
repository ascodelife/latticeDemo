import { SET_FILE_VIEW } from "../constants/viewConstants";

export const setFileView = (fileView) => (dispatch, getState) => {
  dispatch({ type: SET_FILE_VIEW, payload: { fileView } });
  const { view } = getState();
  window.ipcRenderer.send("setFileView", {
    fileView: view.fileView,
  });
};
