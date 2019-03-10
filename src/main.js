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
    canvasDrawingPaths: 'canvas/drawingPaths',
    canvasCurvesAndArcs: 'canvas/curvesAndArcs',
    canvasDrawingStyles: 'canvas/drawingStyles',
    canvasGradientFills: 'canvas/gradientFills',
    canvasText: 'canvas/text',
    canvasMain: 'canvas/main',
    canvasImages: 'canvas/images',
    canvasEffects: 'canvas/effects',
    canvasShadows: 'canvas/shadows',
    canvasTransformations: 'canvas/transformations'
  },
  shim: {
    fabric: {
      exports: 'fabric'
    }
  }
});

requirejs(['canvasMain', 'fabricMain'], function(canvasMain, fabricMain) {
  fabricMain.run();
  canvasMain.run();
});
