import {
  config,
  Script,
  ListWidget,
  Color,
  Font,
  LinearGradient,
  Alert,
  WidgetStack,
  Request,
  ImageType,
} from "../lib";

// Widget Creation Code provided by SuperMamon
// with his script "Instagram latest posts"

const SHOW_TEXT = true;
// -----------------Main code goes here-----------------
const displayer = myInfo();

if (config.runsInWidget) {
  let widget = displayer.has_error
    ? await createErrorWidget(displayer)
    : await createWidget(displayer);
  Script.setWidget(widget);
} else {
  const options = ["Small", "Medium", "Large", "Cancel"];
  let resp = await presentAlert("Preview Widget", options, false);
  if (resp == options.length - 1) Script.complete();
  let size = options[resp];
  let widget = displayer.has_error
    ? await createErrorWidget(displayer)
    : await createWidget(displayer, size.toLowerCase());

  await widget[`present${size}`]();
}

Script.complete();
// -----------------------Widget------------------------
async function createWidget(
  data: TestInfo,
  widgetFamily: string | null = null
) {
  widgetFamily = widgetFamily || config.widgetFamily;
  const padd = widgetFamily == "large" ? 12 : 10;
  const fontSize = widgetFamily == "large" ? 14 : 10;

  const widget = new ListWidget();

  let img: ImageType | undefined;
  if (data.imgUrl) {
    const req = new Request(data.imgUrl);
    img = await req.loadImage();
  }

  const refreshRate = 5; // min

  var refreshDate = Date.now() + 1000 * 60 * refreshRate;
  widget.refreshAfterDate = new Date(refreshDate);

  widget.url = data.url;
  widget.setPadding(padd, padd, padd, padd);
  if (img) widget.backgroundImage = img;

  if (SHOW_TEXT) {
    // add gradient with a semi-transparent
    // dark section at the bottom. this helps
    // with the readability of the status line
    widget.backgroundGradient = newLinearGradient(
      ["#ffffff00", "#ffffff00", "#00000088"],
      [0, 0.8, 1]
    );

    // top spacer to push the bottom stack down
    widget.addSpacer();

    // horizontal stack to hold the status line
    const stats = widget.addStack();
    stats.layoutHorizontally();
    stats.centerAlignContent();
    stats.spacing = 3;

    if (data.text) addText(stats, data.text, "left", fontSize);
    stats.addSpacer();
  }
  return widget;
}
// --------------------Error Widget---------------------
async function createErrorWidget(data: TestInfo) {
  const widget = new ListWidget();
  widget.addSpacer();
  const text = widget.addText(data.err_msg!);
  text.textColor = Color.white();
  text.centerAlignText();
  widget.addSpacer();
  return widget;
}
// -----------------Widget Information------------------
interface TestInfo {
  has_error: boolean;
  err_msg?: string;
  imgUrl?: string;
  url?: string;
  text?: string;
}

function myInfo(): TestInfo {
  const urlRedirect = "https://scriptable.app/";
  const imageUrl = "https://scriptable.app/assets/appicon.png";
  var title = "Sample text using Scriptable!";
  const simulateError = false;

  return {
    has_error: simulateError,
    err_msg: simulateError
      ? "This text is displayed because there was an error"
      : undefined,
    imgUrl: simulateError ? imageUrl : undefined,
    url: simulateError ? urlRedirect : undefined,
    text: simulateError ? title : undefined,
  };
}
// --------------------Other Tools----------------------
// Add text to your widget
function addText(
  container: WidgetStack,
  text: string,
  align: string,
  size: number
) {
  const txt = container.addText(text);
  txt[`${align}AlignText`]();
  txt.font = Font.systemFont(size);
  txt.shadowRadius = 3;
  txt.textColor = Color.white();
  txt.shadowColor = Color.black();
}

// Linear gradent for readability for text at the bottom of widget
function newLinearGradient(hexcolors: string[], locations: number[]) {
  let gradient = new LinearGradient();
  gradient.locations = locations;
  gradient.colors = hexcolors.map((color) => new Color(color));
  return gradient;
}

// Display an alert
async function presentAlert(prompt: string, items: string[], asSheet: boolean) {
  let alert = new Alert();
  alert.message = prompt;

  for (const item of items) {
    alert.addAction(item);
  }
  let resp = asSheet ? await alert.presentSheet() : await alert.presentAlert();
  return resp;
}
