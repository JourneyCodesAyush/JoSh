// cat command

/// <reference path="../types.js" />

import { fileSystem, currentPath } from "../filesystem.js"

/**
 * @module js/commands/cat
 * 
 * Handles the 'cat' command in the terminal app.
 *
 * Reads and displays the content of a file from the virtual file system.
 * Supports only plain-text files and returns an error if the file is not found
 * or if the target is a directory.
 *
 * Uses the fileSystem and currentPath from the filesystem module to locate files.
 *
 * @exports handleCat
 */


/**
 * Handles the 'cat' command to display the content of a file.
 * 
 * @type {CommandReturningString}
 * @param {string[]} args - The command arguments, where args[1] is the target filename.
 * @returns {string} The file content if found, or an error message if not.
 */
function handleCat(args) {
    if (args.length < 2) {
        return `cat: No such file : ${args[0]}`;
    }
    let newPath = [...currentPath];
    let target = args[1];
    let dir = fileSystem;
    for (const part of newPath) {
        if (dir[part] && typeof (dir[part]) === "object") {
            dir = dir[part];
        } else {
            return `cat: Path invalid at ${target}`;
        }
    }


    if (!(target in dir)) {
        return `cat: No such file : ${args[0]}`;
    }

    const file = dir[target];
    if (typeof file === "string") {
        return file;
    }
    else {
        return `cat: ${target} is a directory`
    }
}

export { handleCat };