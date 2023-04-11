import Notification from "./system/Notifications";
import Image from "./system/primitive/Image";

type WidgetArgs = {
  /**
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
  readonly fileUrls: string[];

  /**
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
  readonly images: Image[];

  notification: Notification | null;
};

export const args: WidgetArgs = {
  fileUrls: [],
  images: [],
  notification: null,
};
