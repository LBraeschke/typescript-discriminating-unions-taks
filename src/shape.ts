// TODO: TASK 9 (Optional): Add a new form Hexagon
// TODO: TASK 10: Add a Square which inherits everything from Rectangle except it only has a width
// TODO: TASK 12: Make all Types and Interfaces readonly

export const shapeIdentifyers = [
  'rectangle',
  'triangle',
  'circle',
  'square',
  'hexagon',
] as const;

export interface Rectangle extends Point, BaseSahpe {
  name: 'rectangle';
  width: number;
  height: number;
}

export interface Square extends BaseSahpe, Omit<Rectangle, 'height' | 'name'> {
  name: 'square';
}

export interface Triangle extends BaseSahpe {
  name: 'triangle';
  point1: Point;
  point2: Point;
  point3: Point;
}

export interface Hexagon extends BaseSahpe {
  name: 'hexagon';
  point1: Point;
  point2: Point;
  point3: Point;
  point4: Point;
  point5: Point;
  point6: Point;
}

export interface Circle extends Point, BaseSahpe {
  name: 'circle';
  radius: number;
}

export interface Point {
  x: number;
  y: number;
}

interface BaseSahpe {
  name: ShapeIdentifyer;
}

type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

export type Shape = DeepReadonly<
  Rectangle | Triangle | Circle | Hexagon | Square
>;

export type ShapeIdentifyer = typeof shapeIdentifyers[number];
