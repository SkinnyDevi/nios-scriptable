import ContactsContainer from "./ContactsContainer";
import ContactsGroup from "./ContactsGroup";
import { ImageType } from "../primitive/Image";
/**
 * Contact in the address book.
 *
 * The type represents a contact in the address book. You can use the type to fetch and update contacts
 * in the address book.
 *
 * If you are signed into multiple accounts on the device, you may have multiple sources that populate the address book.
 *
 * A source is represented as a ContactsContainer.
 *
 * A contact may be in only one container.
 *
 * A CardDAV account usually has a single container whereas an Exchange account may have multiple containers.
 */
export default class Contact {
  /**
   * Birthday.
   */
  public birthday: Date | null = new Date();

  /**
   * Any dates stored.
   *
   * When updating this property, you must set the entire array of dates that you would like to store on the contact. The "identifier" key is optional.
   */
  public dates: { [key: string]: any }[] = [];

  /**
   * Name of the department associated with the contact.
   */
  public departmentName = "";

  /**
   * Email addresses.
   */
  public emailAddreses: { [key: string]: string }[] = [];

  /**
   * Family name.
   */
  public familyName = "";

  /**
   * Given name.
   */
  public givenName = "";

  /**
   * Profile image.
   */
  public image: ImageType | null = null;

  /**
   * The contact's job title.
   */
  public jobTitle = "";

  /**
   * Middle name.
   */
  public middleName = "";

  /**
   * Name prefix.
   */
  public namePrefix = "";

  /**
   * Nickname.
   */
  public nickname = "";

  /**
   * Note for the contact.
   */
  public note = "";

  /**
   * Name of the organization associated with the contact.
   */
  public organizationName = "";

  /**
   * Phone numbers.
   */
  public phoneNumbers: { [key: string]: any }[] = [];

  /**
   * Postal addresses.
   */
  public postalAddresses: { [key: string]: string }[] = [];

  /**
   * Social profiles.
   */
  public socialProfiles: { [key: string]: string }[] = [];

  /**
   * URL Addresses.
   */
  public urlAddresses: { [key: string]: string }[] = [];

  /**
   * Uniquely identifices the contact on the device.
   *
   * The `string` is only an example to a real value given by the system.
   */
  public readonly identifier = "7855AECB-93A0-42E0-88CD-8416C0AABFEA:ABPerson";

  /**
   * Whether or not `birthday` is available.
   */
  public readonly isBirthdayAvailable = false;

  /**
   * Whether or not `dates` are available.
   */
  public readonly isDatesAvailable = false;

  /**
   * Whether or not `departmentName` is available.
   */
  public readonly isDepartmentNameAvailable = false;

  /**
   * Whether or not `emailAddresses` are available.
   */
  public readonly isEmailAddressesAvailable = false;

  /**
   * Whether or not `familyName` is available.
   */
  public readonly isFamilyNameAvailable = false;

  /**
   * Whether or not `givenName` is available.
   */
  public readonly isGiveNameAvailable = false;

  /**
   * Whether or not `image` is available.
   */
  public readonly isImageAvailable = false;

  /**
   * Whether or not `jobTitle` is available.
   */
  public readonly isJobTitleAvailable = false;

  /**
   * Whether or not `middleName` is available;
   */
  public readonly isMiddleNameAvailable = false;

  /**
   * Whether or not `namePrefix` is available.
   */
  public readonly isNamePrefixAvailable = false;

  /**
   * Whether or not `nickname` is available.
   */
  public readonly isNicknameAvailable = false;

  /**
   * Whether or not `note` is available.
   */
  public readonly isNoteAvailable = false;

  /**
   * Whether or not `organizationName` is available.
   */
  public readonly isOrganizationNameAvailable = false;

  /**
   * Whether or not `phoneNumbers` are available.
   */
  public readonly isPhoneNumbersAvailable = false;

  /**
   * Whether or not `postalAddresses` is available.
   */
  public readonly isPostalAddressesAvailable = false;

  /**
   * Whether or not `socialProfiles` are available.
   */
  public readonly isSocialProfilesAvailable = false;

  /**
   * Whether or not `urlAddresses` are available.
   */
  public readonly isURLAddressesAvailable = false;

  /**
   * After you have created a contact, you must queue the contact to be added to the address book and
   * invoke `Contact.persistChanges()` to persist the changes to the address book.
   *
   * For performance reasons, it is best to batch changes to the address book.
   * Therefore you should queue all updates, insertions and removals of contacts and
   * contacts groups to as large batches as possible and then call `Contact.persistChanges()` when you want
   * to persist the changes to the address book.
   *
   * @param contact Contact to queue to be added.
   * @param containerIdentifier Optional. Identifier of the container to add the contact to. If null is specified, the contact will be added to the default container.
   */
  public static add(
    contact: Contact,
    containerIdentifier: string | null = null
  ) {}

  /**
   * Fetches contacts.
   *
   * Fetches the contacts in the specified containers. A contact can be in only one container.
   *
   * @param containers Containers to fetch contacts from.
   * @returns Promise that provides the contacts when fulfilled.
   */
  public static all(containers: ContactsContainer[]): Promise<Contact[]> {
    return new Promise((res) => {
      res(new Array<Contact>());
    });
  }

  /**
   * Queues a contact to be deleted.
   *
   * To delete a contact, you must queue the contact for deletion and
   * invoke `Contact.persistChanges()` to persist the changes to the address book.
   *
   * For performance reasons, it is best to batch changes to the address book.
   * Therefore you should queue all updates, insertions and removals of contacts and
   * contacts groups to as large batches as possible and then call `Contact.persistChanges()`
   * when you want to persist the changes to the address book.
   *
   * @param contact Contact to queue to be deleted.
   */
  public static delete(contact: Contact) {}

  /**
   * Fetches contacts in groups.
   *
   * Fetches the contacts in the specified contacts groups. A contact may belong to many groups.
   *
   * @param groups Groups to fetch contacts from.
   * @returns Promise that provides the contacts when fulfilled.
   */
  public static inGroups(groups: ContactsGroup[]): Promise<Contact[]> {
    return new Promise((res) => {
      res(new Array<Contact>());
    });
  }

  /**
   * Call this function to persist changes queued with `Contact.add()`, `Contact.update()` and `Contact.delete()`.
   *
   * For performance reasons, it is best to batch changes to the address book.
   * Therefore you should queue all updates, insertions and removals of contacts and contacts
   * groups to as large batches as possible and then call `Contact.persistChanges()`
   * when you want to persist the changes to the address book.
   *
   * @returns Promise that fulfills when changes have been persisted. The promise carries no value.
   */
  public static persistChanges(): Promise<void> {
    return new Promise((resolve) => resolve());
  }
}
