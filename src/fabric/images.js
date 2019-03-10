define(['fabric', 'utils'], function(fabric, utils) {
  return {
    run: function() {
      const imgUrl = utils.getImages().mmmImage;
      const imgElement = utils.createImage(imgUrl);
      const canvas = utils.createFabricStaticCanvas();

      // imgElement.addEventListener('load', function() {
      const imageInstance = new fabric.Image(imgElement, {
        left: 50,
        top: -40,
        angle: 30,
        scaleY: 0.5,
        scaleX: 0.5
      });
      canvas.add(imageInstance);
      // });

      fabric.Image.fromURL(imgUrl, function(oImg) {
        oImg.set({
          flipX: true,
          scaleY: 0.5,
          scaleX: 0.5,
          opacity: 0.5
        });
        canvas.add(oImg);
      });
    }
  };
});
