import Color from "../primitive/Color.ts";

/**
 * Holds reminders and events.
 *
 * Use the Calendar type to get a specific calendar. The calendar is used with the
 * Reminder and CalendarEvent types when fetching reminders or events from a specific calendar or when
 * inserting into a calendar.
 *
 * If you are fetching reminders or events from all calendars, you do not need to pass the calendars when
 * performing the fetch with the Reminder or CalendarEvent types.
 */
export default class Calendar {
  /**
   * Calendar identifier.
   */
  public readonly identifier: string;

  /**
   * Title of calendar.
   */
  public title: string = "";

  /**
   * Whether the calendar is a subscribed calendar.
   */
  public readonly isSubscribed: boolean = false;

  /**
   * Indicates whether items can be added, edited, and deleted in the calendar.
   */
  public readonly allowsContentModifications: boolean = false;

  /**
   * Color of calendar.
   */
  public color: Color = Color.white();

  constructor() {
    this.identifier = this.generateIdentifier();
  }

  /**
   * Checks if the calendar supports availability.
   * Indicates how the event should be treated for scheduling purposes. The following values are supported:
   * - busy
   * - free
   * - tentative
   * - unavailable
   *
   * Be aware that not all calendars support all of these availabilities and some calendars may not support
   * availability at all.
   *
   * Use this function to check if a calendar supports a specific availability.
   * @param availability Availability to check against.
   * @returns True if the calendar supports the availability, otherwise false.
   */
  public supportsAvailability(
    availability: "busy" | "free" | "tentative" | "unavailable"
  ) {
    return true;
  }

  /**
   * Saves changes to the calendar.
   */
  public save() {}

  /**
   * Removes calendar.
   *
   * The calendar is removed immediately. This cannot be undone.
   */
  public remove() {}

  /**
   * Fetches calendars for reminders.
   *
   * A calendar can only hold either reminders or events. Call this function to fetch all calendars that can hold reminders.
   * @returns Promise that provides the calendars when fulfilled.
   */
  public static async forReminders() {
    await new Promise((res) => setTimeout(res, 200));
    return [new Calendar()];
  }

  /**
   * Fetches calendars for events.
   *
   * A calendar can only hold either reminders or events. Call this function to fetch all calendars that can hold events.
   * @returns Promise that provides the calendars when fulfilled.
   */
  public static async forEvents() {
    await new Promise((res) => setTimeout(res, 200));
    return [new Calendar()];
  }

  /**
   * Fetches a calendar that holds reminders.
   * @returns Promise that provides the calendars when fulfilled.
   */
  public static async forRemindersByTitle(title: string) {
    await new Promise((res) => setTimeout(res, 200));
    return [new Calendar()];
  }

  /**
   * Fetches a calendar that holds events.
   * @returns Promise that provides the calendars when fulfilled.
   */
  public static async forEventsByTitle(title: string) {
    await new Promise((res) => setTimeout(res, 200));
    return [new Calendar()];
  }

  /**
   * Create a new calendar that holds reminders.
   *
   * This will create a new list for reminders in the Reminders app. The list is automatically saved so there is no need to call `save()` after creating the list.
   * @param title Tile of calendar.
   * @returns Promise that provides the created calendar when fulfilled.
   */
  public static async createForReminders(title: string) {
    await new Promise((res) => setTimeout(res, 200));
    return new Calendar();
  }

  /**
   * Find or create a new calendar that holds reminders.
   *
   * This will attempt to find a calendar for reminders with the specified name. If no calendar is found, a new calendar is created and the calendar
   * will appear as a reminder list in the Reminders app. If multiple calendars are found for the specified name, the first one will be returned.
   *
   * The list is automatically saved so there is no need to call `save()` in the case the list was created.
   * @param title Tile of calendar.
   * @returns Promise that provides the created calendar when fulfilled.
   */
  public static async findOrCreateForReminders(title: string) {
    await new Promise((res) => setTimeout(res, 200));
    return new Calendar();
  }

  /**
   * Default calendar for reminders.
   *
   * A calendar can only hold either reminders or events. Call this function to fetch all calendars that can hold reminders.
   * @returns Promise that provides the calendars when fulfilled.
   */
  public static async defaultForReminders() {
    await new Promise((res) => setTimeout(res, 200));
    return [new Calendar()];
  }

  /**
   * Default calendar for events.
   *
   * A calendar can only hold either reminders or events. Call this function to fetch all calendars that can hold reminders.
   * @returns Promise that provides the calendars when fulfilled.
   */
  public static async defaultForEvents() {
    await new Promise((res) => setTimeout(res, 200));
    return [new Calendar()];
  }

  /**
   * Presents a view for picking calendars.
   * @param allowMultiple Whether to allow picking multiple calenders. Defaults to false.
   * @returns Promise that provides the calendars when fulfilled.
   */
  public static async presentPicker() {
    await new Promise((res) => setTimeout(res, 200));
    return [new Calendar()];
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
