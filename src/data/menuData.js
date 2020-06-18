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
  VIEW,
  VIEW_TILE,
  VIEW_LIST,
  VIEW_GROUP,
} from "../constants/contextmenuConstants";

const menuData = {
  [GLOBAL_TARGET]: [
    { name: ADD_TAG, disabled: false },
    { name: ADD_SUB_TAG, disabled: true },
    { name: REMOVE_TAG, disabled: true },
    { name: ADD_FILE, disabled: false },
    { name: REMOVE_FILE, disabled: true },
    {
      name: VIEW,
      disabled: false,
      subItem: [
        { name: VIEW_TILE, checked: false, disabled: false },
        { name: VIEW_LIST, checked: false, disabled: false },
        { name: VIEW_GROUP, checked: false, disabled: false },
      ],
    },
  ],
  [TREE_NODE_TARGET]: [
    { name: ADD_TAG, disabled: false },
    { name: ADD_SUB_TAG, disabled: false },
    { name: REMOVE_TAG, disabled: false },
    { name: ADD_FILE, disabled: false },
    { name: REMOVE_FILE, disabled: true },
  ],
  [FILE_TARGET]: [
    { name: OPEN_FILE, disabled: false },
    { name: EDIT_TAG, disabled: false },
    { name: REMOVE_FILE, disabled: false },
  ],
};

export default menuData;
