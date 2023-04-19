import Font from "./primitive/Font.js";
import Image, { ImageType } from "./primitive/Image.js";

/**
 * Representation of a SF symbol.
 *
 * SF symbols are Apple's configurable icons that are designed to look great with the San Francisco font.
 *
 * Symbols are referenced by their name. You can find the symbol names in:
 * @see Apple's SF Symbols app for macOS - https://developer.apple.com/sf-symbols/
 * @see SF Symbols Browser - https://apps.apple.com/us/app/sf-symbols-browser/id1491161336
 * @see San Fransymbols - https://apps.apple.com/us/app/san-fransymbols/id1504761986
 */
export default class SFSymbol {
  /**
   * Convert the symbol to an image.
   */
  public readonly image: ImageType | null;

  private constructor(image: ImageType | null) {
    this.image = image;
  }

  /**
   * Representation of a SF symbol.
   *
   * SF symbols are Apple's configurable icons that are designed to look great with the San Francisco font.
   *
   * Symbols are referenced by their name. You can find the symbol names in:
   * @see Apple's SF Symbols app for macOS - https://developer.apple.com/sf-symbols/
   * @see SF Symbols Browser - https://apps.apple.com/us/app/sf-symbols-browser/id1491161336
   * @see San Fransymbols - https://apps.apple.com/us/app/san-fransymbols/id1504761986
   *
   * @param symbolName Name of the symbol.
   * @returns Constructed SF symbol or null if no symbol with the name exists.
   */
  public static named(symbolName: string): SFSymbol | null {
    return new SFSymbol(Image.fromFile(symbolName));
  }

  /**
   * Configures the symbol with the specified font information.
   * @param font Font to apply.
   */
  public applyFont(font: Font) {}

  /**
   * Configures the symbol to use an ultra light weight.
   */
  public applyUltraLightWeight() {}

  /**
   * Configures the symbol to use an thin weight.
   */
  public applyThinWeight() {}

  /**
   * Configures the symbol to use an light weight.
   */
  public applyLightWeight() {}

  /**
   * Configures the symbol to use an regular weight.
   */
  public applyRegularWeight() {}

  /**
   * Configures the symbol to use an medium weight.
   */
  public applyMediumWeight() {}

  /**
   * Configures the symbol to use an semibold weight.
   */
  public applySemiboldWeight() {}

  /**
   * Configures the symbol to use an bold weight.
   */
  public applyBoldWeight() {}

  /**
   * Configures the symbol to use an heavy weight.
   */
  public applyHeavyWeight() {}

  /**
   * Configures the symbol to use an black weight.
   */
  public applyBlackWeight() {}
}
