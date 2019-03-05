requirejs.config({
  urlArgs: 'bust=' + new Date().getTime(), // Prevent cache technique
  paths: {
    fabric: 'lib/fabric',
    hierarchy: 'hierarchy-inheritance',
    basics: 'basics',
    shapes: 'shapes',
    canvas: 'canvas'
  },
  shim: {
    fabric: {
      exports: 'fabric'
    }
  }
});

requirejs(['fabric', 'basics', 'shapes', 'hierarchy', 'canvas'], function(
  fabric,
  basics,
  shapes,
  hierarchy,
  canvas
) {
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
  hierarchy.run(fabricCanvas);
  canvas.run();
});
