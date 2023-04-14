/**
 * Converts between dates and strings.
 *
 * The date formatter can convert between dates and their textual representations.
 */
export default class DateFormatter {
  /**
   * Date format to be used by the formatter.
   *
   * Sets a fixed format to be used by the formatter. For example the date "2019-08-26 16:47" can be represented using the format "yyyy-MM-dd HH:mm".
   *
   * When converting dates to strings, it's advised to use some of the predefined formats for dates and
   * times that can be applied using functions on the formatter, e.g. `useMediumDateStyle()` and `useMediumTimeStyle()`.
   *
   * @see https://docs.scriptable.app/dateformatter/ for the full list of available formats.
   */
  public dateFormat: string = "dd-mm-yyyy";

  /**
   * Locale to use when formatting.
   *
   * The locale should be specified using a string identifier.
   *
   * When no locale is set, the formatter will use the current locale of the device.
   * @example "en", "it" or "da"
   */
  public locale: string = "en";

  /**
   * Creates a string from a date.
   *
   * @param date The date to convert to a string.
   * @returns A textual representation of the date.
   */
  public string(date: Date): string {
    return date.toDateString();
  }

  /**
   * Uses the date formatters configuration to parse the string into a date.
   *
   * If the string cannot be parsed with the date foramtters configuration, the function will return null.
   * @param str The string to parse into a date.
   * @returns A date representation of the string or null if the string could not be parsed.
   */
  public date(str: string): Date | null {
    return new Date(str);
  }

  /**
   * Use no style for the date.
   *
   * This will remove the date from the formatted string.
   */
  public useNoDateStyle() {}

  /**
   * Use a short style for the date.
   *
   * Dates with a short style are typically numeric only e.g. "08/23/19".
   */
  public useShortDateStyle() {}

  /**
   * Use a medium style for the date.
   *
   * Dates with a medium style usually includes abbreviations, e.g. "Aug 23, 2019" or "7:16:42 PM".
   */
  public useMediumDateStyle() {}

  /**
   * Use a long style for the date.
   *
   * Dates with a long style usually includes a full text, e.g. "August 23, 2019".
   */
  public useLongDateStyle() {}

  /**
   * Use a full style for the date.
   *
   * Dates with a full style includes all details, e.g. "Friday, August 23, 2019 AD".
   */
  public useFullDateStyle() {}

  /**
   * Use no style for the time.
   *
   * This will remove the time from the formatted string.
   */
  public useNoTimeStyle() {}

  /**
   * Use a short style for the time.
   *
   * Times with a short style are typically numeric only but also includes the period for 12-hour clocks, e.g. "7:17 PM".
   */
  public useShortTimeStyle() {}

  /**
   * Use a medium style for the time.
   *
   * Times with a medium style usually includes abbreviations, e.g. "7:16:42 PM".
   */
  public useMediumTimeStyle() {}

  /**
   * Use a long style for the time.
   *
   * Times with a long style usually includes a full text, e.g. "7:16:42 PM PST".
   */
  public useLongTimeStyle() {}

  /**
   * Use a full style for the time.
   *
   * Times with a full style includes all details, e.g. "7:16:42 PM Pacific Standard Time".
   */
  public useFullTimeStyle() {}
}
