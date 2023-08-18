// TODO: TASK 6A: add Discriminating Union Type Identifier to all Shapes, IMPORTANT: dont miss to adjust ../index.ts
// TODO: TASK 9 (Optional): Add a new form Hexagon
// TODO: TASK 10: Add a Square which inherits everything from Rectangle except it only has a width
// TODO: TASK 12: Make all Types and Interfaces readonly

export interface Rectangle extends Point {
  width: number;
  height: number;
}

export interface Triangle {
  point1: Point;
  point2: Point;
  point3: Point;
}

export interface Circle extends Point {
  radius: number;
}

export interface Point {
  x: number;
  y: number;
}

export type Shape = Rectangle | Triangle | Circle;
