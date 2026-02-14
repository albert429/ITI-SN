//In Lab Tasks

// console.log('What is the official name of JavaScript?');

// let answer = prompt('What is the official name of JavaScript?', '');

// if (answer === 'ECMAScript') {
//   alert('Right!');
// } else {
//   alert("You don't know? ECMAScript!");
// }

// //TASK1
// let value = prompt("Who's there?", '');

// if (value === 'Admin' || value === 'admin' || value === 'ADMIN') {
//   let password = prompt('Password?', '');

//   if (password === 'TheMaster') {
//     alert('Welcome!');
//   } else if (password === '' || password === null) {
//     alert('Canceled');
//   } else {
//     alert('Wrong password');
//   }
// } else if (value === '' || value === null) {
//   alert('Canceled');
// } else {
//   alert("I don't know you");
// }

// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.grades = [];
//   }
// }

// const students = [];

// const classifyAverage = (average) => {
//   if (average >= 90) return 'Excellent';
//   if (average >= 80) return 'Very Good';
//   if (average >= 70) return 'Good';
//   if (average >= 60) return 'Pass';
//   return 'Fail';
// };

// while (true) {
//   const nameInput = prompt('Enter student name or STOP to finish', '');
//   if (nameInput === null || nameInput === 'stop') {
//     break;
//   }

//   const name = nameInput;
//   const age = prompt('Enter student age', '');

//   const student = new Student(name, age);
//   const grades = [];

//   while (true) {
//     const gradeInput = prompt(
//       'Enter a grade (0-100) or type stop to finish',
//       '',
//     );

//     if (gradeInput === null || gradeInput === 'stop') {
//       if (grades.length < 3) {
//         alert('Please enter at least 3 grades before finishing.');
//         continue;
//       }
//       break;
//     }

//     const gradeNumber = Number(gradeInput);
//     const isValidNumber = Number.isFinite(gradeNumber);
//     const isInRange = gradeNumber >= 0 && gradeNumber <= 100;

//     if (!isValidNumber || !isInRange) {
//       alert('Invalid grade. Enter a number between 0 and 100.');
//       continue;
//     }

//     grades.push(gradeNumber);
//   }

//   student.grades = grades;
//   students.push(student);

//   const sortedGrades = [...grades].sort((a, b) => a - b);
//   const totalGrades = grades.length;
//   const average = grades.reduce((a, b) => a + b, 0) / totalGrades;
//   const status = classifyAverage(average);

//   console.log('Student:', student.name);
//   console.log('Total grades entered:', totalGrades);
//   console.log('Sorted grades:', sortedGrades);
//   console.log('Average grade:', average);
//   console.log('Highest grade:', sortedGrades[sortedGrades.length - 1]);
//   console.log('Lowest grade:', sortedGrades[0]);
//   console.log('Status:', status);
// }

// if (students.length > 0) {
//   console.log(
//     'All student names:',
//     students.map((s) => s.name),
//   );
//   students.forEach((student) => {
//     const totalGrades = student.grades.length;
//     const average =
//       totalGrades > 0
//         ? student.grades.reduce((a, b) => a + b, 0) / totalGrades
//         : 0;
//     console.log(`Average for ${student.name}:`, average);
//   });
// }

// function pow(a, b) {
//   let result = a;
//   for (let i = 1; i < b; i++) {
//     result *= a;
//   }
//   return result;
// }

// let a = prompt('Enter a number', '');
// let b = prompt('Enter a power', '');
// alert(pow(a, b));
