# Canvas

[Learn HTML5 Graphics and Animation - Keith Peters](https://egghead.io/courses/learn-html5-graphics-and-animation)

HTML5 feature: `<!DOCTYPE html>`.

Create `<canvas>` element with an id to access it from JS code.

```html
// Avoid self-closing due to some problems on some browsers (?)
<canvas id="myCanvas" width="600" height="400"></canvas>
```

### Canvas dimensions

When dimensions are not provided, -by HTML5 spec- element will be created with **300x150** pixels.

**Do not** set canvas's size by **CSS**, canvas is basically a bitmap with rows, columns and pixels. When _set by html tag properties_, we are specifying the actual **resolution** of the bitmap in terms of how many pixels will make up the image, so HTML will allocate the same amount of space in the document layout.

When CSS is used we are only resizing the layout (not the bitmap), not the number of pixels of the element. The bitmap itself will be stretched or squashed to fit into the layout set by CSS maintaining the same bitmap resolution.

### Get the canvas in page

Wait for _windows.onload_ and create canvas JS object, if not done already in HTML or want to _resize canvas_, creating a new bitmap with new pixel resolution, _clearing any existent drawing_ in the canvas.

```js
window.onload = function() {
  const canvas = document.getElementById('myCanvas');
  canvas.width = 600;
  canvas.height = 600;
};
```

Get a reference to the **2d rendering context** from the canvas, we can use other types of contexts (3d for WebGL for example).

```js
const ctx = canvas.getContext('2d');
```

### Retina Display

In retina displays canvas will not look good.
[High DPI Canvas](https://www.html5rocks.com/en/tutorials/canvas/hidpi)

```js
// Create the canvas with doubled dimensions.
canvas.width = w * 2;
canvas.height = h * 2;

// Enlarge the canvas by CSS to the expected measures.
canvas.style.width = w;
canvas.style.height = h;

// Scale the context to double.
canvas.getContext('2d').scale(2, 2);
```

## Drawing Paths

A path is a **serie of points** with lines or some sort of curves between them.
Can be stroked (outline drawn) and filled (interior fill with color).

### Sequence of events:

1. Starting point: **beginPath**.
2. Call drawing commands: rect, arc, etc.
3. Ending: context **stroke** or **fill** or both.

```js
ctx.beginPath();

// drawing commands

ctx.fill();
ctx.stroke();
```

Canvas has a concept of a **virtual cursor position**, which is located at the end point of the last command we gave it.

**Coordinates** in canvas has its origin in (x: 0, y: 0) extending positively from top left to bottom right, even though this can be changed via transformations.

Paths can be **opened or closed**. Use `ctx.closePath` or do it manually by drawing the line yourself. You can also call **fill** which will close the path automatically for being able to actually fill it (it needs to be closed).

```js
ctx.beginPath();

// A manually drawn rectangle
ctx.moveTo(70, 70);
ctx.lineTo(70, 130);
ctx.lineTo(130, 130);
ctx.lineTo(130, 70);

ctx.closePath(); // or draw last line or fill it.

ctx.stroke();
```

Shorcut for drawing a rectangle:

```js
ctx.beginPath();
ctx.rect(70, 70, 130, 130);
ctx.stroke();
```

Shortcuts without the need of any setup:

```js
ctx.strokeRect(10, 10, 180, 180);
ctx.fillRect(20, 20, 160, 160);
```

Clear the space within rectangle boundaries:

```js
ctx.clearRect(95, 95, 10, 10);
```

## Curves and Arcs

Curve lines can be manually drawn by drawing multiple small line segments.

Sine wave:

```js
ctx.moveTo(0, 100);

for (let x = 1; x <= 200; x += 1) {
  let y = 100 + Math.sin(x * sinMultiplier) * 100;
  ctx.lineTo(x, y);
}
```

But we have practical functions to do it easily.

**quadraticCurveTo(cx, cy, x, y)**

1. starts at current cursor position.
2. draw a line towards a control point (cx, cy).
3. ends at x, y.

```js
ctx.moveTo(10, 100);
ctx.quadraticCurveTo(100, 80, 190, 100);
```

**bezierCurveTo(cx1, cy1, cx2, cy2, x, y)**

Similar to quadraticCurveTo but with 2 control points, adding an additional step.

**arc(x, y, radius, startAngle, endAngle, counterClockwise)**

- It can draw a circle or a portion of a circle. [CanvasArcTo](http://dbp-consulting.com/tutorials/canvas/CanvasArcTo.html)
- Angles are defined in [Radians](https://en.wikipedia.org/wiki/Radian) (rad). Converting degrees to radians: `degrees * (Math.PI / 180)`.

```js
ctx.arc(100, 100, 30, 0, Math.PI * 2);
```

```js
ctx.arc(100, 100, 30, 0, 15, true); // draw counter clockwise
```

## Drawing Styles

The 2D rendering context is a state machine. After defining a new value for _fillStyle_, _strokeStyle_, _lineWidth_ or any other style property value, all subsequent shapes will be affected by it.

- **fillStyle**: set the color or image to fill the shape.
- **strokeStyle**: set color of the stroke.
- **lineWidth**: set width of the stroke.

- **lineCap**: define the style of the end points of the lines.

  3 possible values:

  1. `butt`: (default) chops the end of the line.
  2. `square`: leaves a square shape.
  3. `round`: rounded end.

  `square` and `round` extend the length of the line by **one half the line width**.

- **lineJoin**: define the style of the corners of the shapes.

  3 possible values:

  1. `miter`: sharp corner where 2 lines join. It will generate a
  2. `bevel`: chop off the corner to a straight bevel edge.
  3. `round`: rounded corners.

```js
ctx.fillStyle = 'red';
ctx.strokeStyle = 'rgba(10, 124, 138, .5)';
ctx.lineWidth = 10;
ctx.lineCap = 'round';
```

Color values are defined same as CSS: `'red'`, `'#defdef'`, `'rgb(256, 256, 256)'`,`'rgba(10, 124, 138, .5)'`.

When both fill and stroke are called, the **behavior will be different** depending on the calls order, since the last one called will overlap the other.

```js
ctx.fill();
ctx.stroke();
```

Looks different to:

```js
ctx.stroke();
ctx.fill();
```

**Default styles** for all shapes are:

- single pixel thick black stroke.
- flat black fill.

## Gradient fills

- Allows to fill a path with multiple colors that blend smoothly together.
- Once we set a gradient on a canvas location, it will be there even though will only be revealed when a shape is drawn and filled there.

1. **Linear gradient**: colors change from one to the other along the length of a _line between 2 points_. **createLinearGradient(x0, y0, x1, y1)**
2. **Radial gradient**: starts at a given _first radius_ from a _center point_ and extends to a _second radius_ around the _same or another center point_. **createRadialGradient(x0, y0, radius0, x1, y1, radius1)**

Both **createLinearGradient()**, **createRadialGradient()** sets up the shape and phisycal size of the gradient.

**gradient.addColorStop**: sets up the color to be applied from a specific point between 0 and 1.

```js
const linear = ctx.createLinearGradient(100, 100, 50, 50);
linear.addColorStop(0, 'red');
linear.addColorStop(0.5, 'green');
linear.addColorStop(1, 'blue');
```

```js
const linear = ctx.createRadialGradient(100, 100, 50, 10, 10, 10);
linear.addColorStop(0, 'red');
linear.addColorStop(0.5, 'green');
linear.addColorStop(1, 'blue');
```

## Text

- Default font: black, 10px "sans-serif";
- The registration point for where the text is drawn corresponds to the lower-left corner of the text.

**fillText(text, x, y)**: draws the string on specified coordinates.

**font**: defines the font the usual way: `12px Arial`.

**textAlign**: `left`, `center`, `right`. Also `start` and `end` for languages that are written from right to left.

**textBaseline**: defines the baseline. `top`, `hanging`, `middle`, `alphabetic` (default), `ideographic`, `bottom`.

**measureText(str)**: returns a `TextMetric` object. We can ask for the width of the current string _as is currently rendered_:
`const w = ctx.measureText('hola').width;`

```js
ctx.font = '14px Helvetica';
ctx.fillText('Hola mundo', 10, 10);

ctx.font = '14px "Bangla Sangam MN"';
ctx.fillText('Hello world', 30, 10);
```

## Images

- Bitmaps can be drawn into the canvas and exported from it.

**drawImage(imageElement, destX, destY, destWidth, destHeight)**: draws the image in given coordinates.

**drawImage(imageElement, srcX, srcY, srcWidth, srcHeight, destX, destY, destWidth, destHeight)**: when all arguments are provided for origin and destination we can draw portions of the image.

```js
const imageElement = document.createElement('img');
img.src = 'myImage.png';
img.addEventListener('load', function() {
  ctx.drawImage(imageElement, x, y);
});
```

## Exporting data as JSON

**canvas.toDataURL(imageFormat, compression)**: export the canvas drawings as base64 encoded string to be used for example as `img` HTML element source.

- _imageFormat_: `image/jpg`, `image/png`.
- _compression_: 0-1: full quality, minimal compression to lowest quality with very high compression.

```js
const jpgImage = canvas.toDataURL('image/jpg', 1);
const pngImage = canvas.toDataURL('image/png', 0.8);

const imgEl = document.createElement('img');
imgEl.src = pngImage;
```

## Effects

When drawing content into the canvas, every new content will be drawn over the previous drawn content. There are some properties to control how this is done.

**globalAlpha**: sets the opacity of following drawn elements until changed again.

```js
ctx.globalAlpha = 0.5;
```

**globalCompositeOperation**: defines behavior of overlapping elements.
[Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)

Options:

- source-over, source-in, source-out, source-atop.
- destination-over, destination-in, destination-out, destination-atop.
- lighter, copy, xor, multiply, screen, overlay, lighten, darken, color-dodge, color-burn, hard-light, soft-light, difference, exclusion, hue, saturation, color, luminosity.

### Shadows

Create shadows by setting four properties in the context (minimal is color and blur but it's best to set all of them).

- **shadowColor**
- **shadowBlur**
- **shadowoffsetX**
- **shadowoffsetY**

## Transformations

By default, the **origin (0, 0) point**, is located into the _top-left_ corner. It extends positively on the x-axis _from left to right_ and positively on the y-axis _from top to bottom_. One **unit** along either axis is equal to **one CSS pixel** in the browser.

**Angles** increase positively as they move _clockwise_.

Transform the coordinate system in 3 different ways:

**translate(x, y)**: moves the origin point to a different position along one or both axis.
**rotate(radians)**: rotates the canvas around its origin point.
**scale(x, y)**: grows or shrinks the system so that one unit in the canvas space can be equal to more or less than a single CSS pixel. Negative scaling can be applied, which will flip the coordinate system on one or both axis.

```js
ctx.rotate(utils.getRadiansFromDegrees(degrees));
ctx.translate(halfSqrDiag, 0);
ctx.scale(x, y);
```

The order of the transformations calls is relevant, different orders implies different results.

### Save **state** of the content

**save**: saves the current state of the context to a stack.

**restore**: restores last previously saved state in the stack.

```js
ctx.save();
...
ctx.restore();
```

## Pixel-level manipulation

Write and read individual [pixels in the canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas).

- Very expensive operations (prefer to get and set single pixels).
- Only get or put the amount of data really needed.

**getImageData(x, y, w, h)**: get information about the pixel values into the specified rectangle of the canvas.

The resultant **imageData** object has 3 main properties:

- **width** and **height**
- **data**: single one dimensional **TypedArray** ([Uint8ClampedArray: 8-bit unsigned integers clamped to 0-255](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray)) where each element corresponds to a single red, gree, blue or alpha channel of a single pixel: [r,g,b,a,r,g,b,a,r,g,b,a,...].

```js
getImageData(0, 0, 100, 100); // imageData.data.length: 40000: `100 * 100 * 4`
```

How to find the pixel we want in the linear representation (take into account that scale manipulation affects this calculation):

```js
function getPixelDataPosition(x, y, w) {
  const rgbaValues = 4;
  return (w * y + x) * rgbaValues;
}
```

**putImageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight)**: paints image data (pixels values) into the imageData of a canvas. When dirty rectangle is provided only those pixels are painted.

```js
ctx.putImageData(imageData, 0, 0, dirtyX, dirtyY, dirtyW, dirtyH);
```

- No blending images, alhpa, etc.
- No transforms.
- Transparent areas of the image data become transparent areas in the canvas.

**createImageData**: creates a new, blank ImageData object.

```js
ctx.createImageData(width, height);
ctx.createImageData(imagedata);
```

## Events and interactions

**Mouse events**: `click`, `mousedown`, `mousemove`, `mouseup`. Generally, is better to listen for the mouse events on the canvas since usually we are only interested when these happen on top of it. It keep us from executing code when outside the canvas.

**[Touch events](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)**, **[Keyboard events](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)**.

#### User Interface controls:

Canvas does not help much to make -for example- an interactive button. We need to do everything ourselves: measure the location of the drawn button and attach a event listener to that portion of the canvas.

## Animations

Visual change over time, in position, size or scale, rotation, color/texture/stroke, opacity, overall shape, etc.

Screen refreshes 60 times per second, each 16 milliseconds.

**Frames per second**: 1000 / fpsValue (frames per second rate).

```js
setInterval(draw, 1000 / 60); // 60 fps ()
```

```js
setInterval(function() {
  requestAnimationFrame(draw);
}, 1000 / 90); // 90 fps controlled by rAF
```
