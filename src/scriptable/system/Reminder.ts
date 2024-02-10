import { Calendar, RecurrenceRule } from "../..";

/**
 * Manages reminders in calendars.
 *
 * Used for creating, fetching and removing reminders from your calendars.
 */
export default class Reminder {
  /**
   * Calendar the reminder is stored in.
   */
  public calendar: Calendar | null = null;

  /**
   * Completion date of reminder.
   */
  public readonly completionDate: Date = new Date();

  /**
   * Creation date of reminder.
   */
  public readonly creationDate: Date = new Date();

  public dueDate: Date | null = null;

  /**
   * Whether `dueDate` includes a time.
   *
   * When this is true, assignments to the `dueDate` property will include a time, when
   * this is false, the time component of the date will be ignored. Defaults to true.
   */
  public dueDateIncludesTime = true;

  /**
   * Identifier of the reminder.
   *
   * The `string` is only an example to a real value given by the system.
   */
  public readonly identifier = "DCE8D9A9-9F26-4B85-A5FE-9ED262F5AF74";

  /**
   * Whether the reminder is completed.
   */
  public isCompleted = false;

  /**
   * Whether the reminder is overdue.
   */
  public readonly isOverdue = false;

  /**
   * Notes associated with the reminder.
   */
  public notes = "";

  /**
   * Priority of reminder.
   *
   * Specifies the prirority of the reminder with 0 representing an undefined priority, 1 the highest priority, and 9 the lowest priority.
   */
  public priority: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 = 0;

  /**
   * Title of reminder.
   */
  public title = "";

  /**
   * Adds a recurrence rule.
   *
   * Recurrence rules specify when the reminder should be repeated. See the documentation of
   * `RecurrenceRule` for more information on creating rules.
   * @param recurrenceRule Recurrence rule to add to the reminder.
   */
  public addRecurrenceRul(recurrenceRule: RecurrenceRule) {}

  /**
   * Fetches all reminders.
   *
   * For performance reasons iOS limits fetched results to events within a four year timespan.
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static all(calendars: Calendar[]): Promise<Reminder> {
    return new Promise((resolve) => resolve(new Reminder()));
  }

  /**
   * Fetches all completed reminders.
   *
   * For performance reasons iOS limits fetched results to events within a four year timespan.
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static allCompleted(calendars: Calendar[]): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches due reminders.
   *
   * Fetches reminders that are due within the time interval constituted by the start and end dates.
   * @param startDate
   * @param endDate
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static allDueBetween(
    startDate: Date,
    endDate: Date,
    calendars: Calendar[]
  ): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches all reminders due last week.
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static allDueLastWeek(calendars: Calendar[]): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches all reminders due next week.
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static allDueNextWeek(calendars: Calendar[]): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches all reminders due this week.
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static allDueThisWeek(calendars: Calendar[]): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches all reminders due today.
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static allDueToday(calendars: Calendar[]): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches all reminders due tomorrow.
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static allDueTomorrow(calendars: Calendar[]): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches all reminders due yesterday.
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static allDueYesterday(calendars: Calendar[]): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches all incomplete reminders.
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static allIncomplete(calendars: Calendar[]): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches completed reminders.
   *
   * Fetches reminders that were completed within the time interval constituted by the start and end dates.
   * @param startDate
   * @param endDate
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static completedBetween(
    startDate: Date,
    endDate: Date,
    calendars: Calendar[]
  ): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches completed reminders.
   *
   * Fetches reminders that are completed and that were due within the time interval constituted by the start and end dates.
   * @param startDate
   * @param endDate
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static completedDueBetween(
    startDate: Date,
    endDate: Date,
    calendars: Calendar[]
  ): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches completed reminders due last week.
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static completedDueLastWeek(
    calendars: Calendar[]
  ): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches completed reminders due next week.
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static completedDueNextWeek(
    calendars: Calendar[]
  ): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches completed reminders due this week.
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static completedDueThisWeek(
    calendars: Calendar[]
  ): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches completed reminders due today.
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static completedDueToday(calendars: Calendar[]): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches completed reminders due tomorrow.
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static completedDueTomorrow(
    calendars: Calendar[]
  ): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches completed reminders due yesterday.
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static completedDueYesterday(
    calendars: Calendar[]
  ): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches completed reminders last week.
   *
   * Note that this does not take the due date into account. This will return all reminders that you have completed last week.
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static completedLastWeek(calendars: Calendar[]): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches completed reminders this week.
   *
   * Note that this does not take the due date into account. This will return all reminders that you have completed last week.
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static completedThisWeek(calendars: Calendar[]): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches incomplete reminders today.
   *
   * Note that this does not take the due date into account. This will return all reminders that you have completed last week.
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static completedToday(calendars: Calendar[]): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches incomplete reminders.
   *
   * Fetches reminders that are completed and that were due within the time interval constituted by the start and end dates.
   * @param startDate
   * @param endDate
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static incompletedDueBetween(
    startDate: Date,
    endDate: Date,
    calendars: Calendar[]
  ): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches incomplete reminders due last week.
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static incompletedDueLastWeek(
    calendars: Calendar[]
  ): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches incomplete reminders due next week.
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static incompletedDueNextWeek(
    calendars: Calendar[]
  ): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches incomplete reminders due this week.
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static incompletedDueThisWeek(
    calendars: Calendar[]
  ): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches incomplete reminders due today.
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static incompletedDueToday(
    calendars: Calendar[]
  ): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches incomplete reminders due tomorrow.
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static incompletedDueTomorrow(
    calendars: Calendar[]
  ): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Fetches incomplete reminders due yesterday.
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static incompletedDueYesterday(
    calendars: Calendar[]
  ): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Removes reminder from calendar.
   */
  public remove() {}

  /**
   * Removes all recurrence rules.
   */
  public removeAllRecurrenceRules() {}

  /**
   * Saves reminder.
   *
   * Saves changes to a reminder, inserting it into the calendar if it is newly created.
   */
  public save() {}

  /**
   * Fetches the scheduled reminders.
   *
   * The fetched result contains reminders that are due today and reminders that are overdue.
   * This is similar to the reminders shown in the Reminders apps "Scheduled" list
   *
   * For performance reasons iOS limits fetched results to events within a four year timespan.
   * @param calendars Calendars to fetch reminders for. Defaults to all calendars.
   * @returns Promise that provides the reminders when fulfilled.
   */
  public static scheduled(calendars: Calendar[]): Promise<Reminder[]> {
    return new Promise((resolve) => resolve([]));
  }
}
