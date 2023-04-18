/**
 * Offers standard activities to perform on items.
 *
 * The activity picker presents activities that can be performed on a set of items. For example sending an item via an email or SMS, saving an item to disk or opening an item in a third party app.
 *
 * Available activites vary depending on the provided items.
 */
export default class ShareSheet {
  /**
   * Presents the activity picker.
   *
   * Presents a share sheet with an array of items to share. The activities included
   * in the presented sheet will vary based on the type of item.
   * @param activityItems Items to perform activity on.
   * @returns Promise carrying a value that tells which activity that was performed, if any.
   * The promise is fulfilled when the sheet is dismissed.
   */
  public static async present(
    activityItems: any[]
  ): Promise<{ [key: string]: any }> {
    return {};
  }
}
