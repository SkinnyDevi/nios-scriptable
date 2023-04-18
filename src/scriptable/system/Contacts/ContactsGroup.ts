import Contact from "./Contact.js";
import ContactsContainer from "./ContactsContainer.js";

/**
 * Group of contacts.
 *
 * A contacts container may have several groups of contacts. A contact can only belong to a single contacts container but
 * may belong to zero or more contacts groups.
 *
 * For example, an iCloud account has only one container but may have many groups.
 */
export default class ContactsGroup {
  /**
   * Identifier of the contacts group.
   */
  public readonly identifier: string;

  /**
   * Name of the contacts group.
   */
  public name: string = "";

  /**
   * In order to add the group to your address book, you must queue it for insertion using `ContactsGroup.add()`.
   *
   * When you're done making changes to the address book you should call `Contact.persistChanges()` to persist the changes.
   */
  constructor() {
    this.identifier = this.generateIdentifier();
  }

  /**
   * Fetches the contacts groups in the specified containers. A group can be in only one container.
   * @param containers Container to fetch contacts groups from.
   * @returns Promise that provides the contacts groups when fulfilled.
   */
  public static async all(containers: ContactsContainer[]) {
    return [new ContactsGroup()];
  }

  /**
   * Adds a contact to the group.
   *
   * In order to persist the change, you should call `Contact.persistChanges()`.
   *
   * It is important that the contact is added to the address book. To add the contact to the address book, you should queue
   * it for insertion using `Contact.add()` before persisting the changes.
   * @param contact Contact to add to the group.
   */
  public addMember(contact: Contact) {}

  /**
   * Removes a contact from the group.
   *
   * In order to persist the change, you should call `Contact.persistChanges()`.
   *
   * It is important that the contact is added to the address book. To add the contact to the address book, you should queue
   * it for insertion using `Contact.add()` before persisting the changes.
   * @param contact Contact to remove from the group.
   */
  public removeMember(contact: Contact) {}

  /**
   * Queues a contacts group to be added.
   *
   * After you have created a group, you must queue the group to be added to the address book and invoke `Contact.persistChanges()`
   * to persist the changes to the address book.
   *
   * For performance reasons, it is best to batch changes to the address book. Therefore you should queue all updates,
   * insertions and removals of contacts and contacts groups to as large batches as possible and then call `Contact.persistChanges()`
   * when you want to persist the changes to the address book.
   * @param group Contacts group to queue to be added.
   * @param containerIdentifier Optional. Identifier of container to add the contacts group to. If null is specified, the group will be added to the default container.
   */
  public static add(
    group: ContactsGroup,
    containerIdentifier: string | null = null
  ) {}

  /**
   * Queues an update to a contacts group.
   *
   * After you have updated one or more properties on a contacts group, you must queue the group to be updated and invoke `Contact.persistChanges()`
   * to persist the changes to the address book.
   *
   * For performance reasons, it is best to batch changes to the address book. Therefore you should queue all updates
   * insertions and removals of contacts and contacts groups to as large batches as possible and then call `Contact.persistChanges()`
   * when you want to persist the changes to the address book.
   * @param group Contacts group to queue to be updated.
   */
  public static update(group: ContactsGroup) {}

  /**
   * Queues a contacts group to be deleted.
   *
   * To delete a contacts group, you must queue the group for deletion and invoke `Contact.persistChanges()`
   * to persist the changes to the address book.
   *
   * For performance reasons, it is best to batch changes to the address book. Therefore you should queue all updates,
   * insertions and removals of contacts and contacts groups to as large batches as possible and then call `Contact.persistChanges()`
   * when you want to persist the changes to the address book.
   * @param group Contacts group to queue to be deleted.
   */
  public static delete(group: ContactsGroup) {}

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
