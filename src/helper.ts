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
