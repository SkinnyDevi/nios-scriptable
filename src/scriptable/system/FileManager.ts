import Data from "./primitive/Data.js";
import Image, { ImageType } from "./primitive/Image.js";

/**
 * Read and write files on disk.
 *
 * A FileManager lets you read files stored on the disk and make changes to them. Paths to files are supplied as strings.
 */
export default class FileManager {
  private constructor() {}

  /**
   * Creates a local FileManager.
   *
   * Creates a file manager for operating with files stored locally.
   * @returns Local FileManager.
   */
  public static local() {
    return new FileManager();
  }

  /**
   * Creates an iCLoud FileManager.
   *
   * Creates a file manager for operating with files stored in iCloud. iCloud must be enabled on the device in order to use this.
   * @returns
   */
  public static iCloud() {
    return new FileManager();
  }

  /**
   * Reads the contents of the file specified by the file path as raw data.
   *
   * To read the file as a string see `readString(filePath)` and to read it as an image see `readImage(filePath)`.
   *
   * The function will error if the file does not exist or if it exists in iCloud but has not been download.
   * Use `fileExists(filePath)` to check if a file exists and `downloadFileFromiCloud(filePath)` to download the file.
   *
   * Note that it is always safe to call `downloadFileFromiCloud(filePath)`, even if the file is stored locally on the device.
   * @param filePath Path of the file to read.
   * @returns Contents of the file as a data or null if the file could not be read.
   */
  public read(filePath: string): Data | null {
    return Data.fromFile(filePath);
  }

  /**
   * Read contents of a file as string.
   *
   * The function will error if the file does not exist or if it exists in iCloud but has not been download.
   *
   * Use `fileExists(filePath)` to check if a file exists and `downloadFileFromiCloud(filePath)` to download the file.
   *
   * Note that it is always safe to call `downloadFileFromiCloud(filePath)`, even if the file is stored locally on the device.
   * @param filePath Path of the file to read.
   * @returns Contents of the file as a string or null if the file could not be read.
   */
  public readString(filePath: string) {
    return Data.fromFile(filePath).toRawString();
  }

  /**
   * Read contents of a file as an image.
   *
   * Reads the contents of the file specified by the file path and converts it to an image.
   *
   * The function will error if the file does not exist or if it exists in iCloud but has not been download.
   *
   * Use `fileExists(filePath)` to check if a file exists and `downloadFileFromiCloud(filePath)` to download the file.
   *
   * Note that it is always safe to call `downloadFileFromiCloud(filePath)`, even if the file is stored locally on the device.
   * @param filePath Path of the file to read.
   * @returns Contents of the file as an image or null if the file could not be read.
   */
  public readImage(filePath: string) {
    return Image.fromFile(filePath);
  }

  /**
   * Write data to a file.
   * @param filePath Path of file to write to.
   * @param content Data to write to disk.
   */
  public write(filePath: string, content: Data) {}

  /**
   * Write a string to a file.
   *
   * Writes the content to the specified file path on disk. If the file does not already exist,
   * it will be created. If the file already exists the contents of the file will be overwritten with the new content.
   * @param filePath Path of file to write to.
   * @param content Content to write to disk.
   */
  public writeString(filePath: string, content: string) {}

  /**
   * Write an image to a file.
   *
   * Writes the image to the specified file path on disk. If the file does not already exist, it will be created.
   * If the file already exists the contents of the file will be overwritten with the new content.
   * @param filePath Path of file to write to.
   * @param content Image to write to disk.
   */
  public writeImage(filePath: string, content: ImageType) {}

  /**
   * Removes a file.
   *
   * Removes the file at the specified path. Use with caution. Removed files cannot be restored.
   * @param filePath Path of file to remove.
   */
  public remove(filePath: string) {}

  /**
   * Moves a file.
   *
   * Moves the file from the source path to the destination path. Caution: This operation will replace any existing file at the the destination.
   * @param sourceFilePath Path of the file to move.
   * @param destinationFilePath Path to move the file to.
   */
  public move(sourceFilePath: string, destinationFilePath: string) {}

  /**
   * Copies a file.
   *
   * Copies the file from the source path to the destination path. If a file already exists at the destination file path,
   * the operation will fail and the file will not be copied.
   * @param sourceFilePath Path of the file to move.
   * @param destinationFilePath Path to move the file to.
   */
  public copy(sourceFilePath: string, destinationFilePath: string) {}

