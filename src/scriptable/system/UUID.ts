/**
 * Unique identifier.
 *
 * A universally unique value that can be used to identify items.
 */
export default class UUID {
  /**
   * Get string value.
   *
   * Used for getting the string value of a UUID.
   * @returns UUID String value.
   */
  public static string() {
    return "xxxxxxxx-xxxx-5xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}
