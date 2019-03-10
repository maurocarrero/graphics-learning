define(['utils'], function(utils) {
  function drawImage(imgElement) {
    const ctx = utils.createCanvasAndGetContext();
    ctx.drawImage(imgElement, 0, 0, 200, 200);
  }

  function drawImagePortion(imgElement) {
    const ctx = utils.createCanvasAndGetContext();
    ctx.drawImage(imgElement, 220, 180, 130, 130, 0, 0, 200, 200);
  }

  function drawMultipleSmallImages(imgElement) {
    const ctx = utils.createCanvasAndGetContext();
    const destSide = 40;
    for (let i = 0; i < 200; i += 40) {
      for (let j = 0; j < 200; j += 40) {
        ctx.drawImage(
          imgElement,
          0,
          0,
          imgElement.width,
          imgElement.height,
          i,
          j,
          destSide,
          destSide
        );
      }
    }
  }

  function animate(spriteElement, columns, rows, interval, scale, backColor) {
    spriteElement.addEventListener('load', function() {
      const ctx = utils.createCanvasAndGetContext();

      const imgWidth = spriteElement.naturalWidth;
      const imgHeight = spriteElement.naturalHeight;

      const spriteWidth = imgWidth / columns;
      const spriteHeight = imgHeight / rows;

      let currentSprite = 0;
      const sprites = [];

      for (let y = 0; y < imgHeight; y += spriteHeight) {
        for (let x = 0; x < imgWidth; x += spriteWidth) {
          sprites.push([x, y]);
        }
      }

      let start = 0;
      function step(now) {
        if (!start || now - start >= interval) {
          start = now;
          if (currentSprite === sprites.length) {
            currentSprite = 0;
          }

          const [x, y] = sprites[currentSprite++];
          ctx.clearRect(0, 0, 200, 200);
          ctx.fillStyle = backColor || 'white';
          ctx.fillRect(0, 0, 200, 200);
          ctx.drawImage(
            spriteElement,
            x,
            y,
            spriteWidth,
            spriteHeight,
            0,
            0,
            spriteWidth * scale,
            spriteHeight * scale
          );
        }

        window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    });
  }

  return {
    run: function() {
      const imgElement = utils.createImage(utils.getImages().mmmImage);
      const fireSpriteElement = utils.createImage(utils.getImages().fireSprite);
      const angryCatSpriteElement = utils.createImage(
        utils.getImages().angryCatSprite
      );
      const explosionSpriteElement = utils.createImage(
        utils.getImages().explosionSprite
      );
      const littleBoySpriteElement = utils.createImage(
        utils.getImages().littleBoySprite
      );
      const skeletonSpriteElement = utils.createImage(
        utils.getImages().skeletonSprite
      );
      const lizardSpriteElement = utils.createImage(
        utils.getImages().lizardSprite
      );
      const blueSpriteElement = utils.createImage(utils.getImages().blueSprite);
      const horseSpriteElement = utils.createImage(
        utils.getImages().horseSprite
      );
      const jumpingPigSpriteElement = utils.createImage(
        utils.getImages().jumpingPigSprite
      );
      const wowSpriteElement = utils.createImage(utils.getImages().wowSprite);
      const figureSpriteElement = utils.createImage(
        utils.getImages().figureSprite
      );
      const bearSpriteElement = utils.createImage(utils.getImages().bearSprite);
      const womanSpriteElement = utils.createImage(
        utils.getImages().womanSprite
      );

      imgElement.addEventListener('load', function() {
        drawImage(imgElement);
        drawImagePortion(imgElement);
        drawMultipleSmallImages(imgElement);
      });

      animate(fireSpriteElement, 8, 4, 40, 1.7);
      animate(angryCatSpriteElement, 2, 4, 200, 0.4);
      animate(explosionSpriteElement, 9, 9, 30, 2);
      animate(littleBoySpriteElement, 9, 6, 200, 3);
      animate(skeletonSpriteElement, 9, 4, 200, 3);
      animate(lizardSpriteElement, 8, 3, 30, 0.8);
      animate(blueSpriteElement, 12, 8, 30, 0.4);
      animate(horseSpriteElement, 20, 13, 30, 2);
      animate(wowSpriteElement, 16, 15, 30, 1, '#191919');
      animate(jumpingPigSpriteElement, 8, 3, 200, 0.3);
      animate(figureSpriteElement, 6, 5, 30, 0.7);
      animate(bearSpriteElement, 8, 8, 100, 0.7);
      animate(womanSpriteElement, 9, 8, 100, 0.7);
    }
  };
});
