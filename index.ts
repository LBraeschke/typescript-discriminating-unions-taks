import './style.css';
import {drawCircle, drawRectangle, drawTriangle} from './src/draw';

document
  .getElementById('draw-rectangle')
  ?.addEventListener('click', () =>
    drawRectangle({ x: 50, y: 140, width: 150, height: 80 })
  );

document.getElementById('draw-triangle')?.addEventListener('click', () =>
  drawTriangle({
    point1: { x: 20, y: 20 },
    point2: { x: 80, y: 20 },
    point3: { x: 50, y: 35 },
  })
);

document
  .getElementById('draw-circle')
  ?.addEventListener('click', () => drawCircle({ x: 150, y: 80, radius: 50 }));
