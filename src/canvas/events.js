define(['utils'], function(utils) {
  function getMouseCoords(evt, canvasPosition) {
    return {
      x: parseInt(evt.clientX + window.scrollX - canvasPosition.x, 10),
      y: parseInt(evt.clientY + window.scrollY - canvasPosition.y, 10)
    };
  }

  function drawSmallRandomColoredDots() {
    const canvas = utils.createCanvas();
    const canvasPosition = canvas.getBoundingClientRect();

    const ctx = canvas.getContext('2d');

    canvas.addEventListener('click', function(evt) {
      ctx.fillStyle = utils.getRandomColor();
      ctx.beginPath();
      ctx.arc(
        evt.clientX + window.scrollX - canvasPosition.x,
        evt.clientY + window.scrollY - canvasPosition.y,
        3,
        0,
        Math.PI * 2
      );
      ctx.fill();
    });
  }

  function drawLines() {
    const canvas = utils.createCanvas();
    const ctx = canvas.getContext('2d');
    const canvasPosition = canvas.getBoundingClientRect();
    let mouseX, mouseY, mousemoveListener;

    canvas.addEventListener('mousedown', onMouseDown);

    function onMouseDown(evt) {
      const mouseCoords = getMouseCoords(evt, canvasPosition);
      mouseX = mouseCoords.x;
      mouseY = mouseCoords.y;
      mousemoveListener = canvas.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }

    function onMouseMove(evt) {
      ctx.strokeStyle = utils.getRandomColor();
      ctx.beginPath();
      ctx.moveTo(mouseX, mouseY);
      const mouseCoords = getMouseCoords(evt, canvasPosition);
      mouseX = mouseCoords.x;
      mouseY = mouseCoords.y;
      ctx.lineTo(mouseX, mouseY);
      ctx.stroke();
    }

    function onMouseUp() {
      canvas.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    }
  }

  function toggleButton() {
    const canvas = utils.createCanvas();
    const canvasPosition = canvas.getBoundingClientRect();

    const ctx = canvas.getContext('2d');

    const btn = {
      x: 50,
      y: 50,
      w: 100,
      h: 50,
      selected: false
    };

    function drawButton(ctx, btn) {
      ctx.fillStyle = btn.selected ? 'green' : 'gray';
      ctx.fillRect(btn.x, btn.y, btn.w, btn.h);
      ctx.save();
      ctx.fillStyle = '#434343';
      ctx.fillText('Click me', 70, 70);
      ctx.restore();
    }

    function insideButton(coords, btn) {
      return (
        coords.x >= btn.x &&
        coords.x <= btn.x + btn.w &&
        coords.y >= btn.y &&
        coords.y <= btn.y + btn.h
      );
    }

    canvas.addEventListener('click', function(evt) {
      const coords = getMouseCoords(evt, canvasPosition);
      if (insideButton(coords, btn)) {
        btn.selected = !btn.selected;
      }
      drawButton(ctx, btn);
    });

    canvas.addEventListener('mousemove', function(evt) {
      const coords = getMouseCoords(evt, canvasPosition);
      if (insideButton(coords, btn)) {
        canvas.style.cursor = 'pointer';
      } else {
        canvas.style.cursor = 'auto';
      }
    });

    drawButton(ctx, btn);
  }

  function keys() {
    const canvas = utils.createCanvas();
    const ctx = canvas.getContext('2d');

    let x = 100;
    let y = 100;

    function draw() {
      ctx.clearRect(0, 0, 200, 200);
      ctx.fillStyle = 'tan';
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.fill();
    }

    draw();

    const state = {
      up: false,
      left: false,
      right: false,
      down: false
    };

    document.body.addEventListener('keydown', function(evt) {
      switch (evt.key) {
        case 'ArrowUp':
          y -= 3;
          state.up = true;
          if (state.left && !state.right) {
            x -= 3;
          }
          if (state.right && !state.left) {
            x += 3;
          }
          draw();
          break;
        case 'ArrowLeft':
          x -= 3;
          state.left = true;
          if (state.up && !state.down) {
            y -= 3;
          }
          if (state.down && !state.up) {
            y += 3;
          }
          draw();
          break;
        case 'ArrowRight':
          x += 3;
          state.right = true;
          if (state.up && !state.down) {
            y -= 3;
          }
          if (state.down && !state.up) {
            y += 3;
          }
          draw();
          break;
        case 'ArrowDown':
          y += 3;
          state.down = true;
          if (state.left && !state.right) {
            x -= 3;
          }
          if (state.right && !state.left) {
            x += 3;
          }
          draw();
          break;
      }
    });

    document.body.addEventListener('keyup', function(evt) {
      switch (evt.key) {
        case 'ArrowUp':
          state.up = false;
          break;
        case 'ArrowLeft':
          state.left = false;
          break;
        case 'ArrowRight':
          state.right = false;
          break;
        case 'ArrowDown':
          state.down = false;
          break;
      }
    });
  }

  return {
    run: function() {
      drawSmallRandomColoredDots();
      drawLines();
      toggleButton();
      keys();
    }
  };
});
