// date command

/// <reference path="../types.js" />

/**
 * @module js/commands/date
 * 
 * Handles the 'date' command in the terminal app.
 *
 * Returns the current system date formatted as DD/MM/YYYY.
 *
 * @exports handleDate
 */


/**
 * Handles the 'date' command by returning the current date.
 * 
 * @type {CommandReturningString}
 * @returns {string} - The current system date in the format DD/MM/YYYY.
 */
function handleDate() {

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return `${day}/${month}/${year}`
}

export { handleDate };