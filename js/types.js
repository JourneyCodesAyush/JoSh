/**
 * @typedef {(args: string[]) => string} CommandReturningString
 * A command handler that takes command arguments (as an array of strings) and returns a string,
 * typically used for showing output or error messages.
 *
 * Example: handleHelp(["help"]) → string
 */

/**
 * @typedef {() => string} NoArgCommandReturningString
 * A command that takes no arguments and returns a string.
 *
 * Example: handleDate() → "06/09/2025"
 */

/**
 * @typedef {(args: string[]) => void} CommandReturningVoid
 * A command handler that takes command arguments and performs UI actions without returning anything.
 *
 * Example: handleEcho(["echo", "hello"]) → void (displays on screen)
 */

/**
 * @typedef {() => void} NoArgCommandReturningVoid
 * A command that takes no arguments and performs side effects (e.g., clearing the terminal).
 *
 * Example: handleClear() → void
 */

/**
 * @typedef {function(string[]): string} DirectoryTraversalFunction
 * A function that takes a path array and returns a newline-separated list of items,
 * or an empty string if the path is invalid or not a directory.
 */

/**
 * @typedef {Object.<string, string>} CommandManuals
 * A mapping of command names to their manual text.
 * Each manual includes a short description and usage instructions.
 */
