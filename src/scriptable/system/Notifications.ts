import { args } from "../../index.js";

type NotificationAction = {
  title: string;
  url?: string;
};

type NotificationSound =
  | null
  | "default"
  | "accept"
  | "alert"
  | "complete"
  | "event"
  | "failure"
  | "piano_error"
  | "piano_success"
  | "popup";

/**
 * Schedules and manages notifications.
 *
 * Notifications are scheduled for delivery at some point in the future.
 * A notification may be delivered even when Scriptable is not running.
 */
export default class Notification {
  /**
   * Actions added to the notification.
   *
   * An array of objects on the following form:
   * @example
   * {
   *   "title": "Open Website",
   *   "url": "https://scriptable.app"
   * }
   */
  private readonly actions: NotificationAction[] = [];

  /**
   * Number to display in the app's icon badge.
   *
   * When the number is zero, no badge is displayed. When the number is greater than zero,
   * the number is displayed in the app icon's badge. Setting the value to null, will
   * leave the badge unchanged. The default value is null.
   */
  public badge: number | null = null;

  /**
   * Body of the notification.
   */
  public body = "Empty Notification";

  /**
   * Delivery date of the notification.
   *
   * If the notification has already been delivered, for example because it was fetched
   * using `Notification.allDelivered()`, the `deliveryDate` will be populated. Otherwise it will be null.
   *
   * The property cannot be set. In order to specify a future delivery date for a notification,
   * see the `setTriggerDate` function. For recurring notifications,
   * see the `setDailyTrigger` and `setWeeklyTrigger` functions.
   */
  public readonly deliveryDate?: Date;

  /**
   * Identifier of the notification.
   *
   * To reschedule a notification, use the identifier of an existing notification.
   */
  public identifier: string;

  /**
   * Next trigger date of the notification.
   *
   * The next trigger date is the point in time where the next notification will be delivered.
   *
   * The property cannot be set. In order to specify a future delivery date for a notification,
   * see the `setTriggerDate` function. For recurring notifications, see the `setDailyTrigger` and `setWeeklyTrigger` functions.
   */
  public readonly nextTriggerDate?: Date;

  /**
   * URL to open when the notification is tapped.
   *
   * The Scriptable application will open the URL when the notification is tapped.
   * This can be a URL that uses Scriptables URL scheme, the URL scheme of another application or a website URL.
   */
  public openUrl?: string;

  /**
   * Preferred height of the notification.
   *
   * By default Scriptable attempts to determine an appropriate height for your notification.
   * If you want to override the default behavior, you can specify a preferred content height.
   *
   * The preferred content height is only used when running a script inside the notification,
   * i.e. when scriptName is not null. iOS may limit the height of the notification in which
   * case the preferred content height is not guaranteed to be respected.
   */
  public preferredContentHeight?: number;

  /**
   * Name of the script to run in rich notification.
   *
   * When notification is force touched or long pressed, Scriptable can run a script inside
   * the notification without opening the app. Set the scriptName to a name of an existing script to run it inside the notification.
   */
  public scriptName?: string;

  /**
   * Sound of the notification.
   *
   * Set to null if you do not want any sound. Set to one of the following values if you want a sound.
   * - default
   * - accept
   * - alert
   * - complete
   * - event
   * - failure
   * - piano_error
   * - piano_success
   * - popup
   *
   * By default the notification is delivered with no sound.
   */
  public sound: NotificationSound = null;

  /**
   * Subtitle of the notification.
   */
  public subtitle = "";

  /**
   * Identifier for grouping the notification.
   *
   * Notifications are grouped by the identifier on the Home screen and in the Notification Center.
   */
  public threadIdentifier = "scriptable";

  /**
   * Title of the notification.
   */
  public title = "New Notification";

  /**
   * Custom information.
   *
   * Store any custom information for the notification. This can be accessed from the
   * `Notification.opened` property when a script is run from a notification.
   */
  public userInfo?: { [key: string]: any };

  public get opened() {
    return this.userInfo;
  }

  constructor() {
    this.identifier = this.generateIdentifier();
  }

  /**
   * Adds an action button.
   *
   * Actions are shown as buttons in the notification. When screen space is unlimited,
   * the system shows up to 10 actions. When the space is limited the system shows at most two actions.
   *
   * @param title Title of the action.
   * @param url URL to opening when choosing the action.
   * @param destructive If set to `true`, the button is displayed with special highlighting to
   * indicate that it performs a destructive task. Defaults to `false`.
   */
  public addAction(title: string, url: string, destructive: boolean = false) {}

