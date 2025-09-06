/// <reference path="../types.js" />
    
/**
 * @module js/manuals
 * Provides manual entries for each available terminal command.
 * These entries include a brief description and usage information.
 * @exports manuals
 */

/**
 * Manual entries for terminal commands.
 * @type {CommandManuals}
 */
const manuals = {
    help: `
help - Lists all available commands with a short description.
Usage: help
`.trim(),

    ls: `
ls - Lists files and folders in the current directory.
Usage: ls
`.trim(),

    cd: `
cd - Changes the current directory.
Usage: cd [dir] | cd .. | cd /
`.trim(),

    cat: `
cat - Displays content of a file.
Usage: cat [filename]
`.trim(),

    pwd: `
pwd - Prints the current directory path.
Usage: pwd
`.trim(),

    date: `
date - Shows the current system date (DD/MM/YYYY).
Usage: date
`.trim(),

    echo: `
echo - Prints text to the terminal.
Usage: echo [your text]
`.trim(),

    clear: `
clear - Clears the terminal output.
Usage: clear
`.trim(),

    theme: `
theme - Toggles between light and dark mode.
Usage: theme
`.trim(),

    whoami: `
whoami - Displays the current username.
Usage: whoami
`.trim(),

    social: `
social - Shows social media links. Supports 'github' and 'linkedin'.
Usage: social [platform]
`.trim(),
};

export {
    manuals
};