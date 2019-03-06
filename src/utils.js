define(() => {
  const imageUrl = 'http://localhost:5000/src/assets/mmm.png';

  function createImage() {
    const img = new Image();
    img.src = imageUrl;
    img.style = 'display: none;';
    document.body.appendChild(img);
    return img;
  }

  function createCanvas() {
    const canvasEl = document.createElement('canvas');
    canvasEl.id = 'fabricCanvas' + Date.now();
    canvasEl.style.border = '1px solid darkgreen';
    document.body.appendChild(canvasEl);
    return canvasEl;
  }

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
    createFabricStaticCanvas,
    getImageUrl
  };
});
