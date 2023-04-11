/**
 * UNFINISHED
 *
 * Represents a font and text size.
 *
 * The font can be used to style texts, for example in widgets.
 */
export default class Font {
  private name: string;
  private size: number;

  /**
   * Constructs a new font.
   *
   * @see http://iosfonts.com for a list of the fonts that are available in iOS and iPadOS.
   *
   * @param name
   * @param size
   */
  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }
}
