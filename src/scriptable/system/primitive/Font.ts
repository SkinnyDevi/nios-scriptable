/**
 * Represents a font and text size.
 *
 * The font can be used to style texts, for example in widgets.
 */
export default class Font {
  private name: string;
  private size: number;

  /**
   * Constructs a new font.
   *
   * @see http://iosfonts.com for a list of the fonts that are available in iOS and iPadOS.
   *
   * @param name
   * @param size
   */
  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  /**
   * Preferred font for large titles.
   * @returns Font for large titles.
   */
  public static largeTitle() {
    return new Font("Large Title", 40);
  }

  /**
   * Preferred font for first level hierarchical headings.
   * @returns Font for first level hierarchical headings.
   */
  public static title1() {
    return new Font("title1", 30);
  }

  /**
   * Preferred font for second level hierarchical headings.
   * @returns Font for second level hierarchical headings.
   */
  public static title2() {
    return new Font("title2", 25);
  }
  /**
   * Preferred font for third level hierarchical headings.
   * @returns Font for third level hierarchical headings.
   */
  public static title3() {
    return new Font("title3", 20);
  }

  /**
   * Preferred font for headings.
   * @returns Font for headings.
   */
  public static headline() {
    return new Font("Headline", 28);
  }

  /**
   * Preferred font for subheadings.
   * @returns Font for subheadings.
   */
  public static subheadline() {
    return new Font("Subheadline", 24);
  }

  /**
   * Preferred font for body texts.
   * @returns Font for body texts.
   */
  public static body() {
    return new Font("Body", 15);
  }

  /**
   * Preferred font for callouts.
   * @returns Font for callouts.
   */
  public static callout() {
    return new Font("Callout", 18);
  }

  /**
   * Preferred font for footnotes.
   * @returns Font for footnotes.
   */
  public static footnote() {
    return new Font("Footnote", 18);
  }

  /**
   * Preferred font for standard captions.
   * @returns Font for standard captions.
   */
  public static caption1() {
    return new Font("caption1", 20);
  }

  /**
   * Preferred font for alternate captions.
   * @returns Font for alternate captions.
   */
  public static caption2() {
    return new Font("caption2", 20);
  }

  /**
   * Creates a system font.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static systemFont(size: number) {
    return new Font("System", size);
  }

  /**
   * Creates an ultra light system font.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static ultraLightSystemFont(size: number) {
    return new Font("UltraLightSystem", size);
  }

  /**
   * Creates a thin system font.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static thinSystemFont(size: number) {
    return new Font("ThinSystem", size);
  }

  /**
   * Creates a light system font.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static lightSystemFont(size: number) {
    return new Font("LightSystem", size);
  }

  /**
   * Creates a regular system font.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static regularSystemFont(size: number) {
    return new Font("RegularSystem", size);
  }

  /**
   * Creates a semi bold system font.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static semiboldSystemFont(size: number) {
    return new Font("SemiboldSystem", size);
  }

  /**
   * Creates a bold system font.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static boldSystemFont(size: number) {
    return new Font("BoldSystem", size);
  }

  /**
   * Creates a heavy system font.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static heavySystemFont(size: number) {
    return new Font("HeavySystem", size);
  }

  /**
   * Creates a font with the system appearance with the black weight.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static blackSystemFont(size: number) {
    return new Font("BlackSystem", size);
  }

  /**
   * Creates an italic system font.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static italicSystemFont(size: number) {
    return new Font("ItalicSystem", size);
  }

  /**
   * Creates an ultra light monospaced system font.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static ultraLightMonospacedSystemFont(size: number) {
    return new Font("UltraLightMonospacedSystem", size);
  }

  /**
   * Creates a thin monospaced system font.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static thinMonospacedSystemFont(size: number) {
    return new Font("ThinMonospacedSystem", size);
  }

  /**
   * Creates a light monospaced system font.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static lightMonospacedSystemFont(size: number) {
    return new Font("LightMonospacedSystem", size);
  }

  /**
   * Creates a regular monospaced system font.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static regularMonospacedSystemFont(size: number) {
    return new Font("RegularMonospacedSystem", size);
  }

  /**
   * Creates a medium monospaced system font.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static mediumMonospacedSystemFont(size: number) {
    return new Font("MediumMonospacedSystem", size);
  }

  /**
   * Creates a semi bold monospaced system font.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static semiboldMonospacedSystemFont(size: number) {
    return new Font("SemiboldMonospacedSystem", size);
  }

  /**
   * Creates a bold monospaced system font.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static boldMonospacedSystemFont(size: number) {
    return new Font("BoldMonospacedSystem", size);
  }

  /**
   * Creates a heavy monospaced system font.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static heavyMonospacedSystemFont(size: number) {
    return new Font("HeavyMonospacedSystem", size);
  }

  /**
   * Creates a monospaced system font with the black weight.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static blackMonospacedSystemFont(size: number) {
    return new Font("BlackMonospacedSystem", size);
  }

  /**
   * Creates an ultra light and rounded system font.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static ultraLightRoundedSystemFont(size: number) {
    return new Font("UltraLightRoundedSystem", size);
  }

  /**
   * Creates a thin and rounded system font.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static thinRoundedSystemFont(size: number) {
    return new Font("ThinRoundedSystem", size);
  }

  /**
   * Creates a light and rounded system font.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static lightRoundedSystemFont(size: number) {
    return new Font("LightRoundedSystem", size);
  }

  /**
   * Creates a regular and rounded system font.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static regularRoundedSystemFont(size: number) {
    return new Font("RegularRoundedSystem", size);
  }

  /**
   * Creates a medium and rounded system font.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static mediumRoundedSystemFont(size: number) {
    return new Font("MediumRoundedSystem", size);
  }

  /**
   * Creates a semi bold and rounded system font.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static semiboldRoundedSystemFont(size: number) {
    return new Font("SemiboldRoundedSystem", size);
  }

  /**
   * Creates a bold and rounded system font.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static boldRoundedSystemFont(size: number) {
    return new Font("BoldRoundedSystem", size);
  }

  /**
   * Creates a heavy and rounded system font.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static heavyRoundedSystemFont(size: number) {
    return new Font("HeavyRoundedSystem", size);
  }

  /**
   * Creates a rounded system font with the black weight.
   * @param size Font size.
   * @returns System font with custom size.
   */
  public static blackRoundedSystemFont(size: number) {
    return new Font("BlackRoundedSystem", size);
  }
}
