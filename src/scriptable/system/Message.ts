import Data from "./primitive/Data.js";
import { ImageType } from "./primitive/Image.js";

/**
 * Sends a message.
 *
 * Presents UI for sending a message.
 */
export default class Message {
  /**
   * Recipients of the message.
   *
   * Array of recipients to send the message to. Elements in the array should be phone
   * numbers. You will have a chance to modify this before the message is sent.
   */
  public recipients: string[] = [];

  /**
   * Body of the message.
   *
   * Body of the message to send. You will have a chance to modify this before the message is sent.
   */
  public body: string = "";

  /**
   * Constructs a message to be sent either as a text message or an iMessage.
   */
  constructor() {}

  /**
   * Presents a screen from which the message can be sent.
   * The message will not be sent until you have confirmed it from the presented screen.
   */
  public async send() {}

  /**
   * Adds an image attacment to the message.
   * @param image Image to add to the message.
   */
  public addImageAttachment(image: ImageType) {}

  /**
   * Adds a file attachment to the message.
   * @param filePath Path of file to add to the message.
   */
  public addFileAttachment(filePath: string) {}

  /**
   * Adds a data attachment to the message.
   *
   * When adding a data attachment to the message, you are responsible for providing
   * a valid Uniform Type Identifier and filename.
   *
   * It is advised to use `addImageAttachment` and `addFileAttachment` whenever possible.
   * @param data Data representation of file to add to the message.
   * @param uti UTI of file represented by the data.
   * @param filename Name of the file represented by the data.
   */
  public addDataAttachment(data: Data, uti: string, filename: string) {}
}
