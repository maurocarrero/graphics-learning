define(() => {
  const images = {
    mmmImage: 'src/assets/mmm.png',
    angryCatSprite: 'src/assets/aSkBr.png',
    littleBoySprite: 'src/assets/3e4cOV1.png',
    skeletonSprite: 'src/assets/mvqg4CI.png',
    fireSprite: 'src/assets/fire-sprite-sheet.png',
    lizardSprite: 'src/assets/spritesheet.png',
    blueSprite: 'src/assets/blue.png',
    horseSprite: 'src/assets/horse.png',
    jumpingPigSprite: 'src/assets/jumpingPig.png',
    figureSprite: 'src/assets/figure.png',
    wowSprite: 'src/assets/wow.png',
    womanSprite: 'src/assets/woman.png',
    bearSprite: 'src/assets/2dtoonbear.png',
    explosionSprite:
      'src/assets/kissclipart-explosion-sprite-sheet-clipart-sprite-explosion-an-a4229d97dc312fa5.png'
  };

  function getRadiansFromDegrees(degrees) {
    return degrees * (Math.PI / 180);
  }

  function createImage(imageUrl) {
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

    canvasEl.style.width = `${canvasEl.width / 2}px`;
    canvasEl.style.height = `${canvasEl.height / 2}px`;

    canvasEl.id = 'fabricCanvas' + Date.now();
    canvasEl.style.border = '1px solid darkgreen';

    const ctx = canvasEl.getContext('2d');
    ctx.scale(2, 2);

    document.body.appendChild(canvasEl);
    return canvasEl;
  }

  function createCanvasAndGetContext(w, h) {
    const canvas = createCanvas(w, h);
    ctx = canvas.getContext('2d');
    return ctx;
  }

  function setupCanvas(canvas, width, height) {
    const ratio = window.devicePixelRatio;

    canvas.width = width * ratio;
    canvas.height = height * ratio;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    ctx.scale(ratio, ratio);

    return canvas;
  }

  function getImages() {
    return images;
  }

  function getRandom256() {
    return parseInt(Math.random() * 256, 10);
  }

  function getRandomColor() {
    return `rgb(${getRandom256()}, ${getRandom256()}, ${getRandom256()})`;
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
    getImages,
    getRadiansFromDegrees,
    getRandomColor,
    setupCanvas
  };
});
