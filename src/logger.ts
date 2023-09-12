import { Shape } from './shape';
import {expectNever} from "./helper";

export function logShape(shape: Shape) {
  switch (shape.name) {
    case 'rectangle':
      console.log('Drew rectangle: ' + JSON.stringify(shape));
      break;
    case 'square':
      console.log('Drew square: ' + JSON.stringify(shape))
      break;
    case 'triangle':
      console.log('Drew triangle: ' + JSON.stringify(shape))
      break;
    case 'hexagon':
      console.log('Drew hexagon: ' + JSON.stringify(shape))
      break;
    case 'circle':
      console.log('Drew circle: ' + JSON.stringify(shape))
      break;
    default:
      expectNever(shape);
  }
}
