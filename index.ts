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
