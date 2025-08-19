import React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

let angle;

const Sketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, 300); // Smaller height
    p5.noFill();
  };

  p5.draw = () => {
    p5.clear(); // Clear each frame
    p5.background("#051f45"); // Same as home background
    angle = p5.map(
      p5.sin(p5.frameCount * 0.01), // Faster animation
      -1,
      1,
      p5.PI / 16, // Tight, deep branches
      p5.PI / 2.0 // More open — almost forms "H"
    );
    p5.stroke(255);
    p5.strokeWeight(0.6);
    p5.translate(p5.width / 2, p5.height); // Bottom-center
    branch(60); // Smaller tree
  };

  function branch(len) {
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);
    if (len > 2) {
      p5.push();
      p5.rotate(angle);
      branch(len * 0.67);
      p5.pop();
      p5.push();
      p5.rotate(-angle);
      branch(len * 0.67);
      p5.pop();
    }
  }

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, 300);
  };
};


export default function FractalTree() {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <ReactP5Wrapper sketch={Sketch} />
    </div>
  );
}
