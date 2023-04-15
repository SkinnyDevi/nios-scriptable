import { WIDGET_ARGS, CONFIG_VARS } from "./scriptable/globalvars.js";

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
