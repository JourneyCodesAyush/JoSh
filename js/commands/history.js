// history command

import { commandHistory } from "../commandHistory.js"

/**
 * @module js/commands/history
 * 
 * Handles the 'history' command in the terminal app.
 *
 * Displays the list of previously entered commands stored in the command history array.
 * Each command is shown on a new line, replicating a typical shell history feature.
 *
 * @exports handleHistory
 */

/**
 * Handles the 'history' command, which displays the list of previously entered commands.
 * 
 * This function retrieves and formats the command history stored in the commandHistory array. 
 * It returns a newline-separated list of commands, which are the user inputs from past terminal sessions.
 * If no commands have been executed, it will return an empty string.
 * 
 * @type {NoArgCommandReturningString}
 * @returns {string} A string containing the history of executed commands, each on a new line.
 *                  If no commands have been run, an empty string is returned.
 */
function handleHistory() {

    return commandHistory.map(cmdArr => cmdArr.join(" ")).join("\n");

}

export {
    handleHistory
};