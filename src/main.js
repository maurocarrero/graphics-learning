requirejs.config({
  urlArgs: 'bust=' + new Date().getTime(), // Prevent cache technique
  paths: {
    fabric: 'lib/fabric',
    fabricMain: 'fabric/main',
    hierarchy: 'fabric/hierarchy-inheritance',
    basics: 'fabric/basics',
    shapes: 'fabric/shapes',
    canvas: 'fabric/canvas',
    images: 'fabric/images',
    canvasMain: 'canvas/main',
    canvasDrawingPaths: 'canvas/drawingPaths',
    canvasCurvesAndArcs: 'canvas/curvesAndArcs',
    canvasDrawingStyles: 'canvas/drawingStyles',
    canvasGradientFills: 'canvas/gradientFills',
    canvasText: 'canvas/text',
    canvasImages: 'canvas/images'
  },
  shim: {
    fabric: {
      exports: 'fabric'
    }
  }
});

requirejs(
  ['fabricMain', 'canvasMain'],
  function(canvasMain, fabricMain) {
    fabricMain.run();
    canvasMain.run();
  }
);
