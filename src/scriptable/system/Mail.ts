import Data from "./primitive/Data.js";
import { ImageType } from "./primitive/Image.js";

/**
 * Sends a mail.
 *
 * Presents UI for sending a mail.
 */
export default class Mail {
  /**
   * Recipients of the mail.
   *
   * Array of recipients to send the mail to. Elements in the array should be e-mail
   * addresses.
   *
   * You will have a chance to modify this before the mail is sent.
   */
  public toRecipients: string[] = [];

  /**
   * Recipients to set CC on the mail.
   *
   * Array of recipients to set as CC on the mail. Elements in the array should be e-mail
   * addresses.
   *
   * You will have a chance to modify this before the mail is sent.
   */
  public ccRecipients: string[] = [];

  /**
   * Recipients to set BCC on the mail.
   *
   * Array of recipients to set as BCC on the mail. Elements in the array should be e-mail
   * addresses.
   *
   * You will have a chance to modify this before the mail is sent.
   */
  public bccRecipients: string[] = [];

  /**
   * Subject of the mail.
   *
   * Subject of the mail to send. You will have a chance to modify this before the mail is sent.
   */
  public subject: string = "No  Subject";

  /**
   * Body of the mail.
   *
   * Body of the mail to send. You will have a chance to modify this before the mail is sent.
   */
  public body: string = "";

  /**
   * Whether body is HTML.
   *
   * Set to true if the body of the mail is HTML. Defaults to false.
   */
  public isBodyHTML: boolean = false;

  /**
   * Preferred email address to use in the from field.
   *
   * Sets the preferred email addressed to use when sending the mail. If no account with the preferred
   * email address is set up, the default email address is used.
   */
  public preferredSendingEmailAddress: string = "";

  /**
   * Sends a mail.
   *
   * Presents UI for sending a mail.
   */
  constructor() {}

  /**
   * Sends the email.
   *
   * Presents a screen from which the mail can be sent. The mail will not be
   * sent until you have confirmed it from the presented screen.
   */
  public async send() {}

  /**
   * Adds an image attachment to the mail.
   * @param image Image to add to the mail.
   */
  public addImageAttachment(image: ImageType) {}

  /**
   * Adds a file attachment to the mail.
   * @param filePath Path of file to add to the email.
   */
  public addFileAttachment(filePath: string) {}

  /**
   * Adds a data attachment to the mail.
   *
   * When adding a data attachment to the mail, you are responsible for providing a valid MIME type and filename.
   *
   * It is advised to use `addImageAttachment` and `addFileAttachment` whenever possible.
   * @param data Data representation of file to add to the mail.
   * @param mimeType MIME type of file represented by the data.
   * @param filename Name of the file represented by the data.
   */
  public addDataAttachment(data: Data, mimeType: string, filename: string) {}
}
