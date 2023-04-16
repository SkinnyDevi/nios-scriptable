/**
 * Presents a website.
 *
 * Presents a website either in-app or by leaving the app an opening the Safari app.
 */
export default class Safari {
  /**
   * Presents a website in-app.
   *
   * Presents a website without leaving the app.
   * @param url URL of website to present.
   * @param fullscreen Optional. Set to true to display the web view in fullsceen. This only has an effect when used within the app. Defaults to true.
   */
  public static async openInApp(url: string, fullscreen: boolean = true) {}

  /**
   * Presents a website.
   *
   * Presents a website in the Safari app, thus leaving the current app.
   * @param url URL of website to present.
   */
  public static open(url: string) {}
}
