/**
 * Structure representing a point.
 *
 * The structure encapsulates a coordinate in a two-dimensional coordinate system.
 */
export default class Point {
  /**
   * X value.
   */
  public x: number;

  /**
   * Y value.
   */
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
