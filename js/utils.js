/// <reference path="../types.js" />

import { fileSystem } from "./filesystem.js";

/**
 * @module js/utils
 * 
 * Provides utility functions for interacting with the virtual file system.
 *
 * @exports traverseFileSystem
 */

/**
 * Traverses the file system based on the provided path and returns the contents of that directory.
 *
 * @type {DirectoryTraversalFunction}
 *
 * @param {string[]} path - An array representing the path in the file system (e.g., ['home', 'ayush']).
 * @returns {string} A newline-separated string of item names in the directory,
 *                   or an empty string if the path is invalid or not a directory.
 */
function traverseFileSystem(path) {
    let dir = fileSystem;

    for (const part of path) {
        if (dir && typeof dir === "object" && part in dir) {
            dir = dir[part];
        } else {
            return "";
        }
    }

    if (typeof dir !== "object") {
        return ""; // not a directory
    }

    return Object.keys(dir).join("\n");
}

export {
    traverseFileSystem
};
