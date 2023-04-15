/**
 * UNFINISHED
 *
 * Recurrence rule used with reminders and calendar events.
 *
 * A recurrence rule specifies how often a reminder or a calendar event should repeat.
 */
export default class RecurrenceRule {
  private constructor() {}

  /**
   * Constructs a daily recurrence rule.
   *
   * The interval should have a value greater than 0 and specifies how often the pattern repeats.
   *
   * @example "An interval of 1 specifies that the rule should repeat every day and a value of 3 specifies that the rule should repeat every third day."
   * @param interval Interval at which to repeat the rule.
   * @returns Constructed recurrence rule.
   */
  public static daily(interval: number) {
    return new RecurrenceRule();
  }

  /**
   * Constructs a daily recurrence rule with an end date.
   *
   * The interval should have a value greater than 0 and specifies how often the pattern repeats.
   *
   * @example "An interval of 1 specifies that the rule should repeat every day and a value of 3 specifies that the rule should repeat every third day."
   * @param interval Interval at which to repeat the rule.
   * @param endDate Date at which the recurrence rule should end.
   * @returns Constructed recurrence rule.
   */
  public static dailyEndDate(interval: number, endDate: Date) {
    return new RecurrenceRule();
  }

  /**
   * Constructs a daily recurrence rule with an occurrence count.
   *
   * The interval should have a value greater than 0 and specifies how often the pattern repeats.
   *
   * @example "An interval of 1 specifies that the rule should repeat every day and a value of 3 specifies that the rule should repeat every third day."
   * @param interval Interval at which to repeat the rule.
   * @param ocurrenceCount Number of times the rule should repeat before it ends.
   * @returns Constructed recurrence rule.
   */
  public static dailyOccurrenceCount(interval: number, ocurrenceCount: Date) {
    return new RecurrenceRule();
  }

  /**
   * Constructs a weekly recurrence rule.
   *
   * The interval should have a value greater than 0 and specifies how often the pattern repeats.
   *
   * @example "An interval of 1 specifies that the rule should repeat every week and a value of 3 specifies that the rule should repeat every third week."
   * @param interval Interval at which to repeat the rule.
   * @returns Constructed recurrence rule.
   */
  public static weekly(interval: number) {
    return new RecurrenceRule();
  }
  /**
   * Constructs a weekly recurrence rule with an end date.
   *
   * The interval should have a value greater than 0 and specifies how often the pattern repeats.
   *
   * @example "An interval of 1 specifies that the rule should repeat every week and a value of 3 specifies that the rule should repeat every third week."
   * @param interval Interval at which to repeat the rule.
   * @param endDate Date at which the recurrence rule should end.
   * @returns Constructed recurrence rule.
   */
  public static weeklyEndDate(interval: number, endDate: Date) {
    return new RecurrenceRule();
  }

  /**
   * Constructs a weekly recurrence rule with an occurrence count.
   *
   * The interval should have a value greater than 0 and specifies how often the pattern repeats.
   *
   * @example "An interval of 1 specifies that the rule should repeat every week and a value of 3 specifies that the rule should repeat every third week."
   * @param interval Interval at which to repeat the rule.
   * @param ocurrenceCount Number of times the rule should repeat before it ends.
   * @returns Constructed recurrence rule.
   */
  public static weeklyOccurrenceCount(interval: number, ocurrenceCount: Date) {
    return new RecurrenceRule();
  }

  /**
   * Constructs a monthly recurrence rule.
   *
   * The interval should have a value greater than 0 and specifies how often the pattern repeats.
   *
   * @example "An interval of 1 specifies that the rule should repeat every month and a value of 3 specifies that the rule should repeat every third month."
   * @param interval Interval at which to repeat the rule.
   * @returns Constructed recurrence rule.
   */
  public static monthly(interval: number) {
    return new RecurrenceRule();
  }
  /**
   * Constructs a monthly recurrence rule with an end date.
   *
   * The interval should have a value greater than 0 and specifies how often the pattern repeats.
   *
   * @example "An interval of 1 specifies that the rule should repeat every month and a value of 3 specifies that the rule should repeat every third month."
   * @param interval Interval at which to repeat the rule.
   * @param endDate Date at which the recurrence rule should end.
   * @returns Constructed recurrence rule.
   */
  public static monthlyEndDate(interval: number, endDate: Date) {
    return new RecurrenceRule();
  }

