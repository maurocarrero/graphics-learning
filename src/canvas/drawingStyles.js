define(['utils'], function (utils) {
  function fourBoxes(ctx) {
    ctx.fillStyle = 'rgba(120, 230, 150, .5)';
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 7;

    ctx.beginPath();
    ctx.rect(20, 20, 60, 60);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(120, 20, 60, 60);
    ctx.fill();

    ctx.beginPath();
    ctx.rect(20, 120, 60, 60);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.rect(120, 120, 60, 60);
    ctx.fill();
    ctx.stroke();
  }

  function threeShapes(ctx, lineCap, lineJoin) {
    function draw(ctx) {
      ctx.beginPath();
      ctx.moveTo(20, 30);
      ctx.lineTo(80, 30)
      ctx.stroke();

      ctx.beginPath();
      ctx.rect(80, 80, 40, 40);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(140, 180);
      ctx.lineTo(160, 120);
      ctx.lineTo(180, 180);
      ctx.stroke();
    }

    ctx.lineCap = lineCap;
    ctx.lineJoin = lineJoin;

    ctx.strokeStyle = '#999999';
    ctx.lineWidth = 10;
    draw(ctx);
    
    ctx.strokeStyle = '#ff0000';
    ctx.lineWidth = 1;
    draw(ctx);
  }

  return {
    run: function () {
      fourBoxes(utils.createCanvasAndGetContext());
      threeShapes(utils.createCanvasAndGetContext(), 'butt', 'miter'); // DEFAULTS
      threeShapes(utils.createCanvasAndGetContext(), 'square', 'bevel');
      threeShapes(utils.createCanvasAndGetContext(), 'round', 'round');
    }
  }
});