---
title: How to digitize an SVG for embroidery
date: 2021-03-29
unlisted: true
---

_This method is free, but requires some technical know-how._

First, you're going to need to install [Processing](https://processing.org/).

Then, follow the given instructions to install the [PEmbroider](https://github.com/CreativeInquiry/PEmbroider) library for for Processing.

Open up Processing, and copy and paste in this script. I can't write Processing code, but I modified [this example](https://github.com/CreativeInquiry/PEmbroider/blob/master/examples/PEmbroider_svg_image/PEmbroider_svg_image.pde).

```java
import processing.embroider.*;
PEmbroiderGraphics E;

PShape mySvgImage;

void setup() {
  size(500, 500);
  noLoop();

  E = new PEmbroiderGraphics(this, width, height);
  String outputFilePath = sketchPath("myfile.pes");
  E.setPath(outputFilePath);

  PShape mySvgImage = loadShape("myfile.svg");
  E.fill(0,0,0);
  E.stroke(0,0,0);
  E.strokeWeight(1);
  E.hatchSpacing(2);
  E.setStitch(5, 15, 0);

  E.hatchMode(E.CROSS);
  E.shape(mySvgImage, 0, 0, 500, 500);

  //E.optimize();
  E.visualize();
  //E.endDraw();
}

void draw() {
  ;
}

```

In the Processing toolbar, go to **Sketch > Show Sketch Folder**. In here, create a folder called `data/` and then drop your SVG file into this folder. Rename `myfile.svg` in the script to point to its filename, and change `myfile.pes` to change what the outputted file will be called.

A few things you can tweak about this script:

- `hatchSpacing` controls how close together the lines are. I've found that `2` is usually pretty good.
- In the line that says `E.shape`, the first two numbers control which coordinate the shape starts and ends at. The next two control the dimensions of the shape: right now it's a 500 x 500 square, but we'll change that in a moment.

Run the script in Processing, and look at the output. It'll be square-ish, and if your original SVG wasn't square, that means it'll be distorted. Change the third and fourth numbers in `E.shape` to give it the right shape, continuing to re-run the script until it looks right.

Once you're happy, uncomment the lines that say `E.optimize()` and `E.endDraw()`. `optimize` optimizes the output, but this can take several minutes. `endDraw` actually saves your file, which will be outputted to the "sketch folder" from earlier.

Run the script again. When the preview window with the shape pops up, you'll know that the outputted file is in the sketch folder. You can now load that `.pes` file onto a USB stick and have your machine embroider it.
