// setname command

/// <reference path="../types.js" />

/**
 * @module js/commands/setname
 * 
 * Handles the 'setname' command to set the username in localStorage.
 * 
 * @exports handleSetName
 */


/**
 * Sets the username in localStorage.
 * 
 * @type {CommandReturningString}
 * @param {string[]} args - Command arguments, expects username as the second argument.
 * @returns {string} Success or usage message.
 */
function handleSetName(args) {
    if (args.length < 2) {
        return "Usage: setname [your_name]";
    }
    else {
        localStorage.setItem("userName", args[1]);
        return `Username set to ${args[1]}`;
    }
}

export {
    handleSetName
};