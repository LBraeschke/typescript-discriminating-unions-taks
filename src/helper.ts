import {
  circleStorage,
  rectangleStorage,
  triangleStorage,
} from './list-storage';

export const getCanvasContext = (): CanvasRenderingContext2D => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  if (!canvas.getContext) {
    throw new Error('The element is not a canvas.');
  }
  return canvas.getContext('2d');
};

export function expectNever(value: never) {
  throw new Error('A unkown error was thrown' + value);
}

export const updateCounter = function (): void {
  const targetElement = document.getElementById('shape-log');
  if (targetElement === null) {
    return;
  }
  targetElement.innerText = `${rectangleStorage.count()} rectangles, ${triangleStorage.count()} triangles and ${circleStorage.count()} circles.`;
};
