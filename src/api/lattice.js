import Axios from "axios";

// const addFilesApi = async () => {
//   const { data } = Axios.post(`/api/lattice/addFiles`);
// };

// const removeFile = async () => {};

export const addFilesApi = async (files, tags, duplicateFiles) => {
  const sendData = {
    files,
    tags,
    duplicateFiles,
  };
  const { data } = await Axios.post(`/api/lattice/addFiles`, sendData);
  return data;
};

export const removeFileApi = async (file) => {
  const sendData = {
    file,
  };
  const { data } = await Axios.post(`/api/lattice/removeFile`, sendData);
  return data;
};

export const addTagApi = async (tag, ancestors) => {
  const sendData = {
    tag,
    ancestors,
  };
  const { data } = await Axios.post(`/api/lattice/addTag`, sendData);
  return data;
};

export const removeTagApi = async (tag, descendants) => {
  const sendData = {
    tag,
    descendants,
  };
  const { data } = await Axios.post(`/api/lattice/removeTag`, sendData);
  return data;
};

export const clearApi = async () => {
  const sendData = {};
  const { data } = await Axios.post(`/api/lattice/clear`, sendData);
  return data;
};
