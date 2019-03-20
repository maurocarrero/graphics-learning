define(['fabric', 'utils'], function (fabric, utils) {
  const W = 600;
  const H = 600;
  const CIRCLE_COLOR = '#007E00';
  const RADIUS = 100;

  return {
    runNative: function () {
      const canvas = utils.setupCanvas(document.getElementById('native'), W, H);
      const ctx = canvas.getContext('2d');

      // http://dbp-consulting.com/tutorials/canvas/CanvasArcTo.html
      const deg360 = utils.getRadiansFromDegrees(360);
      ctx.strokeStyle = 'green';

      ctx.beginPath();
      ctx.arc(W / 2, H / 2, RADIUS, 0, deg360);
      ctx.fillStyle = CIRCLE_COLOR;
      ctx.fill();
    },

    runFabric: function () {
      const canvasElement = document.getElementById('fabric');
      const canvas = new fabric.Canvas(canvasElement, { 
        backgroundColor: 'lightblue',
        width: W,
        height: H
      });

      const circle = new fabric.Circle({
        left: canvas.getWidth() / 2,
        top: canvas.getHeight() / 2,
        radius: RADIUS,
        fill: CIRCLE_COLOR,
        originX: 'center',
        originY: 'center'
      });

      canvas.add(circle);
    }
  };
});