  /**
   * Checks if the file exists.
   *
   * Checks if the file exists at the specified file path. Checking this before moving or copying to a destination can be a
   * good idea as those operations will replace any existing file at the destination file path.
   * @param filePath File path to examine.
   * @returns True if the file exists otherwise false.
   */
  public fileExists(filePath: string) {
    return false;
  }

  /**
   * Checks if a path points to a directory.
   * @param path Path to examine.
   * @returns True if the path points to a directory otherwise false.
   */
  public isDirectory(path: string) {
    return false;
  }

  /**
   * Creates a directory at the specified path.
   *
   * You can optionally create all intermediate directories.
   * @param path Path of directory to create.
   * @param intermediateDirectories Whether to create all intermediate directories. Defaults to false.
   */
  public createDirectory(
    path: string,
    intermediateDirectories: boolean = false
  ) {}

  /**
   * Path of temporary directory.
   *
   * Used to retrieve the path of a temporary directory on disk.
   * Data persisted in a temporary directory will generally live shorter than data persisted in the cache directory.
   *
   * The operating system may at any time delete files stored in this directory and therefore you should not rely on
   * it for long time storage. If you need long time storage, see `documentsDirectory()` or `libraryDirectory()`.
   *
   * This directory is not shared between the app, the action extension and Siri.
   * @returns Path to temporary directory.
   */
  public temporaryDirectory() {
    return "";
  }

  /**
   * Path of cache directory.
   *
   * Used to retrieve the path of a cache directory on disk. The operating system may at any time delete files stored in
   * this directory and therefore you should not rely on it for long time storage.
   *
   * Data persisted in the cache directory will generally live longer than data persisted in a temporary directory.
   *
   * If you need long time storage, see `documentsDirectory()` or `libraryDirectory()`. This directory is not shared between the app,
   * the action extension and Siri.
   * @returns Path to cache directory.
   */
  public cacheDirectory() {
    return "";
  }

  /**
   * Path of documents directory.
   *
   * Used to retrieve the path to the documents directory. Your scripts are stored in this directory. If you have iCloud enabled,
   * your scripts will be stored in the documents directory in iCloud otherwise they will be stored in the local documents directory.
   *
   * The directory can be used for long time storage. Documents stored in this directory can be accessed using the Files app.
   *
   * Files stored in the local documents directory will not appear in the Files app.
   * @returns Path to documents directory.
   */
  public documentsDirectory() {
    return "";
  }

  /**
   * Path of library directory.
   *
   * Used to retrieve the path to the library directory. The directory can be used for long time storage. Documents stored
   * in this directory cannot be accessed using the Files app.
   * @returns Path to library directory.
   */
  public libraryDirectory() {
    return "";
  }

  /**
   * Join two path components.
   *
   * Joins two paths to created one path. For example to join the path to a directory with the name of a file.
   * This is the suggested approach for creating new file paths passed to the read and write functions of a FileManager.
   * @param lhsPath Left-hand side part of the new path.
   * @param rhsPath Right-hand side part of the new path.
   * @returns Path with the two path components joined.
   */
  public joinPath(lhsPath: string, rhsPath: string) {
    return "";
  }

  /**
   * Reads all tags from a file.
   *
   * The tags are read from the file at the specified path. Tags can either be read,
   * added and removed using the Files app by using the APIs provided by a `FileManager`.
   *
   * The function will error if the file does not exist or if it exists in iCloud but has not been download.
   * Use `fileExists(filePath)` to check if a file exists and `downloadFileFromiCloud(filePath)` to download the file.
   *
   * Note that it is always safe to call `downloadFileFromiCloud(filePath)`, even if the file is stored locally on the device.
   * @param filePath Path of file to read tags from.
   * @returns Read tags.
   */
  public allTags(filePath: string) {
    return [""];
  }

  /**
   * Adds a tag to a file.
   *
   * A tag can only be added to a file once. It is not possible to specify a color for the tag. You can create the
   * tags using the Files app to specify the color and then add them to files afterwards using the `FileManager` API.
   *
   * The function will error if the file does not exist or if it exists in iCloud but has not been download.
   * Use `fileExists(filePath)` to check if a file exists and `downloadFileFromiCloud(filePath)` to download the file.
   *
   * Note that it is always safe to call `downloadFileFromiCloud(filePath)`, even if the file is stored locally on the device.
   * @param filePath Path of file to add the tag to.
   * @param tag Tag to add. This can be an existing tag or a new tag.
   */
  public addTag(filePath: string, tag: string) {}

