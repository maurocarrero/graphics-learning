define(['fabric'], function (fabric) {
  function createCanvas(cfg) {
    const canvasEl = document.querySelector('#fabric');
    const canvas = new fabric.Canvas(canvasEl, {
      backgroundColor: cfg.canvas.backgroundColor
    });

    canvas.setWidth(cfg.canvas.width);
    canvas.setHeight(cfg.canvas.height);

    return canvas;
  }

  function drawGrid(canvas, cfg, mask) {
    const lines = [];

    for (var i = 0; i < (cfg.canvas.width / cfg.grid); i++) {
      const x = i * cfg.grid;
      lines.push(new fabric.Line([x, 0, x, cfg.canvas.width], cfg.line));
    }

    for (var i = 0; i < (cfg.canvas.height / cfg.grid); i++) {
      const y = i * cfg.grid;
      lines.push(new fabric.Line([0, y, cfg.canvas.width, y], cfg.line));
    }

    const grid = new fabric.Group(lines);

    grid.clipPath = mask;

    grid.hasControls = false;
    grid.selectable = false;

    canvas.add(grid);
  }

  function addMask(canvas, cfg) {
    const ellipse = new fabric.Ellipse({
      width: cfg.canvas.width,
      rx: cfg.canvas.width / 2,
      ry: cfg.canvas.height / 3,
      originX: 'center',
      originY: 'center'
    });

    const rect = new fabric.Rect({
      left: 0,
      top: 0,
      width: cfg.canvas.width,
      height: cfg.canvas.height,
      originX: 'center'
    });

    var mask = new fabric.Group([ellipse, rect], {
      left: 0,
      top: 0
    });

    canvas.clipPath = mask;
  }

  function createGenericWheel(cfg) {
    return new fabric.Rect({
      width: 5,
      height: 15,
      originX: cfg.cabinet.originX,
      originY: cfg.cabinet.originY,
      fill: '#ccc',
      rx: 4,
      ry: 4
    });
  }

  function createWheels(cfg) {
    const wheel1 = createGenericWheel(cfg);
    wheel1.set({
      left: cfg.cabinet.width / 3 - 5,
      top: cfg.cabinet.height - 5,
    });

    const wheel2 = createGenericWheel(cfg);
    wheel2.set({
      left: cfg.cabinet.width / 3 + 2,
      top: cfg.cabinet.height - 5
    });

    const wheel3 = createGenericWheel(cfg);
    wheel3.set({
      left: cfg.cabinet.width - cfg.cabinet.width / 3 - 5,
      top: cfg.cabinet.height - 5
    });

    const wheel4 = createGenericWheel(cfg);
    wheel4.set({
      left: cfg.cabinet.width - cfg.cabinet.width / 3 + 2,
      top: cfg.cabinet.height - 5
    });

    return new fabric.Group([wheel1, wheel2, wheel3, wheel4]);
  }

  function createCabinet(cfg, idx) {
    const rect = new fabric.Rect({
      width: cfg.cabinet.width,
      height: cfg.cabinet.height,
      originX: cfg.cabinet.originX,
      originY: cfg.cabinet.originY,
      fill: cfg.cabinet.fill,
      rx: cfg.cabinet.rx,
      ry: cfg.cabinet.ry,
      stroke: cfg.cabinet.stroke,
      strokeWidth: cfg.cabinet.strokeWidth
    });
    const rectBottom = new fabric.Rect({
      top: cfg.cabinet.height - 5,
      width: cfg.cabinet.width,
      height: 5,
      originX: cfg.cabinet.originX,
      originY: cfg.cabinet.originY,
      fill: '#ccc'
    });

    const wheels = createWheels(cfg);

    const title = new fabric.Text(`${idx + 500} - ${cfg.cabinet.title.text}`, {
      left: cfg.cabinet.title.left,
      top: cfg.cabinet.title.top,
      fontSize: cfg.cabinet.text.fontSize,
      fontFamily: cfg.cabinet.text.fontFamily,
      stroke: cfg.cabinet.text.stroke
    });
    const subtitle = new fabric.Text(cfg.cabinet.subtitle.text, {
      left: cfg.cabinet.subtitle.left,
      top: cfg.cabinet.subtitle.top,
      fontSize: cfg.cabinet.text.fontSize,
      fontFamily: cfg.cabinet.text.fontFamily,
      stroke: cfg.cabinet.text.stroke
    });

    const cabinet = new fabric.Group([rect, title, subtitle, rectBottom, wheels], {
      left: ((idx + 1) * cfg.cabinet.width) + 10 * idx,
      top: cfg.cabinet.top
    });

    cabinet.hasControls = false;

    return cabinet;
  }

  function addCabinets(canvas, cfg) {
    for (let i = 0; i < 5; i++) {
      canvas.add(createCabinet(cfg, i));
    }
  }

  function snapToGrid(canvas, cfg) {
    canvas.on('object:moving', function (options) {
      const { target } = options;

      const left = Math.round(target.left / cfg.grid) * cfg.grid;
      const top = Math.round(target.top / cfg.grid) * cfg.grid;

      const leftIsWithinXAxisBoundaries = left > 0 && left + target.width < cfg.canvas.width;

      if (leftIsWithinXAxisBoundaries) {
        target.set({
          left
        });
      } else {
        if (left <= 0) {
          target.set({
            left: 0
          });
        } else {
          target.set({
            left: cfg.canvas.width - target.width
          });
        }
      }

      const topIsWithinYAxisBoundaries = top > 0 && top + target.height < cfg.canvas.height

      if (topIsWithinYAxisBoundaries) {
        target.set({
          top
        });
      } else {
        if (top <= 0) {
          target.set({
            top: 0
          });
        } else {
          target.set({
            top: cfg.canvas.height - target.height - cfg.cabinet.strokeWidth
          });
        }
      }
    });
  }

  function runGalley(cfg) {
    const canvas = createCanvas(cfg);
    addMask(canvas, cfg);
    drawGrid(canvas, cfg);
    addCabinets(canvas, cfg);
    snapToGrid(canvas, cfg);
  }

  function run () {
    runGalley({
      canvas: {
        width: 794,
        height: 660,
        backgroundColor: '#fefefe'
      },
      line: {
        stroke: '#efefef',
        selectable: false
      },
      cabinet: {
        left: 400,
        top: 300,
        width: 100,
        height: 300,
        originX: 'left',
        originY: 'top',
        fill: '#f2f2f2',
        rx: 2,
        ry: 2,
        stroke: '#bcbcbc',
        strokeWidth: 1,
        title: {
          left: 10,
          top: 10,
          text: 'FULL'
        },
        subtitle: {
          left: 10,
          top: 30,
          text: 'RS - AFT'
        },
        text: {
          fontSize: 12,
          fontFamily: 'ArialMT',
          stroke: '#575757'
        }
      },
      grid: 12
    });
  }
  
  return { run }
});
