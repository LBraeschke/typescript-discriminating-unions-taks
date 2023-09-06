// TODO: TASK 9 (Optional): Add a new form Hexagon
// TODO: TASK 10: Add a Square which inherits everything from Rectangle except it only has a width
// TODO: TASK 12: Make all Types and Interfaces readonly

export const shapeIdentifyers = ['rectangle', 'triangle', 'circle'] as const;

export interface Rectangle extends Point {
  name: 'rectangle';
  width: number;
  height: number;
}

export interface Square extends Omit<Point, 'height'> {
  name: 'Square';
}

export interface Triangle {
  name: 'triangle';
  point1: Point;
  point2: Point;
  point3: Point;
}

export interface Hexagon {
  name: 'hexagon';
  point1: Point;
  point2: Point;
  point3: Point;
  point4: Point;
  point5: Point;
  point6: Point;
}

export interface Circle extends Point {
  name: 'circle';
  radius: number;
}

export interface Point {
  x: number;
  y: number;
}

type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

export type Shape = DeepReadonly<
  Rectangle | Triangle | Circle | Hexagon | Square
>;

export type ShapeIdentifyer = typeof shapeIdentifyers[number];
