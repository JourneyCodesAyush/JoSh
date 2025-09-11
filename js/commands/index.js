// Central export for all terminal command handlers

/// <reference path="../types.js" />

import * as commands from "./registry.js";

/**
 * @module js/commands/index
 * 
 * Command router that dynamically executes the appropriate terminal command.
 * Imports all handlers from the command registry and dispatches based on command name.
 * 
 * @exports executeCommand
 */

/**
 * Maps special command names to their corresponding handler function names.
 * 
 * This is used to handle exceptions where the command name doesn't directly
 * match the naming convention used in exported handler functions (e.g., whoami → handleWhoAmI).
 *
 * @constant
 * @type {Object.<string, string>}
 * @example
 * commandMap["whoami"] === "handleWhoAmI"
 */
const commandMap = {
    whoami: "handleWhoAmI",
    setname: "handleSetName"
}

/**
 * Executes a command based on the input arguments.
 *
 * Dynamically finds the command handler by matching the first word (args[0])
 * to a corresponding exported handler function like handleLs, handleEcho, etc.
 * 
 * @type {CommandReturningString}
 * @param {string[]} args - The full array of command input from the user.
 * @returns {string|void} - The result of the command or an error message.
 */
function executeCommand(args) {
    const commandName = args[0];
    const handlerName = commandMap[commandName] || ("handle" + commandName.charAt(0).toUpperCase() + commandName.slice(1));

    const handler = commands[handlerName];
    if (typeof handler === "function") {
        return handler(args);
    } else {
        return `Command not found: ${commandName}`;
    }
}

export { executeCommand };