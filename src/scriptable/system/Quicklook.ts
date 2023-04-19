/**
 * Presents an item.
 *
 * Use the quick look to present a file, an image or text string.
 * The quick look will try to choose the best suited presentation of the item.
 */
export default class Quicklook {
  private constructor() {}

  /**
   * Presents the item.
   *
   * Chooses the best suited presentation of the item and performs the presentation if possible.
   * @param item Item to be present.
   * @param fullscreen Optional. Set to true to present the item in fullscreen.
   * This only has an effect when used within the app. Defaults to false.
   */
  public static async present(item: any, fullscreen: boolean = false) {}
}
