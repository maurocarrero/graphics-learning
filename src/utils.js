define(() => {
  const imageUrl = 'http://localhost:5000/src/assets/mmm.png';

  function getRadiansFromDegrees(degrees) {
    return degrees * (Math.PI / 180);
  }

  function createImage() {
    const img = new Image();
    img.src = imageUrl;
    img.style = 'display: none;';
    document.body.appendChild(img);
    return img;
  }

  function createCanvas(w, h) {
    const canvasEl = document.createElement('canvas');

    canvasEl.width = (w || 200) * 2;
    canvasEl.height = (h || 200) * 2;
    canvasEl.style.width = canvasEl.width / 2;
    canvasEl.style.height = canvasEl.height / 2;

    canvasEl.id = 'fabricCanvas' + Date.now();
    canvasEl.style.border = '1px solid darkgreen';

    const ctx = canvasEl.getContext('2d');
    ctx.scale(2, 2);

    document.body.appendChild(canvasEl);
    return canvasEl;
  }

  function createCanvasAndGetContext() {
    const canvas = createCanvas(200, 200);
    ctx = canvas.getContext('2d');
    return ctx;
  };

  function getImageUrl() {
    return imageUrl;
  }

  function createFabricStaticCanvas() {
    const canvasEl = createCanvas();
    return new fabric.StaticCanvas(canvasEl.id, {
      width: 200,
      height: 200,
      backgroundColor: 'rgb(100,100,200)'
    });
  }

  return {
    createImage,
    createCanvas,
    createCanvasAndGetContext,
    createFabricStaticCanvas,
    getRadiansFromDegrees,
    getImageUrl
  };
});
