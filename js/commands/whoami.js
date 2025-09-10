// whoami command

/// <reference path="../types.js" />

/**
 * @module js/commands/whoami
 * 
 * Handles the 'whoami' command to return the current username.
 * 
 * @exports handleWhoAmI
 */

/**
 * Retrieves the current username stored in localStorage.
 * If no username is set, returns "visitor" as a default.
 * 
 * @type {NoArgCommandReturningString}
 * @returns {string} The username currently stored in localStorage or "visitor".
 */
function handleWhoAmI() {

    const userName = localStorage.getItem("userName") || "visitor";
    return userName;

}

export {
    handleWhoAmI
};