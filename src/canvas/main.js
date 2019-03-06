define([
  'canvasDrawingPaths',
  'canvasCurvesAndArcs',
  'canvasDrawingStyles'
], function (
  canvasDrawingPaths,
  canvasCurvesAndArcs,
  canvasDrawingStyles
) {
  return {
    run: function () {
      canvasDrawingPaths.run();
      canvasCurvesAndArcs.run();
      canvasDrawingStyles.run();
    }
  };
});
