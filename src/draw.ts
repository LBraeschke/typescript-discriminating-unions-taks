import { expectNever, getCanvasContext, updateCounter } from './helper';
import { writeShapeToCache } from './list-storage';
import { logShape } from './logger';
import { Circle, Rectangle, Shape, shapeIdentifyers, Triangle } from './shape';

const drawRectangleToContext = function (
  context: CanvasRenderingContext2D,
  rectangle: Rectangle
): void {
  context.fillStyle = 'rgba(200, 0, 0, 0.3)';
  //TODO: Task 11: Add a TypeGuard to check if the object is a Square or a Rectangle
  context.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
};

const drawTriangleToContext = function (
  context: CanvasRenderingContext2D,
  triangle: Triangle
): void {
  context.fillStyle = 'rgba(0, 200, 0, 0.3)';
  context.beginPath();
  context.moveTo(triangle.point1.x, triangle.point1.y);
  context.lineTo(triangle.point2.x, triangle.point2.y);
  context.lineTo(triangle.point3.x, triangle.point3.y);
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
    case shapeIdentifyers[0]:
      drawRectangleToContext(context, shape);
      break;
    case shapeIdentifyers[1]:
      drawTriangleToContext(context, shape);
      break;
    case shapeIdentifyers[2]:
      drawCircleToContext(context, shape);
      break;
    default:
      expectNever(shape);
  }

  writeShapeToCache(shape);
  updateCounter();
};

updateCounter();
