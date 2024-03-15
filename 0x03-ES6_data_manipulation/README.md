ES6 Data Manipulation

This repository contains solutions for tasks related to ES6 data manipulation.

Installation

To get started, follow these instructions to set up the project:

	1.	Install Node.js 12.11.x by running the following commands in your terminal:

curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y


	2.	Verify the Node.js and npm versions:

node -v
npm -v


	3.	Install Jest, Babel, and ESLint by navigating to the project directory and running:

npm install



Task Solutions

Task 0: Basic List of Objects

	•	File: 0-get_list_students.js
	•	Description: Create a function named getListStudents that returns an array of objects. Each object should have three attributes: id (Number), firstName (String), and location (String).

Task 1: More Mapping

	•	File: 1-get_list_student_ids.js
	•	Description: Create a function named getListStudentIds that returns an array of ids from a list of objects. This function takes an array of objects as an argument.

Task 2: Filter

	•	File: 2-get_students_by_loc.js
	•	Description: Create a function named getStudentsByLocation that returns an array of objects located in a specific city. It accepts a list of students and a city as parameters.

Task 3: Reduce

	•	File: 3-get_ids_sum.js
	•	Description: Create a function named getStudentIdsSum that returns the sum of all student ids. It accepts a list of students as a parameter.

Task 4: Combine

	•	File: 4-update_grade_by_city.js
	•	Description: Create a function named updateStudentGradeByCity that returns an array of students for a specific city with their new grades. It accepts a list of students, a city, and new grades as parameters.

Task 5: Typed Arrays

	•	File: 5-typed_arrays.js
	•	Description: Create a function named createInt8TypedArray that returns a new ArrayBuffer with an Int8 value at a specific position. It accepts three arguments: length, position, and value.

Task 6: Set Data Structure

	•	File: 6-set.js
	•	Description: Create a function named setFromArray that returns a Set from an array. It accepts an array of any kind of elements as an argument.

Usage

To run tests for each task, use the following command:

npm run dev [task-main-file.js]

Replace [task-main-file.js] with the main file for the task you want to test.
