define(['utils'], function(utils) {
  function getPixelDataPosition(x, y, w) {
    const rgbaValues = 4;
    return (w * y + x) * rgbaValues;
  }

  function getImageData() {
    const ctx = utils.createCanvasAndGetContext();
    // IMPORTANT: scale back to 1.1 to equal CSS Pixel value
    ctx.scale(0.5, 0.5);

    const sample = {
      x: 0,
      y: 0,
      w: 4,
      h: 4
    };
    const myPixel = {
      x: 1,
      y: 0
    };

    ctx.fillStyle = 'rgba(100,120,150,.5)';
    ctx.fillRect(sample.x, sample.y, sample.w, sample.h);

    ctx.fillStyle = 'red';
    ctx.fillRect(myPixel.x, myPixel.y, 1, 1);

    const imageData = ctx.getImageData(0, 0, sample.w, sample.h);

    const myPixelDataPosition = getPixelDataPosition(
      myPixel.x,
      myPixel.y,
      imageData.width
    );

    console.log(
      'Find my pixel in the sample:',
      imageData.data.slice(myPixelDataPosition, myPixelDataPosition + 4)
    );
    console.log('Image data for 0,0,10,10', imageData.data.length);
    console.log('imageData.width', imageData.width);
    console.log('imageData.height', imageData.height);
    console.log('imageData.data', imageData.data);
  }

  function putImageData(useDirty) {
    const ctx = utils.createCanvasAndGetContext();
    ctx.scale(0.5, 0.5);

    const imageData = ctx.getImageData(0, 0, 200, 200);

    for (let x = 100; x < imageData.width; x += 1) {
      for (let y = 100; y < imageData.height; y += 1) {
        const index = getPixelDataPosition(x, y, imageData.width);
        imageData.data[index] = 255; // red
        imageData.data[index + 3] = 255; // alpha
      }
    }
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 400, 400);

    if (useDirty) {
      const dirtyX = 100;
      const dirtyY = 100;
      const dirtyW = 100;
      const dirtyH = 100;

      ctx.putImageData(imageData, 0, 0, dirtyX, dirtyY, dirtyW, dirtyH);
    } else {
      ctx.putImageData(imageData, 0, 0);
    }
  }

  function setPixel(ctx, x, y, pixel) {
    const imageData = ctx.createImageData(1, 1);
    imageData.data[0] = pixel.r;
    imageData.data[1] = pixel.g;
    imageData.data[2] = pixel.b;
    imageData.data[3] = pixel.a;
    ctx.putImageData(imageData, x, y);
  }

  function getPixel(ctx, x, y) {
    const imageData = ctx.getImageData(x, y, 1, 1);
    return {
      r: imageData.data[0],
      g: imageData.data[1],
      b: imageData.data[2],
      a: imageData.data[3]
    };
  }

  function getOnePixel() {
    const ctx = utils.createCanvasAndGetContext();
    ctx.scale(0.5, 0.5);

    ctx.fillStyle = 'purple';
    ctx.fillRect(0, 0, 400, 400);

    const pixel = getPixel(ctx, 200, 200);
    console.log('red', pixel.r);
    console.log('green', pixel.g);
    console.log('blue', pixel.b);
    console.log('alpha', pixel.a);
  }

  function stars() {
    const ctx = utils.createCanvasAndGetContext();

    ctx.scale(0.5, 0.5);
    ctx.fillStyle = '#121212';
    ctx.fillRect(0, 0, 400, 400);

    for (let i = 0; i < 1000; i += 1) {
      const x = Math.random() * 400;
      const y = Math.random() * 400;
      setPixel(ctx, x, y, {
        r: 0,
        g: 0,
        b: 0,
        a: 0
      });
    }
  }

  return {
    run: function() {
      // getImageData();
      // putImageData();
      // putImageData(true);
      // getOnePixel();
      stars();
    }
  };
});
