define(['fabric', 'utils'], function (fabric, utils) {
  const W = 600;
  const H = 600;
  const TRIANGLE_COLOR = '#007E00';
  const SIDE = 200;

  return {
    runNative: function () {
      const canvas = utils.setupCanvas(document.getElementById('native'), W, H);
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = TRIANGLE_COLOR;
      ctx.beginPath();
      ctx.moveTo(W / 2, H / 2 - SIDE / 2);
      ctx.lineTo(W / 2 + SIDE / 2, H / 2 + SIDE / 2);
      ctx.lineTo(W / 2 - SIDE / 2, H / 2 + SIDE / 2);
      ctx.fill();
    },

    runFabric: function () {
      const canvasElement = document.getElementById('fabric');
      const canvas = new fabric.Canvas(canvasElement, { 
        backgroundColor: 'lightblue',
        width: W,
        height: H
      });

      // const rect = new fabric.Rect({
      //   width: 200,
      //   height: 200,
      //   left: W / 2,
      //   top: H / 2,
      //   fill: '#373737',
      //   originX: 'center',
      //   originY: 'center'
      // });
      // canvas.add(rect);

      const triangle = new fabric.Triangle({
        width: SIDE,
        height: SIDE,
        left: W / 2,
        top: H / 2,
        fill: TRIANGLE_COLOR,
        originX: 'center',
        originY: 'center'
      });

      canvas.add(triangle);
    }
  };
});
