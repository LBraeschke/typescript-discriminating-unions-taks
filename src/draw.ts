import { expectNever, getCanvasContext, updateCounter } from './helper';
import { writeShapeToCache } from './list-storage';
import { logShape } from './logger';
import {
  Circle,
  Hexagon,
  Rectangle,
  Shape,
  shapeIdentifyers,
  Square,
  Triangle,
} from './shape';

const drawRectangleToContext = function (
  context: CanvasRenderingContext2D,
  shape: Rectangle | Square
): void {
  context.fillStyle = 'rgba(200, 0, 0, 0.3)';
  //TODO: Task 11: Add a TypeGuard to check if the object is a Square or a Rectangle
  context.fillRect(
    shape.x,
    shape.y,
    shape.width,
    shape.name === 'rectangle' ? shape.height : shape.width
  );
};

const drawTriangleToContext = function (
  context: CanvasRenderingContext2D,
  shape: Triangle | Hexagon
): void {
  context.fillStyle = 'rgba(0, 200, 0, 0.3)';
  context.beginPath();
  context.moveTo(shape.point1.x, shape.point1.y);
  context.lineTo(shape.point2.x, shape.point2.y);
  context.lineTo(shape.point3.x, shape.point3.y);
  if (shape.name === 'hexagon') {
    context.lineTo(shape.point4.x, shape.point4.y);
    context.lineTo(shape.point5.x, shape.point5.y);
    context.lineTo(shape.point6.x, shape.point6.y);
  }
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
    case shapeIdentifyers[3]:
      drawRectangleToContext(context, shape);
      break;
    case shapeIdentifyers[1]:
    case shapeIdentifyers[4]:
      drawTriangleToContext(context, shape);
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
