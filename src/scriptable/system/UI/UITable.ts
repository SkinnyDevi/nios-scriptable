import UITableRow from "./UITableRow.js";

/**
 * Renders a table.
 *
 * Tables present data in a structured manner. A table contains rows which in turn contains cells.
 */
export default class UITable {
  /**
   * Whether to show separators.
   *
   * Whether to show separators between rows. Defaults to false.
   */
  public showSeparators: boolean = false;

  /**
   * Use a table to present data in a structured manner.
   */
  constructor() {}

  /**
   * Adds a row to the table. Rows are shown vertically in the table view, i.e.
   * from the top and down. Rows are rendered in the order they are added.
   * @param row Row to add.
   */
  public addRow(row: UITableRow) {}

  /**
   * Removes a row from the table.
   * @param row Row to remove.
   */
  public removeRow(row: UITableRow) {}

  /**
   * Removes all rows from the table. If the table is presented, you must call the reload function
   * in order for the changes to be reflected visually.
   */
  public removeAllRows() {}

  /**
   * If you add or remove rows while a table view is presented, you must reload the table in order for the changes to take effect.
   */
  public reload() {}

  /**
   * Presents the table.
   * @param fullscreen Optional. Set to true to present the web view in fullscreen. This only has an effect when used within the app. Defaults to false.
   */
  public async present(fullscreen: boolean = false) {}
}
