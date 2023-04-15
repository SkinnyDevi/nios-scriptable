import Color from "./primitive/Color.js";
import Font from "./primitive/Font.js";

/**
 * Text field in an alert.
 *
 * Use the text field to customize the appearance of the text entered into it.
 *
 * You do not create create instances of this. Instead you should add a text field to an Alert using the `addTextField()` and `addSecureTextField()` on the alert.
 */
export default class TextField {
  /**
   * Text in the text field.
   */
  public text = "";

  /**
   * Placeholder shown in the text field while it is empty.
   */
  public placeholder = "";

  /**
   * Hides the text that is entered when set to true.
   *
   * The default value is false.
   */
  public isSecure = false;

  /**
   * Color of the text.
   */
  public textColor: Color = Color.white();

  /**
   * Font of the text.
   */
  public font = new Font("ArialMT", 15);

  /**
   * Use the default keyboard for entering text.
   */
  public setDefaultKeyboard() {}

  /**
   * Use a keyboard that prominently features the numbers 0 through 9.
   */
  public setNumberPadKeyboard() {}

  /**
   * Use a numeric keyboard with a decimal point for entering text.
   */
  public setDecimalPadKeyboard() {}

  /**
   * Use a numeric keyboard with punctuation for entering text.
   */
  public setNumbersAndPunctuationKeyboard() {}

  /**
   * Use a keyboard that prominently feaetures the numbers 0 through 9 and the * and # characters.
   */
  public setEmailAddressKeyboard() {}

  /**
   * Use a keyboard that prominently faetures the period and slash characters and the ".com" string.
   */
  public setURLKeyboard() {}

  /**
   * Use a keyboard that prominently features the @ and # characters.
   */
  public setTwitterKeyboard() {}

  /**
   * Left aligns the text.
   */
  public leftAlignText() {}

  /**
   * Center aligns the text.
   */
  public centerAlignText() {}

  /**
   * Right aligns the text.
   */
  public rightAlignText() {}
}
