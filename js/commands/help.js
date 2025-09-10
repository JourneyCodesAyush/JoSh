// help command

/// <reference path="../types.js" />

import { fileSystem } from "../filesystem.js"

/**
 * @module js/commands/help
 * 
 * Handles the 'help' command in the terminal app.
 *
 * Returns the help message if no arguments are provided,
 * otherwise returns an error message indicating no arguments are expected.
 *
 * Uses the help text stored in the virtual file system under bin/help.
 *
 * @exports handleHelp
 * 
*/


/**
 * Handles the 'help' command to show the help message.
 * 
 * @type {CommandReturningString}
 * @param {string[]} args - The command arguments.
 * @returns {string} The help message if no arguments are given, or an error message otherwise.
 */
function handleHelp(args) {
    if (args.length > 1) {
        return `help: No argument expected here`;
    }
    return `${fileSystem["bin"]["help"]}`
}

export {
    handleHelp
};