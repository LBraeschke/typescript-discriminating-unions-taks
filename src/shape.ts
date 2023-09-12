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
