import WidgetContent from "./WidgetContent.js";

/**
 * Date element shown in a widget.
 *
 * A date shown in a widget. Dates will update periodically when shown in a widget.
 *
 * You do not create instances of this element directly. Instead you should call `addDate()` on an instance of a `ListWidget`.
 */
export default class WidgetDate extends WidgetContent {
  /**
   * Date to show in a widget.
   */
  public date: Date = new Date(Date.now());

  /**
   * Display time component of the date.
   * @example "11:23PM"
   */
  public applyTimeStyle() {}

  /**
   * Display entire date. This is the default.
   * @example "June 3, 2019"
   */
  public applyDateStyle() {}

  /**
   * Display date as relative to now.
   * @example "2 hours, 23 minutes 1 year, 1 month"
   */
  public applyRelativeStyle() {}

  /**
   * Display date as offset from now.
   * @example "+2 hours -3 months"
   */
  public applyOffsetStyle() {}

  /**
   * Display date as timer counting from now.
   * @example "2:32 36:59:01"
   */
  public applyTimerStyle() {}
}
