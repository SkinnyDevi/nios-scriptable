/**
 * Open x-callback-url requests.
 *
 * Opens apps that support x-callback-url and waits for a response from the target application.
 *
 * You can find a list of apps that support x-callback-url: @see https://x-callback-url.com/apps.
 */
export default class CallbackURL {
  private baseURL: string;

  /**
   * Constructs an object that opens x-callback-url requests and waits for a response from the target app.
   *
   * @example "my-app://x-callback-url/action"
   * @param baseURL Base URL of the request.
   */
  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  /**
   * Appends a key/value pair to the base URL as a query parameter. The name and value are automatically encoded.
   *
   * Do not add the x-callback-url paramters, i.e. x-source, x-success, x-error and x-cancel as Scriptable will add those.
   *
   * @param name Name of the query parameter to add.
   * @param value Value of the query parameter to add.
   */
  public addParameter(name: string, value: string) {}

  /**
   * Opens the target app and waits for the target app to perform the action.
   * The returned promise contains the query parameters supplied by the target app when it
   * invokes the callback.
   *
   * If the action failed in the target app or the action was cancelled, the promise will be rejected.
   * The promise is also rejected if the action times out because the target app did not invoke the callback.
   *
   * @returns Promise that provides the query parameters supplied by the target app when it invokes the callback.
   */
  public async open(): Promise<{ [key: string]: string }> {
    await new Promise((res) => setTimeout(res, 200));
    return { "": "" };
  }

  /**
   * Creates a callback URL with the specified base URL and query parameters.
   */
  public getURL() {
    return "";
  }
}
