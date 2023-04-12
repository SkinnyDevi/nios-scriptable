import { ImageType } from "./Image.ts";
import { Buffer } from "buffer";

/**
 * Raw data representation.
 *
 * Raw data representation of strings, files and images.
 */
export default class Data {
  private data: any;

  private constructor(data: any) {
    this.data = data;
  }

  /**
   * Creates data from string.
   *
   * The provided string is assumed to be UTF8 encoded. If the string is not UTF8 encoded, the function will return null.
   * @param string Data to be added.
   * @returns Data or null if invalid.
   */
  public static fromString(string: string): Data | null {
    return new Data(string);
  }

  /**
   * Reads data from file path.
   *
   * Reads the raw data of the file at the specified file path.
   * @param filePath Path to file.
   * @returns Data of file.
   */
  public static fromFile(filePath: string): Data {
    return new Data("load file data.txt");
  }

  /**
   * Creates data from base64 encoded string.
   *
   * The supplied string must be base64 encoded otherwise the function will return null.
   * @param base64string Data to be added.
   * @returns Data or null if invalid.
   */
  public static fromBase64String(base64string: string): Data | null {
    return new Data(Buffer.from(base64string, "base64").toString("binary"));
  }

  /**
   * Creates data from JPEG image.
   *
   * @param base64string Data to be added.
   * @returns Data or null if invalid.
   */
  public static fromJPEG(image: ImageType): Data {
    return new Data(image);
  }

  /**
   * Creates data from PNG image.
   *
   * @param base64string Data to be added.
   * @returns Data or null if invalid.
   */
  public static fromPNG(image: ImageType): Data {
    return new Data(image);
  }

  /**
   * Creates a string from the data.
   *
   * The data is assumed to represent a UTF8 encoded string. If the string is not UTF8 encoded string, the function will return null.
   * @returns Raw string.
   */
  public toRawString(): string | null {
    return this.data.toString();
  }

  /**
   * Creates a base64 encoded string.
   *
   * The data is assumed to represent a UTF8 encoded string. If the string is not UTF8 encoded string, the function will return null.
   * @returns Base64 string.
   */
  public toBase64String(): string | null {
    return Buffer.from(this.data, "binary").toString("base64");
  }

  /**
   * Gets bytes from data.
   *
   * @returns Raw string.
   */
  public getBytes() {
    const utf8encoder = new TextEncoder();

    return Array.from(utf8encoder.encode(this.data));
  }
}
