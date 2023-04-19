import Size from "./primitive/Size.js";

/**
 * Provides information about the device.
 *
 * Reads information about the current device and its screen.
 *
 * @see
 * In TS and JS, `static name()` conflicts with Function.name.
 *
 * Please remember that in Scriptable you must use `Device.name()` to get the Device name.
 */
export default class Device {
  private constructor() {}

  /**
   * Name of the operating system.
   */
  public static systemName() {
    return "Simulated iOS.";
  }

  /**
   * Version of the operating system.
   */
  public static systemVersion() {
    return "iOS X.";
  }

  /**
   * Model of the device.
   * @example "iPhone"
   */
  public static model() {
    return "iPhone";
  }

  /**
   * Whether the device is a phone.
   *
   * You can use this property to choose behavior of a script depending on whether its running on a phone or a pad.
   */
  public static isPhone() {
    return false;
  }

  /**
   * Whether the device is a pad.
   *
   * You can use this property to choose behavior of a script depending on whether its running on a phone or a pad.
   */
  public static isPad() {
    return false;
  }

  /**
   * Size of the screen.
   *
   * The value is measured in points. For an explanation of the relationship between points and pixels, see the documentation
   * of the `screenScale()` method.
   *
   * The value takes the device rotation into account, so the value will vary between portrait and landscape.
   * @returns Size in points.
   */
  public static screenSize() {
    return new Size(1080, 1920);
  }

  /**
   * Resolution of the screen.
   *
   * The value is measured in pixels. The value does not take the rotation of the deviec into account.
   * @returns Size in pixels.
   */
  public static screenResolution() {
    return new Size(10, 10);
  }

  /**
   * Scale of the screen.
   *
   * Standard resolution displays have a scale of 1.0 where one point on the screen equals one pixel. Retina displays
   * will have a scale factor of 2.0 or 3.0 where one point on the screen is four or nine pixels, respectively.
   */
  public static screenScale() {
    return 1.0;
  }

  /**
   * Brightness of the screen in percentage.
   *
   * To set the screen brightness, refer to the `setScreenBrightness()` function.
   * @returns The value range from 0 to 1.
   */
  public static screenBrightness() {
    return 1;
  }

  /**
   * Whether the device is in portrait with the home button or home indicator at the bottom.
   */
  public static isInPortrait() {
    return false;
  }

  /**
   * Whether the device is in portrait but upside down with the home button or home indicator at the top.
   */
  public static isInPortraitUpsideDown() {
    return false;
  }

  /**
   * Whether the device is in landscape with the home button or home indicator on the right side.
   */
  public static isInLandscapeLeft() {
    return false;
  }

  /**
   * Whether the device is in landscape with the home button or home indicator on the left side.
   */
  public static isInLandscapeRight() {
    return false;
  }

  /**
   * Whether the device is lying parallel to the ground with the screen facing upwards.
   */
  public static isFaceUp() {
    return false;
  }

  /**
   * Whether the device is lying parallel to the ground with the screen facing downwards.
   */
  public static isFaceDown() {
    return false;
  }

  /**
   * Current battery level.
   * @returns The value is in percentage ranging between 0 and 1.
   */
  public static batteryLevel() {
    return 1;
  }

  /**
   * Whether the device is being not plugged into power and thus discharging.
   */
  public static isDischarging() {
    return false;
  }

  /**
   * Whether the device is being charged.
   */
  public static isCharging() {
    return false;
  }

  /**
   * Whether the device is fully charged.
   */
  public static isFullyCharged() {
    return false;
  }

  /**
   * The preferred langauges.
   * @returns The list is ordered according to the language preferences specified in the system settings.
   */
  public static preferredLanguages() {
    return ["English", "Spanish"];
  }

  /**
   * Identifier for the device locale.
   */
  public static locale() {
    return "en";
  }

  /**
   * Identifier for the device language.
   */
  public static language() {
    return "English";
  }

  /**
   * Whether the device is using dark appearance.
   * @see This API is not supported in widgets.
   */
  public static isUsingDarkAppearance() {
    return false;
  }

  /**
   * The device volume.
   * @returns The value range from 0 to 1.
   */
  public static volume() {
    return 1;
  }

  /**
   * Sets the brightness of the screen.
   * To get the screen brightness, refer to the screenBrightness() function.
   * @param percentage
   * @returns The value range from 0 to 1.
   */
  public static setScreenBrightness(percentage: number) {}
}
