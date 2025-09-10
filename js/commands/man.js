// man command

/// <reference path="../types.js" />

import { manuals } from "../manuals.js"

/**
 * @module js/commands/man
 * 
 * Handles the 'man' command in the terminal app.
 *
 * Looks up the manual entry for a given command from the predefined manuals object.
 * If the manual exists, returns its description; otherwise, returns an error message.
 * 
 * @exports handleMan
 */

/**
 * Handles the 'man' command by returning the manual entry for a given command.
 * 
 * This function looks up the specified command (from args[1]) in the predefined manuals object.
 * If a manual entry exists, it returns the corresponding usage information.
 * If the command is not found, it returns an error message indicating that the command does not exist.
 * 
 * @type {CommandReturningString}
 * @param {string[]} args - An array where the second element (args[1]) is expected to be the command name.
 * @returns {string} The manual/help description of the specified command, or an error message if not found.
 */
function handleMan(args) {

    const command = args[1];
    if (!command) {
        return "man: Please specify a command to lookup"
    }
    if (command in manuals) {
        const manDescription = manuals[command];
        return manDescription;
    }
    return `${command} does not exist`;
}

export {
    handleMan
};