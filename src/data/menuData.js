import {
  GLOBAL_TARGET,
  TREE_NODE_TARGET,
  FILE_TARGET,
  ADD_TAG,
  ADD_SUB_TAG,
  REMOVE_TAG,
  ADD_FILE,
  REMOVE_FILE,
  OPEN_FILE,
  EDIT_TAG,
} from "../constants/contextmenuConstants";

const menuData = {
  [GLOBAL_TARGET]: [
    { name: ADD_TAG, disabel: false },
    { name: ADD_SUB_TAG, disabel: true },
    { name: REMOVE_TAG, disabel: true },
    { name: ADD_FILE, disabel: false },
    { name: REMOVE_FILE, disabel: true },
  ],
  [TREE_NODE_TARGET]: [
    { name: ADD_TAG, disabel: false },
    { name: ADD_SUB_TAG, disabel: false },
    { name: REMOVE_TAG, disabel: false },
    { name: ADD_FILE, disabel: false },
    { name: REMOVE_FILE, disabel: true },
  ],
  [FILE_TARGET]: [
    { name: OPEN_FILE, disabel: false },
    { name: EDIT_TAG, disabel: false },
    { name: REMOVE_FILE, disabel: false },
  ],
};

export default menuData;
