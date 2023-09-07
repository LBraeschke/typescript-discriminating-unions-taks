import './style.css';
import { drawShape } from './src/draw';

document
  .getElementById('draw-rectangle')
  ?.addEventListener('click', () =>
    drawShape({ name: 'rectangle', x: 50, y: 140, width: 150, height: 80 })
  );

document.getElementById('draw-triangle')?.addEventListener('click', () =>
  drawShape({
    name: 'triangle',
    point1: { x: 20, y: 20 },
    point2: { x: 80, y: 20 },
    point3: { x: 50, y: 35 },
  })
);

document
  .getElementById('draw-circle')
  ?.addEventListener('click', () =>
    drawShape({ name: 'circle', x: 150, y: 80, radius: 50 })
  );

document
  .getElementById('draw-square')
  ?.addEventListener('click', () =>
    drawShape({ name: 'square', x: 250, y: 140, width: 40 })
  );

document.getElementById('draw-hexagon')?.addEventListener('click', () =>
  drawShape({
    name: 'hexagon',
    point1: { x: 30, y: 225 },
    point2: { x: 50, y: 240 },
    point3: { x: 50, y: 260 },
    point4: { x: 30, y: 275 },
    point5: { x: 10, y: 260 },
    point6: { x: 10, y: 240 },
  })
);
