import WidgetContent from "./WidgetContent.js";

/**
 * Text element shown in a widget.
 *
 * A text shown in a widget. You do not create instances of this element directly. Instead you should call `addText()` on an instance of a ListWidget.
 */
export default class WidgetText extends WidgetContent {
  /**
   * Text to show in a widget.
   */
  public text: string = "";
}
