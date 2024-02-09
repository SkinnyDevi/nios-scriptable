import { Size } from "../..";
import Request from "./Request";

/**
 * Presents websites and evaluates JavaScript on websites.
 *
 * Supports rendering HTML as well as loading a file and rendering it.
 *
 * A file can be of various types. It could for example be an HTML file or an image.
 *
 * The web view also supports evaluating JavaScript on a website.
 */
export default class WebView {
  /**
   * Function called upon load of a request.
   *
   * When the web view performs a request to load a resource, the function
   * can determine whether or not to allow the request.
   *
   * Disallowing request can speed up the time it takes to load the website.
   *
   * By default all requests are allowed.
   * @param request The request to process.
   * @returns A `boolean` to admit or deny the request.
   */
  public shouldAllowRequest: (request: Request) => boolean = (request) => {
    return true;
  };

  /**
   * Evaluates JavaScript in the web view.
   *
   * Evaluates JavaScript in the current context of the web view.
   * The returned promise carries the result of evaluating the JavaScript.
   *
   * When passing false to the useCallback parameter, which is the default value,
   * evaluation will terminate after evaluating the last line of the JavaScript.
   * The value on the last line of the script will be carried by the promise returned
   * by evaluateJavaScript.
   *
   * When passing true to the useCallback parameter, evaluation will only complete after
   * the globally available completion function is called. Any value passed to the function,
   * will be carried by the promise returned by evaluateJavaScript.
   *
   * The log is available from the evaluated JavaScript, i.e. messages passed to the globally
   * available log and logError functions will be shown in the log.
   *
   * @param javaScript JavaScript to evaluate in the web view.
   * @param useCallback Optional. if true web view waits for the globally available completion function of the web view to be called before terminating. Defaults to false.
   * @returns Promise that carries the result of evaluating the JavaScript.
   */
  public evaluateJavaScript(
    javaScript: string,
    useCallback: boolean = false
  ): Promise<any> {
    return new Promise((resolve) => resolve(""));
  }

  /**
   * Reads and returns HTML from the loaded website.
   *
   * @returns Promise that carries the HTML of the loaded website.
   */
  public getHTML(): Promise<any> {
    return new Promise((resolve) => resolve(""));
  }

  /**
   * Loads a file and renders it.
   *
   * Files can be of various types, including HTML files and images.
   *
   * The supplied HTML file can reference files and nested directories in the same directory as the HTML file resides.
   *
   * The optional preferredSize parameter is ignored unless the script is run in a Siri Shortcut.
   *
   * If you are displaying large images in a memory constrained envrionment, for example in a Siri Shortcut,
   * you should use the WebView bridge instead of the QuickLook bridge.
   *
   * The technical reason for this is that a Siri Shortcut and other app extension processes have very
   * limited memory and loading a very large image will cause the app extension to be terminated.
   * However, the web view will run in a different process meaning that it is not
   * affected by the same memory constraints.
   *
   * @param fileURL URL of the file to load and render.
   * @param preferredSize Optional. Preferred size of the view. This size is not guaranteed to be respected and is only used when the script is run with Siri or in the Shortcuts app.
   * @param fullscreen Optional. Set to true to present the web view in fullscreen. This only has an effect when used within the app. Defaults to false.
   * @returns Promise that carries no value. Once the web view have been closed, the promise will complete.
   */
  public static loadFile(
    fileURL: string,
    preferredSize: Size = new Size(0, 0),
    fullscreen: boolean = false
  ): Promise<void> {
    return new Promise((resolve) => resolve());
  }

  /**
   * Loads a file in the web view.
   *
   * Files can be of various types, including HTML files and images.
   *
   * The supplied HTML file can reference files and nested directories in the same directory as the HTML file resides.
   * @param fileURL URL of the file to load and render.
   * @returns Promise that carries no value. Once the web view has finished loading, the promise will complete.
   */
  public loadFile(fileURL: string): Promise<void> {
    return new Promise((resolve) => resolve());
  }

