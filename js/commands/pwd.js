// pwd command

/// <reference path="../types.js" />

import { currentPath } from "../filesystem.js"

/**
 * @module js/commands/pwd
 * 
 * Provides the 'pwd' command that returns the current directory path.
 * Replaces '/home/ayush' with '~' for brevity.
 * 
 * @exports handlePwd
 */


/**
 * Handles the 'pwd' command in the terminal app.
 * 
 * Returns the current working directory path as a string.
 * If the path is under `/home/ayush`, it replaces that prefix with `~`.
 *
 * @type {CommandReturningString} 
 * @param {string[]} args - The command arguments array.
 * @returns {string} The current directory path or a usage message if extra arguments are provided.
 */
function handlePwd(args) {
    if (args.length > 1) {
        return "Usage: pwd (No optional arguments)";
    } else {
        let pathStr = "/" + currentPath.join("/");
        if (pathStr.startsWith("/home/ayush")) {
            pathStr = pathStr.replace("/home/ayush", "~");
        }
        return pathStr;
    }
}

export {
    handlePwd
};