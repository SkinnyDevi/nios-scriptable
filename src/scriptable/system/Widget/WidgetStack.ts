import LinearGradient from "../LinearGradient.js";
import Color from "../primitive/Color.js";
import { ImageType } from "../primitive/Image.js";
import Size from "../primitive/Size.js";
import WidgetDate from "./WidgetDate.js";
import WidgetImage from "./WidgetImage.js";
import WidgetSpacer from "./WidgetSpacer.js";
import WidgetText from "./WidgetText.js";

/**
 * Stack element shown in widget.
 *
 * Shows a stack in the widget.
 */
export default class WidgetStack {
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
   * Specifies the spacing between elements in the stack.
   *
   * You can also use the `addSpacer()` function on the widget to add spacing between elements. Defaults to 0.
   */
  public spacing: number = 0;

  /**
   * Size of the stack.
   *
   * Specifies the size of the stack when shown in a widget. When a dimension is set to zero or less, the widget will automatically
   * decide a length for that dimension. Both dimensions default to 0.
   */
  public size: Size = new Size(0, 0);

  /**
   * Radius of the corners.
   *
   * Radius of the rounded corners. Defaults to 0.
   */
  public cornerRadius: number = 0;

  /**
   * Border width.
   *
   * Width of the border around the stack. Defaults to 0.
   */
  public borderWidth: number = 0;

  /**
   * Border color.
   *
   * Color of the border around the stack. Defaults to black.
   */
  public borderColor: Color = Color.black();

  /**
   * URL to open.
   *
   * The URL will be opened when the text is tapped. This is only supported in medium and large widgets.
   *
   * Small widgets can only have a single tap target, which is specified by the url on the widget.
   */
  public url?: string;

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
  public addSpacer(length: number | null) {
    const spacer = new WidgetSpacer();
    if (length !== null) spacer.length = length;

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
   * Top aligns the content.
   */
  public topAlignContent() {}

  /**
   * Center aligns the content.
   */
  public centerAlignContent() {}

  /**
   * Bottom aligns the content.
   */
  public bottomAlignContent() {}

  /**
   * Layout elements horizontally.
   *
   * Specifies that the stack should layout elements horizontally. This is the default.
   */
  public layoutHorizontally() {}

  /**
   * Layout elements vertically.
   *
   * Specifies that the stack should layout elements vertically.
   */
  public layoutVertically() {}
}
