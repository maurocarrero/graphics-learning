define([
  'canvasDrawingPaths',
  'canvasCurvesAndArcs',
  'canvasDrawingStyles',
  'canvasGradientFills',
  'canvasText',
  'canvasImages',
  'canvasEffects',
  'canvasShadows',
  'canvasTransformations'
], function(
  canvasDrawingPaths,
  canvasCurvesAndArcs,
  canvasDrawingStyles,
  canvasGradientFills,
  canvasText,
  canvasImages,
  canvasEffects,
  canvasShadows,
  canvasTransformations
) {
  return {
    run: function() {
      canvasDrawingPaths.run();
      canvasCurvesAndArcs.run();
      canvasDrawingStyles.run();
      canvasGradientFills.run();
      canvasText.run();
      canvasImages.run();
      canvasEffects.run();
      canvasShadows.run();
      canvasTransformations.run();
    }
  };
});
