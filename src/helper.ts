import { getShapeCountFromCache } from './list-storage';
import { ShapeIdentifier } from './shape';

const formatter = new Intl.ListFormat('en-GB', {
  style: 'long',
  type: 'conjunction',
});

export const getCanvasContext = (): CanvasRenderingContext2D => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const context = canvas.getContext('2d');
  if (!context) {
    throw new Error('The element is not a canvas.');
  }
  return context;
};

export function expectNever(value: never) {
  throw new Error('A unkown error was thrown' + value);
}

export const updateCounter = function (): void {
  const targetElement = document.getElementById('shape-log');
  if (targetElement === null) {
    return;
  }

  const text = ShapeIdentifier.map(
    (shape) => `${getShapeCountFromCache(shape)} ${shape}s`
  );

  targetElement.innerText = formatter.format(text);
};
