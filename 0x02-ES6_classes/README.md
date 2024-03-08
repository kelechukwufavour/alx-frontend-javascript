Here's a README file for your project based on the provided information:

```markdown
# Alx Frontend JavaScript Project

## Requirements

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command `npm run test`
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`

## Setup

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

## Tasks

### 0. You used to attend a place like this at some point

Implement a class named `ClassRoom` with one attribute `maxStudentsSize` (Number).

### 1. Let's make some classrooms

Import the `ClassRoom` class and implement a function named `initializeRooms` that returns an array of 3 `ClassRoom` objects with sizes 19, 20, and 34.

### 2. A Course, Getters, and Setters

Implement a class named `HolbertonCourse` with attributes `name` (String), `length` (Number), and `students` (array of Strings). Implement getters and setters for each attribute.

## Repository Information

- GitHub repository: [alx-frontend-javascript](https://github.com/kelechukwufavour/alx-frontend-javascript)
- Directory: 0x02-ES6_classes
- Files:
  - 0-classroom.js
  - 1-make_classrooms.js
  - 2-hbtn_course.js

``
