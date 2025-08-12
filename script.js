// 2 August 2025
// 3 August 2025
// 6 August 2025
// 8 August 2025

// console.log("Hello World");

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
                - help: Show this help message
                `.trim(),
        cd: "Change directory command to navigate through folders",
        ls: "List the items in current directory command",
        clear: "Clear the terminal window",
        cat: "Display the contents of file on the terminal",
    },
    dev: {
        "script.js": `
               console.log("Hello World");
                `.trim(),
    },
};

/**
 * Handles the 'help' command to show the help message.
 * 
 * @param {string[]} args - The command arguments.
 * @returns {string} The help message if no arguments are given, or an error message otherwise.
 */
function handleHelp(args) {
    if (args.length > 1) {
        return `help: No argument expected here`;
    }
    return `${fileSystem["bin"]["help"]}`
}

/**
 * Handles the 'clear' command to clear the terminal.
 * 
 * @param {string[]} args - The command arguments.
 * @returns {string} Error message if extra arguments are provided, otherwise empty string.
 */
function handleClear(args) {
    if (args.length > 1) {
        return `help: No argument expected here`;
    }

    const terminalBody = document.querySelector(".terminalBody");
    terminalBody.innerHTML = "";
    return ``;
}

/**
 * Handles the 'ls' command to list items in the current directory.
 * 
 * @returns {string} Output string of the current directory listing or error message.
 */
function handleLs() {
    const message = traverseFileSystem(currentPath);
    if (!message)
        return `Directory not found ${currentPath.join("/")}`;
    return message;
}

/**
 * Handles the 'cd' command to change the current directory path.
 * 
 * @param {string[]} args - The command and its arguments as an array.
 * @returns {string} An error message if the directory doesn't exist, otherwise an empty string.
 */
function handleCd(args) {
    if (args.length < 2) {
        currentPath = ["home", "ayush"];
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
    currentPath = newPath;
    return "";
}

/**
 * Adds a new command line interface section to the terminal and sets up input listener.
 */
function addNewCommandLine() {

    const terminalBody = document.querySelector(".terminalBody");
    const userShellInput = document.createElement("div");
    userShellInput.className = "userShell";

    const displayPath =
        currentPath.length > 0 ? `/${currentPath.join("/")}` : "/";

    userShellInput.innerHTML = `<label for="userCommand" class="title">
                    <div class="userInfo">visitor@visitor0943: ~<span class="directory">${displayPath}</span> $</div>
                </label>
                <div class="userInput">
                    <input class="userCommand" name="userCommand" type="text" size="51" autofocus>
                </div>`;

    terminalBody.appendChild(userShellInput);

    userShellInput.querySelector(".userCommand").focus();
    userShellInput
        .querySelector(".userCommand")
        .addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                const command = e.target.value;
                argParse(command);
            }
        });

    terminalBody.scrollTop = terminalBody.scrollHeight;
}

/**
 * Adds a message output to the terminal.
 * 
 * @param {string} message - The message to display.
 * @param {boolean} [success=true] - Whether the message indicates success or not.
 */
function addMessage(message, success = true) {
    Array.from(document.getElementsByTagName("input")).forEach(input => {
        input.disabled = true;
    });
    if (success) {

        const terminalBody = document.querySelector(".terminalBody");
        const userShellOutput = document.createElement("div");
        userShellOutput.className = "userShell";
        userShellOutput.innerHTML = `                
        <div class="userOutput"></div>`;

        userShellOutput.querySelector(".userOutput").textContent = message;
        terminalBody.appendChild(userShellOutput);
    }
}


/**
 * Parses the user input command and triggers the appropriate handler (cd, ls, etc.).
 *
 * @param {string} command - The full command string input by the user.
 */
function argParse(command) {
    document.activeElement.blur();
    console.log(command);

    let commandArgs = command.split(" ");
    console.log(commandArgs);

    let message = "";

    switch (commandArgs[0]) {
        case "help":
            message = handleHelp(commandArgs);
            if (message) {
                addMessage(message);
            }
            addNewCommandLine();
            break;

        case "clear":
            message = handleClear(commandArgs);
            addMessage(message, false);
            addNewCommandLine();
            break;

        case "ls":
            currentPath = getCurrentPathFromDOM();
            message = handleLs();
            if (message) {
                addMessage(message);
            }
            addNewCommandLine();
            break;

        case "cd":
            message = handleCd(commandArgs);
            if (message) {
                addMessage(message);
            }
            addNewCommandLine();
            break;

        default:
            addMessage(`Command not found: ${commandArgs[0]}`)
            addNewCommandLine();
            break;
    }
}

/**
 * Initializes the terminal interface and sets up the first input listener.
 */
function main() {
    document.getElementById("hide").addEventListener("click", () => {
        document.querySelector(".terminal").style.display = "none";
    });

    let inputs = document.getElementsByTagName("input");
    inputs = Array.from(inputs);

    document.querySelector(".userCommand").addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            let command = document.querySelector(".userCommand").value;
            argParse(command);
        }
    });
}

main();
