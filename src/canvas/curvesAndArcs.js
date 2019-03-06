define(['utils'], function (utils) {
  function drawSinusoid(ctx, sinMultiplier) {
    // Sine wave: https://en.wikipedia.org/wiki/Sine_wave
    ctx.beginPath();
    ctx.moveTo(0, 100);

    for (let x = 1; x <= 200; x += 1) {
      let y = 100 + Math.sin(x * sinMultiplier) * 100;
      ctx.lineTo(x, y);
    }

    ctx.stroke();
  };

  function drawPoint(ctx, point, color) {
    ctx.fillStyle = color;
    ctx.fillRect(point.x, point.y, 4, 4);
  };

  function drawQuadraticCurve(ctx, startingPoint, controlPoint, endPoint) {
    drawPoint(ctx, startingPoint, 'green');
    drawPoint(ctx, controlPoint, 'red');
    drawPoint(ctx, endPoint, 'green');

    ctx.beginPath();
    ctx.moveTo(startingPoint.x, startingPoint.y);
    ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, endPoint.x, endPoint.y);
    ctx.stroke();
  };

  function drawBezierCurve(ctx, startingPoint, controlPoint1, controlPoint2, endPoint) {
    drawPoint(ctx, startingPoint, 'blue');
    drawPoint(ctx, controlPoint1, 'orange');
    drawPoint(ctx, controlPoint2, 'orange');
    drawPoint(ctx, endPoint, 'blue');

    ctx.beginPath();
    ctx.moveTo(startingPoint.x, startingPoint.y);
    ctx.bezierCurveTo(controlPoint1.x, controlPoint1.y, controlPoint2.x, controlPoint2.y, endPoint.x, endPoint.y);
    ctx.stroke();
  };

  function drawRandomCurves(ctx) {
    function getRandomPoint() {
      return {
        x: Math.random() * 200,
        y: Math.random() * 200,
      };
    }
    setInterval(function () {
      ctx.clearRect(0, 0, 200, 200);
      drawQuadraticCurve(ctx, getRandomPoint(), getRandomPoint(), getRandomPoint());
      drawBezierCurve(ctx, getRandomPoint(), getRandomPoint(), getRandomPoint(), getRandomPoint());
    }, 1000);
  };

  function drawArcs(ctx) {
    // http://dbp-consulting.com/tutorials/canvas/CanvasArcTo.html
    const deg360 = utils.getRadiansFromDegrees(360);
    ctx.strokeStyle = 'green';
    
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, deg360);
    ctx.fillStyle = '#f3dd3f';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(100, 100, 30, 0, utils.getRadiansFromDegrees(180));
    ctx.stroke();

    ctx.fillStyle = 'green';

    ctx.beginPath();
    ctx.arc(82, 80, 5, 0, deg360);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(117, 80, 5, 0, deg360);
    ctx.fill();
  };

  return {
    run: function () {
      const getCtx = utils.createCanvasAndGetContext;
      drawSinusoid(getCtx(), 1);
      drawSinusoid(getCtx(), 0.2);
      drawSinusoid(getCtx(), 2);
      drawQuadraticCurve(
        getCtx(),
        { x: 10, y: 100 },
        { x: 100, y: 80 },
        { x: 190, y: 100 }
      );
      drawBezierCurve(
        getCtx(),
        { x: 10, y: 100 },
        { x: 100, y: 10 },
        { x: 100, y: 190 },
        { x: 190, y: 100 }
      );
      drawRandomCurves(getCtx());
      drawArcs(getCtx());
    }
  };
});
