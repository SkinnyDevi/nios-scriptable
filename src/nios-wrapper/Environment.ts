import { ConfigVars, ScriptArgs } from "../scriptable/globalvars.js";
import FilesystemWrapper from "./Wrappers/FilesystemWrapper.js";

export interface EnvironmentSetupVariables {
  args: ScriptArgs;
  config: ConfigVars;
  filesystem?: FilesystemWrapper;
}

/**
 * Define an environment where the Scriptable script will run on.
 *
 * Use helpers to define complex data structures (files, contacts...)
 */
export default class NIOSEnvironment {
  public readonly args: ScriptArgs;
  public readonly config: ConfigVars;
  public readonly filesystem: FilesystemWrapper;

  /**
   * Define an environment where the Scriptable script will run on.
   *
   * Use helpers to define complex data structures (files, contacts...)
   */
  constructor(setup: EnvironmentSetupVariables) {
    this.args = setup.args;
    this.config = setup.config;
    if (setup.filesystem) this.filesystem = setup.filesystem;
    else this.filesystem = FilesystemWrapper.basicFilesystem();
  }

  /**
   * Runs the script's main function. This needs to be exported and imported in the same environment file.
   * @param scriptMain The script's main function to execute.
   */
  public run(scriptMain: Function) {
    this.checkConfig();
    scriptMain();
  }

  public getEnv() {
    return {
      args: this.args,
      config: this.config,
      filesystem: this.filesystem,
    };
  }

  /**
   * Validates the passed configuration.
   */
  private checkConfig() {
    const config = this.config;

    if (
      !config.runsFromHomeScreen &&
      !config.runsInActionExtension &&
      !config.runsInApp &&
      !config.runsInNotification &&
      !config.runsInWidget &&
      !config.runsWithSiri
    )
      throw new Error("No running environment was specified.");
  }
}
