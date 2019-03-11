define(['utils'], function(utils) {
  function animatePosition() {
    const canvas = utils.createCanvas();
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'tomato';

    let xpos = 0;

    setInterval(function() {
      requestAnimationFrame(draw);
    }, 1000 / 90);

    function draw() {
      ctx.clearRect(0, 0, 200, 200);
      ctx.beginPath();
      ctx.arc(xpos, 100, 20, 0, Math.PI * 2);
      xpos = xpos > canvas.width / 2 + 20 ? -20 : xpos + 1;
      ctx.fill();
    }
  }

  function animateAngle() {
    const canvas = utils.createCanvas();
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'tomato';

    let angle = 0;

    setInterval(function() {
      requestAnimationFrame(draw);
    }, 1000 / 16);

    function draw() {
      ctx.clearRect(0, 0, 200, 200);
      ctx.save();
      ctx.translate(100, 100);
      const scale = Math.sin(angle) + 1;
      ctx.scale(scale, scale);
      ctx.rotate(angle);
      ctx.fillRect(-50, -50, 100, 100);
      angle += 0.1;
      ctx.restore();
    }
  }

  return {
    run: function() {
      animatePosition();
      animateAngle();
    }
  };
});
