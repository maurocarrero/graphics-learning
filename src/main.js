requirejs.config({
  urlArgs: 'bust=' + new Date().getTime(), // Prevent cache technique
  paths: {
    fabric: 'lib/fabric',
    basics: 'basics',
    shapes: 'shapes'
  },
  shim: {
    fabric: {
      exports: 'fabric'
    }
  }
});

requirejs(['fabric', 'basics', 'shapes'], function(fabric, basics, shapes) {
  // Canvas native API
  const nativeCanvas = document.querySelector('#native');

  // Fabric.js API
  // create a wrapper around native Canvas element
  const fabricCanvas = new fabric.Canvas('fabric');
  fabricCanvas.setHeight(200);
  fabricCanvas.setWidth(200);

  basics.runNative(nativeCanvas);
  basics.runFabric(fabricCanvas);
  shapes.run(fabricCanvas);
});
