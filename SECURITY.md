# 🔐 Security Policy

## Overview

**JoSh (Journey Shell)** is a static personal portfolio built using HTML, CSS, and vanilla JavaScript. It simulates a command-line interface in the browser but does **not** collect data, perform server-side operations, or interact with external APIs.

As a front-end-only project, it has a minimal attack surface — but it's still important to practice and encourage safe coding and deployment practices.

---

## 🔒 Security Considerations

- **Client-Side Only:** JoSh runs entirely in the browser. There are no backend services, file uploads, or network requests.
- **No User Data:** The project does not collect, store, or transmit personal data.
- **Sandboxed Environment:** All commands and interactions are simulated and scoped to the browser. They do not access the local file system or operating system.
- **Third-Party Dependencies:** While JoSh uses minimal external dependencies, always review and update them if you introduce any.
- **Fork Safety:** If you fork or deploy your own version, be mindful of adding scripts, analytics, or APIs that could introduce risks.

---

## 🐞 Reporting a Vulnerability

If you discover a security issue or have concerns about this project, please report it privately by emailing:

📧 [journeycodes.ayush@gmail.com](mailto:journeycodes.ayush@gmail.com)

Please **do not** disclose vulnerabilities publicly until a fix has been discussed or implemented.

---

Thank you for helping keep JoSh safe and secure!
