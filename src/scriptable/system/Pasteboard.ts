import Image from "./primitive/Image.js";

/**
 * Copy and paste strings or images.
 *
 * Copy and paste strings and images to and from the pasteboard.
 */
export default class Pasteboard {
  private constructor() {}

  /**
   * Copies a string to the pasteboard.
   * @param string The string to copy to the pasteboard.
   */
  public static copy(string: string) {}

  /**
   * Copies a string to the pasteboard.
   * @returns The string to copy to the pasteboard.
   */
  public static paste() {
    return "";
  }

  /**
   * Copies a string to the pasteboard.
   * @param string The string to copy to the pasteboard.
   */
  public static copyString(string: string) {}

  /**
   * Pastes a string from the pasteboard.
   * @returns String in the pasteboard or null if no string is in the pasteboard.
   */
  public static pasteString() {
    return "";
  }

  /**
   * Pastes an image from the pasteboard.
   * @returns Image in the pasteboard or null if no image is in the pasteboard.
   */
  public static pasteImage() {
    return Image.fromFile("");
  }
}
