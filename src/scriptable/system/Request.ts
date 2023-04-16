import Data from "./primitive/Data.js";
import Image, { ImageType } from "./primitive/Image.js";

export type RequestMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
/**
 * Performs HTTP requests.
 *
 * Performs a URL request and returns the response in an appropriate format.
 */
export default class Request {
  /**
   * URL to send request to.
   */
  public url: string;

  /**
   * HTTP method used for the request.
   *
   * Specifies the HTTP method to use when sending the request.
   *
   * The default is to send the request using the GET HTTP method.
   */
  public method: RequestMethods = "GET";

  /**
   * HTTP headers to send with the request.
   *
   * Key value pairs where the key is the name of an HTTP header and the value will be sent as the value for the HTTP header.
   */
  public headers: { [key: string]: string } = {};

  /**
   * Body to send with the request.
   *
   * The body will be send along the request. While this property can be any value, currently only strings and Data is supported.
   *
   * Be aware that this property is ignored if you convert the request to a multipart
   * request using `addParameterToMultipart`, `addFileToMultipart` or `addFileDataToMultipart`.
   */
  public body: any;

  /**
   * Timeout interval of the request.
   *
   * If a request remains idle for longer than the timeout interval, the request is considered timed out.
   *
   * The timeout interval is measured in seconds and defaults to 60 seconds.
   */
  public timeoutInterval: number = 60;

  /**
   * Function called upon redirect.
   *
   * The function determines how redirects should be handled. By default redirects are allowed.
   *
   * When invoked the function is supplied with the request that we're about to redirect to. The function can return the request to continue
   * redirecting or it can return another request to redirect to. Returning null will stop the redirect.
   *
   * Note that onRedirect will only be invoked on the initial request. Consecutive redirects should be handled on the initial request.
   */
  public onRedirect?: (request: Request) => Request;

  /**
   * Response of the request.
   * @readonly
   *
   * The response is not populated until the request has been completed. The response is an object that looks like the following example.
   * @example
   * {
   * "url": "https://example.com/",
   * "statusCode": 200
   * "mimeType": "application/json",
   * "textEncodingName": "utf-8",
   * "headers": {
   *   "Content-Type": "application/json;charset=utf-8",
   *   "Content-Length": "17671"
   * },
   * "cookies": [{
   *   "path": "/",
   *   "httpOnly": true,
   *   "domain": "www.example.com",
   *   "sessionOnly": true,
   *   "name": "JSESSIONID",
   *   "value": "7616271F4878CFD05182D20C45F4CEB3"
   * }]
   * }
   */
  public readonly response: { [key: string]: any } = {};

  /**
   * Allow the request even if it is deemed insecure.
   *
   * By default Scriptable will attempt to reject requests that are deemed insecure.
   *
   * As an example, Scriptable will reject communicating with a server that has an invalid certificate. Such servers might be
   * malicious and may put confidentional information at risk. By enabling this setting, those requests will be allowed.
   *
   * Enable this setting at your own risk.
   */
  public allowInsecureRequest: boolean = false;

  /**
   * Constructs a new request that will be sent to the provided URL.
   *
   * The request is not sent until an appropriate load method is called, e.g. loadImage for downloading and interpreting the response as an image.
   * @param url URL to send request to.
   */
  constructor(url: string) {
    this.url = url;
  }

  /**
   * Call to send the configured request to the specified URL. The raw response is provided when the returned promise is fulfilled.
   * @returns Promise that provides the response as data when fulfilled.
   */
  public async load() {
    return Data.fromFile("");
  }

  /**
   * Sends request and parses response as a string.
   *
   * Call to send the configured request to the specified URL. The response is parsed to a string and provided when the returned promise is fulfilled.
   * @returns Promise that provides the response as a string when fulfilled.
   */
  public async loadString() {
    return "";
  }

  /**
   * Sends request and parses response as JSON.
   *
   * Call to send the configured request to the specified URL. The response is expected to be a valid JSON string and is parsed into an object.
   * @returns Promise that provides the response as an object when fulfilled.
   */
  public async loadJSON(): Promise<Object> {
    return {};
  }

  /**
   * Sends request and parses response as an image.
   *
   * Call to send the configured request to the specified URL. The response is expected to be an image.
   * @returns Promise that provides the response as an image.
   */
  public async loadImage() {
    return Image.fromFile("")!;
  }

  /**
   * Converts the request to a multipart request and adds a parameter with the specified name and value. Be aware that the `body` property on
   * the request is ignored for multipart requests as parameters and files added to the request constitutes the body.
   *
   * Calling this function will make the request a multipart request. When the request is send, the content type will automatically be set to "multipart/form-data".
   * @param name Name of the parameter.
   * @param value Value of the parameter.
   */
  public addParameterToMultipart(name: string, value: string) {}

  /**
   * Converts the request to a multipart request and adds the file to the request. Be aware that the `body` property on the request is
   * ignored for multipart requests as parameters and files added to the request constitutes the body.
   *
   * Calling this function will make the request a multipart request. When the request is send, the content type will automatically be set to "multipart/form-data".
   * @param data File data to add.
   * @param mimeType MIME type of the file to add.
   * @param name Name of the parameter which holds the file.
   * @param filename Name of the file.
   */
  public addFileDataToMultipart(
    data: Data,
    mimeType: string,
    name: string,
    filename: string
  ) {}

  /**
   * Converts the request to a multipart request and adds the file to the request. The function will automatically determine the MIME type
   * of the file as well as the filename.
   *
   * Be aware that the `body` property on the request is ignored for multipart requests as parameters and files added to the request constitutes the body.
   *
   * Calling this function will make the request a multipart request. When the request is send, the content type will automatically be set to "multipart/form-data".
   * @param filepath Path of the file to add.
   * @param name Name of the parameter which holds the file.
   * @param filename Optional name of the uploaded file.
   */
  public addFileToMultipart(filepath: string, name: string, filename: string) {}

  /**
   * Converts the request to a multipart request and adds the image to the request. The function will automatically determine the MIME type
   * of the file.
   *
   * Be aware that the `body` property on the request is ignored for multipart requests as parameters and files added to the request constitutes the body.
   *
   * Calling this function will make the request a multipart request. When the request is send, the content type will automatically be set to "multipart/form-data".
   * @param image Image to add.
   * @param name Name of the parameter which holds the file.
   * @param filename Optional name of the uploaded file.
   */
  public addImageToMultipart(
    image: ImageType,
    name: string,
    filename: string
  ) {}
}
