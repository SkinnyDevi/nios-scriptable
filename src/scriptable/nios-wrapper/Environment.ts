import { WidgetArgs } from "../globalvars.js";

interface EnvironmentSetupVariables {
  args: WidgetArgs;
}

/**
 * Define an environment where the Scriptable script will run on.
 *
 * Use helpers to define complex data structures (files, contacts...)
 */
export default class Environment {
  public readonly setup;

  constructor(setup: EnvironmentSetupVariables) {
    this.setup = setup;
  }

  /**
   * Runs the script's main function. This needs to be exported and imported in the same environment file.
   * @param scriptMain
   */
  public run(scriptMain: Function) {}
}
