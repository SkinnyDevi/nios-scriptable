import Data from "./primitive/Data.js";
import { ImageType } from "./primitive/Image.js";

/**
 * Presents a document picker.
 *
 * Use this to present a picker that allows opening a document from Files app or exporting a document to Files app.
 *
 * When opening a document, the picker will prompt you to select one or more documents after which you will get the path for the documents.
 * Use the FileManager to read the content of these files. When exporting a document, the picker will ask you to select a destination to store the document.
 */
export default class DocumentPicker {
  /**
   * Presents a document picker for opening a document from the Files app. It is up to the user to specify which types of files can be opened.
   *
   * Types are specified as UTIs, e.g. "public.plain-text" or "public.image". If you want to open a file of any file type, see the openFile
   * function and if you want to open a folder, see the openFolder function.
   *
   * When fulfilled the returned promise will provide the paths for the selected documents.
   * Use an instance of FileManager to read the contents of the files.
   * @param types Types of files to select. Specified using UTIs. Defaults to all files.
   * @returns Promise that provides paths for the selected documents when fulfilled.
   */
  public static async open(types: string[]) {
    return "";
  }

  /**
   * Opens a file of any file type.
   *
   * Presents a document picker for opening a file from the Files app. The document picker will allow the selection of any file.
   *
   * When fulfilled the returned promise will provide the paths for the selected files.
   * @returns Promise that provides paths for the selected files when fulfilled.
   */
  public static async openFile() {
    return "";
  }

  /**
   * Opens a folder.
   *
   * Presents a document picker for opening a folder from the Files app.
   *
   * When fulfilled the returned promise will provide the paths for the selected files.
   * @returns Promise that provides paths for the selected folders when fulfilled.
   */
  public static async openFolder() {
    return "";
  }

  /**
   * Exports a file to a document.
   *
   * Exports the file to a document with. A picker prompting for a destination to export the document to is presented.
   * @param path Path of the file to export.
   * @returns Promise that provides paths for the selected file destination when fulfilled.s
   */
  public static async export(path: string) {
    return "";
  }

  /**
   * Exports a string to a document.
   *
   * Exports a string to a new file. The name of the file can optionally be specified.
   *
   * A picker prompting for a destination to export the document to is presented.
   * @param content Content of the document to export.
   * @param name Optional name of the document to export.
   * @returns Promise that provides the path of the selected destination when fulfilled.
   */
  public static async exportString(content: string, name: string) {
    return "";
  }

  /**
   * Exports an image.
   *
   * Exports an image to a new file. The name of the file can optionally be specified.
   *
   * A picker prompting for a destination to export the document to is presented.
   * @param image Image to export.
   * @param name Optional name of the image to export.
   * @returns Promise that provides the path of the selected destination when fulfilled.
   */
  public static async exportImage(image: ImageType, name: string) {
    return "";
  }

  /**
   * Exports data.
   *
   * Exports data to a new file. The name of the file can optionally be specified.
   *
   * A picker prompting for a destination to export the document to is presented.
   * @param data Data to export.
   * @param name Optional name of the image to export.
   * @returns Promise that provides the path of the selected destination when fulfilled.
   */
  public static async exportData(data: Data, name: string) {
    return "";
  }
}
