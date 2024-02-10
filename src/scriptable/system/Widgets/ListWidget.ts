import LinearGradient from "../LinearGradient.js";
import Color from "../primitive/Color.js";
import { ImageType } from "../primitive/Image.js";
import WidgetDate from "./WidgetDate.js";
import WidgetImage from "./WidgetImage.js";
import WidgetSpacer from "./WidgetSpacer.js";
import WidgetStack from "./WidgetStack.js";
import WidgetText from "./WidgetText.js";

/**
 * Widget showing a list of elements.
 *
 * A widget showing a list of elements. Pass the widget to Script.setWidget() display it on your Home screen.
 *
 * Be aware that the widget will refresh periodically and the rate at which the widget refreshes is largely determined by the operating system.
 *
 * Also note that there are memory limitations when running a script in a widget. When using too much memory the widget will crash and not render correctly.
 */
export default class ListWidget {
  /**
   * Background color of the widget.
   */
  public backgroundColor: Color = Color.white();

  /**
   * Background image.
   */
  public backgroundImage?: ImageType;

  /**
   * Background gradient.
   */
  public backgroundGradient?: LinearGradient;

  /**
   * Spacing between elements.
   *
   * Specifies the spacing between elements in the widget. You can also use the addSpacer() function on the widget to add spacing between elements. Defaults to 0.
   */
  public spacing: number = 0;

  /**
   * URL to open.
   *
   * The URL will be opened when the widget is tapped. This will override any behavior defined in the configuration of the widget.
   *
   * @example "If the widget is configured to run the script when interacting with the widget but a URL is set the URL will take precedence."
   */
  public url?: string;

  /**
   * Earliest date to refresh the widget.
   *
   * The property indicates when the widget can be refreshed again. The widget will not be refreshed before the date have been reached. It is not guaranteed that the widget will refresh at exactly the specified date.
   *
   * The refresh rate of a widget is partly up to iOS/iPadOS. For example, a widget may not refresh if the device is low on battery or the user is rarely looking at the widget.
   *
   * When the property is `null` the default refresh interval is used. Defaults to `null`.
   */
  public refreshAfterDate: Date | null = null;

  /**
   * Widget showing a list of elements.
   *
   * A widget showing a list of elements. Pass the widget to Script.setWidget() display it on your Home screen.
   *
   * Be aware that the widget will refresh periodically and the rate at which the widget refreshes is largely determined by the operating system.
   *
   * Also note that there are memory limitations when running a script in a widget. When using too much memory the widget will crash and not render correctly.
   */
  constructor() {}

  /**
   * Adds a text element to the widget. Use the properties on the returned element to style the text.
   * @param text Text element.
   */
  public addText(text: string) {
    return new WidgetText();
  }

  /**
   * Adds a date element to the widget. Use the properties on the returned element to style the date.
   * @param date Date element.
   */
  public addDate(date: Date) {
    return new WidgetDate();
  }

  /**
   * Add image to the stack.
   *
   * Adds an image element to the stack. Use the properties on the returned element to style the image.
   * @param image Image.
   * @returns Image element.
   */
  public addImage(image: ImageType) {
    return new WidgetImage();
  }

  /**
   * Add spacer.
   *
   * Adds a spacer to the stack. This can be used to offset the content horizontally in the stack.
   * @param length Length of the spacer. Pass null to create a spacer with a flexible length.
   * @returns Spacer element.
   */
  public addSpacer(length?: number | null) {
    const spacer = new WidgetSpacer();
    if (length !== null && length) spacer.length = length;

    return spacer;
  }

  /**
   * Add stack.
   *
   * Adds a stack to the widget. Stacks layout elements horizontally by default.
   * @returns Stack element.
   */
  public addStack() {
    return new WidgetStack();
  }

  /**
   * Set padding.
   *
   * Sets the padding on each side of the stack.
   * @param top Padding on the top edge.
   * @param leading Padding on the leading edge.
   * @param bottom Padding on the bottom edge.
   * @param trailing Padding on the trailing edge.
   */
  public setPadding(
    top: number,
    leading: number,
    bottom: number,
    trailing: number
  ) {}

  /**
   * Use the default padding.
   *
   * Configure the stack to use the default padding. Any padding previously defined with `setPadding()` will be discarded.
   */
  public useDefaultPadding() {}

  /**
   * Present a preview of the widget.
   *
   * The widget is presented in its small size.
   *
   * Widgets on the Home screen are updated periodically so while
   * working on your widget you may want to preview it in the app.
   */
  public async presentSmall() {}

  /**
   * Present a preview of the widget.
   *
   * The widget is presented in its medium size.
   *
   * Widgets on the Home screen are updated periodically so while
   * working on your widget you may want to preview it in the app.
   */
  public async presentMedium() {}

  /**
   * Present a preview of the widget.
   *
   * The widget is presented in its large size.
   *
   * Widgets on the Home screen are updated periodically so while
   * working on your widget you may want to preview it in the app.
   */
  public async presentLarge() {}
}
