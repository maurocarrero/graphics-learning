define(['fabric', 'basics', 'shapes', 'hierarchy', 'canvas', 'images'],
  function (fabric, basics, shapes, hierarchy, canvas, images) {
    // Canvas native API
    const nativeCanvas = document.querySelector('#native');

    // Fabric.js API
    // create a wrapper around native Canvas element
    const fabricCanvas = new fabric.Canvas('fabric');
    fabricCanvas.setHeight(200);
    fabricCanvas.setWidth(200);

    return {
      run: function () {
        basics.runNative(nativeCanvas);
        basics.runFabric(fabricCanvas);
        shapes.run(fabricCanvas);
        hierarchy.run(fabricCanvas);
        canvas.run();
        images.run();
      }
    }
  }
);