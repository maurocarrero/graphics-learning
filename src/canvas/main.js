define([
  'canvasDrawingPaths',
  'canvasCurvesAndArcs',
  'canvasDrawingStyles',
  'canvasGradientFills'
], function(
  canvasDrawingPaths,
  canvasCurvesAndArcs,
  canvasDrawingStyles,
  canvasGradientFills
) {
  return {
    run: function() {
      canvasDrawingPaths.run();
      canvasCurvesAndArcs.run();
      canvasDrawingStyles.run();
      canvasGradientFills.run();
    }
  };
});
