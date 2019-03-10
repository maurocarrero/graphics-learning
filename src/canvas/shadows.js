define(['utils'], function(utils) {
  function simpleShadow() {
    const ctx = utils.createCanvasAndGetContext();
    ctx.fillStyle = 'green';
    ctx.shadowColor = 'rgba(0, 0, 0, .6)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10;

    ctx.fillRect(20, 80, 160, 40);
  }

  function shadowFromLight() {
    const canvas = utils.createCanvas();

    const canvasPosition = canvas.getBoundingClientRect();
    const canvasWidth = canvas.width / 2;
    const canvasHeight = canvas.height / 2;

    const ctx = canvas.getContext('2d');

    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

    document.body.addEventListener('mousemove', function(event) {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.fillText('Shadow effect', 10, 10);

      const eventXScrolled = event.clientX + window.scrollX;
      const eventYScrolled = event.clientY + window.scrollY;
      const dx = canvasPosition.x + canvasWidth / 2 - eventXScrolled;
      const dy = canvasPosition.y + canvasHeight / 2 - eventYScrolled;
      const distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

      ctx.shadowOffsetX = dx * 0.5;
      ctx.shadowOffsetY = dy * 0.5;
      ctx.shadowBlur = distance * 0.25;

      ctx.fillStyle = 'red';
      ctx.fillRect(80, 80, 40, 40);
    });
  }

  return {
    run: function() {
      simpleShadow();
      shadowFromLight();
    }
  };
});
