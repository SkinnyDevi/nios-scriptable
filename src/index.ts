import { WIDGET_ARGS, CONFIG_VARS } from "./scriptable/globalvars.js";

import Alert from "./scriptable/system/Alert.js";
import CallbackURL from "./scriptable/system/CallbackURL.js";
import Device from "./scriptable/system/Device.js";
import LinearGradient from "./scriptable/system/LinearGradient.js";
import Notification from "./scriptable/system/Notifications.js";
import Request, { RequestMethods } from "./scriptable/system/Request.js";
import Safari from "./scriptable/system/Safari.js";
import Script from "./scriptable/system/Script.js";
import TextField from "./scriptable/system/TextField.js";
import XMLParser from "./scriptable/system/XMLParser.js";

import Color from "./scriptable/system/primitive/Color.js";
import Data from "./scriptable/system/primitive/Data.js";
import Font from "./scriptable/system/primitive/Font.js";
import Image, { ImageType } from "./scriptable/system/primitive/Image.js";
import Point from "./scriptable/system/primitive/Point.js";
import Size from "./scriptable/system/primitive/Size.js";

import Calendar from "./scriptable/system/Dates/Calendar.js";
import CalendarEvent from "./scriptable/system/Dates/CalendarEvent.js";
import DateFormatter from "./scriptable/system/Dates/DateFormatter.js";
import DatePicker from "./scriptable/system/Dates/DatePicker.js";
import RecurrenceRule from "./scriptable/system/Dates/RecurrenceRule.js";
import RelativeDateTimeFormatter from "./scriptable/system/Dates/RelativeDateTimeFormatter.js";

import ListWidget from "./scriptable/system/Widget/ListWidget.js";
import WidgetDate from "./scriptable/system/Widget/WidgetDate.js";
import WidgetImage from "./scriptable/system/Widget/WidgetImage.js";
import WidgetSpacer from "./scriptable/system/Widget/WidgetSpacer.js";
import WidgetStack from "./scriptable/system/Widget/WidgetStack.js";
import WidgetText from "./scriptable/system/Widget/WidgetText.js";

// --- GLOBAL VARIABLES --- //
/**
 * Arguments passed to the script.
 *
 * Arguments are passed to the script when the script is executed from a share sheet. You can specify the types of arguments a script supports from the script settings.
 */
export const args = WIDGET_ARGS;

/**
 * Configuration the script runs with.
 *
 * Contains information about the configuration the script is currently being run under.
 */
export const config = CONFIG_VARS;

/**
 * Modules are imported by specifying the name of the file. For example, to import the file foo.js, call `importModule('foo')`. Including the file extension is optional.
 *
 * Scriptable will look for modules in the following directories, in order:
 * 1. Relative to the file the module is imported into.
 * 2. In Scriptables folder in iCloud if you have iCloud Drive enabled. This folder is accessible from the Files app.
 * 3. In Scriptables "app group" folder which is not accessible to the user but your scripts are stored in this folder if you do not have iCloud Drive enabled.
 * 4. In Scriptables local folder. This folder is accessible from the Files app.
 *
 * You can specify a file path rather than the name of a file e.g. importModule('/lib/foo'). If the path points to a directory, Scriptable will look for a file named index.js in the directory.
 *
 * @example
 * let circle = importModule('circle')
 * let r = 2
 * let area = circle.area(r)
 * log('Area of circle: ' + area)
 *
 * @param name module name to import (i.e moment, fs, path, ...)
 */
export function importModule(name: string) {}

/**
 * Shorthand for `console.log()`
 */
export function log(...message: any[]) {
  console.log(message);
}

/**
 * Shorthand for `console.warn()`
 */
export function logWarning(...message: any[]) {
  console.warn(message);
}

/**
 * Shorthand for `console.error()`
 */
export function logError(...message: any[]) {
  console.error(message);
}

// --- SYSTEM PACKAGE --- //

// SYSTEM PACKAGES
export {
  Alert,
  CallbackURL,
  Device,
  LinearGradient,
  Notification,
  Request,
  RequestMethods,
  Safari,
  Script,
  TextField,
  XMLParser,
};

// SYSTEM PRIMITIVES
export { Color, Data, Font, Image, Point, Size, ImageType };

// SYSTEM DATES
export {
  Calendar,
  CalendarEvent,
  DateFormatter,
  DatePicker,
  RecurrenceRule,
  RelativeDateTimeFormatter,
};

// SYSTEM WIDGET
export {
  ListWidget,
  WidgetDate,
  WidgetImage,
  WidgetSpacer,
  WidgetStack,
  WidgetText,
};
