define(['fabric', 'utils'], function(fabric, utils) {
  return {
    run: function() {
      const canvasEl = utils.createCanvas();

      const canvas = new fabric.StaticCanvas(canvasEl.id, {
        width: 200,
        height: 200,
        backgroundColor: 'rgb(100,100,200)',
        selectionColor: 'blue',
        selectionLineWidth: 2
      });

      canvas.setBackgroundImage(
        utils.getImages().mmmImage,
        canvas.renderAll.bind(canvas),
        {
          top: 0,
          left: 0,
          scaleX: 0.5,
          scaleY: 0.5
        }
      );

      canvas.add(
        new fabric.Circle({
          fill: 'orange',
          angle: 15,
          radius: 40,
          left: 100 - 40,
          top: 100 - 40
        }),
        new fabric.Rect({
          left: 10,
          top: 20,
          width: 160,
          height: 160,
          fill: 'rgba(123, 534, 123, .4)'
        }),
        new fabric.Triangle({
          width: 20,
          height: 20,
          left: 30,
          top: 140,
          fill: 'violet'
        })
      );

      canvas.add(
        new fabric.Text(`Elements in canvas: ${canvas.getObjects().length}`, {
          fontSize: 10,
          left: 20,
          top: 20,
          fill: 'eaeaea'
        }),
        new fabric.Text(`First element: ${canvas.item(0)}`, {
          fontSize: 10,
          left: 20,
          top: 30,
          fill: 'fdfdfd'
        }),
        new fabric.Text(`Second element: ${canvas.item(1)}`, {
          fontSize: 10,
          left: 20,
          top: 40,
          fill: 'cecece'
        }),
        new fabric.Text(`Third element: ${canvas.item(2)}`, {
          fontSize: 10,
          left: 20,
          top: 50,
          fill: 'cecece'
        })
      );

      const rect = canvas.item(1);
      setTimeout(function() {
        canvas.remove(rect);
      }, 2000);
    }
  };
});
