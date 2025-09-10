// theme command

/// <reference path="../types.js" />

/**
 * @module js/commands/theme
 * 
 * Handles the 'theme' command to toggle between light and dark themes.
 * 
 * @exports handleTheme
 */


/**
 * Handles the 'theme' command by changint the current theme.
 * It checks the current theme and switches to the opposite one. The preference is saved in sessionStorage 
 * so that it persists across page reloads.
 * 
 * @type {CommandReturningVoid}
 * @returns {void} - Nothing is returned.
 */
function handleTheme() {

    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    sessionStorage.setItem("theme", newTheme);

    const savedTheme = sessionStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
}

export {
    handleTheme
};