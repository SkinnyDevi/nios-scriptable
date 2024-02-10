import { ImageType, Size } from "../..";

/**
 * Provides access to your photo library.
 *
 * In order to read from your photo library, you must grant the app access to your photo library.
 * The first time you use the APIs, the app will prompt for access but if you deny the request,
 * all API calls will fail. In that case you must enable access to the photo library from the
 * system settings.
 */
export default class Photos {
  /**
   * Opens the camera for taking an image.
   *
   * Use this for taking a new image using the camera.
   * @returns Promise that provides the captured image when fulfilled.
   */
  public static fromCamera(): Promise<ImageType> {
    return new Promise((resolve) => resolve({ size: new Size(0, 0) }));
  }

  /**
   * Presents the photo library for picking an image.
   *
   * Use this for picking an image from the photo library.
   * @returns Promise that provides the selected image when fulfilled.
   */
  public static fromLibrary(): Promise<ImageType> {
    return new Promise((resolve) => resolve({ size: new Size(0, 0) }));
  }

  /**
   * Get latest photo.
   *
   * Reads the latest photo from your photo library. If no photo is available, the promise will be rejected.
   * @returns Promise that provides the photo when fulfilled.
   */
  public static latestPhoto(): Promise<ImageType> {
    return new Promise((resolve) => resolve({ size: new Size(0, 0) }));
  }

  /**
   * Get latest photos.
   *
   * Reads the latest photos from your photo library. If no photo is available, the promise will be rejected.
   * @param count Number of photos to fetch.
   * @returns Promise that provides the photos when fulfilled.
   */
  public static latestPhotos(count: number): Promise<ImageType[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Get latest screenshot.
   *
   * Reads the latest screenshot from your photo library. If no screenshot is available, the promise will be rejected.
   * @returns Promise that provides the screenshot when fulfilled.
   */
  public static latestScreenshot(): Promise<ImageType> {
    return new Promise((resolve) => resolve({ size: new Size(0, 0) }));
  }

  /**
   * Get latest screenshots.
   *
   * Reads the latest screenshots from your photo library. If no screenshot is available, the promise will be rejected.
   * @param count Number of screenshots to fetch.
   * @returns Promise that provides the screenshots when fulfilled.
   */
  public static latestScreenshots(count: number): Promise<ImageType[]> {
    return new Promise((resolve) => resolve([]));
  }

  /**
   * Removes latest photo.
   *
   * Before removing the photo, an alert is shown prompting you to confirm the removal.
   */
  public static removeLatestPhoto() {}

  /**
   * Removes latest photos.
   *
   * Before removing the photos, an alert is shown prompting you to confirm the removal.
   * @param count Number of photos to remove.
   */
  public static removeLatestPhotos(count: number) {}

  /**
   * Removes latest screenshot.
   *
   * Before removing the screenshot, an alert is shown prompting you to confirm the removal.
   */
  public static removeLatestScreenshot() {}

  /**
   * Removes latest screenshots.
   *
   * Before removing the screenshots, an alert is shown prompting you to confirm the removal.
   * @param count Number of photos to remove.
   */
  public static removeLatestScreenshots(count: number) {}

  /**
   * Save an image.
   *
   * Saves the image to the photo library.
   * @param image The iamge to save.
   */
  public static save(image: ImageType) {}
}
