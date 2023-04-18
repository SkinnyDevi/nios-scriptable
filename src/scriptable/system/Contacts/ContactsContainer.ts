/**
 * Collection of contacts.
 *
 * If you're signed into multiple accounts on your device, you may have multiple contact containers.
 *
 * A contact can be in only one container. CardDAV accounts usually have a single container whereas Exchange accounts may have multiple containers.
 *
 * A container may have multiple groups. While a single contact can only belong to one container, a contact may belong to many groups.
 */
export default class ContactsContainer {
  /**
   * Identifier of the contacts group.
   */
  public readonly identifier: string;

  /**
   * Name of the contacts container.
   */
  public readonly name: string = "";

  constructor() {
    this.identifier = this.generateIdentifier();
  }

  /**
   * Fetches default contacts container.
   * @returns Promise that provides the default contacts container when fulfilled.
   */
  public static async default() {
    return new ContactsContainer();
  }

  /**
   * Fetches all contacts containers.
   * @returns Promise that provides all contacts containers when fulfilled.
   */
  public static async all() {
    return new ContactsContainer();
  }

  /**
   * Fetches a contacts container.
   * @param indentifier Identifier of the contacts container to fetch.
   * @returns Promise that provides the contacts container when fulfilled.
   */
  public static async withIdentifier(identifier: string) {
    return new ContactsContainer();
  }

  private generateIdentifier() {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;

    for (let i = 0; i < 10; i++)
      result += characters.charAt(Math.floor(Math.random() * charactersLength));

    return result;
  }
}