  /**
   * Removes a tag from a file.
   *
   * The function will error if the file does not exist or if it exists in iCloud but has not been download.
   * Use `fileExists(filePath)` to check if a file exists and `downloadFileFromiCloud(filePath)` to download the file.
   *
   * Note that it is always safe to call `downloadFileFromiCloud(filePath)`, even if the file is stored locally on the device.
   * @param filePath Path of file to remove the tag from.
   * @param tag Tag to remove.
   */
  public removeTag(filePath: string, tag: string) {}

  /**
   * Extended attributes are metadata that can be stored on a file. Note that extended attributes are not synced with iCloud.
   *
   * The function will return null if the attribute does not exist.
   *
   * The function will error if the file does not exist or if it exists in iCloud but has not been download.
   * Use `fileExists(filePath)` to check if a file exists and `downloadFileFromiCloud(filePath)` to download the file.
   *
   * Note that it is always safe to call `downloadFileFromiCloud(filePath)`, even if the file is stored locally on the device.
   * @param filePath Path of file to read extended attribute from.
   * @param name Name of the extended attribute to read.
   * @returns Value of the extended attribute.
   */
  public readExtendedAttribute(filePath: string, name: string) {
    return "";
  }

  /**
   * Writes an extended attribute to a file.
   *
   * Extended attributes are metadata that can be stored on a file. Note that extended attributes are not synced with iCloud.
   *
   * The function will error if the file does not exist or if it exists in iCloud but has not been download.
   * Use `fileExists(filePath)` to check if a file exists and `downloadFileFromiCloud(filePath)` to download the file.
   *
   * Note that it is always safe to call `downloadFileFromiCloud(filePath)`, even if the file is stored locally on the device.
   * @param filePath Path of file to add an extended attribute to.
   * @param value Value of the extended attribute.
   * @param name Name of the extended attribute. This is used to retrieve the value at a later point.
   */
  public writeExtendedAttribute(
    filePath: string,
    value: string,
    name: string
  ) {}

  /**
   * Removes an extended attribute from a file.
   *
   * Extended attributes are metadata that can be stored on a file. Note that extended attributes are not synced with iCloud.
   *
   * The function will error if the file does not exist or if it exists in iCloud but has not been download.
   * Use `fileExists(filePath)` to check if a file exists and `downloadFileFromiCloud(filePath)` to download the file.
   *
   * Note that it is always safe to call `downloadFileFromiCloud(filePath)`, even if the file is stored locally on the device.
   * @param filePath Path of file to remove an extended attribute to.
   * @param name Name of the extended attribute.
   */
  public removeExtendedAttribute(filePath: string, name: string) {}

  /**
   * Reads all extended attributes on a file.
   *
   * Extended attributes are metadata that can be stored on a file. Note that extended attributes are not synced with iCloud.
   * @param filePath Path of file to read extended attributes from.
   * @returns An array of all extended attributes.
   */
  public allExtendedAttributes(filePath: string) {
    return [""];
  }

  /**
   * Gets the UTI of the specified file.
   *
   * The Uniform Type Identifier is a string that identifies the type of file.
   * @param filePath Path of file to get UTI of.
   * @returns The UTI of the file.
   */
  public getUTI(filePath: string) {
    return "";
  }

  /**
   * Lists content of directory.
   *
   * Lists all the contents in the specified directory. The returned array contains filenames to all files and directories in the specified directory.
   * @param directoryPath Path to directory.
   * @returns Names of all the files and directories in the specified directory.
   */
  public listContents(directoryPath: string) {
    return [""];
  }

  /**
   * Get name of a file.
   *
   * Takes a file path and returns the name of the file. Also supports getting the name of a directory.
   * The returned file name optionally includes the extension of the file.
   * @param filePath Path of file to get name of.
   * @param includeFileExtension Whether or not the file extension should be included. Defaults to false.
   * @returns Name of the file.
   */
  public fileName(filePath: string, includeFileExtension: boolean = false) {
    return "";
  }

  /**
   * Get extension of a file.
   *
   * Takes a file path and returns the extension of the file, e.g. ".jpg" or ".js". Returns en empty string for directories.
   * @param filePath Path of file to get extension from.
   * @returns Extension of the file.
   */
  public fileExtension(filePath: string) {
    return "";
  }

