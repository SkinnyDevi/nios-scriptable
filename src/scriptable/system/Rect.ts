import Point from "./primitive/Point.js";
import Size from "./primitive/Size.js";

/**
 * Structure representing a rectangle.
 *
 * The structure has a width, height and a coordinate in a two-dimensional coordinate system.
 */
export default class Rect {
  /**
   * @readonly
   * Minimum X value.
   *
   * The smallest x-coordinate in the rectangle.
   */
  public readonly minX: number;

  /**
   * @readonly
   * Minimum Y value.
   *
   * The smallest y-coordinate in the rectangle.
   */
  public readonly minY: number;

  /**
   * @readonly
   * Maximum X value.
   *
   * The greatest x-coordinate in the rectangle.
   */
  public readonly maxX: number;

  /**
   * @readonly
   * Maximum Y value.
   *
   * The greatest y-coordinate in the rectangle.
   */
  public readonly maxY: number;

  /**
   * X value.
   *
   * The x-coordinate of the rectangle.
   */
  public x: number;

  /**
   * Y value.
   *
   * The y-coordinate of the rectangle.
   */
  public y: number;

  /**
   * Width of rectangle.
   *
   * The width of the rectangle.
   */
  public width: number;

  /**
   * Height of rectangle.
   *
   * The height of the rectangle.
   */
  public height: number;

  /**
   * Point that specifies the rectangles origin.
   *
   * The x- and y-coordinate that specifies the rectangles origin as a Point structure.
   */
  public origin: Point;

  /**
   * Size of the rectangle.
   *
   * The width and height of the rectangle as a Size structure.
   */
  public size: Size;

  /**
   * Constructs a new rectangle placed in a two-dimensional coordinate system.
   * @param x X coordinate.
   * @param y Y coordinate.
   * @param width Width of rectangle.
   * @param height Height of rectangle.
   */
  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.minX = 0;
    this.maxX = x;
    this.y = y;
    this.minY = 0;
    this.maxY = y;
    this.width = width;
    this.height = height;
    this.origin = new Point(0, 0);
    this.size = new Size(width, height);
  }
}
