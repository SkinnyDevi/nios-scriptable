import Notification from "./system/Notifications";
import Image from "./system/primitive/Image";

type WidgetArgs = {
  /**
   * @readonly
   * File URLs supplied by a share sheet or a shortcut action.
   *
   * All file URLs passed to the script from a share sheet or a shortcut action.
   *
   * If you have enabled "File URLs" as a share sheet input from the script settings,
   * the script can be run from any share sheet throughout the system that shares URLs pointing to a file.
   *
   * When large files are passed from a share sheet or a shortcut action, the system may
   * terminate the process due to memory constraints. In that case, you should enable "Run in App"
   * in the script settings or in the shortcut.
   */
  fileUrls?: string[];

  /**
   * @readonly
   * Images supplied by a share sheet or a shortcut action.
   *
   * All images passed to the script from a share sheet or a shortcut action.
   *
   * If you have enabled "Images" as a share sheet input from the script settings,
   * the script can be run from any share sheet throughout the system that shares images.
   *
   * When large images are passed from a share sheet or a shortcut action, the system may
   * terminate the process due to memory constraints. In that case, you should enable "Run in App"
   * in the script settings or in the shortcut.
   */
  images?: Image[];

  /**
   * @readonly
   * Notification being handled by the script.
   *
   * The notification that a script is being run in or the application was opened from.
   *
   * The notification contains all information that was set when the notification was originally scheduled,
   * including the userInfo property which can be used to contain custom data that might be relevant when running the script.
   */
  notification?: Notification | null;

  /**
   * @readonly
   * Plain texts supplied by a share sheet or shortcut action.
   *
   * All plain texts passed to the script from a share sheet or a shortcut action.
   *
   * If you have enabled "Text" as a share sheet input from the script settings, the script can be run
   * from any share sheet throughout the system that shares plain text.
   */
  plainTexts?: string[];

  /**
   * @readonly
   * Query parameters from a URL scheme.
   *
   * Query parameters are supplied to a script when running it from a URL scheme. See the documentation on Scriptables URL schemes for more information.
   */
  queryParameters?: { [key: string]: string };

  /**
   * @readonly
   * Parameter passed to a shortcut.
   *
   * When creating a shortcut using the Shortcuts app, you can pass an input parameter that can be read in your script using args.shortcutParameter.
   *
   * This parameter can be any text, list, dictionary or file and will be exposed in your script using the appropriate type.
   *
   * When passing a file, the "Run Script" action will attempt to read the file as JSON or a plain text.
   * If the file cannot be read as JSON or a plain text, a path to the file will be passed as the input parameter.
   */
  shortcutParameter?: any;

  /**
   * @readonly
   * URLs supplied by a share sheet or a shortcut action.
   *
   * All URLs passed to the script from a share sheet or a shortcut action.
   *
   * If you have enabled "URLs" as a share sheet input from the script settings, the script can
   * be run from any share sheet throughout the system that shares URLs.
   */
  urls?: string[];

  /**
   * @readonly
   *
   * Parameter passed to a widget.
   *
   * When creating a widget on the Home screen, you can define a parameter that can be read in your script using args.widgetParameter.
   *
   * The parameter can be used to differentiate the behavior of multiple widgets.
   */
  widgetParameter?: any;
};

export const args: WidgetArgs = {};
