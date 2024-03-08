Here's a README file for your project based on the provided information:

```markdown
# Alx Frontend JavaScript Project

## Description

This project is a JavaScript frontend application developed as part of the Alx School curriculum. It includes features for managing frontend development tasks, such as setting up Jest, Babel, and ESLint. The project is designed to be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.

## Setup

To set up the project, follow these steps:

1. Install NodeJS 12.11.x in your home directory:
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   ```

2. Verify NodeJS and npm versions:
   ```bash
   nodejs -v
   npm -v
   ```

3. Install Jest, Babel, and ESLint in your project directory:
   ```bash
   npm install
   ```

## Configuration Files

The project includes the following configuration files:

- `package.json`: Contains scripts for linting, testing, and development.
- `babel.config.js`: Babel configuration for transpiling JavaScript code.
- `.eslintrc.js`: ESLint configuration for linting JavaScript code.

## Usage

To use this project, follow these steps:

1. Ensure the project dependencies are installed (see Setup section).
2. Open the project in your preferred code editor (allowed editors: vi, vim, emacs, Visual Studio Code).
3. Use the provided scripts in `package.json` to lint your code, run tests, or start development mode.
   - To run tests: `npm test`

## Response Data Format

The project includes utility functions for handling API responses:

- `uploadPhoto`: Returns a response object with the format `{ status: 200, body: 'photo-profile-1' }`.
- `createUser`: Returns a response object with the format `{ firstName: 'Guillaume', lastName: 'Salva' }`.

## Tasks

### 0. Keep every promise you make and only make promises you can keep

Implement a function `getResponseFromAPI()` that returns a Promise. Run the provided test script to verify.

### 1. Don't make a promise...if you know you can't keep it

Implement a function `getFullResponseFromAPI(success)` that returns a Promise. The promise resolves with an object `{ status: 200, body: 'Success' }` if `success` is true, otherwise, it rejects with an error message.

## Repository Information

- GitHub repository: [alx-frontend-javascript](https://github.com/kelechukwufavour/alx-frontend-javascript)
- Directory: 0x01-ES6_promise
- File: 0-promise.js

```
