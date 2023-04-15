import Color from "../primitive/Color.js";
import Font from "../primitive/Font.js";
import Point from "../primitive/Point.js";

/**
 * Text element shown in a widget.
 *
 * A text shown in a widget. You do not create instances of this element directly. Instead you should call `addText()` on an instance of a ListWidget.
 */
export default class WidgetText {
  /**
   * Text to show in a widget.
   */
  public text: string = "";

  /**
   * Color of the text.
   */
  public color: Color = Color.white();

  /**
   * Font and text size of the text.
   */
  public font: Font = Font.body();

  /**
   * Opacity of the text.
   *
   * Opacity of the text. This must be a value between 0 and 1. Defaults to 1.
   */
  public textOpacity: number = 1;

  /**
   * Maximum number of lines.
   *
   * Maximum number of lines to display. The limit is disabled when the value is 0 or less. Defaults to 0.
   */
  public lineLimit: number = 0;

  /**
   * Minimum amount the text scales down to.
   *
   * Sets the minimum amount that text scales down to fit in the available space. For example, a text with a minimum scale factor of 0.5 allows the widget
   * to draw the text in a font size half the size of the actual font.
   *
   * The scale factor should be a fraction between 0 and 1, both inclusive. Defaults to 1.
   */
  public minimumScaleFactor: number = 1;

  /**
   * Color of the shadow.
   *
   * Sets the color of the shadow cast by the text. The `shadowRadius` property must have a value greater than zero for this property to have an effect. Defaults to black.
   */
  public shadowColor: Color = Color.black();

  /**
   * Size of the shadow.
   *
   * Sets the size of the shadow cast by the text. Defaults to 0.
   */
  public shadowRadius: number = 0;

  /**
   * Offset of the shadow.
   *
   * Sets the offset of the shadow cast by the text. The shadowRadius property must have a value greater than zero for this property to have an effect. Defaults to (0, 0).
   */
  public shadowOffset: Point = new Point(0, 0);

  /**
   * URL to open.
   *
   * The URL will be opened when the text is tapped. This is only supported in medium and large widgets.
   *
   * Small widgets can only have a single tap target, which is specified by the url on the widget.
   */
  public url?: string;

  /**
   * Specifies that text should be left aligned. This is the default.
   *
   * This does not affect texts placed in stacks.
   *
   * Use spacers instead when aligning text in stacks. To align the text to left right in a horizontal stack, you should place a spacer after the text.
   */
  public leftAlignText() {}

  /**
   * Specifies that text should be center aligned.
   *
   * This does not affect texts placed in stacks.
   *
   * Use spacers instead when aligning text in stacks. To align the text in the center of a horizontal stack, you should place a spacer both before and after the text.
   */
  public centerAlignText() {}

  /**
   * Specifies that text should be right aligned.
   *
   * This does not affect texts placed in stacks.
   *
   * Use spacers instead when aligning text in stacks. To align the text to the right in a horizontal stack, you should place a spacer before the text.
   */
  public rightAlignText() {}

  /**
   * Text element shown in a widget.
   *
   * A text shown in a widget. You do not create instances of this element directly. Instead you should call `addText()` on an instance of a ListWidget.
   */
  constructor() {}
}
