/**
 * Presents an interface for dictation.
 *
 * Presents an interface that lets you dictate a text. You can specify the locale of the text you
 * want to dictate when calling the `start()` function. Dictation must manually be stopped from the presented
 * interface when you are finished dictating.
 */
export default class Dictation {
  /**
   * Presents an interface that shows the dictated string. Press "Done" when you are done dictating the text.
   * @param locale Optional string identifier that specifies the language to dictate in. E.g. "en" for English,
   * "it" for Italian and "da" for Danish. Defaults to the locale of the device.
   * @returns Promise that provides the dictated text when fulfilled.
   */
  public static async start(locale: string) {
    return "";
  }
}
