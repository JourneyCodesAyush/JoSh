// echo command

/// <reference path="../types.js" />

import { addMessage } from "../ui.js";

/**
 * @module js/commands/echo
 * 
 * Handles the 'echo' command in the terminal app.
 *
 * Prints the user-provided text (all arguments after 'echo') to the terminal
 * by displaying the message using the addMessage UI function.
 *
 * @exports handleEcho
 */


/**
 * Handles the 'echo' command by printing user-provided text to the terminal.
 * It joins all arguments after 'echo' and displays them using addMessage().
 * 
 * @type {CommandReturningString}
 * @param {string[]} args - The command arguments; everything after 'echo' is treated as text.
 * @returns {void}
 */
function handleEcho(args) {

    let message = args.slice(1).join(" ").trim();
    addMessage(message);

}

export {
    handleEcho
};