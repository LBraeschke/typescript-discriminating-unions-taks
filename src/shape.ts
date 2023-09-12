export type ShapeIdentifier = 'rectangle' | 'triangle' | 'circle' | 'square' | 'hexagon';

export interface Rectangle extends Point, BaseShape {
  name: 'rectangle';
  width: number;
  height: number;
}

export interface Square extends BaseShape, Omit<Rectangle, 'height' | 'name'> {
  name: 'square';
}

export interface Triangle extends BaseShape {
  name: 'triangle';
  point1: Point;
  point2: Point;
  point3: Point;
}

export interface Hexagon extends BaseShape {
  name: 'hexagon';
  point1: Point;
  point2: Point;
  point3: Point;
  point4: Point;
  point5: Point;
  point6: Point;
}

export interface Circle extends Point, BaseShape {
  name: 'circle';
  radius: number;
}

export interface Point {
  x: number;
  y: number;
}

interface BaseShape {
  name: ShapeIdentifier;
}

type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

export type Shape = DeepReadonly<
  Rectangle | Triangle | Circle | Hexagon | Square
>;
