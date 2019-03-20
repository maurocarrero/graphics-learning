define(['fabric'], function (fabric) {
  function createCanvas(cfg) {
    const canvasEl = document.querySelector('#fabric');
    const canvas = new fabric.Canvas(canvasEl, {
      backgroundColor: cfg.canvas.backgroundColor
    });

    canvas.setWidth(cfg.canvas.w);
    canvas.setHeight(cfg.canvas.h);

    return canvas;
  }

  function drawGrid(canvas, cfg, mask) {
    // draw x grid
    for (var i = 0; i < (cfg.canvas.w / cfg.grid); i++) {
      const x = i * cfg.grid;
      const line = new fabric.Line([x, 0, x, cfg.canvas.w], cfg.line)
      // line.clipPath = mask;
      canvas.add(line);
    }

    // draw y grid
    for (var i = 0; i < (cfg.canvas.h / cfg.grid); i++) {
      const y = i * cfg.grid;
      const line = new fabric.Line([0, y, cfg.canvas.w, y], cfg.line);
      // line.clipPath = mask;
      canvas.add(line);
    }
  }

  function createGalleyMask(cfg) {
    const ellipse = new fabric.Ellipse({
      width: cfg.canvas.w,
      rx: cfg.canvas.w / 2,
      ry: cfg.canvas.h / 2,
      originX: 'center',
      originY: 'center'
    });

    const rect = new fabric.Rect({
      left: 0,
      top: 0,
      width: cfg.canvas.w,
      height: cfg.canvas.h - cfg.canvas.h / 2,
      originX: 'center'
    });

    var mask = new fabric.Group([ellipse, rect], {
      left: 0,
      top: 0
    });

    mask.hasControls = false;
    mask.selectable = false;

    return mask;
  }

  function addCabinets(canvas) {
    // Add Cabinet
    const cabinet = new fabric.Rect({
      left: 100,
      top: 100,
      width: 100,
      height: 200,
      fill: '#faa',
      originX: 'left',
      originY: 'top',
      centeredRotation: true
    });
    cabinet.hasControls = false;
    canvas.add(cabinet);
  }

  function snapToGrid(canvas, cfg) {
    // Snap to grid
    canvas.on('object:moving', function (options) {
      const { target } = options;

      const left = Math.round(target.left / cfg.grid) * cfg.grid;
      const top = Math.round(target.top / cfg.grid) * cfg.grid;

      if (left > 0 && left + target.width < cfg.canvas.w) {
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
            left: cfg.canvas.w - target.width
          });
        }
      }

      if (top > 0 && top + target.height < cfg.canvas.h) {
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
            top: cfg.canvas.h - target.height
          });
        }
      }
    });
  }

  function runGalley(cfg) {
    const canvas = createCanvas(cfg);
    const mask = createGalleyMask(cfg);

    drawGrid(canvas, cfg, mask);
    addCabinets(canvas, cfg);
    snapToGrid(canvas, cfg);
  }

  function run () {
    runGalley({
      canvas: {
        w: 794,
        h: 660,
        backgroundColor: '#efefef'
      },
      line: {
        stroke: '#dedede',
        selectable: false
      },
      grid: 25
    });
  }
  
  return { run }
});
