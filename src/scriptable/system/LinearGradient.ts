import Color from "./primitive/Color.js";
import Point from "./primitive/Point.js";

/**
 * Linear gradient.
 *
 * A linear gradient to be used in a widget.
 */
export default class LinearGradient {
  /**
   * Linear gradient.
   *
   * A linear gradient to be used in a widget.
   */
  constructor() {}

  /**
   * Colors of the gradient.
   *
   * The array of colors should include the same amount of elements as the gradients `locations` property.
   */
  public colors: Color[] = [];

  /**
   * Locations of each color.
   *
   * Each location should be a value in the range of 0 to 1 and indicates the location of each color in the gradients colors array.
   *
   * The array of locations should include the same amount of elements as the gradients colors property.
   */
  public locations: number[] = [];

  /**
   * Point to start the gradient.
   *
   * The normalized starting point of the gradient. The endPoint and startPoint together controls the direction of the gradient.
   *
   * The X and Y component should each range from 0 to 1. Defaults to (0, 1).
   */
  public startPoint: Point = new Point(0, 1);

  /**
   * Point to end the gradient.
   *
   * The normalized ending point of the gradient. The endPoint and startPoint together controls the direction of the gradient.
   *
   * The X and Y component should each range from 0 to 1. Defaults to (0, 1).
   */
  public endPoint: Point = new Point(0, 1);
}