  /**
   * Constructs a monthly recurrence rule with an occurrence count.
   *
   * The interval should have a value greater than 0 and specifies how often the pattern repeats.
   *
   * @example "An interval of 1 specifies that the rule should repeat every month and a value of 3 specifies that the rule should repeat every third month."
   * @param interval Interval at which to repeat the rule.
   * @param ocurrenceCount Number of times the rule should repeat before it ends.
   * @returns Constructed recurrence rule.
   */
  public static monthlyOccurrenceCount(interval: number, ocurrenceCount: Date) {
    return new RecurrenceRule();
  }

  /**
   * Constructs a yearly recurrence rule.
   *
   * The interval should have a value greater than 0 and specifies how often the pattern repeats.
   *
   * @example "An interval of 1 specifies that the rule should repeat every year and a value of 3 specifies that the rule should repeat every third year."
   * @param interval Interval at which to repeat the rule.
   * @returns Constructed recurrence rule.
   */
  public static yearly(interval: number) {
    return new RecurrenceRule();
  }
  /**
   * Constructs a yearly recurrence rule with an end date.
   *
   * The interval should have a value greater than 0 and specifies how often the pattern repeats.
   *
   * @example "An interval of 1 specifies that the rule should repeat every year and a value of 3 specifies that the rule should repeat every third year."
   * @param interval Interval at which to repeat the rule.
   * @param endDate Date at which the recurrence rule should end.
   * @returns Constructed recurrence rule.
   */
  public static yearlyEndDate(interval: number, endDate: Date) {
    return new RecurrenceRule();
  }

  /**
   * Constructs a yearly recurrence rule with an occurrence count.
   *
   * The interval should have a value greater than 0 and specifies how often the pattern repeats.
   *
   * @example "An interval of 1 specifies that the rule should repeat every year and a value of 3 specifies that the rule should repeat every third year."
   * @param interval Interval at which to repeat the rule.
   * @param ocurrenceCount Number of times the rule should repeat before it ends.
   * @returns Constructed recurrence rule.
   */
  public static yearlyOccurrenceCount(interval: number, ocurrenceCount: Date) {
    return new RecurrenceRule();
  }

  /**
   * Constructs a complex weekly recurrence rule.
   *
   * The interval should have a value greater than 0 and specifies how often the pattern repeats.
   *
   * The setPositions filters which recurrences to include in the rule's frequency.
   * @example "An interval of 1 specifies that the rule should repeat every week and a value of 3 specifies that the rule should repeat every third week."
   *
   * @example "A yearly recurrence rule that has a daysOfTheWeek value that specifies Monday through Friday and setPositions contain 2 and -1, occurs only on the second weekday and last weekday of every year."
   *
   * @param interval Interval at which to repeat the rule.
   * @param daysOfTheWeek Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
   * @param setPositions Filters which recurrences to include in the rule's frequency.
   * @returns Constructed recurrence rule.
   */
  public static complexWeekly(
    interval: number,
    daysOfTheWeek: number[],
    setPositions: number[]
  ) {
    return new RecurrenceRule();
  }

  /**
   * Constructs a complex weekly recurrence rule with an end date.
   *
   * The interval should have a value greater than 0 and specifies how often the pattern repeats.
   *
   * The setPositions filters which recurrences to include in the rule's frequency.
   * @example "An interval of 1 specifies that the rule should repeat every week and a value of 3 specifies that the rule should repeat every third week."
   *
   * @example "A yearly recurrence rule that has a daysOfTheWeek value that specifies Monday through Friday and setPositions contain 2 and -1, occurs only on the second weekday and last weekday of every year."
   *
   * @param interval Interval at which to repeat the rule.
   * @param daysOfTheWeek Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
   * @param setPositions Filters which recurrences to include in the rule's frequency.
   * @param endDate Date at which the recurrence rule should end.
   * @returns Constructed recurrence rule.
   */
  public static complexWeeklyEndDate(
    interval: number,
    daysOfTheWeek: number[],
    setPositions: number[],
    endDate: Date
  ) {
    return new RecurrenceRule();
  }

