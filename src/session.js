define(['fabric', 'utils'], function (fabric, utils) {
  const W = 600;
  const H = 600;
  const LINE_COLOR = 'rgba(256, 10, 200, .7)';
  const LINE_LENGTH = 200

  return {
    runNative: function () {
      const canvas = utils.setupCanvas(document.getElementById('native'), W, H);
      const ctx = canvas.getContext('2d');

      // virtual cursor position
      ctx.beginPath();
      ctx.strokeStyle = LINE_COLOR;
      ctx.lineWidth = 7;
      ctx.moveTo(W / 2 - LINE_LENGTH / 2, H / 2);
      ctx.lineTo(W / 2 + LINE_LENGTH / 2, H / 2)
      ctx.stroke();
    },

    runFabric: function () {
      const canvasElement = document.getElementById('fabric');
      const canvas = new fabric.Canvas(canvasElement, { 
        backgroundColor: 'lightblue',
        width: W,
        height: H
      });

      const line = new fabric.Line([
          W / 2 - LINE_LENGTH / 2,
          H / 2,
          W / 2 + LINE_LENGTH / 2,
          H / 2
        ], {
          stroke: LINE_COLOR,
          // strokeWidth: 7
        }
      );

      canvas.add(line);
    }
  };
});
