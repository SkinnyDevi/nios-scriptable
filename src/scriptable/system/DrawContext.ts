import { Color, Font, Image, ImageType, Path, Point, Rect, Size } from "../..";

/**
 * Context for drawing images.
 *
 * An instance of DrawContext is a canvas on which you can draw an image using shapes,
 * texts and other images. You must specify the size of your canvas by setting the size property.
 * At any point after beginning your drawing and before ending your drawing can you call `getImage()`
 * to get an image object of your drawing. When you are done drawing your image, you should call `endDrawing()`.
 */
export default class DrawContext {
  /**
   * Determines whether the context is opaque.
   *
   * When enabled your image will be rendered opaque. Default is true.
   */
  public opaque = true;

  /**
   * Enable to respect the scale of the screen.
   *
   * Devices have a screen scale that is used to convert between the logical coordinate space and the
   * device coordinate space. For example, retina screens have a screen scale of 2 or 3 meaning that one
   * point in the logical coordinate space is represented by four or nine pixels. Respecting the screen
   * scale will multiply the specified size of the canvas by the screen scale.
   * For example a canvas of size 200 by 200 will be 600 by 600 when the image is rendered on
   * a retina screen with a screen scale of 3.
   *
   * When respecting the screen scale is disabled, you may experience that your images looks
   * blurry because essentially the size you have specified will be stretched when rendered on the screen.
   * Default is false.
   */
  public respectScreenScale = false;

  /**
   * Size of the canvas.
   *
   * Specifies the size of the canvas on which you are drawing. The image returned by `getImage()`
   * will have this exact size, except if `respectScreenScale` is true.
   */
  public size: Size = new Size(0, 0);

  /**
   * Adds a path to the context.
   *
   * After adding a path to the context, the path can be stroked or filled by calling `strokePath` and `fillPath`.
   * Note that only the path that was added latest will be affected by calls to `strokePath` and `fillPath`.
   * @param path Path to add to the context.
   */
  public addPath(path: Path) {}

  /**
   * Draws an image at the specified point.
   *
   * Draws the image at the point. The top-left corner of the image will be drawn at the specified point.
   * @param image Image to draw.
   * @param point Point at which to draw top-left corner of the image.
   */
  public drawImageAtPoint(image: ImageType, point: Point) {}

  /**
   * Draws an image in the specified rect.
   *
   * Draws the image in the rectangle. The image will be scaled to fit within the rectangle.
   * @param image Image to draw.
   * @param point Rectangle to draw the image in.
   */
  public drawImageInRect(image: ImageType, rect: Rect) {}

  /**
   * Draws text at a position.
   *
   * Call this to draw a text string to the context. The top-left of the text will be drawn at the specified position.
   * @param text Text to draw.
   * @param pos Position to draw the top-left of the text.
   */
  public drawText(text: string, pos: Point) {}

  /**
   * Draws text in a rectangle.
   *
   * Call this to draw a text string in a rectangle. Specify how the text should be aligned within the rectangle by
   * calling `setTextAlignedLeft`, `setTextAlignedCenter` or `setTextAlignedRight` before drawing the text.
   * @param text Text to draw.
   * @param rect Rectangle to draw text in.
   */
  public drawTextInRect(text: string, rect: Rect) {}

  /**
   * Fills a rectangle.
   *
   * Fills the rectangle with the color set when calling `setFillColor`.
   * @param rect Rectangle to fill.
   */
  public fill(rect: Rect) {}

  /**
   * Fills an ellipse.
   *
   * Fills the ellipse that fits within the supplied rectangle with the color set when calling `setFillColor`.
   * @param rect Rectangle incapsulating the ellipse to fill.
   */
  public fillEllipse(rect: Rect) {}

  /**
   * Fills the path that was added the latest.
   *
   * The path that was latest added to the context is filled with the color set using `setFillColor`.
   */
  public fillPath() {}

  /**
   * Fills a rectangle.
   *
   * Fills the rectangle with the color set when calling setFillColor.
   * @param rect Rectangle to fill.
   */
  public fillRect(rect: Rect) {}

  /**
   * Retrieves the image.
   *
   * Call this to retrieve the image you have drawn to the context. Note that this should be called before calling `endDrawing()`.
   * @returns The image drawn to the context.
   */
  public getImage(): ImageType {
    return { size: new Size(0, 0) };
  }

  /**
   * Sets the fill color.
   *
   * Sets the fill color to be used when performing a fill operation. Any fill operation performed
   * afterwards will fill with the specified color until another call to `setFillColor` is made.
   * @param color Color to set for filling.
   */
  public setFillColor(color: Color) {}

  /**
   * Sets the font to use when drawing text.
   *
   * Sets the font to be used when drawing texts to the context.
   * @param font Font to use when drawing text.
   */
  public setFont(font: Font) {}

  /**
   * Sets the line width for stroking.
   *
   * Sets the line width to be used when performing a stroke operation.
   * @param width Line width to use for stroking.
   */
  public setLineWidth(width: number) {}

  /**
   * Sets the stroke color.
   *
   * Sets the stroke color to be used when performing a stroke operation. Any stroke operation
   * performed afterwards will stroke with the specified color until another
   * call to `setStrokeColor` is made.
   * @param color Color to set for stroking.
   */
  public setStrokeColor(color: Color) {}

  /**
   * Specifies that texts should be center aligned.
   *
   * Sets text alignment to center. Texts drawn after calling this will be center aligned inside the provided rectangle.
   */
  public setTextAlignedCenter() {}

  /**
   * Specifies that texts should be left aligned.
   *
   * Sets text alignment to left. Texts drawn after calling this will be center aligned inside the provided rectangle.
   */
  public setTextAlignedLeft() {}

  /**
   * Specifies that texts should be right aligned.
   *
   * Sets text alignment to right. Texts drawn after calling this will be center aligned inside the provided rectangle.
   */
  public setTextAlignedRight() {}

  /**
   * Sets the text color used when drawing text.
   *
   * Sets the text color to be used when drawing text strings to the context.
   * @param color Color to use when drawing text.
   */
  public setTextColor(color: Color) {}

  /**
   * Strokes a rectangle.
   *
   * Draws a line around the rectangle using the color set when calling `setStrokeColor`.
   * The line will have the width set when calling `setLineWidth`.
   * @param rect Rectangle to stroke.
   */
  public stroke(rect: Rect) {}

  /**
   * Strokes an ellipse.
   *
   * Draws a line around the ellipse that fits within the supplied rectangle.
   * The line will have the color set when calling `setStrokeColor` and the width set when calling `setLineWidth`.
   * @param rect Rectangle incapsulating the ellipse to stroke.
   */
  public strokeEllipse(rect: Rect) {}

  /**
   * Strokes the path that was added the latest.
   *
   * The path that was added the latest to the context is stroked with the color set using `setStrokeColor` and the line width set using `setLineWidth`.
   */
  public strokePath() {}

  /**
   * Strokes a rectangle
   *
   * Draws a line around the rectangle using the color set when calling `setStrokeColor`. The line will have the width set when calling `setLineWidth`.
   * @param rect Rectangle to stroke.
   */
  public strokeRect(rect: Rect) {}
}
