define(['utils'], function(utils) {
  const CANVAS_WIDTH = 400;

  function simpleDefaultText(ctx, text) {
    ctx.fillText(text, 10, 20);
  }

  function fontAndColorText(ctx, text) {
    ctx.fillStyle = 'red';
    ctx.font = 'italic 18px Verdana';
    ctx.fillText(text, 10, 40);
  }

  function strokeText(ctx, text) {
    ctx.strokeText(text, 10, 60);
  }

  function alignText(ctx, text) {
    ctx.font = 'bold 16px Chalkduster';
    ctx.textAlign = 'right';
    ctx.fillText(text, CANVAS_WIDTH, 80);

    ctx.textAlign = 'center';
    ctx.fillStyle = 'orange';
    ctx.fillText(text, CANVAS_WIDTH / 2, 100);
    ctx.textAlign = 'start'; // same as left in this case
  }

  function drawLine(ctx, y) {
    ctx.beginPath();
    ctx.lineStyle = '1px solid blue';
    ctx.moveTo(0, y);
    ctx.lineTo(CANVAS_WIDTH, y);
    ctx.stroke();
  }

  function baselineMeasureText(ctx) {
    ctx.font = '16px Arial';

    ctx.beginPath();
    ctx.lineStyle = '1px solid blue';
    ctx.moveTo(0, 120);
    ctx.lineTo(CANVAS_WIDTH, 120);
    ctx.stroke();

    drawLine(ctx, 120);

    const topX = 5;

    ctx.textBaseline = 'top';
    ctx.fillText('top', topX, 120);

    const hangingX = topX + ctx.measureText('top').width + 10;
    ctx.textBaseline = 'hanging';
    ctx.fillText('hanging', hangingX, 120);

    const middleX = hangingX + ctx.measureText('hanging').width + 10;
    ctx.textBaseline = 'middle';
    ctx.fillText('middle', middleX, 120);

    const alphabeticX = middleX + ctx.measureText('middle').width + 10;
    ctx.textBaseline = 'alphabetic';
    ctx.fillText('alphabetic', alphabeticX, 120);

    const ideographicX = alphabeticX + ctx.measureText('alphabetic').width + 10;
    ctx.textBaseline = 'ideographic';
    ctx.fillText('ideographic', ideographicX, 120);

    const bottomX = ideographicX + ctx.measureText('ideographic').width + 10;
    ctx.textBaseline = 'bottom';
    ctx.fillText('bottom', bottomX, 120);
  }

  function measureText(ctx, text) {
    const textMetrics = ctx.measureText(text);
    const x = 200;
    const y = 160;
    const w = textMetrics.width;
    ctx.textBaseline = 'top';
    ctx.textAlign = 'center';
    ctx.fillText(text, x, y);
    ctx.strokeRect(x - w / 2, y, w, 16);
  }

  return {
    run: function() {
      const text = 'Hola mundo.';
      const canvas = utils.createCanvas(CANVAS_WIDTH, 200);
      const ctx = canvas.getContext('2d');

      simpleDefaultText(ctx, text);
      fontAndColorText(ctx, text);

      ctx.fillStyle = 'blue';
      ctx.font = '18px "Ubuntu Mono derivative Powerline"';

      strokeText(ctx, text);
      alignText(ctx, text, canvas);

      baselineMeasureText(ctx);
      measureText(ctx, text);
    }
  };
});
