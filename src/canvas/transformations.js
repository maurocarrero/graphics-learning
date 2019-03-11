define(['utils'], function(utils) {
  function rotateTranslate(degrees) {
    const ctx = utils.createCanvasAndGetContext();

    const sqrDiag = Math.sqrt(200 * 200 + 200 * 200);
    const halfSqrDiag = sqrDiag / 2;

    ctx.save();

    ctx.translate(halfSqrDiag, 0);
    ctx.rotate(utils.getRadiansFromDegrees(degrees));

    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 50, 50);
    ctx.fillText('(0,0)', 4, -1);

    ctx.restore();

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

  function translate() {
    const ctx = utils.createCanvasAndGetContext();
    ctx.fillStyle = 'orange';

    ctx.beginPath();
    ctx.moveTo(100, 0);
    ctx.lineTo(100, 200);
    ctx.moveTo(0, 100);
    ctx.lineTo(200, 100);
    ctx.stroke();

    ctx.translate(100, 100);
    ctx.fillRect(0, 0, 50, 50);
  }

  function grid() {
    const ctx = utils.createCanvasAndGetContext();
    ctx.fillStyle = 'orange';

    ctx.save(); // OUTER SAVE
    for (let y = 0; y < 13; y += 1) {
      ctx.save(); // INNER SAVE
      for (let x = 0; x < 13; x += 1) {
        ctx.fillRect(3, 3, 14, 14);
        ctx.translate(15, 0);
      }
      ctx.restore(); // INNER RESTORE
      ctx.translate(0, 15);
    }
    ctx.restore(); // OUTER RESTORE
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 50, 50);
  }

  function scale() {
    const ctx = utils.createCanvasAndGetContext();
    ctx.fillStyle = 'orange';

    ctx.save();
    ctx.scale(0.9, 0.5);
    for (let y = 0; y < 13; y += 1) {
      ctx.save();
      for (let x = 0; x < 13; x += 1) {
        ctx.fillRect(3, 3, 14, 14);
        ctx.translate(15, 0);
      }
      ctx.restore();
      ctx.translate(0, 15);
    }
    ctx.restore();
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 50, 50);
  }

  function flip() {
    const ctx = utils.createCanvasAndGetContext();
    ctx.translate(100, 100);
    ctx.beginPath();
    ctx.moveTo(-100, 0);
    ctx.lineTo(100, 0);
    ctx.moveTo(0, -100);
    ctx.lineTo(0, 100);
    ctx.stroke();

    ctx.fillStyle = '#341252';
    ctx.beginPath();
    ctx.scale(1, -1); // FLIP
    ctx.arc(40, 40, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  function circle() {
    const ctx = utils.createCanvasAndGetContext();
    let num = 20;
    ctx.translate(100, 100);
    for (let i = 0; i < num; i += 1) {
      ctx.rotate((Math.PI * 2) / num);
      ctx.beginPath();
      ctx.arc(70, 0, 10, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  return {
    run: function() {
      rotateTranslate(45);
      translate();
      grid();
      scale();
      flip();
      circle();
    }
  };
});