  /**
   * Constructs a complex weekly recurrence rule with an occurrence count.
   *
   * The interval should have a value greater than 0 and specifies how often the pattern repeats.
   *
   * The setPositions filters which recurrences to include in the rule's frequency.
   * @example "An interval of 1 specifies that the rule should repeat every week and a value of 3 specifies that the rule should repeat every third week."
   *
   * @example "A yearly recurrence rule that has a daysOfTheWeek value that specifies Monday through Friday and setPositions contain 2 and -1, occurs only on the second weekday and last weekday of every year."
   *
   * @param interval Interval at which to repeat the rule.
   * @param daysOfTheWeek Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
   * @param setPositions Filters which recurrences to include in the rule's frequency.
   * @param ocurrenceCount Number of times the rule should repeat before it ends.
   * @returns Constructed recurrence rule.
   */
  public static complexWeeklyOcurrenceCount(
    interval: number,
    daysOfTheWeek: number[],
    setPositions: number[],
    ocurrenceCount: number
  ) {
    return new RecurrenceRule();
  }

  /**
   * Constructs a complex monthly recurrence rule.
   *
   * The interval should have a value greater than 0 and specifies how often the pattern repeats.
   *
   * The setPositions filters which recurrences to include in the rule's frequency.
   * @example "An interval of 1 specifies that the rule should repeat every month and a value of 3 specifies that the rule should repeat every third month."
   *
   * @example "A yearly recurrence rule that has a daysOfTheWeek value that specifies Monday through Friday and setPositions contain 2 and -1, occurs only on the second weekday and last weekday of every year."
   *
   * @param interval Interval at which to repeat the rule.
   * @param daysOfTheWeek Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
   * @param daysOfTheMonth Days of the month to repeat the rule. Values range from 1 to 31 and from -1 to -31.
   * @param setPositions Filters which recurrences to include in the rule's frequency.
   * @returns Constructed recurrence rule.
   */
  public static complexMonthly(
    interval: number,
    daysOfTheWeek: number[],
    daysOfTheMonth: number[],
    setPositions: number[]
  ) {
    return new RecurrenceRule();
  }

  /**
   * Constructs a complex monthly recurrence rule with an end date.
   *
   * The interval should have a value greater than 0 and specifies how often the pattern repeats.
   *
   * The setPositions filters which recurrences to include in the rule's frequency.
   * @example "An interval of 1 specifies that the rule should repeat every month and a value of 3 specifies that the rule should repeat every third month."
   *
   * @example "A yearly recurrence rule that has a daysOfTheWeek value that specifies Monday through Friday and setPositions contain 2 and -1, occurs only on the second weekday and last weekday of every year."
   *
   * @param interval Interval at which to repeat the rule.
   * @param daysOfTheWeek Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
   * @param daysOfTheMonth Days of the month to repeat the rule. Values range from 1 to 31 and from -1 to -31.
   * @param setPositions Filters which recurrences to include in the rule's frequency.
   * @param endDate Date at which the recurrence rule should end.
   * @returns Constructed recurrence rule.
   */
  public static complexMonthlyEndDate(
    interval: number,
    daysOfTheWeek: number[],
    daysOfTheMonth: number[],
    setPositions: number[],
    endDate: Date
  ) {
    return new RecurrenceRule();
  }

  /**
   * Constructs a complex monthly recurrence rule with an occurrence count.
   *
   * The interval should have a value greater than 0 and specifies how often the pattern repeats.
   *
   * The setPositions filters which recurrences to include in the rule's frequency.
   * @example "An interval of 1 specifies that the rule should repeat every month and a value of 3 specifies that the rule should repeat every third month."
   *
   * @example "A yearly recurrence rule that has a daysOfTheWeek value that specifies Monday through Friday and setPositions contain 2 and -1, occurs only on the second weekday and last weekday of every year."
   *
   * @param interval Interval at which to repeat the rule.
   * @param daysOfTheWeek Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
   * @param daysOfTheMonth Days of the month to repeat the rule. Values range from 1 to 31 and from -1 to -31.
   * @param setPositions Filters which recurrences to include in the rule's frequency.
   * @param ocurrenceCount Number of times the rule should repeat before it ends.
   * @returns Constructed recurrence rule.
   */
  public static complexMonthlyOcurrenceCount(
    interval: number,
    daysOfTheWeek: number[],
    daysOfTheMonth: number[],
    setPositions: number[],
    ocurrenceCount: number
  ) {
    return new RecurrenceRule();
  }

