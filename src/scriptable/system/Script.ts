/**
 * Access information about the script.
 *
 * Allows for accessing information about the script that is currently being run and controlling selected parts of the script execution.
 *
 * @see
 * In TS and JS, `static name()` conflicts with Function.name.
 *
 * Please remember that in Scriptable you must use `Script.name()` to get the Script name.
 */
export default class Script {
  private constructor() {}
  /**
   * Call this function to inform the system that the script has completed running.
   *
   * When a script is run inside Siri and the Shortcuts app, Scriptable use heuristics to determine if the script has completed.
   *
   * If you find that a script takes too long to complete, you can manually call the complete function to stop the execution.
   *
   * Note that this should be done as the very last action the script performs. When the script is run from a share sheet,
   * the `complete` function will complete execution and dismiss the presented view.
   */
  public static complete() {}

  /**
   * Use this function to pass values to other actions in the Shortcuts app.
   *
   * The output can be a text, a number, a boolean, a dictionary or a file path pointing to a file stored in iCloud.
   *
   * You can also use JavaScript's `return` keyword to output a value to a shortcut.
   * @param value Value to provide as output.
   */
  public static setShortcutOutput(value: any) {}

  /**
   * Sets the widget to be displayed.
   * @param widget Widget to display.
   */
  public static setWidget(widget: any) {}
}
