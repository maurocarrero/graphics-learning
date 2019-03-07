define([
  'canvasDrawingPaths',
  'canvasCurvesAndArcs',
  'canvasDrawingStyles',
  'canvasGradientFills',
  'canvasText',
  'canvasImages'
], function(
  canvasDrawingPaths,
  canvasCurvesAndArcs,
  canvasDrawingStyles,
  canvasGradientFills,
  canvasText,
  canvasImages
) {
  return {
    run: function() {
      canvasDrawingPaths.run();
      canvasCurvesAndArcs.run();
      canvasDrawingStyles.run();
      canvasGradientFills.run();
      canvasText.run();
      canvasImages.run();
    }
  };
});
