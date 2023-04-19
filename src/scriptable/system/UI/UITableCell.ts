import Color from "../primitive/Color.js";
import Font from "../primitive/Font.js";
import { ImageType } from "../primitive/Image.js";

/**
 * Cell in a UITableRow.
 *
 * Cells are shown horizontally in a UITableRow which in turn is shown vertically in a UITable. Cells have content, e.g. a text or an image.
 */
export default class UITableCell {
  /**
   * Relative width of the cell.
   *
   * A width weight specifies the relative width of the cell. When computing the absolute width of the cell,
   * all width weights are taken into account. Consider the following example.
   *
   * Cell A has a width weight of 50. Cell B has a width weight of 100. Cell C has a width wegiht of 150.
   *
   * Assume that the row has an absolute width of 100. The width will be distributed among cells A, B and C. B will be
   * double as wide as A but C will be fifty percent wider than B and three times as wide as A.
   */
  public widthWeight: number = 0;

  /**
   * Called when the button is tapped.
   *
   * Buttons cannot be tapped when the table is presented in Siri.
   */
  public onTap?: Function;

  /**
   * Whether to dismiss the table when the button is tapped.
   *
   * Defaults to false.
   */
  public dismissOnTap: boolean = false;

  /**
   * Color of the title.
   *
   * This only has an effect on cells with a title. By default the color is null, in which case an appropriate
   * color is automatically chosen based on the theme of the app and the context the script is running in.
   */
  public titleColor: Color | null = null;

  /**
   * Color of the subtitle.
   *
   * This only has an effect on cells with a subtitle. By default the color is null, in which case an appropriate
   * color is automatically chosen based on the theme of the app and the context the script is running in.
   */
  public subtitleColor: Color | null = null;

  /**
   * Font of the title.
   */
  public titleFont: Font = Font.systemFont(18);

  /**
   * Font of the subtitle.
   */
  public subtitleFont: Font = Font.systemFont(14);

  private constructor() {}

  /**
   * Constructs a new cell containing text.
   * @param title Optional title to show in the cell.
   * @param subtitle Optional subtitle shown below the title.
   * @returns Constructed cell.
   */
  public static text(title: string, subtitle: string) {
    return new UITableCell();
  }

  /**
   * Constructs a new cell containing an image.
   * @param image Image to show in the cell.
   * @returns Constructed cell.
   */
  public static image(image: ImageType) {
    return new UITableCell();
  }

  /**
   * Constructs a new cell that loads the image at the specified URL.
   * @param url URL to image.
   * @returns Constructed cell.
   */
  public static imageAtURL(url: string) {
    return new UITableCell();
  }

  /**
   * Constructs a new cell that contains a button. Set the onTap property to specify an action to performed when the button is tapped.
   * @param title Title of the button.
   * @returns Constructed cell.
   */
  public static button(title: string) {
    return new UITableCell();
  }

  /**
   * Specifies that content in the cell should be left aligned.
   */
  public leftAligned() {}

  /**
   * Specifies that content in the cell should be center aligned.
   */
  public centerAligned() {}

  /**
   * Specifies that content in the cell should be right aligned.
   */
  public rightAligned() {}
}
