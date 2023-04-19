/**
 * Fetches your location.
 *
 * Uses GPS, WiFi and cellular hardware to determine your location. The first time you use the API,
 * the application will prompt you to authorize access to your location.
 *
 * If you do not authorize access, the application cannot fetch your location. You can
 * change this later from the system settings.
 */
export default class Location {
  private constructor() {}

  /**
   * Fetches your location.
   *
   * Your location is fetched using GPS, WiFi and cellular hardware. The object carried by the promise
   * includes the latitude, longitude and altitude as well as the horizontal and vertical accuracy
   * measured in meters.
   * @returns Promise providing an object containing information about your location.
   */
  public static async current(): Promise<{ [key: string]: number }> {
    return {};
  }

  /**
   * Uses best accuracy. This is default.
   *
   * Set this when you want to achieve the best possible accuracy when retrieving
   * your location. This is the default accuracy.
   */
  public static setAccuracyToBest() {}

  /**
   * Sets accuracy to within ten meters.
   */
  public static setAccuracyToTenMeters() {}

  /**
   * Sets accuracy to within hundred meters.
   */
  public static setAccuracyToHundredMeters() {}

  /**
   * Sets accuracy to within one kilometer.
   */
  public static setAccuracyToKilometer() {}

  /**
   * Sets accuracy to within three kilometers.
   */
  public static setAccuracyToThreeKilometers() {}

  /**
   * Performs reverse-geocoding for a location.
   *
   * A reverse-geocoding request fetches information about the current location. The data is
   * delivered by Apple's geocoding service.
   * @param latitude Latitude of coordinate to fetch information about.
   * @param longitude Longitude of coordinate to fetch information about.
   * @param locale Optional. Preferred locale to fetch information in.
   * Uses the default locale of the device if null.
   * @returns Promise that carries all available information about the address when resolved.
   */
  public static reverseGeocode(
    latitude: number,
    longitude: number,
    locale: string
  ): { [key: string]: any }[] {
    return [{}];
  }
}
