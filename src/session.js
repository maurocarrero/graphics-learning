define(['fabric'], function (fabric) {
  const W = 600;
  const H = 600;
  const RECT_COLOR = '#191919'; 
  const CIRCLE_COLOR = '#DE0000'; 

  return {
    runNative: function () {
      const canvas = document.getElementById('native');

      canvas.width = W;
      canvas.height = H;

      const ctx = canvas.getContext('2d');

      ctx.fillStyle = RECT_COLOR;
      ctx.fillRect(
        0,                // x or left
        0,                // y or top
        W,                // width
        H                 // height
      );
      
      ctx.fillStyle = CIRCLE_COLOR;
      ctx.arc(
        W / 2,
        H / 2,
        W / 4,            // radius
        0,                // start angle
        Math.PI * 2       // end angle
      );     
      ctx.fill();
    },

    runFabric: function () {
      const canvasElement = document.getElementById('fabric');
      const canvas = new fabric.Canvas(canvasElement);

      canvas.setHeight(W);
      canvas.setWidth(H);

      const rect = new fabric.Rect({
        left: 0,
        top: 0,
        width: canvas.getWidth(),
        height: canvas.getHeight(),
        fill: RECT_COLOR
      });

      const circle = new fabric.Circle({
        left: canvas.getWidth() / 2,
        top: canvas.getHeight() / 2,
        radius: canvas.getWidth() / 4,
        fill: CIRCLE_COLOR,
        originX: 'center',
        originY: 'center'
      });

      canvas.add(rect, circle);
    }
  };
});
