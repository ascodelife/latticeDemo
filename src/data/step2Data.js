const metaData = {
    tags: {
      F1: {
        name: "F1标签",
        files: ["f1", "f2", "f3", "f4", "f5", "f6"],
      },
      F11: { name: "F11标签", files: ["f1", "f2", "f3"] },
      F12: {name: "F12标签", files: ["f2", "f4", "f5", "f6"] },
      F2: {
        name: "F2标签",
        files: ["f1", "f2", "f4", "f6", "f7"],
      },
      F21: { name: "F21标签", files: ["f1", "f2", "f4", "f6"] },
      F22: { name: "F22标签", files: ["f1", "f7"] },
    },
    files: {
      f1: { name: "f1", tags: ["F1", "F11", "F2", "F21", "F22"] },
      f2: {  name: "f2", tags: ["F1", "F11", "F12", "F2", "F21"] },
      f3: {  name: "f3", tags: ["F1", "F11"] },
      f4: {  name: "f4", tags: ["F1", "F12", "F2", "F21"] },
      f5: {  name: "f5", tags: ["F1", "F12"] },
      f6: {  name: "f6", tags: ["F1", "F12", "F2", "F21"] },
      f7: {  name: "f7", tags: ["F2", "F22"] },
    },
  };

const treeData = [
  {
    title: "F1",
    key: "F1",
    children: [
      {
        title: "F11",
        key: "F11",
        children: [],
      },
      {
        title: "F12",
        key: "F12",
        children: [],
      },
    ],
  },
  {
    title: "F2",
    key: "F2",
    children: [
      {
        title: "F21",
        key: "F21",
        children: [],
      },
      {
        title: "F22",
        key: "F22",
        children: [],
      },
    ],
  },
];

const levelData = {
  F1: {
    name: "F1",
    children: ["F11", "F12"],
    files: ["f1", "f2", "f3", "f4", "f5", "f6"],
  },
  F2: {
    name: "F2",
    children: ["F21", "F22"],
    files: ["f1", "f2", "f4", "f6", "f7"],
  },
  F11: {
    name: "F11",
    parents: ["F1"],
    files: ["f1", "f2", "f3"],
  },
  F12: {
    name: "F12",
    parents: ["F1"],
    files: ["f2", "f4", "f5", "f6"],
  },
  F21: {
    name: "F21",
    parents: ["F2"],
    files: ["f1", "f2", "f4", "f6"],
  },
  F22: {
    name: "F22",
    parents: ["F2"],
    files: ["f1", "f7"],
  },
};

export default  { metaData, treeData, levelData };
