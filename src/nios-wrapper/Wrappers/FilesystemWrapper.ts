/**
 * Creates a fake filesystem to interact with.
 */
export default class FilesystemWrapper {
  /**
   * Root folder of the file system.
   */
  public readonly root: FakeDirectory;

  private constructor(root: FakeDirectory) {
    this.root = root;
  }

  /**
   * Creates a filesystem with predetermined directories passed from input as a path string.
   * @param path Pathlike string.
   * @returns
   */
  public static directoriesFromPath(path: string) {
    const tokens = path.split("/");
    if (tokens.length === 0) throw new Error("Invalid path.");

    const ROOT_DIRECTORY = this.basicFilesystem().root;
    for (let i = 0; i < tokens.length; i++)
      ROOT_DIRECTORY.addSubdirectory(new FakeDirectory(tokens[i]));

    return ROOT_DIRECTORY;
  }

  /**
   * Creates a basic file system with the minimum required folders.
   * @returns A basic Filesystem wrapper.
   */
  public static basicFilesystem() {
    const ROOT_DIRECTORY = new FakeDirectory("root");
    ROOT_DIRECTORY.addSubdirectory(new FakeDirectory("local"));
    ROOT_DIRECTORY.addSubdirectory(new FakeDirectory("iCloud"));

    return new FilesystemWrapper(ROOT_DIRECTORY);
  }
}

/**
 * A fake directory to hold fake files.
 */
export class FakeDirectory {
  /**
   * Bookmarks added to the folder.
   */
  public readonly bookmarks: string[];

  /**
   * All files inside this folder.
   */
  public readonly files: FakeFile[];

  /**
   * All directories inside this directory.
   */
  public readonly subdirectories: FakeDirectory[] = [];

  /**
   * Name of the folder.
   */
  public readonly name: string;

  /**
   * Constructs a fake directory to hold fake files.
   */
  constructor(
    name: string,
    files?: FakeFile[],
    bookmarks?: string[],
    subdirectories?: FakeDirectory[]
  ) {
    this.name = name;
    this.files = files ? files : [];
    this.bookmarks = bookmarks ? bookmarks : [];
    this.subdirectories = subdirectories ? subdirectories : [];
  }

  /**
   * Add a file to this directory.
   *
   * Throws an error if it encounters a file with the same name.
   * @param file File to add.
   */
  public addFile(file: FakeFile) {
    const exists =
      this.files.filter(
        (f) => f.name === file.name && f.extension === file.extension
      ).length > 0;
    if (exists)
      throw new Error(`A file with the name '${file.name}' already exists.`);
    else this.files.push(file);
  }

  /**
   * Adds multiple files to this directory.
   *
   * Throws an error if it encounters a file with the same name.
   * @param files Files to add.
   */
  public addFiles(files: FakeFile[]) {
    for (let f of files) this.addFile(f);
  }

  /**
   * Adds a new folder to this folder.
   * @param dir Folder to add.
   * @returns The added folder inside this folder.
   */
  public addSubdirectory(dir: FakeDirectory) {
    const exists =
      this.subdirectories.filter((d) => d.name === dir.name).length > 0;
    if (exists)
      throw new Error(
        `A directory with the name '${dir.name}' already exists.`
      );
    else this.subdirectories.push(dir);

    const newDir = this.subdirectories.indexOf(dir);

    if (newDir === -1) throw new Error("Failed to add subdirectory.");
    return this.subdirectories[newDir];
  }

  /**
   * Adds multiple folders to this folders.
   * @param dirs Directories to add.
   */
  public addSubdirectories(dirs: FakeDirectory[]) {
    for (let d of dirs) this.addSubdirectory(d);
  }

  /**
   * Lists content of directory.
   *
   * Lists all the contents in the specified directory. The returned array contains filenames to all files and directories in the specified directory.
   * @returns Names of all the files and directories in the specified directory.
   */
  public listContents() {
    const contents: string[] = [];
    this.subdirectories.forEach((s) => contents.push(s.name));
    this.files.forEach((f) => contents.push(f.name));
    return contents;
  }
}

/**
 * A fake file structure to use for a fake file system.
 */
export class FakeFile {
  /**
   * File name.
   */
  public readonly name: string;

  /**
   * File extension.
   */
  public readonly extension: string;

  /**
   * File tags. Tags are required to be unique.
   */
  private tags: string[] = [];

  /**
   * File extended attributes.
   */
  private extattrs: Map<string, string>;

  /**
   * The file's Uniform Type Identifier.
   */
  private uti: string = "";

  /**
   * Any bookmarks added to the file.
   */
  private bookmarks: string[] = [];

  constructor(name: string, extension: string) {
    this.name = name;
    this.extension = extension;
    this.extattrs = new Map<string, string>();
  }

  /**
   * Adds a tag to a file.
   *
   * A tag can only be added to a file once.
   * @param tag Tag to add. This can be an existing tag or a new tag.
   */
  public addTag(tag: string) {
    if (!this.tags.includes(tag)) this.tags.push(tag);
  }

  /**
   * Removes a tag from a file.
   *
   * @param tag Tag to remove.
   */
  public removeTag(tag: string) {
    if (this.tags.includes(tag)) this.tags.splice(this.tags.indexOf(tag), 1);
  }

  /**
   * Gets all the tags attached to this file.
   * @returns Tags with the file.
   */
  public allTags() {
    return Array.from(this.tags);
  }

  /**
   * Gets the value of the requested name.
   * @param name Name of the Attribute.
   * @returns Value of the attribute or null if the attribute doesn't exist.
   */
  public readExtendedAttribute(name: string) {
    const attr = this.extattrs.get(name);
    if (attr) return attr;
    return null;
  }

  /**
   * Reads all extended attributes attached to the file.
   * @returns List of all names of the extended attributes.
   */
  public allExtendedAttributes() {
    return Array.from(this.extattrs.keys());
  }

  /**
   * Writes a new Extended Attribute to the file.
   * @param value Value of the attribute.
   * @param name Name of the attribute.
   */
  public writeExtendedAttribute(value: string, name: string) {
    this.extattrs.set(name, value);
  }

  /**
   * Gets the UTI of the specified file.
   *
   * The Uniform Type Identifier is a string that identifies the type of file.
   * @returns The UTI of the file.
   */
  public getUTI() {
    return this.uti;
  }
}
