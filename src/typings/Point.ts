/**
 * Represents a point in a 2D space.
 *
 * @interface Point
 * @property {number} x - The x-coordinate of the point.
 * @property {number} y - The y-coordinate of the point.
 * @property {string} [name] - An optional name for the point.
 */
export interface Point {
  x: number;
  y: number;
  name?: string;
}
