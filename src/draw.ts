import { expectNever, getCanvasContext } from './helper';
import { logShape } from './logger';
import { Circle, Rectangle, Shape, Triangle } from './shape';

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
  // TODO: TASK 6B: replace if sturcture with switch case
  // TODO: TASK 7: add Exhaustive Type Checking
  if (shape['width']) {
    drawRectangleToContext(context, shape as Rectangle);
  }
  if (shape['point1']) {
    drawTriangleToContext(context, shape as Triangle);
  }
  if (shape['radius']) {
    drawCircleToContext(context, shape as Circle);
  }
};
