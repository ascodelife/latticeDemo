export function getDescendants(state, tagName) {
  const arr = [];
  traversal(state, tagName, "children", arr);
  return arr;
}

export function getAncestors(state, tagName) {
  const arr = [];
  traversal(state, tagName, "parents", arr);
  return arr;
}

function traversal(state, tagName, field, arr) {
  if (state.tags[tagName][field].length) {
    state.tags[tagName][field].forEach((item) => {
      if (!state.tags[item][field].lattice) {
        arr.push(item);
        traversal(state, item, field, arr);
      }
    });
  }
}
