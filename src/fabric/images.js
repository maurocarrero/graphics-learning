define(['fabric', 'utils'], function(fabric, utils) {
  return {
    run: function() {
      const imgElement = utils.createImage();
      const canvas = utils.createFabricStaticCanvas();

      const imageInstance = new fabric.Image(imgElement, {
        left: 50,
        top: -40,
        angle: 30,
        scaleY: 0.5,
        scaleX: 0.5
      });

      const imgUrl = utils.getImageUrl();

      fabric.Image.fromURL(imgUrl, function(oImg) {
        oImg.set({
          flipX: true,
          scaleY: 0.5,
          scaleX: 0.5,
          opacity: 0.5
        });
        canvas.add(oImg);
      });

      canvas.add(imageInstance);
    }
  };
});