  /**
   * Loads HTML and renders it.
   *
   * @param html HTML to load and render.
   * @param baseURL Optional. Base URL used to resolve URLs in the HTML.
   * @param preferredSize Optional. Preferred size of the view. This size is not guaranteed to be respected and is only used when the script is run with Siri or in the Shortcuts app.
   * @param fullscreen Optional. Set to true to present the web view in fullscreen. This only has an effect when used within the app. Defaults to false.
   * @returns Promise that carries no value. Once the web view has finished loading, the promise will complete.
   */
  public static loadHTML(
    html: string,
    baseURL: string = "",
    preferredSize: Size = new Size(0, 0),
    fullscreen: boolean = false
  ): Promise<void> {
    return new Promise((resolve) => resolve());
  }

  /**
   * Load HTML in the web view.
   *
   * Loads the HTML into  the web view. The returned promise will complete once the web view has finished loading.
   * º
   * @param html HTML to load in the web view.
   * @param baseURL Optional. Base URL used to resolve relative URLs in the HTML.
   * @returns Promise that carries no value. Once the web view has finished loading, the promise will complete.
   */
  public loadHTML(html: string, baseURL: string = ""): Promise<void> {
    return new Promise((resolve) => resolve());
  }

  /**
   * Loads request in the web view.
   *
   * When loading a request into the web view, the HTTP method, body and headers of the request will be respected.
   * The onRedirect function on the request will not be invoked.
   * @param request Request to load into the web view.
   * @returns Promise that carries no value. Once the web view has finished loading, the promise will complete.
   */
  public loadRequest(request: Request): Promise<void> {
    return new Promise((resolve) => resolve());
  }

  /**
   * Loads URL in web view and presents the web view.
   *
   * The optional preferredSize parameter is ignored unless the script is run in a Siri Shortcut.
   * @param url URL to load into the web view.
   * @param preferredSize Optional. Preferred size of the view. This size is not guaranteed to be respected and is only used when the script is run with Siri or in the Shortcuts app.
   * @param fullscreen Optional. Set to true to present the web view in fullscreen. This only has an effect when used within the app. Defaults to false.
   * @returns Promise that carries no value. Once the web view has finished loading, the promise will complete.
   */
  public static loadURL(
    url: string,
    preferredSize: Size = new Size(0, 0),
    fullscreen: boolean = false
  ): Promise<void> {
    return new Promise((resolve) => resolve());
  }

  /**
   * Loads URL in web view.
   *
   * Loads the URL in the web view. The returned promise will complete once the web view has finished loading.
   * @param url URL to load into the web view.
   * @returns Promise that carries no value. Once the web view has finished loading, the promise will complete.
   */
  public loadURL(url: string): Promise<void> {
    return new Promise((resolve) => resolve());
  }

  /**
   * Presents the web view.
   *
   * The web view is presented with the content that has been loaded into it.
   * @param fullscreen Set to true to present the web view in fullscreen. Defaults to false.
   * @returns Promise that carries no value. Once the web view has finished loading, the promise will complete.
   */
  public present(fullscreen: boolean = false): Promise<void> {
    return new Promise((resolve) => resolve());
  }

  /**
   * Waits for the web view to load.
   *
   * The returned promise will be fulfilled when the web view finishes loading. If the load fails, the promise will be fulfilled with an error.
   * Use this with caution. If the web view is not loading a new page or is not about to load a new page, the returned promise will never be fulfilled. This limitation exists because Scriptable cannot determine if a web view is about to load a page in cases where evaluating JavaScript in the web view causes a new page to load.
   *
   * Generally this should only be used when loading causing a new page to load from evaluateJavaScript. In other cases, e.g. when loading a URL using loadURL,
   * the returned promise will be fulfilled when the page have been loaded.
   * @returns Promise that carries no value. Once the web view has finished loading, the promise will complete.
   */
  public waitForLoad(): Promise<any> {
    return new Promise((resolve) => resolve(""));
  }
}