  /**
   * Delivered notifications displayed in the Notification Center.
   *
   * Fetches all notifications that have been scheduled from Scriptable and that
   * are still displayed in the Notification Center of iOS.
   */
  public static async allDelivered() {
    await new Promise((res) => setTimeout(res, 200));
    return [new Notification()];
  }

  /**
   * All pending notifications.
   *
   * Fetches all notifications that have been scheduled from Scriptable and are waiting to be delivered.
   */
  public static async allPending() {
    await new Promise((res) => setTimeout(res, 200));
    return [new Notification()];
  }

  /**
   * Removes the notification.
   *
   * Removes all future triggers of the notification.
   */
  public async remove() {
    await new Promise((res) => setTimeout(res, 200));
  }

  /**
   * Removes all delivered notifications.
   *
   * Removes all notifications that have been scheduled from Scriptable and that
   * are still displayed in the Notification Center of iOS.
   */
  public static async removeAllDelivered() {
    await new Promise((res) => setTimeout(res, 200));
  }

  /**
   * Removes all pending notifications.
   *
   * Removes all notifications that have been scheduled from Scriptable and are waiting to be delivered.
   *
   * **Use with caution.** This removes all notifications scheduled across all of your scripts and the action cannot be undone.
   */
  public static async removeAllPending() {
    await new Promise((res) => setTimeout(res, 200));
  }

  /**
   * Removes delivered notifications.
   *
   * Removes notifications with the specified identifiers. The notifications are only removed
   * if they have been delivered.
   *
   * To remove pending notifications, see `Notification.removePending()`.
   */
  public static async removeDelivered(identifiers: string[]) {
    await new Promise((res) => setTimeout(res, 200));
  }

  /**
   * Removes pending notifications.
   *
   * Removes notifications with the specified identifiers. The notifications are only removed
   * if they are pending, that is they have been scheduled and are waiting to be delivered.
   *
   * To remove delivered notifications, see `Notification.removeDelivered()`.
   */
  public static async removePending(identifiers: string[]) {
    await new Promise((res) => setTimeout(res, 200));
  }

  /**
   * Effectively sets `args.notification` to `null`.
   *
   * When a notification scheduled from Scriptable has been tapped to open the app or while the
   * app was open, `args.notification` will have a value until Scriptable is quit.
   *
   * You can manually reset the value using `Notification.resetCurrent()`.
   */
  public static resetCurrent() {
    args.notification = null;
  }

  /**
   * Schedules the notification.
   *
   * When a new notification is constructed, it must be scheduled, otherwise it will not be delivered.
   *
   * If an existing notification is modified, it must also be scheduled again for the changes to take effect.
   */
  public async schedule() {
    await new Promise((res) => setTimeout(res, 200));
  }

  /**
   * Sets the notification to be triggered daily.
   *
   * Sets the notification to be triggered on a specific time of the day. When the notification repeats,
   * it will be sent at the same time on all future days.
   *
   * If the notification is not repating it will be sent on the next occurrence of the specified time.
   *
   * @param hour Hour of the day to trigger the notification.
   * @param minute Minute of the day to trigger the notification.
   * @param repeats If true the notification will be sent daily on the specified time, otherwise it will only be sent once. Defaults to false.
   */
  public setDailyTrigger(hour: number, minute: number, repeats: boolean) {}

  /**
   * Sets the notification to be triggered on a date and time.
   *
   * @param date Date and time to trigger the notification on.
   */
  public setTriggerDate(date: Date) {}

  /**
   * Sets the notification to be triggered weekly.
   *
   * Sets the notification to be triggered on a specific day of the week and a specific time of that day.
   *
   * When the notification repeats, it will be sent at the same time on all future days. If the notification is
   * not repating it will be sent on the next occurrence of the specified time.
   *
   * @param weekday Day of the week to trigger the notification.
   * @param hour Hour of the day to trigger the notification.
   * @param minute Minute of the day to trigger the notification.
   * @param repeats If true the notification will be sent daily on the specified time, otherwise it will only be sent once. Defaults to false.
   */
  public setWeeklyTrigger(
    weekday: number,
    hour: number,
    minute: number,
    repeats: boolean
  ) {}

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
