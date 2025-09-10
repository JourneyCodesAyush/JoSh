// social command

/// <reference path="../types.js" />

/**
 * @module js/commands/social
 * 
 * Handles the 'social' command to display URLs of social media platforms.
 * 
 * @exports handleSocial
 */

/**
 * Handles the 'social' command to display URLs of social media platforms.
 * 
 * If no platform is specified, it returns links to GitHub and LinkedIn.
 * If a valid platform (github or linkedin) is provided, it returns the corresponding URL.
 * 
 * @type {CommandReturningString}
 * @param {string[]} args - The command arguments where args[1] is the platform (optional).
 * @returns {string} The URL of the specified platform or a list of default platforms.
 */
function handleSocial(args) {

    const platform = args[1]?.toLowerCase();

    if (args.length < 2) {
        return `
GitHub: <a href="https://github.com/JourneyCodesAyush" target="_blank">https://github.com/JourneyCodesAyush</a>
LinkedIn: <a href="https://linkedin.com/in/journeycodesayush" target="_blank">https://linkedin.com/in/journeycodesayush</a>
        `.trim();
    }

    switch (platform) {
        case "github":
            return `
GitHub: <a href="https://github.com/JourneyCodesAyush" target="_blank">https://github.com/JourneyCodesAyush</a>
            `.trim();

        case "linkedin":
            return `
LinkedIn: <a href="https://linkedin.com/in/journeycodesayush" target="_blank">https://linkedin.com/in/journeycodesayush</a>
            `.trim();

        default:
            return `
            Unknown platform: ${args[1]}. Usage: [github | linkedin]
            `.trim();
    }

}

export {
    handleSocial
};