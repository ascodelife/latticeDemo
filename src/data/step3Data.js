const metaData = {
  tags: {
    "1": {
      name: "1号节点",
      files: ["f1", "f2", "f3", "f4", "f5", "f6", "f7"],
    },
    F1: {
      name: "F1标签",
      files: ["f1", "f2", "f3", "f4", "f5", "f6"],
    },
    F11: { name: "F11标签", files: ["f1", "f2", "f3"] },
    F12: { name: "F12标签", files: ["f2", "f4", "f5", "f6"] },
    F2: {
      name: "F2标签",
      files: ["f1", "f2", "f4", "f6", "f7"],
    },
    F21: { name: "F21标签", files: ["f1", "f2", "f4", "f6"] },
    F22: { name: "F22标签", files: ["f1", "f7"] },
    "8": { name: "8号节点", files: ["f1", "f2", "f4", "f6"] },
    "9": { name: "9号节点", files: ["f2", "f4", "f6"] },
    "10": { name: "10号节点", files: ["f1", "f2"] },
    "11": { name: "11号节点", files: ["f2"] },
    "12": { name: "12号节点", files: ["f1"] },
    "13": { name: "13号节点", files: [] },
  },
  files: {
    f1: { name: "f1", tags: ["F1", "F11", "F2", "F21", "F22"] },
    f2: { name: "f2", tags: ["F1", "F11", "F12", "F2", "F21"] },
    f3: { name: "f3", tags: ["F1", "F11"] },
    f4: { name: "f4", tags: ["F1", "F12", "F2", "F21"] },
    f5: { name: "f5", tags: ["F1", "F12"] },
    f6: { name: "f6", tags: ["F1", "F12", "F2", "F21"] },
    f7: { name: "f7", tags: ["F2", "F22"] },
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
  "1": {
    name: "1号节点",
    No: "1",
    children: ["F1", "F2"],
    files: ["f1", "f2", "f3", "f4", "f5", "f6", "f7"],
    intents: [],
  },
  F1: {
    name: "F1",
    No: "2",
    parents: ["1"],
    children: ["F11", "F12", "8"],
    files: ["f1", "f2", "f3", "f4", "f5", "f6"],
    intents: ["F1"],
  },
  F2: {
    name: "F2",
    No: "3",
    parents: ["1"],
    children: ["F21", "F22"],
    files: ["f1", "f2", "f4", "f6", "f7"],
    intents: ["F2"],
  },
  F11: {
    name: "F11",
    No: "4",
    parents: ["F1"],
    children: ["10"],
    files: ["f1", "f2", "f3"],
    intents: ["F11"],
  },
  F12: {
    name: "F12",
    No: "5",
    parents: ["F1"],
    children: ["9"],
    files: ["f2", "f4", "f5", "f6"],
    intents: ["F12"],
  },
  F21: {
    name: "F21",
    No: "6",
    parents: ["F2"],
    children: ["8"],
    files: ["f1", "f2", "f4", "f6"],
    intents: ["F21"],
  },
  F22: {
    name: "F22",
    No: "7",
    parents: ["F2"],
    children: ["12"],
    files: ["f1", "f7"],
    intents: ["F22"],
  },
  "8": {
    name: "8号节点",
    No: "8",
    parents: ["F1", "F21"],
    children: ["9", "10"],
    files: ["f1", "f2", "f4", "f6"],
    intents: ["F1", "F2", "F21"],
  },
  "9": {
    name: "9号节点",
    No: "9",
    parents: ["F12", "8"],
    children: ["11"],
    files: ["f2", "f4", "f6"],
    intents: ["F1", "F2", "F12", "F21"],
  },
  "10": {
    name: "10号节点",
    No: "10",
    parents: ["F11", "8"],
    children: ["11", "12"],
    files: ["f1", "f2"],
    intents: ["F1", "F2", "F11", "F21"],
  },
  "11": {
    name: "11号节点",
    No: "11",
    parents: ["9", "10"],
    children: ["13"],
    files: ["f2"],
    intents: ["F1", "F2", "F11", "F12", "F21"],
  },
  "12": {
    name: "12号节点",
    No: "12",
    parents: ["10", "F22"],
    children: ["13"],
    files: ["f1"],
    intents: ["F1", "F2", "F11", "F21", "F22"],
  },
  "13": {
    name: "13号节点",
    No: "13",
    parents: ["11", "12"],
    children: ["13"],
    files: [],
    intents: ["F1", "F2", "F11", "F12", "F21", "F22"],
  },
};

export default { metaData, treeData, levelData };
