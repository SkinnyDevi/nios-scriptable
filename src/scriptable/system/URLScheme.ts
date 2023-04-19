/**
 * Manages URL schemes for Scriptable.
 *
 * Use URL schemes to launch the app and perform an action, such as running a script. The app conforms to the `scriptable://` URL scheme.
 * The following actions can be performed using the URL scheme.
 *
 * Adding a script To add a new script, you should use the following URL scheme: `scriptable:///add`
 *
 * Opening a script To open an existing script, you should use the following URL scheme: `scriptable:///open/Example`
 *
 * The scriptName query parameter is the name of the script to open. scriptName must be URL encoded. You may optionally add the query parameter openSettings with a value of true to automatically open the script settings.
 *
 * Running a script To run an existing script, you should use the following URL scheme: `scriptable:///run/Example`
 *
 * The scriptName query parameter is the name of the script to run. `scriptName` must be URL encoded.
 *
 * If you set openEditor to true, the script will run with the editor shown opposed to running directly from the list of scripts.
 * Opening the editor to run the script is beneficial in cases where you need to view messages logged to the console.
 *
 * In addition to the `scriptable://` scheme, you can also perform the above actions using the universal link `open.scriptable.app`, e.g. `https://open.scriptable.app/run/Example`
 */
export default class URLScheme {
  private constructor() {}
  /**
   * URL for opening the script.
   *
   * Gets the URL for opening the current script. When making a request to the returned URL from another app,
   * e.g. Safari, the script will be opened.
   * @returns URL for opening script.
   */
  public static forOpeningScript() {
    return "";
  }

  /**
   * URL for opening script settings.
   *
   * Gets the URL for opening the settings of the current script. When making a request to the returned URL from another app, e.g.
   * Safari, the settings of the current script will be opened.
   * @returns URL for opening script settings.
   */
  public static forOpeningScriptSettings() {
    return "";
  }

  /**
   * URL for running script.
   *
   * Gets the URL for running the current script. When making a request to the returned URL from another app, e.g.
   * Safari, the current script will run.
   *
   * Get the query parameters using the `args.queryParameters`
   * @returns URL for opening script settings.
   */
  public static forRunningScript() {
    return "";
  }
}
