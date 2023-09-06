import { Shape, ShapeIdentifyer } from './shape';

export function getShapeFromCache<T extends Shape>(key: T['name']): T[] {
  const stringValue = sessionStorage.getItem(key);
  return stringValue ? (JSON.parse(stringValue) as T[]) : [];
}

export function writeShapeToCache<T extends Shape>(value: T): void {
  const oldValues = getShapeFromCache(value.name);
  sessionStorage.setItem(value.name, JSON.stringify([...oldValues, value]));
}

export function getShapeCountFromCache<T extends Shape>(
  key: ShapeIdentifyer
): number {
  return getShapeFromCache(key).length;
}
