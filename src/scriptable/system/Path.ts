import Rect from "./Rect.js";
import Point from "./primitive/Point.js";

/**
 * A path describes a shape.
 *
 * Shapes can be descriped using a path. Use an instance of Path to create complex shapes
 * that can be drawn to a DrawContext.
 */
export default class Path {
  /**
   * A path describes a shape.
   *
   * Shapes can be descriped using a path. Use an instance of Path to create complex shapes
   * that can be drawn to a DrawContext.
   */
  constructor() {}

  /**
   * Moves to a point.
   *
   * Moves to a point without drawing a line between the current point and the new point.
   * @param point Point to move to.
   */
  public move(point: Point) {}

  /**
   * Adds a line to a point.
   *
   * Add a line from the current point, e.g. set using the move method, and to the new point.
   * @param point Point to add line to.
   */
  public addLine(point: Point) {}

  /**
   * Adds a rectangle.
   *
   * This is a convenience function for adding a rectangle to the path starting from the lower left corner and drawing the lines counter-clockwise until the rectangle is closed.
   * @param rect Rectangle to add.
   */
  public addRect(rect: Rect) {}

  /**
   * Adds an ellipse.
   *
   * Adds an ellipse incapsulated by the provided rectangle to the path.
   * @param rect Rectangle incapsulating the ellipse.
   */
  public addEllipse(rect: Rect) {}

  /**
   * Adds a rounded rectangle.
   *
   * Adds a rounded rectangle to the path. The corner width specifies the horizontal size of the corner and the corner
   * height specifies the the vertical size of the corner.
   * @param rect
   * @param cornerWidth
   * @param cornerHeight
   */
  public addRoundedRect(
    rect: Rect,
    cornerWidth: number,
    cornerHeight: number
  ) {}

  /**
   * Adds a cubic curve to a point.
   *
   * Adds a cubic Bezier curve to the path with the specified end point and control points.
   * @param point End point of the curve.
   * @param control1 First control point of the curve.
   * @param control2 Second control point of the curve.
   */
  public addCurve(point: Point, control1: Point, control2: Point) {}

  /**
   * Adds a quadratic curve to a point.
   *
   * Adds a quadratic Bezier curve to the specified end point with the specified control point.
   * @param point End point of the curve.
   * @param control Control point of the curve.
   */
  public addQuadCurve(point: Point, control: Point) {}

  /**
   * Adds a set of rectangles.
   *
   * Calling this is equivalent to repeatedly calling addRect.
   * @param rects Rectangles to add.
   */
  public addRects(rects: Rect[]) {}

  /**
   * Closes a sub path.
   *
   * Adds a straight line from the current point to the start of the current subpath.
   */
  public closeSubpath() {}
}
