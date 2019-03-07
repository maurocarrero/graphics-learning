const getRadiansFromDegrees = function(degrees) {
  return (Math.PI / 180) * degrees;
};

/**
 * Basics on Native
 * @param {*} canvas
 */
function basicsOnNative(canvas) {
  const ctx = canvas.getContext('2d');
  const drawRect = function(ctx) {
    ctx.fillStyle = 'green';
    ctx.fillRect(100 - 10, 100 - 10, 20, 20);
  };

  const drawRect2 = function(ctx) {
    ctx.fillStyle = 'orange';
    // Translate the center point (0,0) to the center of the canvas
    ctx.translate(100, 100);
    // Rotate canvas 45° (converting to radians)
    ctx.rotate(getRadiansFromDegrees(45));

    ctx.fillRect(-10, -10, 20, 20);

    ctx.rotate(getRadiansFromDegrees(315));
    ctx.translate(-100, -100);
  };

  drawRect(ctx);
  drawRect2(ctx);

  setTimeout(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRect2(ctx);
    ctx.beginPath();
    ctx.fillStyle = 'brown';
    ctx.strokeStyle = 'brown';
    // Square (x,y) would be (20,50), circle uses center point instead (30,60)
    // to be placed on the same coordinates.
    ctx.arc(30, 60, 10, 0, getRadiansFromDegrees(360));
    ctx.stroke();
    ctx.fill();
  }, 1000);
}

/**
 * Basics on Fabric
 * @param {*} canvas
 */
function basicsOnFabric(fabric) {
  return function(canvas) {
    const rect = new fabric.Rect({
      left: 100 - 10,
      top: 100 - 10,
      fill: 'green',
      width: 20,
      height: 20
    });

    const rect2 = new fabric.Rect({
      left: 100,
      top: 100 - 15,
      fill: 'blue',
      width: 20,
      height: 20,
      angle: 45
    });

    canvas.add(rect);
    canvas.add(rect2);

    setTimeout(function() {
      rect.set({ left: 20, top: 50 });
      canvas.renderAll();
    }, 1000);
  };
}

define(['fabric'], function(fabric) {
  return {
    runFabric: basicsOnFabric(fabric),
    runNative: basicsOnNative
  };
});
