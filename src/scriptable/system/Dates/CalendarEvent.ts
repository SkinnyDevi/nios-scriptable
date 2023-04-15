import Calendar from "./Calendar.ts";
import RecurrenceRule from "./RecurrenceRule.ts";

/**
 * Manages events in calendars.
 *
 * Used for creating, fetching and removing events from your calendars.
 */
export default class CalendarEvent {
  /**
   * Identifier of event.
   */
  public readonly identifer: string;

  /**
   * Title of event.
   */
  public title: string = "";

  /**
   * Location of event.
   */
  public location: string = "";

  /**
   * Notes associated with event.
   */
  public notes: string = "";

  /**
   * Start date of event.
   */
  public startDate?: Date;

  /**
   * End date of event.
   */
  public endDate?: Date;

  /**
   * Whether the event is an all-day event.
   */
  public isAllDay: boolean = false;

  /**
   * Attendees associated with the event.
   *
   * Note that the property is read-only since iOS does not expose API to modify the attendees of an event.
   * @example
   * {
   *   "isCurrentUser": false,
   *   "name": "John Appleseed",
   *   "status": "accepted",
   *   "type": "person",
   *   "role": "required"
   * }
   */
  public readonly attendees: any;

  /**
   * Availability during the event.
   *
   * Indicates how the event should be treated for scheduling purposes. The following values are supported:
   * - busy
   * - free
   * - tentative
   * - unavailable
   *
   * Be aware that not all calendars support all of these availabilities and some calendars may not support
   * availability at all.
   *
   * Use `Calendar.supportsAvailability()` to check if a calendar supports a specific availability.
   */
  public availability: "busy" | "free" | "tentative" | "unavailable" = "busy";

  /**
   * Time zone of event.
   *
   * Geopolitical region identifier that identifies the time zone.
   * @example "Europe/Copenhagen", "America/New_York", "Asia/Tokyo".
   */
  public timeZone?: string;

  /**
   * Calendar the event is stored in.
   */
  public calendar?: Calendar;

  /**
   * In order to add the event to your calendar, you must call the `save()` function.
   */
  constructor() {
    this.identifer = this.generateIdentifier();
  }

  /**
   * Adds a recurrence rule.
   *
   * Recurrence rules specify when the eventer or reminder should be repeated. See the documentation of RecurrenceRule for more information on creating rules.
   * @param recurrenceRule Recurrence rule to add to the reminder.
   */
  public addRecurrenceRule(recurrenceRule: RecurrenceRule) {}

  /**
   * Removes all recurrence rules.
   */
  public removeAllRecurrenceRules() {}

  /**
   * Saves changes to an event, inserting it into the calendar if it is newly created.
   */
  public save() {}

  /**
   * Removes event from calendar.
   */
  public remove() {}

  /**
   * Presents a view for editing the calendar event.
   *
   * The presented view supports editing various attributes of the event, including title, location, dates, recurrence and alerts.
   * @returns Promise that provides the updated event when fulfilled.
   */
  public async presentEdit() {
    await new Promise((res) => setTimeout(res, 200));
    return new CalendarEvent();
  }

  /**
   * Presents a view for creating a calendar event.
   *
   * The presented view supports editing various attributes of the event, including title, location, dates, recurrence and alerts.
   * @returns Promise that provides the created event when fulfilled.
   */
  public static async presentCreate() {
    await new Promise((res) => setTimeout(res, 200));
    return new CalendarEvent();
  }

  /**
   * Events occurring today.
   * @param calendars Calendars to fetch events for. Defaults to all calendars.
   * @returns Promise that provides the events when fulfilled.
   */
  public static async today(calendars?: Calendar[]) {
    await new Promise((res) => setTimeout(res, 200));
    return [new CalendarEvent()];
  }

  /**
   * Events occurring tomorrow.
   * @param calendars Calendars to fetch events for. Defaults to all calendars.
   * @returns Promise that provides the events when fulfilled.
   */
  public static async tomorrow(calendars?: Calendar[]) {
    await new Promise((res) => setTimeout(res, 200));
    return [new CalendarEvent()];
  }

  /**
   * Events that occurred yesterday.
   * @param calendars Calendars to fetch events for. Defaults to all calendars.
   * @returns Promise that provides the events when fulfilled.
   */
  public static async yesterday(calendars?: Calendar[]) {
    await new Promise((res) => setTimeout(res, 200));
    return [new CalendarEvent()];
  }

  /**
   * Events that occur this week.
   * @param calendars Calendars to fetch events for. Defaults to all calendars.
   * @returns Promise that provides the events when fulfilled.
   */
  public static async thisWeek(calendars?: Calendar[]) {
    await new Promise((res) => setTimeout(res, 200));
    return [new CalendarEvent()];
  }

  /**
   * Events that occur next week.
   * @param calendars Calendars to fetch events for. Defaults to all calendars.
   * @returns Promise that provides the events when fulfilled.
   */
  public static async nextWeek(calendars?: Calendar[]) {
    await new Promise((res) => setTimeout(res, 200));
    return [new CalendarEvent()];
  }

  /**
   * Events that occurred last week.
   * @param calendars Calendars to fetch events for. Defaults to all calendars.
   * @returns Promise that provides the events when fulfilled.
   */
  public static async lastWeek(calendars?: Calendar[]) {
    await new Promise((res) => setTimeout(res, 200));
    return [new CalendarEvent()];
  }

  /**
   * Events that occurs between two dates.
   * @param startDate Start date to fetch events for.
   * @param endDate End date to fetch events for.
   * @param calendars Calendars to fetch events for. Defaults to all calendars.
   * @returns Promise that provides the events when fulfilled.
   */
  public static async between(
    startDate: Date,
    endDate: Date,
    calendars?: Calendar[]
  ) {
    await new Promise((res) => setTimeout(res, 200));
    return [new CalendarEvent()];
  }

  private generateIdentifier() {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;

    for (let i = 0; i < 10; i++)
      result += characters.charAt(Math.floor(Math.random() * charactersLength));

    return result;
  }
}
