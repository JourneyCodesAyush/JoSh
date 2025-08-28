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
        whoami: "Print the username"
    },
    dev: {
        "script.js": `
               console.log("Hello World");
                `.trim(),
    },
};

let currentPath = ["home", "ayush"];

/**
 * Retrieves the current path from the DOM by extracting the text from elements with class "directory".
 * 
 * @returns {string[]} An array of strings representing the current directory path.
 */
function getCurrentPathFromDOM() {
    let directory = document.querySelectorAll(".directory");
    directory = Array.from(directory);

    let lastDirectory = directory[directory.length - 1];

    if (directory.length === 0) {
        return [];
    }

    let dirText = lastDirectory.innerText.split("/").filter(Boolean);
    return dirText;
}

/**
 * Traverses the file system based on the provided command (path) and returns the contents of that directory.
 * 
 * @param {string[]} command - The path as an array of strings representing directory names.
 * @returns {string} A newline-separated string of items in the target directory, or empty string if not found.
 */
function traverseFileSystem(command) {
    let dir = fileSystem;

    for (const part of command) {
        if (part in dir) {
            dir = dir[part];
        } else {
            return "";
        }
    }
    let files = Object.keys(dir);
    return files.join("\n");
}


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
 * Handles the 'cat' command to display the content of a file.
 * 
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

/**
 * Handles the 'date' command by returning the current date.
 * 
 * @returns {string} - The current system date in the format DD/MM/YYYY.
 */
function handleDate() {

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return `${day}/${month}/${year}`
}

/**
 * Handles the 'theme' command by changint the current theme.
 * It checks the current theme and switches to the opposite one. The preference is saved in sessionStorage 
 * so that it persists across page reloads.
 * 
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

/**
 * Handles the 'echo' command by printing user-provided text to the terminal.
 * It joins all arguments after 'echo' and displays them using addMessage().
 * 
 * @param {string[]} args - The command arguments; everything after 'echo' is treated as text.
 * @returns {void}
 */
function handleEcho(args) {

    let message = args.slice(1).join(" ").trim();
    addMessage(message);

}

/**
 * Retrieves the current username stored in sessionStorage.
 * If no username is set, returns "visitor" as a default.
 * 
 * @returns {string} The username currently stored in sessionStorage or "visitor".
 */
function handleWhoAmI() {

    const userName = sessionStorage.getItem("userName") || "visitor";
    return userName;

}

/**
 * Adds a new command line interface section to the terminal and sets up input listener.
 */
function addNewCommandLine() {

    const terminalBody = document.querySelector(".terminalBody");
    const userShellInput = document.createElement("div");
    userShellInput.className = "userShell";

    const userName = sessionStorage.getItem("userName") || "visitor";
    const uniqueNum = sessionStorage.getItem("uniqueNum") || "1729"
    const displayPath =
        currentPath.length > 0 ? `/${currentPath.join("/")}` : "/";

    userShellInput.innerHTML = `<label for="userCommand" class="title">
                    <div class="userInfo">${userName}@${userName}${uniqueNum}: ~<span class="directory">${displayPath}</span> $</div>
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

        case "cat":
            message = handleCat(commandArgs);
            if (message) {
                addMessage(message);
            }
            addNewCommandLine();
            break;

        case "setname":
            if (commandArgs.length < 2) {
                addMessage("Usage: setname [your_name]")
            }
            else {
                sessionStorage.setItem("userName", commandArgs[1])
                addMessage(`Username set to ${commandArgs[1]}`)
            }
            addNewCommandLine();
            break;

        case "pwd":
            if (commandArgs.length > 1) {
                addMessage("Usage: pwd (No optional arguments)");
            }
            else {
                let pathStr = "/" + currentPath.join("/")
                if (pathStr.startsWith("/home/ayush")) {
                    pathStr = pathStr.replace("/home/ayush", "~")
                }
                addMessage(pathStr);
            }
            addNewCommandLine();
            break;

        case "date":
            if (commandArgs.length > 1) {
                addMessage("Usage: date (No optional arguments)")
            }
            else {
                const date = handleDate();
                addMessage(date)
            }
            addNewCommandLine();
            break;

        case "theme":
            if (commandArgs.length > 1) {
                addMessage("Usage: theme (No optional arguments)")
            }
            else {
                handleTheme();
            }
            addNewCommandLine();
            break;

        case "echo":
            if (commandArgs.length < 2) {
                addMessage("Usage: echo <text you want to print>")
            }
            else {
                handleEcho(commandArgs);
            }
            addNewCommandLine();
            break;

        case "whoami":
            if (commandArgs.length > 1) {
                addMessage("Usage: whoami (No arguments)")
            }
            else {
                const whoami = handleWhoAmI();
                addMessage(whoami);
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

    const uniqueNum = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
    sessionStorage.setItem("uniqueNum", uniqueNum);


    // document.querySelector(".userCommand").addEventListener("keypress", (e) => {
    //     if (e.key === "Enter") {
    //         let command = document.querySelector(".userCommand").value;
    //         argParse(command);
    //     }
    // });

    addNewCommandLine();
}

main();
