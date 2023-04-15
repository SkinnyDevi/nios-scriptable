/**
 * Creates a textual representation of the amount of time between two dates.
 *
 * The relative date formatter takes two dates as input and creates a textual representation that communicates the relative
 * time between the two dates, e.g. "yesterday" and "in 1 week".
 */
export default class RelativeDateTimeFormatter {
  /**
   * Locale to use when formatting.
   *
   * The locale should be specified using a string identifier, e.g. "en", "it" or "da". When no locale is set, the formatter will use the current locale of the device.
   */
  public locale: string = "en";

  /**
   * The formatter creates a textual representation of the time between two points in time.
   */
  constructor() {}

  /**
   * Creates a localized string communicating the amount of time between two dates.
   *
   * Creates a localized textual representation of the amount of time between to dates.
   *
   * If the two dates are the same, the function will return "now".
   *
   * If the reference date is yesterday, the function will return "yesterday". Other examples include "in 10 seconds", "2 hours ago", "last week" and "next year".
   * @param date The date to create a relative date and time for.
   * @param referenceDate The reference date that `date` is relative to.
   * @returns A textual representation of the amount of time between the two dates.
   */
  public string(date: Date, referenceDate: Date) {
    return "";
  }

  /**
   * Prefers named dates and times.
   *
   * When using the named style, the formatter tries to find a suitable textual representation over a numeric value for the relative time.
   *
   * When no named representation is found the formatter will fallback to using the numeric style.
   *
   * @example "'now' instead of 'in 0 seconds' and 'yesterday' instead of '1 day ago'."
   */
  public useNamedDateTimeStyle() {}

  /**
   * Prefers numeric dates and times.
   *
   * When using the named style, the formatter tries to find a suitable textual representation over a numeric value for the relative time.
   *
   * When no named representation is found the formatter will fallback to using the numeric style.
   *
   * @example "'now' instead of 'in 0 seconds' and 'yesterday' instead of '1 day ago'."
   */
  public useNumericDateTimeStyle() {}
}
