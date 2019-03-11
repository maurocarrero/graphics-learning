# Fabric.js

[REF](http://fabricjs.com/)

JavaScript canvas library.

- Provides interactive object model on top of canvas element.
- SVG-to-canvas and canvas-to-SVG parser.
- Takes care of canvas rendering and state management.

### Operate on Objects

With _native canvas API_ we cannot operate on objects, instead we change the entire canvas bitmap properties to suit our needs (_ctx.translate_, _ctx.rotate_).

Using Fabric we **operate over objects**: instantiate them, change their properties and add them to canvas. Objects are _first-class citizens_ in Fabric land.

1. Using Native Canvas API we operate on the context of canvas:

   ```js
   // Create a rectangle with angle=45 using native API
   var canvasEl = document.getElementById('c');
   var ctx = canvasEl.getContext('2d');
   ctx.fillStyle = 'red';

   ctx.translate(100, 100);
   ctx.rotate((Math.PI / 180) * 45); // translate degrees to radians
   ctx.fillRect(-10, -10, 20, 20);
   ```

2. Using Fabric we operate on objects:

   ```js
   // Create a rectangle with angle=45 using Fabric
   var canvas = new fabric.Canvas('c');
   var rect = new fabric.Rect({
     left: 100,
     top: 100,
     fill: 'red',
     width: 20,
     height: 20,
     angle: 45
   });

   canvas.add(rect);
   ```

### Move elements around

In _Native API_ we need to erase the entire canvas and redraw the elements to move them:

```js
ctx.clearRect(0, 0, canvas.width, canvas.height);
drawAgain();
```

In _Fabric_, we update the element properties and then re-render canvas.

```js
rect.set({
  left: 20,
  top: 50
});
canvas.renderAll();
```

### Basic Shapes

1. fabric.**Circle**
2. fabric.**Ellipse**
3. fabric.**Line**
4. fabric.**Polygon**
5. fabric.**Polyline**
6. fabric.**Rect**
7. fabric.**Triangle**

### Properties

- angle
- fill
- flipX
- flipY
- height
- scaleX
- scaleY
- skewX
- skewY
- stroke
- strokeWidth
- width

### Getters/Setters

- Properties can be manipulated by setting different values with **set** method.
- Properties values can also be read with **get** method.

```js
circle.get('radius');
```

same as shortcut (syntax sugar):

```js
circle.getRadius();
```

### Hierarchy and Inheritance

**fabric.Object**:

- root of most of the entities.
- 2-dimensional shape positioned in a 2-dimensional canvas plane.
- entity with _left/top_ _width/height_ properties, among others related to graphics: fill, stroke, angle, opacity, flip\*, etc.
- **fabric.Object.prototype** can be extended for sharing a method among all descendants. Working with prototypes to obtain custom rendering and behaviour is very _common for advanced projects_.

### Canvas

```js
new fabric.Canvas('...');
```

**fabric.Canvas**

- serves as a wrapper around `<canvas>` element.
- responsible for managing all fabric objects in that particular canvas.
- receives an `id` and returns a canvas.
- serves also as a **configuration** host by setting on it general _options_, i.e. add background color or image for the entire canvas, clip contents to a certain area, set different weight/height, interactive or not.

#### API:

- **add**: add objects.
- **item**: get objects at index, i.e. first added object: `canvas.item(0);`.
- **getObjects**: get all objects.
- **remove**: remove objects.

### Interactivity

**Built-in interactivity layer** on top of all the object model.

User is capable to manipulate objects with the mouse or touch on touch devices: select, drag, scale, rotate, group together.

- Disable group selections:

```js
canvas.selection = false;
```

- disable selection on specific element:

```js
rect.set('selectable', false);
```

Use **fabric.StaticCanvas** instead for disabling interactivity completely:

- _lighter_ version without event handlers.
- fabric can be customized to be lighter as well when only StaticCanvas is used.

### Images

Set image from **`<img>` element**:

```js
const imageInstance = new fabric.Image(imgElement, {
  left: 0,
  top: 0,
  angle: 30,
  opacity: 0.5
});
```

Get the image **from a URL**:

```js
const imageFromUrlInstance = fabric.Image.fromURL(
  'https://site.com/img.png',
  function(oImg) {
    oImg.set({
      flipX: true,
      scaleY: 0.5,
      scaleX: 0.5,
      opacity: 0.5
    });
    canvas.add(oImg);
  }
);
```

Set the image as canvas' **background**:

```js
/**
 * (imgUrl, callback, options)
 */
canvas.setBackgroundImage(imgUrl, canvas.renderAll.bind(canvas), {
  top: 0,
  left: 0,
  scaleX: 0.5,
  scaleY: 0.5
});
```