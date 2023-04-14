/**
 * Event driven XML parser.
 *
 * The XMLParser is an event driven XML parser that calls provided callback functions when it
 * encounters elements to be parsed. It does not iself do any parsing.
 */
export default class XMLParser {
  /**
   * XML string to be parsed.
   */
  public string: string;

  /**
   * Function called when the parser begins parsing a document.
   */
  public didStartDocument?: () => void;

  /**
   * Function called when the parser ends parsing a document.
   *
   * When the parser calls the function, it has successfully completed parsing the document.
   */
  public didEndDocument?: () => void;

  /**
   * Function called when starting to parse an element.
   *
   * Called by the parser when it encounters a start tag for an element. The function takes the
   * element name as a parameter as well as a key value pair containing all the attributes associated with the element.
   *
   * Use this function to update your state and prepare for receiving the characters of the element.
   *
   * After this function is called, the parser will call the foundCharacters callback function with all or parts of the characters of the element.
   */
  public didStartElement?: (
    element: string,
    object: { [key: string]: string }
  ) => void;

  /**
   * Function called when ended parsing an element.
   *
   * Called by the parser when it encounters an end tag for an element. The function takes the element name as a parameter.
   */
  public didEndElement?: (element: string) => void;

  /**
   * Function called when the parser finds characters of an element.
   *
   * The parser calls this function with a string whenever it finds characters for the current element. This function may be called several times for a single element.
   */
  public foundCharacters?: (characters: string) => void;

  /**
   * Function called when the parser encounters an error.
   *
   * The parser will call this function when it encounters a fatal error preventing it from continuing to parse. When the function is called the parsing is stopped.
   */
  public parserErrorOcurred?: (error: object) => void;

  /**
   * Constructs an event driven XML parser. It does not do any parsing on its own and therefore the callback
   * functions must be set before starting to parse.
   * @param string
   */
  constructor(string: string) {
    this.string = string;
  }

  /**
   * Starts parsing.
   *
   * Before calling this function you should ensure that the parser is correctly configured, i.e. the necessary callback functions should be set.
   * @returns Whether parsing was successfully started.
   */
  public parse() {
    return true;
  }
}
