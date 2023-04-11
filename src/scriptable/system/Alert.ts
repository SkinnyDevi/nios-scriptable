import TextField from "./TextField";

/**
 * UNFINISHED
 *
 * Presents an alert.
 *
 * Use this to configure an alert presented modally or as a sheet. After configuring the alert,
 * call presentAlert() or presentSheet() to present the alert. The two presentations methods will
 * return a value which carries the index of the action that was selected when fulfilled.
 */
export default class Alert {
  /**
   * Title displayed in the alert. Usually a short string.
   */
  public title = "New Alert";

  /**
   * Detailed message displayed in the alert.
   */
  public message = "This is a new alert.";

  /**
   * Adds an action button to the alert. To check if an action was selected, you should use
   * the first parameter provided when the promise returned by `presentAlert()`
   * and `presentSheet()` is resolved.
   *
   * @param title Title of the action.
   */
  public addAction(title: string) {}

  /**
   * Adds a destructive action to the alert.
   *
   * Destructive action titles have a red text color, signaling that the action may modify or delete data.
   * @param title Title of the action.
   */
  public addDestructiveAction(title: string) {}

  /**
   * Adds a cancel action to the alert.
   *
   * When a cancel action is selected, the index provided by `presentAlert()` or `presentSheet()` will always be `-1`.
   *
   * Please note that when running on the iPad and presenting using `presentSheet()`, the action will not be shown in the list of actions.
   *
   * The operation is cancelled by tapping outside the sheet. An alert can only contain a single cancel action.
   * Attempting to add more cancel actions will remove any previously added cancel actions.
   *
   * @param title Title of the action.
   */
  public addCancelAction(title: string) {}

  /**
   * Adds a text field to the alert controller prompting for user input.
   *
   * Retrieve the value for the text field using `textFieldValue()` and supply the index of the text field.
   *
   * Indices for text fields are assigned in the same order as they are added to the alert starting at 0.
   * Text fields are not supported when using the sheet presentation.
   *
   * @param placeholder Optional placeholder that will be displayed when the text field is empty.
   * @param text Optional default value for the text field.
   * @return `TextField` added to the alert.
   */
  public addTextField(placeholder: string, text: string) {
    const tf = new TextField();

    tf.placeholder = placeholder;
    tf.text = text;

    return tf;
  }

  /**
   * Adds a secure text field to the alert controller prompting for user input. Values entered into a secure text field will
   * be hidden behind dots.
   *
   * Retrieve the value for the text field using `textFieldValue()` and supply the index of the text field.
   *
   * Indices for text fields are assigned in the same order as they are added to the alert starting at 0.
   * @param placeholder
   * @param text
   */
  public addSecureTextField(placeholder: string, text: string) {
    const tf = this.addTextField(placeholder, text);

    tf.isSecure = true;

    return tf;
  }

  /**
   * Retrieves the value of a text field added using `addTextField()` or `addSecureTextField()`.
   *
   * Indices for text fields are assigned in the same order as they are added to the alert starting at 0.
   *
   * @param index Index of the text field to retrieve for value.
   */
  public textFieldValue(index: number) {}

  /**
   * This is a shorthand for presentAlert().
   * @returns A promise carrying the selected action index when fulfilled.
   */
  public async present() {
    return await this.presentAlert();
  }

  /**
   * Presents the alert modally.
   * @returns A promise carrying the selected action index when fulfilled.
   */
  public async presentAlert() {
    await new Promise((res) => setTimeout(res, 200));
    return 0;
  }

  /**
   * Presents the alert as a sheet;
   * @returns A promise carrying the selected action index when fulfilled.
   */
  public async presentSheet() {
    await new Promise((res) => setTimeout(res, 200));
    return 0;
  }
}
