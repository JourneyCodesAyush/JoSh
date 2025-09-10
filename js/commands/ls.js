// ls command

/// <reference path="../types.js" />

import { currentPath } from "../filesystem.js"
import { traverseFileSystem } from "../utils.js";

/**
 * @module js/commands/ls
 * 
 * Handles the 'ls' command in the terminal app.
 *
 * Lists the contents of the current directory in the virtual file system.
 * Uses the currentPath from the filesystem module and formats the output using traverseFileSystem().
 * 
 * @exports handleLs
 */

/**
 * Handles the 'ls' command to list items in the current directory.
 *
 * @type {NoArgCommandReturningString} 
 * @returns {string} Output string of the current directory listing or error message.
 */
function handleLs() {
    const message = traverseFileSystem(currentPath);
    if (!message)
        return `Directory not found: /${currentPath.join("/")}`;
    return message;
}

export {
    handleLs
};