# Contributing to JoSh (Journey Shell)

Thank you for your interest in contributing to **JoSh**! Your help in improving this terminal-style portfolio is greatly appreciated.

---

## 🚀 How to Contribute

### 1. Fork the Repository

Click the **Fork** button at the top right of the repository page to create your own copy.

### 2. Clone Your Fork

```bash
git clone https://github.com/<your-username>/josh.git
cd josh
```

### 3. Create a New Branch

Create a feature or fix branch based on the change you're making:

```bash
git checkout -b feat/your-feature-name
```

Use a descriptive name: `fix/prompt-glitch`, `docs/update-readme`, etc.

### 4. Make Your Changes

- Add or improve commands
- Fix bugs or UI issues
- Customize or enhance the virtual file system
- Update documentation

Make sure your changes follow the existing structure and are linted.

### 5. Commit Your Changes

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

### 6. Push Your Branch

```bash
git push origin feat/your-feature-name
```

### 7. Open a Pull Request

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