  /**
   * Constructs a complex yearly recurrence rule.
   *
   * The interval should have a value greater than 0 and specifies how often the pattern repeats.
   *
   * The setPositions filters which recurrences to include in the rule's frequency.
   * @example "An interval of 1 specifies that the rule should repeat every year and a value of 3 specifies that the rule should repeat every third year."
   *
   * @example "A yearly recurrence rule that has a daysOfTheWeek value that specifies Monday through Friday and setPositions contain 2 and -1, occurs only on the second weekday and last weekday of every year."
   *
   * @param interval Interval at which to repeat the rule.
   * @param daysOfTheWeek Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
   * @param monthsOfTheYear The months of the year to repeat the rule. Values range from 1 to 12.
   * @param weeksOfTheYear The weeks of the year to repeat the rule. Values range from 1 to 53 and -1 to -53.
   * @param daysOfTheYear The days of the year to repeat the rule. Values range from 1 to 366 and -1 to -366.
   * @param setPositions Filters which recurrences to include in the rule's frequency.
   * @returns Constructed recurrence rule.
   */
  public static complexYearly(
    interval: number,
    daysOfTheWeek: number[],
    monthsOfTheYear: number[],
    weeksOfTheYear: number[],
    daysOfTheYear: number[],
    setPositions: number[]
  ) {
    return new RecurrenceRule();
  }

  /**
   * Constructs a complex yearly recurrence rule with an end date.
   *
   * The interval should have a value greater than 0 and specifies how often the pattern repeats.
   *
   * The setPositions filters which recurrences to include in the rule's frequency.
   * @example "An interval of 1 specifies that the rule should repeat every monthyear and a value of 3 specifies that the rule should repeat every third monthyear."
   *
   * @example "A yearly recurrence rule that has a daysOfTheWeek value that specifies Monday through Friday and setPositions contain 2 and -1, occurs only on the second weekday and last weekday of every year."
   *
   * @param interval Interval at which to repeat the rule.
   * @param daysOfTheWeek Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
   * @param monthsOfTheYear The months of the year to repeat the rule. Values range from 1 to 12.
   * @param weeksOfTheYear The weeks of the year to repeat the rule. Values range from 1 to 53 and -1 to -53.
   * @param daysOfTheYear The days of the year to repeat the rule. Values range from 1 to 366 and -1 to -366.
   * @param setPositions Filters which recurrences to include in the rule's frequency.
   * @param endDate Date at which the recurrence rule should end.
   * @returns Constructed recurrence rule.
   */
  public static complexYearlyEndDate(
    interval: number,
    daysOfTheWeek: number[],
    monthsOfTheYear: number[],
    weeksOfTheYear: number[],
    daysOfTheYear: number[],
    setPositions: number[],
    endDate: Date
  ) {
    return new RecurrenceRule();
  }

  /**
   * Constructs a complex yearly recurrence rule with an occurrence count.
   *
   * The interval should have a value greater than 0 and specifies how often the pattern repeats.
   *
   * The setPositions filters which recurrences to include in the rule's frequency.
   * @example "An interval of 1 specifies that the rule should repeat every monthyear and a value of 3 specifies that the rule should repeat every third monthyear."
   *
   * @example "A yearly recurrence rule that has a daysOfTheWeek value that specifies Monday through Friday and setPositions contain 2 and -1, occurs only on the second weekday and last weekday of every year."
   *
   * @param interval Interval at which to repeat the rule.
   * @param daysOfTheWeek Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
   * @param monthsOfTheYear The months of the year to repeat the rule. Values range from 1 to 12.
   * @param weeksOfTheYear The weeks of the year to repeat the rule. Values range from 1 to 53 and -1 to -53.
   * @param daysOfTheYear The days of the year to repeat the rule. Values range from 1 to 366 and -1 to -366.
   * @param setPositions Filters which recurrences to include in the rule's frequency.
   * @param ocurrenceCount Number of times the rule should repeat before it ends.
   * @returns Constructed recurrence rule.
   */
  public static complexYearlyOcurrenceCount(
    interval: number,
    daysOfTheWeek: number[],
    monthsOfTheYear: number[],
    weeksOfTheYear: number[],
    daysOfTheYear: number[],
    setPositions: number[],
    ocurrenceCount: number
  ) {
    return new RecurrenceRule();
  }
}
