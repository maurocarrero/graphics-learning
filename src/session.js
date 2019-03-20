define(['fabric'], function (fabric) {
  const W = 600;
  const H = 600;
  const RECT_COLOR = '#191919'; 
  const CIRCLE_COLOR = '#DE0000'; 

  return {
    runNative: function () {
      const canvas = document.getElementById('native');
      const ctx = canvas.getContext('2d');

      // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
      const domRect = canvas.getBoundingClientRect();
      const W = domRect.width;
      const H = domRect.height;

      // https://www.html5rocks.com/en/tutorials/canvas/hidpi/
      const ratio = window.devicePixelRatio;

      canvas.width = W * ratio;
      canvas.height = H * ratio;

      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;

      ctx.scale(ratio, ratio);

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
