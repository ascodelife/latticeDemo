const remote = window.remote;

export const openDialog =  () => {
  const result =  remote.dialog.showOpenDialogSync({
    properties: ["openFile", "multiSelections"],
  });
  return result
};
