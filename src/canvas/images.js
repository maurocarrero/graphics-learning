define(['utils'], function (utils) {
  return {
    run: function () {
      const imgElement = utils.createImage();

      imgElement.addEventListener('load', function () {
        const ctx = utils.createCanvasAndGetContext();
        ctx.drawImage(imgElement, 0, 0, 200, 200);
      });
    }
  };
});
