define(['fabric'], function(fabric) {
  fabric.Object.prototype.getAngleInRadians = function() {
    return this.get('angle') * (Math.PI / 180);
  };

  return {
    run: () => {
      console.log(
        'Angle of the rectangle in radians?',
        new fabric.Rect({
          angle: 45
        }).getAngleInRadians()
      );

      console.log(
        'Angle of the circle in radians?',
        new fabric.Circle({
          angle: 30,
          radius: 10
        }).getAngleInRadians()
      );
    }
  };
});
