# Contributing to JoSh (Journey Shell)

Thank you for your interest in contributing to **JoSh**! Your help in improving this terminal-style portfolio is greatly appreciated.

---

## 🚀 How to Contribute

### 1. Understand the Project Structure

```bash
josh/
├── favicon.ico        # Website favicon
├── package.json       # Project metadata and dependencies
├── package-lock.json  # Exact dependency versions
├── eslint.config.mjs  # ESLint configuration
├── .stylelintrc.json  # Stylelint configuration
├── index.html         # Main HTML file
├── style.css          # Global styles
├── jsconfig.json      # JS project settings (paths, aliases)
├── js/
│   ├── ui.js          # DOM manipulation & terminal UI logic
│   ├── filesystem.js  # Virtual file system logic
│   ├── manuals.js     # Manual/help content for commands
│   ├── commandHistory.js # Command history stack
│   ├── types.js       # JSDoc type definitions
│   ├── main.js        # Entry point: initializes terminal
│   ├── utils.js       # Helper functions
│   └── commands/      # All terminal commands
│       ├── cat.js
│       ├── cd.js
│       ├── clear.js
│       ├── date.js
│       ├── echo.js
│       ├── help.js
│       ├── history.js
│       ├── ls.js
│       ├── man.js
│       ├── pwd.js
│       ├── setname.js
│       ├── whoami.js
│       ├── social.js
│       ├── registry.js # Command registration
│       └── index.js    # Central export for commands
├── LICENSE             # License information
├── CODE_OF_CONDUCT.md  # Code of Conduct
├── CONTRIBUTING.md  # Contribution guidelines
└── README.md           # You're reading it!

```

_Key Directories and Files_

- `js/commands/`: The folder where you can add or modify terminal commands
- `js/filesystem.js`: This is where you edit the virtual file system
- `js/commands/registry.js`: The place to register new commands for the terminal to recognize

Familiarizing yourself with this layout will help you make more effective contributions.

### 2. Fork the Repository

Click the **Fork** button at the top right of the repository page to create your own copy.

### 3. Clone Your Fork

```bash
git clone https://github.com/<your-username>/josh.git
cd josh
```

### 4. Create a New Branch

Create a feature or fix branch based on the change you're making:

```bash
git checkout -b feat/your-feature-name
```

Use a descriptive name: `fix/prompt-glitch`, `docs/update-readme`, etc.

### 5. Make Your Changes

- Add or improve commands
- Fix bugs or UI issues
- Customize or enhance the virtual file system
- Update documentation

Make sure your changes follow the existing structure and are linted.

### 6. Commit Your Changes

Use **Conventional Commits** for clear and consistent commit messages:

`<type>(<scope>): <short message>`

| Type       | Description (Scope examples: command, ui, readme)     |
| ---------- | ----------------------------------------------------- |
| `feat`     | A new feature                                         |
| `fix`      | A bug fix                                             |
| `docs`     | Changes to documentation only                         |
| `style`    | Code formatting changes (no logic impact)             |
| `refactor` | Code improvements that don't fix bugs or add features |
| `test`     | Adding or modifying tests                             |
| `chore`    | Routine tasks, build scripts, config changes          |

#### Examples

```bash
feat(command): add weather command
fix(ui): correct prompt cursor alignment
docs: update usage instructions in README
```

### 7. Push Your Branch

```bash
git push origin feat/your-feature-name
```

### 8. Open a Pull Request

Go to the original repo and open a **Pull Request** from your forked branch.
Provide a clear description of what you changed and why.

---

## 🧠 Development Guides

- Keep command logic modular (`one file = one command`)
- Register new commands in `registry.js`
- Stick to the project’s code style and structure
- Run `npm run lint` to check for formatting issues
- Write meaningful commit messages

---

## 📬 Reporting Issues

Found a bug or have a feature suggestion? Open a [GitHub issue](https://github.com/JourneyCodesAyush/josh/issues) with clear steps to reproduce or a proposal.

When opening a pull request, GitHub will guide you through a form. Please fill it out completely so we can review your contribution efficiently. You can preview the [PR template here](.github/PULL_REQUEST_TEMPLATE.yml).

---

## 📄 Code of Conduct

This project follows [Code of Conduct](CODE_OF_CONDUCT.md).
By participating, you agree to maintain a respectful and inclusive environment.

---

## 🙌 Thank You!

Your contributions help make **JoSh** better. Whether it's fixing a typo or building a new command — every bit matters!
