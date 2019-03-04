define(['fabric'], function(fabric) {
  return {
    run: function(canvas) {
      const circle = new fabric.Circle({
        top: 10,
        left: 170,
        radius: 10,
        fill: 'orange'
      });

      const triangle = new fabric.Triangle({
        width: 20,
        height: 20,
        left: 30,
        top: 160,
        fill: 'violet'
      });

      const ellipse = new fabric.Ellipse({
        top: 120,
        left: 160,
        rx: 5,
        ry: 10,
        fill: 'rgba(100,200,200,0.5)'
      });

      const lines = [
        new fabric.Line([0, 0, 200, 200], {
          stroke: 'rgba(100,200,200,0.5)'
        }),
        new fabric.Line([0, 30, 200, 170], {
          stroke: 'rgba(100,200,200,0.5)'
        }),
        new fabric.Line([0, 200, 200, 0], {
          stroke: 'rgba(100,200,100,0.5)'
        }),
        new fabric.Line([100, 0, 100, 200], {
          stroke: 'rgba(100,0,100,0.5)'
        }),
        new fabric.Line([0, 100, 200, 100], {
          stroke: 'rgba(200,200,200,0.5)'
        })
      ];

      const polygon = new fabric.Polygon(
        [
          { x: 100, y: 0 },
          { x: 150, y: 50 },
          { x: 150, y: 100 },
          { x: 50, y: 100 },
          { x: 50, y: 50 }
        ],
        {
          left: 0,
          top: 0,
          fill: 'rgba(100,100,100, 0.3)'
        }
      );
      console.log('IPA?', fabric.Polyline.ATTRIBUTE_NAMES);
      const polyLine = new fabric.Polyline(
        [{ x: 100, y: 50 }, { x: 50, y: 100 }, { x: 150, y: 100 }],
        {
          // left: 0,
          // top: 0,
          // fill: 'rgba(100,100,100, 0.7)',
          stroke: 'rgba(100,100,100, 0.2)',
          strokeWidth: 1,
          strokeOpacity: 0.2
        }
      );

      canvas.add(circle, triangle, ellipse, ...lines, polygon, polyLine);

      setTimeout(function() {
        triangle.set('angle', 40).set('flipY', true);

        circle.set({
          stroke: 'rgba(100,200,200,0.5)',
          strokeWidth: 10,
          fill: 'black',
          left: circle.getLeft() - 5,
          top: circle.get('top') - 5
        });

        canvas.renderAll();
      }, 2000);
    }
  };
});
