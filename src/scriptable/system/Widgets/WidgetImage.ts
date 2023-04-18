import Color from "../primitive/Color.js";
import { ImageType } from "../primitive/Image.js";
import Size from "../primitive/Size.js";

/**
 * Image element shown in widget.
 *
 * An image shown in a widget. You do not create instances of this element directly. Instead you should call `addImage()` on an instance of a `ListWidget`.
 */
export default class WidgetImage {
  /**
   * Image to show in widget.
   */
  public image: ImageType | null = null;

  /**
   * Whether the image is resizable.
   *
   * When set to true, the image can be resized. Defaults to `true`.
   */
  public resizeable: boolean = true;

  /**
   * Size of the image in the widget.
   *
   * Size of the image. When set to null, the image will be shown at its full size. Defaults to `null`.
   */
  public imageSize: Size | null = null;

  /**
   * Opacity when shown in widget.
   *
   * Opacity of the image. This must be a value between 0 and 1. Defaults to 1.
   */
  public imageOpacity: number = 1;

  /**
   * Radius of the corners.
   *
   * Radius of the rounded corners. This property is ignored when `containerRelativeShape` is set to true. Defaults to 0.
   */
  public cornerRadius: number = 0;

  /**
   * Border width.
   *
   * Width of the border around the image. Defaults to 0.
   */
  public borderWidth: number = 0;

  /**
   * Border color.
   *
   * Color of the border around the image. Defaults to black.
   */
  public borderColor: Color = Color.black();

  /**
   * Shape the image relative to its container.
   *
   * When true the corners of the image will be rounded relative to the containing widget.
   *
   * The value of `cornerRadius` is ignored when this is `true`. Defaults to `false`.
   */
  public containerRelativeShape: boolean = false;

  /**
   * Tint color of the image.
   *
   * Changes the color of the image. Set to null to show the original image. Defaults to `null`.
   */
  public tintColor: Color | null = null;

  /**
   * URL to open.
   *
   * The URL will be opened when the text is tapped. This is only supported in medium and large widgets.
   *
   * Small widgets can only have a single tap target, which is specified by the url on the widget.
   */
  public url?: string;

  /**
   * Left aligns the image.
   *
   * Specifies that image should be left aligned. This is the default.
   */
  public leftAlignImage() {}

  /**
   * Center aligns the image.
   *
   * Specifies that image should be center aligned.
   */
  public centerAlignImage() {}

  /**
   * Right aligns the image.
   *
   * Specifies that image should be right aligned.
   */
  public rightAlignImage() {}

  /**
   * Uses fitting content mode.
   *
   * The image will fit the available space. This content mode is the default.
   */
  public applyFittingContentMode() {}

  /**
   * Uses filling content mode.
   *
   * The image will fill the available space.
   */
  public applyFillingContentMode() {}
}
