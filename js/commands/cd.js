// cd command

/// <reference path="../types.js" />

import { fileSystem, currentPath } from "../filesystem.js"

/**
 * @module js/commands/cd
 * 
 * Handles the 'cd' command in the terminal app.
 *
 * Changes the current working directory within the virtual file system.
 * Supports navigation to home, parent directory, root, and subdirectories.
 *
 * Uses the fileSystem and currentPath from the filesystem module to resolve and update paths.
 *
 * @exports handleCd
 */


/**
 * Handles the 'cd' command to change the current directory path.
 * 
 * @type {CommandReturningString}
 * @param {string[]} args - The command and its arguments as an array.
 * @returns {string} An error message if the directory doesn't exist, otherwise an empty string.
 */
function handleCd(args) {
    if (args.length < 2) {

        currentPath.splice(0, currentPath.length, "home", "ayush");
        return "cd: Reset to home directory";
    }

    let target = args[1];
    let newPath = [...currentPath];

    if (target === "..") {
        if (newPath.length > 0) {
            newPath.pop();
        }
    }
    else if (target === "/") {
        newPath = [];
    }
    else {
        newPath.push(target);
    }

    let dir = fileSystem;
    for (const part of newPath) {
        if (dir[part] && typeof (dir[part]) === "object") {
            dir = dir[part];
        } else {
            return `cd: No such directory : ${target}`;
        }
    }

    currentPath.splice(0, currentPath.length, ...newPath);
    return "";
}

export { handleCd };