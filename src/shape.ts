// TODO: TASK 9 (Optional): Add a new form Hexagon
// TODO: TASK 10: Add a Square which inherits everything from Rectangle except it only has a width
// TODO: TASK 12: Make all Types and Interfaces readonly

export const shapeIdentifyers = ['rectangle', 'triangle', 'circle'] as const;

export interface Rectangle extends Point {
  name: 'rectangle';
  width: number;
  height: number;
}

export interface Triangle {
  name: 'triangle';
  point1: Point;
  point2: Point;
  point3: Point;
}

export interface Circle extends Point {
  name: 'circle';
  radius: number;
}

export interface Point {
  x: number;
  y: number;
}

export type Shape = Rectangle | Triangle | Circle;
export type ShapeIdentifyer = typeof shapeIdentifyers[number];
