// clear command

/// <reference path="../types.js" />

/**
 * @module js/commands/clear
 * 
 * Handles the 'clear' command in the terminal app.
 *
 * Clears the content of the terminal window by resetting the inner HTML
 * of the element with class "terminalBody". It expects no additional arguments.
 *
 * Used to reset or clear the terminal output area for better readability.
 *
 * @exports handleClear
 */


/**
 * Handles the 'clear' command to clear the terminal.
 * 
 * @type {CommandReturningVoid}
 * @param {string[]} args - The command arguments.
 * @returns {string} Error message if extra arguments are provided, otherwise empty string.
 */
function handleClear(args) {
    if (args.length > 1) {
        return `clear: No argument expected here`;
    }

    const terminalBody = document.querySelector(".terminalBody");
    terminalBody.innerHTML = "";
    return ``;
}

export { handleClear };