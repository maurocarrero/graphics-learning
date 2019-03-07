requirejs.config({
  urlArgs: 'bust=' + new Date().getTime(), // Prevent cache technique
  paths: {
    fabric: 'lib/fabric',
    hierarchy: 'hierarchy-inheritance',
    basics: 'basics',
    shapes: 'shapes',
    canvas: 'canvas',
    images: 'images',
    canvasMain: 'canvas/main',
    canvasDrawingPaths: 'canvas/drawingPaths',
    canvasCurvesAndArcs: 'canvas/curvesAndArcs',
    canvasDrawingStyles: 'canvas/drawingStyles',
    canvasGradientFills: 'canvas/gradientFills'
  },
  shim: {
    fabric: {
      exports: 'fabric'
    }
  }
});

requirejs(
  ['fabric', 'basics', 'shapes', 'hierarchy', 'canvas', 'images', 'canvasMain'],
  function(fabric, basics, shapes, hierarchy, canvas, images, canvasMain) {
    // Canvas native API
    const nativeCanvas = document.querySelector('#native');

    // Fabric.js API
    // create a wrapper around native Canvas element
    const fabricCanvas = new fabric.Canvas('fabric');
    fabricCanvas.setHeight(200);
    fabricCanvas.setWidth(200);

    basics.runNative(nativeCanvas);
    basics.runFabric(fabricCanvas);
    shapes.run(fabricCanvas);
    hierarchy.run(fabricCanvas);
    canvas.run();
    images.run();
    canvasMain.run();
  }
);
