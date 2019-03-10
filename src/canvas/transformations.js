define(['utils'], function(utils) {
  function rotateTranslate(degrees) {
    const ctx = utils.createCanvasAndGetContext();

    const sqrDiag = Math.sqrt(200 * 200 + 200 * 200);
    const halfSqrDiag = sqrDiag / 2;

    ctx.rotate(utils.getRadiansFromDegrees(degrees));
    ctx.translate(halfSqrDiag, 0);

    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'red';

    ctx.fillText('Transformations: rotate and translate.', -50, -12);
    ctx.fillText('(0,0)', 4, -1);
    ctx.moveTo(-halfSqrDiag, 0);
    ctx.lineTo(halfSqrDiag, 0);
    ctx.moveTo(0, -halfSqrDiag);
    ctx.lineTo(0, halfSqrDiag);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 50, 50);
  }

  return {
    run: function() {
      rotateTranslate(45);
    }
  };
});
