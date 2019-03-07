define(['utils'], function(utils) {
  function createGradient(config) {
    const ctx = utils.createCanvasAndGetContext();
    let gradient;

    if (config.type === 'linear') {
      gradient = ctx.createLinearGradient(
        config.x,
        config.y,
        config.w,
        config.h
      );
    } else {
      gradient = ctx.createRadialGradient(
        config.x0,
        config.y0,
        config.r0,
        config.x1,
        config.y1,
        config.r1
      );
    }

    gradient.addColorStop(0, config.firstColor);
    gradient.addColorStop(0.2, config.secondColor);
    gradient.addColorStop(0.6, config.thirdColor);
    gradient.addColorStop(0.8, config.fourthColor);
    gradient.addColorStop(1, config.fifthColor);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 200, 200);
  }

  return {
    run: function() {
      createGradient({
        x: 0,
        y: 0,
        w: 200,
        h: 200,
        firstColor: '#1ea1ea',
        secondColor: '#ae1ae1',
        thirdColor: '#1ae1ae',
        fourthColor: '#1ae1ae',
        fifthColor: '#ae11ea',
        type: 'linear'
      });

      createGradient({
        x: 0,
        y: 200,
        w: 200,
        h: 0,
        firstColor: '#1ea1ea',
        secondColor: '#ae1ae1',
        thirdColor: '#1ae1ae',
        fourthColor: '#1ae1ae',
        fifthColor: '#ae11ea',
        type: 'linear'
      });

      createGradient({
        x: 100,
        y: 0,
        w: 100,
        h: 200,
        firstColor: '#1ea1ea',
        secondColor: '#ae1ae1',
        thirdColor: '#1ae1ae',
        fourthColor: '#1ae1ae',
        fifthColor: '#ae11ea',
        type: 'linear'
      });

      createGradient({
        x: 100,
        y: 0,
        w: 100,
        h: 200,
        firstColor: '#1ea1ea',
        secondColor: '#ae1ae1',
        thirdColor: '#1ae1ae',
        fourthColor: '#1ae1ae',
        fifthColor: '#ae11ea',
        type: 'linear'
      });

      createGradient({
        x0: 100,
        y0: 100,
        r0: 10,
        x1: 100,
        y1: 100,
        r1: 100,
        firstColor: 'red',
        secondColor: 'violet',
        thirdColor: 'orange',
        fourthColor: 'yellow',
        fifthColor: 'green',
        type: 'radial'
      });

      createGradient({
        x0: 50,
        y0: 50,
        r0: 50,
        x1: 200,
        y1: 200,
        r1: 50,
        firstColor: 'red',
        secondColor: 'violet',
        thirdColor: 'orange',
        fourthColor: 'yellow',
        fifthColor: 'green',
        type: 'radial'
      });
    }
  };
});
