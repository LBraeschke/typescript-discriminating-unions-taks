import { expectNever, getCanvasContext, updateCounter } from './helper';
import { writeShapeToCache } from './list-storage';
import { logShape } from './logger';
import {
  Circle,
  Hexagon,
  Rectangle,
  Shape, ShapeIdentifier,
  Square,
  Triangle,
} from './shape';

const isSquare = function (
    shape: Rectangle | Square
): shape is Square {
  return shape.name === 'square';
}

const drawRectangleToContext = function (
  context: CanvasRenderingContext2D,
  shape: Rectangle | Square
): void {
  context.fillStyle = 'rgba(200, 0, 0, 0.3)';
  context.fillRect(
    shape.x,
    shape.y,
    shape.width,
    isSquare(shape) ? shape.width : shape.height
  );
};

const drawTriangleToContext = function (
  context: CanvasRenderingContext2D,
  shape: Triangle
): void {
  context.fillStyle = 'rgba(0, 200, 0, 0.3)';
  context.beginPath();
  context.moveTo(shape.point1.x, shape.point1.y);
  context.lineTo(shape.point2.x, shape.point2.y);
  context.lineTo(shape.point3.x, shape.point3.y);
  context.fill();
};

const drawHexagonToContext = function (
    context: CanvasRenderingContext2D,
    shape: Hexagon
): void {
  context.fillStyle = 'rgba(0, 200, 0, 0.3)';
  context.beginPath();
  context.moveTo(shape.point1.x, shape.point1.y);
  context.lineTo(shape.point2.x, shape.point2.y);
  context.lineTo(shape.point3.x, shape.point3.y);
  context.lineTo(shape.point4.x, shape.point4.y);
  context.lineTo(shape.point5.x, shape.point5.y);
  context.lineTo(shape.point6.x, shape.point6.y);
  context.fill();
};

const drawCircleToContext = function (
  context: CanvasRenderingContext2D,
  circle: Circle
): void {
  context.fillStyle = 'rgba(0, 0, 200, 0.3)';
  context.beginPath();
  context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
  context.fill();
};

export const drawShape = function (shape: Shape): void {
  logShape(shape);
  const context = getCanvasContext();
  switch (shape.name) {
    case ShapeIdentifier.RECTANGLE:
    case ShapeIdentifier.SQUARE:
      drawRectangleToContext(context, shape);
      break;
    case ShapeIdentifier.TRIANGLE:
      drawTriangleToContext(context, shape);
      break;
    case ShapeIdentifier.HEXAGON:
      drawHexagonToContext(context, shape);
      break;
    case ShapeIdentifier.CIRCLE:
      drawCircleToContext(context, shape);
      break;
    default:
      expectNever(shape);
  }

  writeShapeToCache(shape);
  updateCounter();
};

updateCounter();
