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
        default:
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
