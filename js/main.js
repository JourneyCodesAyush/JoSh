
import { addNewCommandLine } from "./ui.js";

/**
 * Initializes the terminal interface and sets up the first input listener.
 */
function main() {
    document.getElementById("hide").addEventListener("click", () => {
        console.log("Main content being loaded...")

        const terminal = document.querySelector(".terminal");
        terminal.style.display = "none";

        const restoreDiv = document.createElement("div");
        restoreDiv.innerHTML = `Restore <p>⤒</p>`;
        restoreDiv.className = "restore";

        restoreDiv.addEventListener("click", () => {

            restoreDiv.remove();
            terminal.style.display = "block";
        });

        terminal.parentNode.insertBefore(restoreDiv, terminal.nextSibling);
    });

    console.log("Main content being loaded...")

    document.getElementById("quit").addEventListener("click", () => {
        const terminal = document.querySelector(".terminal");
        terminal.remove();

        const footer = document.querySelector(".message");
        footer.classList.add("quitState");
    });

    const uniqueNum = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
    sessionStorage.setItem("uniqueNum", uniqueNum);

    // console.log("Main content being loaded")

    const terminalBody = document.querySelector(".terminalBody");
    const welcomeDiv = document.createElement("div")
    welcomeDiv.classList = "welcomeMessage"
    welcomeDiv.innerHTML = `
          <span>Welcome to the JoSh (Journey Shell)! Type</span>
          <span class="command"> help</span>
          <span> to see the list of possible commands</span>
        
`
    // terminalBody.appendChild(welcomeDiv);

    const firstChild = terminalBody.firstElementChild;
    if (firstChild && firstChild.nextSibling) {
        terminalBody.insertBefore(welcomeDiv, firstChild.nextSibling);
    } else {
        terminalBody.appendChild(welcomeDiv);
    }

    addNewCommandLine();
}

document.addEventListener("DOMContentLoaded", () => {
    main();
});
