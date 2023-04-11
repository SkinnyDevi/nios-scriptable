import Size from "./Size";

/**
 * Manages image data.
 *
 * Images objects contains image data. APIs in Scriptable that work with images,
 * either by taking an image as input or returning an image, will use this the Image type.
 */
type ImageType = {
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
  constructor() {
    throw new Error("Class is not instantiable.");
  }

  /**
   * Creates an `Image` from raw data.
   *
   * Loads an image from the raw data. If the image could not be read, the function will return null.
   *
   * @param data
   * @returns
   */
  public static fromData(data: any): ImageType | null {
    return {
      size: new Size(data.width, data.height),
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
    return {
      size: new Size(0, 0),
    };
  }
}
