import Size from "./Size.ts";
import Data from "./Data.ts";

/**
 * Manages image data.
 *
 * Images objects contains image data. APIs in Scriptable that work with images,
 * either by taking an image as input or returning an image, will use this the Image type.
 */
export type ImageType = {
  /**
   * Size of the image in pixels.
   */
  readonly size: Size;
};

/**
 * Manages image data.
 *
 * Images objects contains image data. APIs in Scriptable that work with images,
 * either by taking an image as input or returning an image, will use the `ImageType`.
 */
export default class Image {
  private constructor() {}
  /**
   * Creates an `Image` from raw data.
   *
   * Loads an image from the raw data. If the image could not be read, the function will return null.
   *
   * @param data
   * @returns
   */
  public static fromData(data: Data): ImageType | null {
    if (data === null)
      throw new Error(
        "Expected value of type Data but got value of type null."
      );

    return {
      size: new Size(0, 0),
    };
  }

  /**
   * Creates an image from a file.
   *
   * Loads an image from the specified file path. If the image could not be read, the function will return null.
   *
   * @param filePath Path to file as string.
   * @returns Image loaded from file.
   */
  public static fromFile(filePath: string): ImageType | null {
    if (filePath === null)
      throw new Error(
        "Expected value of type string but got value of type null."
      );

    return {
      size: new Size(0, 0),
    };
  }
}
