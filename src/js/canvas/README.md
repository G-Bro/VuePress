---
  title: Canvas
---

<script>
export default {
  methods: {
    basicExample() {
      const cnv = document.getElementById('basic_example');
      const ctx = cnv.getContext('2d');

      cnv.width = 400;
      cnv.height = 400;

      ctx.fillRect(100, 100, 200, 200);
    },
    multiSquareExample() {
      const cnv = document.getElementById('multi_square_example');
      const ctx = cnv.getContext('2d');

      cnv.width = 400;
      cnv.height = 400;

      ctx.fillStyle = '#F44336';
      ctx.fillRect(0, 0, 300, 300);

      ctx.fillStyle = '#4CAF50';
      ctx.fillRect(100, 100, 300, 300);
    },
    multiplyExample() {
      const cnv = document.getElementById('advanced_example');
      const ctx = cnv.getContext('2d');

      cnv.width = 400;
      cnv.height = 400;

      ctx.fillStyle = '#F44336';
      ctx.fillRect(0, 0, 300, 300);

      ctx.globalCompositeOperation = 'multiply';

      ctx.fillStyle = '#4CAF50';
      ctx.fillRect(100, 100, 300, 300);
    },
    xorExample() {
      const cnv = document.getElementById('xor_example');
      const ctx = cnv.getContext('2d');

      cnv.width = 400;
      cnv.height = 400;

      ctx.fillStyle = '#F44336';
      ctx.fillRect(0, 0, 300, 300);

      ctx.globalCompositeOperation = 'xor';

      ctx.fillStyle = '#4CAF50';
      ctx.fillRect(100, 100, 300, 300);
    },
  },
  mounted () {
    this.basicExample();
    this.multiSquareExample();
    this.multiplyExample();
    this.xorExample();
  }
}
</script>

# Canvas

The **\<canvas\>** element was introduced in HTML5 and can be used to manipulate or create images quickly and efficiently within the browser

It's good. Don't listen to Dan Evans. SVGs suck

## Getting started

Create a **canvas** element and initialise the **context**

<<< @/src/js/canvas/snippets/basics/createCanvas.js

Set the canvas height and width.

::: warning
Note that changing the height or width of a canvas will wipe the canvas of any content
:::

<<< @/src/js/canvas/snippets/basics/setHeightAndWidth.js

Append the canvas to the document body so that we can see it

<<< @/src/js/canvas/snippets/basics/appendToDocument.js

The canvas **context** is essentially the API for manipulating the content of the canvas. Here we will draw a rect (a quadrilateral) on the canvas using the **fillRect** method

<<< @/src/js/canvas/snippets/basics/drawRect.js

You should now have something that looks like this

<canvas id="basic_example"></canvas>

## Styles

Let's clear the canvas

<<< @/src/js/canvas/snippets/styles/wipeCanvas.js

We can change the colour of the square we draw with **fillStyle**

<<< @/src/js/canvas/snippets/styles/fillStyle.js

We can draw another square with a different colour

<<< @/src/js/canvas/snippets/styles/secondBlock.js

<canvas id="multi_square_example"></canvas>

## Composite operations

And we can mix layers using **globalCompositeOperation**

<<< @/src/js/canvas/snippets/composites/multiply.js

Where the 2 squares overlap they are multiplied together
Read more about [CanvasRenderingContext2D.globalCompositeOperation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)

<canvas id="advanced_example"></canvas>

Here is a similar example using the 'XOR' composite operation. All pixels where the green square overlaps the red square are erased.

<canvas id="xor_example"></canvas>

