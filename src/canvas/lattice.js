import Konva from "konva";
function renderLattice(
  element,
  clickCallback,
  mouseoverCallback,
  mouseoutCallback
) {
  const width = element.clientHeight;
  const height = element.clientWidth;

  const stage = new Konva.Stage({
    container: element,
    width,
    height,
  });

  const layer = new Konva.Layer();

  const text = new Konva.Text({
    x: 0,
    y: 0,
    fontFamily: "Calibri",
    fontSize: 16,
    text: "",
    fill: "black",
  });
  layer.add(text);

  const posData = {
    "1": {
      x: 0.5,
      y: 0.07,
      type: "2",
    },
    F1: {
      x: 0.25,
      y: 0.18,
      type: "0",
    },
    F2: {
      x: 0.75,
      y: 0.18,
      type: "0",
    },
    F11: {
      x: 0.1,
      y: 0.33,
      type: "0",
    },
    F12: {
      x: 0.3,
      y: 0.33,
      type: "0",
    },
    F21: {
      x: 0.625,
      y: 0.33,
      type: "0",
    },
    F22: {
      x: 0.875,
      y: 0.33,
      type: "0",
    },
    "8": {
      x: 0.5,
      y: 0.48,
      type: "2",
    },
    "9": {
      x: 0.25,
      y: 0.63,
      type: "1",
    },
    "10": {
      x: 0.5,
      y: 0.63,
      type: "2",
    },
    "11": {
      x: 0.375,
      y: 0.78,
      type: "1",
    },
    "12": {
      x: 0.625,
      y: 0.78,
      type: "1",
    },
    "13": {
      x: 0.5,
      y: 0.97,
      type: "2",
    },
  };

  const relationData = {
    "1": ["F1", "F2"],
    F1: ["F11", "F12", "8"],
    F2: ["F21", "F22"],
    F11: ["10"],
    F12: ["9"],
    F21: ["8"],
    F22: ["12"],
    "8": ["9", "10"],
    "9": ["11"],
    "10": ["11", "12"],
    "11": ["13"],
    "12": ["13"],
  };
  const tweens = new Map();
  Object.keys(posData).forEach((tagName) => {
    let { x, y, type } = posData[tagName];
    x *= height;
    y *= width;
    let node = null;
    const info = new Konva.Text({
      x: x + 0.04 * height,
      y: y - 0.03 * height,
      fontFamily: "Calibri",
      fontSize: 18,
      text: tagName,
      fill: "red",
    });
    switch (type) {
      case "0":
        node = drawAttrObjNode(x, y);
        break;
      case "1":
        node = drawObjNode(x, y);
        break;
      default:
        node = drawSimpleNode(x, y);
    }

    layer.add(node);
    layer.add(info);
    tweens.set(
      node,
      new Konva.Tween({
        node,
        duration: 0.1,
        scaleX: 1.5,
        scaleY: 1.5,
        easing: Konva.Easings.EaseInOut,
      })
    );

    node.on("click", function () {
      if (typeof clickCallback === "function") {
        clickCallback(tagName);
      }
    });

    node.on("mouseover", function () {
      tweens.get(node).play();
      if (typeof mouseoverCallback === "function") {
        mouseoverCallback(tagName);
      }
    });

    node.on("mouseout", function () {
      tweens.get(node).reverse();
      if (typeof mouseoutCallback === "function") {
        mouseoutCallback(tagName);
      }
    });
  });

  Object.keys(relationData).forEach((tagName) => {
    const { x: x1, y: y1 } = posData[tagName];
    relationData[tagName].forEach((item) => {
      const { x: x2, y: y2 } = posData[item];
      const line = drawLine(x1, y1, x2, y2);
      layer.add(line);
    });
  });

  stage.add(layer);

  function drawHalf(ctx, shape, fillStyle, upper) {
    ctx.beginPath();
    let angle = [];
    if (upper) {
      angle = [1 * Math.PI, 2 * Math.PI];
    } else {
      angle = [0, 1 * Math.PI];
    }
    ctx.arc(0, 0, 0.03 * height, ...angle);
    ctx.fillStyle = fillStyle;
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    ctx.fillStrokeShape(shape);
  }

  function drawAttrObjNode(x, y) {
    const node = new Konva.Shape({
      x,
      y,
      sceneFunc: function (ctx, shape) {
        drawHalf(ctx, shape, "blue", true);
        drawHalf(ctx, shape, "black", false);
      },
    });
    return node;
  }
  function drawObjNode(x, y) {
    const node = new Konva.Shape({
      x,
      y,
      sceneFunc: function (ctx, shape) {
        drawHalf(ctx, shape, "white", true);
        drawHalf(ctx, shape, "black", false);
      },
    });
    return node;
  }
  function drawSimpleNode(x, y) {
    const node = new Konva.Circle({
      x,
      y,
      radius: 0.03 * height,
      fill: "white",
      stroke: "black",
      strokeWidth: 1,
    });
    return node;
  }

  function drawLine(x1, y1, x2, y2) {
    const line = new Konva.Line({
      points: [
        x1 * height,
        y1 * height + 0.03 * height,
        x2 * height,
        y2 * height - 0.03 * height,
      ],
      stroke: "black",
      strokeWidth: 2,
      lineCap: "round",
      lineJoin: "round",
    });
    return line;
  }
}

export default renderLattice;
