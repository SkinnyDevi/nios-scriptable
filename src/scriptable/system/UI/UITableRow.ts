import Color from "../primitive/Color.js";
import { ImageType } from "../primitive/Image.js";
import UITableCell from "./UITableCell.js";

/**
 * Row in a UITable.
 *
 * Rows can be added to an instance of UITable. A row is shown vertically in a UITable in the order they are
 * added to the table.
 *
 * Rows contain cells which are shown horizontally in the order they are added to the row.
 */
export default class UITableRow {
  /**
   * Spacing between cells.
   *
   * Specifies the horizontal spacing between cells in the row.
   */
  public cellSpacing: number = 0;

  /**
   * Height of the row.
   *
   * The height of the row defaults to 44.
   */
  public height: number = 44;

  /**
   * Whether the cell is a header.
   *
   * Headers are highlighted cells that helps users understand context. Defaults to false.
   */
  public isHeader: boolean = false;

  /**
   * Whether to dismiss the table when the row is selected.
   *
   * This property will only have an effect if the row is selectable, i.e. onSelect has a value. Otherwise it is ignored.
   *
   * Defaults to true.
   */
  public dismissOnSelect: boolean = true;

  /**
   * Called when the row is selected.
   *
   * Called when the row is selected when the table is presented. If this has no value, the row cannot be selected. Defaults to null.
   *
   * Rows cannot be tapped when the tables is presented in Siri.
   */
  public onSelect?: Function;

  /**
   * Background color.
   */
  public backgroundColor: Color = Color.white();

  /**
   * Rows are shown vertically in a UITable. A row contains cells which are displayed horizontally.
   */
  constructor() {}

  /**
	 * Adds a cell to the row. Note that cells are shown in the order they are added to the row.
	 * @param cell Cell to add to the row.

	 */
  public addCell(cell: UITableCell) {}

  /**
   * Constructs a new cell containing the specified string and adds it to the row.
   * @param title Optional title to show in the cell.
   * @param subtitle Optional subtitle shown below the title in the cell.
   * @returns Constructed cell.
   */
  public addText(title: string, subtitle: string) {
    return new UITableCell();
  }

  /**
   * Constructs a new cell containing the specified image and adds it to the row.
   * @param image Image to show in the cell.
   * @returns Cosntructed cell.
   */
  public addImage(image: ImageType) {
    return new UITableCell();
  }

  /**
   * Constructs a new cell that loads the image at the specified url and adds the cell to the row.
   * @param url URL to image.
   * @returns Cosntructed cell.
   */
  public addImageAtURL(url: string) {
    return new UITableCell();
  }

  /**
   * Constructs a new cell that contains a button. Set the onTap property to specify an action to performed when the button is tapped.
   * @param title Title of the button.
   * @returns Cosntructed cell.
   */
  public addButton(title: string) {
    return new UITableCell();
  }
}
