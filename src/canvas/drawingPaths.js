define(['utils'], function (utils) {
  return {
    run: function () {      
      const canvas = utils.createCanvas(200, 200);
      ctx = canvas.getContext('2d');

      ctx.beginPath();      // begin path
      
      // Draw a cross in the center
      ctx.moveTo(120, 120); // move cursor
      ctx.lineTo(80, 80);   // set the next movement
      ctx.moveTo(80, 120);  // move cursor
      ctx.lineTo(120, 80);  // set the next movement

      // Draw a rectangle wrapping the cross
      ctx.moveTo(70, 70);
      ctx.lineTo(70, 130);
      ctx.lineTo(130, 130);
      ctx.lineTo(130, 70);
      
      // OR use ctx.rect shortcut:
      // ctx.rect(70, 70, 60, 60);

      // ctx.lineTo(70, 70); // Close path OR
      ctx.closePath();
      // Or just call fill which will close it automatically in order to fill it.
      ctx.fillStyle = 'rgba(200, 0, 100, .3)'; // so we can see the cross outline
      ctx.fill();   // nevertheless when closing path by filling it, will not draw the final stroke.

      ctx.stroke(); // draw strokes.

      ctx.strokeRect(10, 10, 180, 180);
      ctx.fillRect(20, 20, 160, 160);

      ctx.clearRect(95, 95, 10, 10)
    }
  };
});
