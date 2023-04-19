/**
 * A timer that fires after a time interval has elapsed.
 *
 * The timer fires after a specified time interval has elapsed.
 * The timer can be repeating in which case it will fire multiple times.
 */
export default class Timer {
  /**
   * The frequency at which the timer fires, in milliseconds.
   *
   * Be aware that the time interval is specified in setting. Defaults to 0, causing the timer to fire instantly.
   */
  public timeInterval: number = 0;

  /**
   * Whether the timer should repeat.
   *
   * A repeating timer will keep firing until it is invalidated. In contrast
   * to non-repeating timers, repeating timers are not automatically invalidated. Defaults to false.
   */
  public repeats: boolean = false;

  /**
   * Constructs a timer that fires after a specified time interval.
   */
  constructor() {}

  /**
   * Schedules the timer using its configuration. The supplied function is called when the timer fires.
   *
   * To stop the timer from firing, call the `invalidate()` function.
   * @param callback The callback to be called when the timer fires.
   */
  public schedule(callback: Function) {}

  /**
   * Stops the timer from firing ever again. Non-repeating timers are automatically invalidated after they have fired once.
   *
   * Repeating timers must be manually invalidated.
   */
  public invalidate() {}

  /**
   * This is a convenience function for creating a new timer. The created timer is instantly scheduled and will fire after the specified time interval.
   * @param timeInterval The time interval to fire the timer at.
   * @param repeats Whether the timer should repeat or not.
   * @param callback The callback to be called when the timer fires.
   * @returns The constructed timer.
   */
  public static schedule(
    timeInterval: number,
    repeats: boolean,
    callback: Function
  ) {
    const t = new Timer();
    t.timeInterval = timeInterval;
    t.repeats = repeats;
    t.schedule(callback);

    return t;
  }
}
