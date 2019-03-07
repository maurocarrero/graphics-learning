define([
  'canvasDrawingPaths',
  'canvasCurvesAndArcs',
  'canvasDrawingStyles',
  'canvasGradientFills',
  'canvasText'
], function(
  canvasDrawingPaths,
  canvasCurvesAndArcs,
  canvasDrawingStyles,
  canvasGradientFills,
  canvasText
) {
  return {
    run: function() {
      canvasDrawingPaths.run();
      canvasCurvesAndArcs.run();
      canvasDrawingStyles.run();
      canvasGradientFills.run();
      canvasText.run();
    }
  };
});
