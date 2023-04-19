/**
 * Secure storage for credentials.
 *
 * The keychain is a secure storage for credentials, keys etc. Use the `set()` method to add values to the keychain.
 *
 * You can then later use the `get()` method to retrieve the value.
 */
export default class Keychain {
  private constructor() {}

  /**
   * Check if keychain contains a key.
   *
   * Checks if the keychain contains the specified key.
   * @param key Key to look up in the keychain.
   * @returns True if the key exists in the keychain, otherwise false.
   */
  public static contains(key: string) {
    return false;
  }

  /**
   * Add value for a specified key to keychain.
   *
   * Adds the value to the keychain, assigning it to the specified key. If the key already exists in the keychain, the value is overwritten.
   *
   * Values are securely stored in an encrypted database.
   * @param key Key which the value should be assigned to.
   * @param value Value to assign to the specified key.
   */
  public static set(key: string, value: string) {}

  /**
   * Reads a value from the keychain.
   *
   * Reads the value for the specified key. If the key doesn't exist the method will throw an error.
   * Use the contains method to check if a key exists in the keychain.
   * @param key Key to read value for.
   * @returns Value assigned to the specified key.
   */
  public static get(key: string) {
    return "";
  }

  /**
   * Remove key from keychain.
   * @param key Key to remove from the keychain.
   */
  public static remove(key: string) {}
}
