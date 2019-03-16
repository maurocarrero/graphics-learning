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
    canvasTransformations: 'canvas/transformations',
    canvasPixels: 'canvas/pixels',
    canvasEvents: 'canvas/events',
    canvasAnimations: 'canvas/animations',
    session: 'session'
  },
  shim: {
    fabric: {
      exports: 'fabric'
    }
  }
});

requirejs(['canvasMain', 'fabricMain', 'session'], function(canvasMain, fabricMain, session) {
  // canvasMain.run();
  // fabricMain.run();
  session.runNative();
  session.runFabric();
});
