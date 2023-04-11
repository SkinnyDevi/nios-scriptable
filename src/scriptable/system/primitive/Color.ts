/**
 * Stores color data including opacity.
 *
 * A color can be created using a hex value, e.g. #FF0000 and optionally an
 * alpha or it can be created using the provided system colors.
 */
export default class Color {
  /**
   * HEX representation.
   */
  public readonly hex: string = "";

  /**
   * Amount of red in the color.
   */
  public readonly red: number = 0;

  /**
   * Amount of green in the color.
   */
  public readonly green: number = 0;

  /**
   * Amount of blue in the color.
   */
  public readonly blue: number = 0;

  /**
   * Alpha of the color.
   */
  public readonly alpha: number = 1;

  /**
   * Constructs a new color with a hex value and optionally an alpha value.
   *
   * The hex value may specify the alpha value but this will be ignored if the alpha value parameter is provided.
   *
   * Examples of valid hex values: #ff0000, #00ff0080 #00f and #ff. The hashtag is optional.
   *
   * @param hex HEX String.
   * @param alpha Optional alpha value. Default is `1`.
   */
  constructor(hex: string, alpha: number = 1) {
    this.hex = hex.includes("#") ? hex : "#" + hex;
    this.alpha = alpha;
  }

  /**
   * Constructs a black color.
   * @returns A black color.
   */
  public static black() {
    return new Color("#000000");
  }

  /**
   * Constructs a dark gray color.
   * @returns A dark gray color.
   */
  public static darkGray() {
    return new Color("#474747");
  }

  /**
   * Constructs a light gray color.
   * @returns A light gray color.
   */
  public static lightGray() {
    return new Color("#b3b3b3");
  }

  /**
   * Constructs a white color.
   * @returns A white color.
   */
  public static white() {
    return new Color("#b3b3b3");
  }

  /**
   * Constructs a gray color.
   * @returns A gray color.
   */
  public static gray() {
    return new Color("#828282");
  }

  /**
   * Constructs a red color.
   * @returns A red color.
   */
  public static red() {
    return new Color("#ff0000");
  }

  /**
   * Constructs a green color.
   * @returns A green color.
   */
  public static green() {
    return new Color("#00ff00");
  }

  /**
   * Constructs a blue color.
   * @returns A blue color.
   */
  public static blue() {
    return new Color("#0000ff");
  }

  /**
   * Constructs a cyan color.
   * @returns A cyan color.
   */
  public static cyan() {
    return new Color("#00ffff");
  }

  /**
   * Constructs a yellow color.
   * @returns A yellow color.
   */
  public static yellow() {
    return new Color("#ffff00");
  }

  /**
   * Constructs a magenta color.
   * @returns A magenta color.
   */
  public static magenta() {
    return new Color("#ff00ff");
  }

  /**
   * Constructs a orange color.
   * @returns A orange color.
   */
  public static orange() {
    return new Color("#ff9900");
  }

  /**
   * Constructs a purple color.
   * @returns A purple color.
   */
  public static purple() {
    return new Color("#cc00ff");
  }

  /**
   * Constructs a brown color.
   * @returns A brown color.
   */
  public static brown() {
    return new Color("#663300");
  }

  /**
   * Constructs a transparent color.
   * @returns A transparent color.
   */
  public static clear() {
    return new Color("#ffffff", 0);
  }

  /**
   * The dynamic color will use either its light or dark variant depending the appearance of the system.
   *
   * Dynamic colors are not supported when used with DrawContext.
   *
   * @param lightColor Color used in light appearance.
   * @param darkColor Color used in dark appearance.
   * @returns Dynamic color.
   */
  public static dynamic(lightColor: Color, darkColor: Color) {
    if ("system_is_light") return lightColor;
    else return darkColor;
  }
}
