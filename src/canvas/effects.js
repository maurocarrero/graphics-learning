define(['utils'], function(utils) {
  function drawDefault() {
    const ctx = utils.createCanvasAndGetContext();

    ctx.fillText('Default overlap', 10, 10);

    ctx.fillStyle = 'red';
    ctx.fillRect(20, 75, 160, 50);

    ctx.fillStyle = 'blue';
    ctx.fillRect(75, 20, 50, 160);
  }

  function drawGlobalAlpha() {
    const ctx = utils.createCanvasAndGetContext();

    ctx.fillText('globalAlpha = 1 then 0.5', 10, 10);

    ctx.fillStyle = 'red';
    ctx.fillRect(20, 75, 160, 50);

    ctx.globalAlpha = 0.5;

    ctx.fillStyle = 'blue';
    ctx.fillRect(75, 20, 50, 160);
  }

  function drawGlobalAlpha2() {
    const ctx = utils.createCanvasAndGetContext();

    ctx.fillText('globalAlpha = 0.5 then 1 again', 10, 10);

    ctx.globalAlpha = 0.5;

    ctx.fillStyle = 'red';
    ctx.fillRect(20, 75, 160, 50);

    ctx.globalAlpha = 1;

    ctx.fillStyle = 'blue';
    ctx.fillRect(75, 20, 50, 160);
  }

  function drawGlobalCompositeOperation(compositeOp) {
    const ctx = utils.createCanvasAndGetContext();

    ctx.fillText(`${compositeOp}`, 10, 10);

    ctx.fillStyle = 'red';
    ctx.fillRect(20, 75, 160, 50);

    ctx.globalCompositeOperation = compositeOp;

    ctx.fillStyle = 'blue';
    ctx.fillRect(75, 20, 50, 160);
  }

  return {
    run: function() {
      drawDefault();
      drawGlobalAlpha();
      drawGlobalAlpha2();
      drawGlobalCompositeOperation('source-over');
      drawGlobalCompositeOperation('source-in');
      drawGlobalCompositeOperation('source-out');
      drawGlobalCompositeOperation('source-atop');

      drawGlobalCompositeOperation('destination-over');
      drawGlobalCompositeOperation('destination-in');
      drawGlobalCompositeOperation('destination-out');
      drawGlobalCompositeOperation('destination-atop');

      drawGlobalCompositeOperation('lighter');
      drawGlobalCompositeOperation('copy');
      drawGlobalCompositeOperation('xor');

      drawGlobalCompositeOperation('multiply');
      drawGlobalCompositeOperation('screen');
      drawGlobalCompositeOperation('overlay');
      drawGlobalCompositeOperation('lighten');
      drawGlobalCompositeOperation('darken');
      drawGlobalCompositeOperation('color-dodge');
      drawGlobalCompositeOperation('color-burn');
      drawGlobalCompositeOperation('hard-light');
      drawGlobalCompositeOperation('soft-light');
      drawGlobalCompositeOperation('difference');
      drawGlobalCompositeOperation('exclusion');
      drawGlobalCompositeOperation('hue');
      drawGlobalCompositeOperation('saturation');
      drawGlobalCompositeOperation('color');
      drawGlobalCompositeOperation('luminosity');
    }
  };
});
