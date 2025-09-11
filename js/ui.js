/**
 * @module js/ui
 * 
 * Handles terminal UI DOM manipulation.
 *
 * Manages adding new command lines, focusing input, scrolling the terminal,
 * and displaying user prompts with username and current path.
 *
 * @exports addNewCommandLine
 * @exports addMessage
 */

import { argParse } from "./argparse.js";
import { currentPath } from "./filesystem.js";

/**
 * Adds a new command line interface section to the terminal and sets up input listener.
 */
function addNewCommandLine() {

    const terminalBody = document.querySelector(".terminalBody");
    const userShellInput = document.createElement("div");
    userShellInput.className = "userShell";

    const userName = localStorage.getItem("userName") || "visitor";
    const uniqueNum = sessionStorage.getItem("uniqueNum") || "1729";
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
        <div class="userOutput">${message}</div>`;

        // userShellOutput.querySelector(".userOutput").textContent = message;
        terminalBody.appendChild(userShellOutput);
    }
}

export {
    addNewCommandLine,
    addMessage
};