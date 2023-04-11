/**
 * Structure representing a size.
 *
 * The structure has a width and a height to specify a two-dimensional size.
 */
export default class Size {
  /**
   * Width value.
   */
  width: number;

  /**
   * Height value.
   */
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}
