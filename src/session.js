define(['fabric', 'utils'], function (fabric, utils) {
  const W = 600;
  const H = 600;
  const RECT_COLOR = '#007E00';
  const SQR_SIDE = 200;

  return {
    runNative: function () {
      const canvas = utils.setupCanvas(document.getElementById('native'), W, H);
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = RECT_COLOR;
      ctx.fillRect(
        W / 2,            // x or left
        H / 2,            // y or top
        SQR_SIDE,         // width
        SQR_SIDE          // height
      );
    },

    runFabric: function () {
      const canvasElement = document.getElementById('fabric');
      const canvas = new fabric.Canvas(canvasElement, { 
        backgroundColor: 'lightblue',
        width: W,
        height: H
      });

      const rect = new fabric.Rect({
        left: canvas.getWidth() / 2,
        top: canvas.getHeight() / 2,
        width: SQR_SIDE,
        height: SQR_SIDE,
        fill: RECT_COLOR
      });

      canvas.add(rect);
    }
  };
});
