// js/filesystem.js

/**
 * @module js/filesystem
 * 
 * Simulated virtual file system and current working directory for the terminal app.
 * 
 * - fileSystem: Represents a mock hierarchical file structure with directories and files.
 * - currentPath: An array representing the current working directory path.
 * 
 * This module is used by various terminal commands (e.g., ls, cd, cat) to navigate
 * and access files and directories within the virtual file system.
 * 
 * @exports fileSystem
 * @exports currentPath
 */

/**
 * A mock file system structure representing directories and files as nested objects.
 * Files are represented as strings, directories as nested objects.
 * 
 * @constant
 * @type {Object<string, any>}
 * 
 * @example
 * // Example structure:
 * {
 *   home: {
 *     ayush: {
 *       "about.txt": "file content",
 *       education: {
 *         "degree.txt": "file content"
 *       }
 *     }
 *   },
 *   bin: {
 *     help: "Help text"
 *   }
 * }
 */


const fileSystem = {
    home: {
        ayush: {
            "about.txt":
                "Ayush Dubey - Tech enthusiast and Computer Engineering student at TSEC.",
            education: {
                "degree.txt": `
                    B.E. in Computer Engineering
                    Thadomal Shahani Engineering College
                    CGPA: 9.3 (Sem 1 and 2)
                    `.trim(),
                "hsc.txt": `
                    Class 12 (HSC Board), SVKMs Mithibai College
                    91.33% in Physics, Chemistry, Mathematics & Psychology
                    `.trim(),
                "ssc.txt": `
                    Class 10 (SSC Board), 95.4%, Swami Vivekanand High School
                    `.trim(),
            },

            skills: {
                "technical.txt": `
                Technical Skills:
                - Programming: C, Python (Tkinter for GUI), HTML, CSS, JS
                - Data Structures & Algorithms
                `.trim(),

                "softskills.txt": `
                Soft Skills:
                - Problem-solving
                - Quick learning
                - Collaboration
                `.trim(),

                "languages.txt": `
                Languages:
                - Fluent: Hindi, English, Marathi, Bhojpuri
                - Basic Sanskrit
                `.trim(),
            },

            projects: {
                "pdf-toolkit.txt": `
                Project: PDF Toolkit (Python & Tkinter)
                - Merge, rename, split PDF files with batch processing support
                - Features: User-friendly GUI, fast, cross-platform
                - Current version: v0.5.0 (Pre-release)
                - Developed with logging, error handling, and unit tests
                - GitHub: github.com/JourneyCodesAyush/pdf-toolkit
                `.trim(),

                "youtube-content.txt": `
                Content Creator (YouTube: Ayush Ki Journey)
                - 75+ vlogs on study tips, personal development
                - Grew subscriber base to 200+
                - Cross-promoted on Instagram and Facebook (500+ followers)
                - Skills: Video/audio editing, content creation, community building
                `.trim(),

                "terminal-portfolio.txt": `
                Project: Terminal Portfolio (Vanilla JS)
                - A web-based terminal emulator simulating file navigation and commands
                - Features: basic commands like ls, cd, and command input handling
                - Designed to mimic Unix-like terminal behavior for learning and demo
                - Currently in early development with more commands planned
                `.trim(),
            },
        },
    },
    bin: {
        help: `
                Available commands:
                - ls: List the items in current directory
                - cd: Change directory
                - cat: Display file contents
                - pwd: Print working directory
                - help: Show this help message
                - date: Print system date
                - echo: Print text given by the user on the terminal
                - clear: Clear the terminal window
                - theme: Toggle the theme of the terminal window
                - whoami: Print the username
                `.trim(),
        cd: "Change directory command to navigate through folders",
        ls: "List the items in current directory command",
        clear: "Clear the terminal window",
        date: "Print system date",
        cat: "Display the contents of file on the terminal",
        theme: "Toggle between light and dark theme",
        echo: "Print the text given by the user on the terminal",
        whoami: "Print the username",
        social: "Print the details of the social media",
        man: "Print the manual of a command"
    },
    dev: {
        "script.js": `
               console.log("Hello World");
                `.trim(),
    },
};

/**
 * Represents the current working directory as a path array.
 *
 * @type {string[]}
 * @example
 * // Represents /home/ayush
 * ["home", "ayush"]
 */
let currentPath = ["home", "ayush"];

export {
    fileSystem,
    currentPath
};