  /**
   * Get path to a bookmarked file or folder.
   *
   * Gets the path to a bookmarked file or filder. Use file bookmarks to access files and folders outside Scriptables documents directory.
   *
   * You can edit your file bookmarks from Scriptables settings.
   *
   * The function will throw an error if the bookmark doesn't exist.
   *
   * Please beware that bookmarks created from Scriptables settings only can be used when running a script in the app and not
   * from the Share Sheet, Siri and Shortcuts. If you wish to use a bookmark from Siri or the Shortcuts app,
   * the bookmark must be created using Scriptables "Create File Bookmark" shortcut action using the Shortcuts app.
   * @param name Name of bookmark to create path for.
   * @returns Path to the bookmarked file or folder.
   */
  public bookmarkedPath(name: string) {
    return "";
  }

  /**
   * Check if a bookmark exists.
   *
   * Checks if a file bookmark exists with the specified name.
   *
   * You can edit your file bookmarks from Scriptables settings.
   *
   * Please beware that bookmarks created from Scriptables settings only can be used when running a script in the app and not from
   * the Share Sheet, Siri and Shortcuts. If you wish to use a bookmark from Siri or the Shortcuts app, the bookmark must be created using Scriptables "Create File Bookmark" shortcut action using the Shortcuts app.
   * @param name Name of bookmark.
   * @returns True of a bookmark exists for the specified name, otherwise false.
   */
  public bookmarkExists(name: string) {
    return false;
  }

  /**
   * Download file from iCloud if necessary.
   *
   * Downloads the file from iCloud if it have not already been downloaded. If you pass in a path to a file that is
   * not stored in iCloud, the returned promise will be resolved immediately making it safe to pass in any file path.
   * @param filePath Path of file to download from iCloud.
   */
  public async downloadFileFromiCloud(filePath: string) {}

  /**
   * Checks if a file is stored in iCloud.
   *
   * Checks if a file is stored in iCloud or locally on the device. The function returns false if the file does not exist.
   * Check if a file exists using `fileExists(filePath)`
   * @param filePath Path of file.
   * @returns True if the file is stored in iCloud otherwise false.
   */
  public isFileStoredIniCloud(filePath: string) {
    return false;
  }

  /**
   * Checks if a file have been downloaded.
   *
   * If a file is stored in iCloud and it has not been downloaded, this function returns false.
   * In that case, the file can be downloaded using `downloadFileFromiCloud(filePath)`
   *
   * If the file is not stored in iCloud but rather locally on the device, this function returns true.
   *
   * The function returns false if the file does not exist. Check if a file exists using `fileExists(filePath)`
   * @param filePath Path of file.
   * @returns True if the file have been downloaded otherwise false.
   */
  public isFileDownloaded(filePath: string) {
    return false;
  }

  /**
   * Reads the creation date of a file.
   *
   * The returned value will be null if the creation date cannot be read.
   * @param filePath Path of file.
   * @returns The date the file was created.
   */
  public creationDate(filePath: string): Date | null {
    return new Date(Date.now());
  }

  /**
   * Reads the modification date of a file.
   *
   * The returned value will be null if the modification date cannot be read.
   * @param filePath Path of file.
   * @returns The date the file was last modified.
   */
  public modificationDate(filePath: string): Date | null {
    return new Date(Date.now());
  }

  /**
   * Size of the file in kilobytes.
   *
   * The returned value will be null if the file size cannot be read.
   * @param filePath Path of file.
   * @returns The file size measured in kilobytes.
   */
  public fileSize(filePath: string) {
    return 0;
  }

  /**
   * Reads all file bookmarks created in settings.
   *
   * File bookmarks are used to bookmark a file or a folder and read or write to it later. File bookmarks are created from Scriptables settings.
   *
   * This function returns all file bookmarks as an array of objects that take the following the example.
   *
   * The `source` can either be `host` for file bookmarks that can be used in the app or `siri_shortcuts` for file bookmarks that can be used in Siri and Shortcuts.
   * @example
   * {
   *   "name": "My Bookmark",
   *   "source": "host"
   * }
   */
  public allFileBookmarks(): {
    name: string;
    source: "host" | "siri_shortcuts";
  }[] {
    return [{ name: "", source: "host" }];
  }
}
