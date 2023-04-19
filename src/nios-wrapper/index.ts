import NIOSEnvironment from "./Environment.js";

import FilesystemWrapper, {
  FakeDirectory,
  FakeFile,
} from "./Wrappers/FilesystemWrapper.js";

// --- NIOS ENVIRONMENT ---
export default NIOSEnvironment;

// --- FAKERS ---
export { FilesystemWrapper, FakeDirectory, FakeFile };
