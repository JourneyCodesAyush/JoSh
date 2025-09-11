
/**
 * @module js/argparse
 * 
 * Command parser and executor for terminal input.
 * 
 * Responsible for:
 * - Parsing raw user input into command arguments
 * - Dispatching the command to the appropriate handler via executeCommand
 * - Handling blank commands gracefully
 * - Updating command history
 * - Managing terminal output and prompt rendering
 *
 * @exports argParse
 */


import { executeCommand } from "./commands/index.js";
import { commandHistory } from "./commandHistory.js";
import { addMessage, addNewCommandLine } from "./ui.js";

/**
 * Parses the user input command and triggers the appropriate handler (cd, ls, etc.).
 *
 * @param {string} command - The full command string input by the user.
 */
function argParse(command) {
    document.activeElement.blur();
    // console.log(command);

    let commandArgs = command.split(" ");
    // console.log(commandArgs);

    if (!command.trim()) {
        addNewCommandLine();
        return;
    }

    const message = executeCommand(commandArgs);

    if (typeof message === "string" && message.trim() !== "") {
        addMessage(message);
    }

    addNewCommandLine();
    commandHistory.push(commandArgs);
}

export {
    argParse
};