


// // 1. Write a js program to find the maximum between two numbers.


// // Function to find the maximum between two numbers
// function findMaximum(num1, num2) {
//     return num1 > num2 ? num1 : num2;
// }

// // Prompt user to enter two numbers
// const num1 = parseFloat(prompt("Enter the first number:"));
// const num2 = parseFloat(prompt("Enter the second number:"));

// // Check if both inputs are valid numbers
// if (!isNaN(num1) && !isNaN(num2)) {
//     // Find the maximum and display it
//     const max = findMaximum(num1, num2);
//     console.log(`The maximum between ${num1} and ${num2} is: ${max}`);
// } else {
//     console.log("Invalid input. Please enter valid numbers.");
// }
// ``

// Function to find the maximum between two numbers
function findMaxBetweenTwoNumbers() {
    var num1 = parseFloat(prompt("Enter first number:"));
    var num2 = parseFloat(prompt("Enter second number:"));
    var max = num1 > num2 ? num1 : num2;
    alert("Maximum between " + num1 + " and " + num2 + " is: " + max);
}

// Function to find the maximum between three numbers
function findMaxBetweenThreeNumbers() {
    var num1 = parseFloat(prompt("Enter first number:"));
    var num2 = parseFloat(prompt("Enter second number:"));
    var num3 = parseFloat(prompt("Enter third number:"));
    var max = Math.max(num1, num2, num3);
    alert("Maximum between " + num1 + ", " + num2 + " and " + num3 + " is: " + max);
}

// Function to check whether a number is negative, positive or zero
function checkNumber() {
    var num = parseFloat(prompt("Enter a number:"));
    if (num > 0) {
        alert(num + " is positive.");
    } else if (num < 0) {
        alert(num + " is negative.");
    } else {
        alert("The number is zero.");
    }
}

// Function to check whether a number is divisible by 5 and 11 or not
function checkDivisibility() {
    var num = parseFloat(prompt("Enter a number:"));
    if (num % 5 === 0 && num % 11 === 0) {
        alert(num + " is divisible by 5 and 11.");
    } else {
        alert(num + " is not divisible by 5 and 11.");
    }
}

// Function to check whether a number is even or odd
function checkEvenOrOdd() {
    var num = parseFloat(prompt("Enter a number:"));
    if (num % 2 === 0) {
        alert(num + " is even.");
    } else {
        alert(num + " is odd.");
    }
}

// Function to check whether a year is leap year or not
function checkLeapYear() {
    var year = parseInt(prompt("Enter a year:"));
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        alert(year + " is a leap year.");
    } else {
        alert(year + " is not a leap year.");
    }
}

// Function to check whether a character is vowel or consonant
function checkVowelOrConsonant() {
    var character = prompt("Enter a character:").toLowerCase();
    var vowels = "aeiou";
    if (vowels.includes(character)) {
        alert(character + " is a vowel.");
    } else {
        alert(character + " is a consonant.");
    }
}

// Function to check whether a character is uppercase or lowercase alphabet
function checkUpperCaseOrLowerCase() {
    var character = prompt("Enter a character:");
    if (character >= 'A' && character <= 'Z') {
        alert(character + " is an uppercase alphabet.");
    } else if (character >= 'a' && character <= 'z') {
        alert(character + " is a lowercase alphabet.");
    } else {
        alert("Please enter an alphabet.");
    }
}

// Function to input the week number and print weekday
function printWeekday() {
    var weekNumber = parseInt(prompt("Enter the week number (1-7):"));
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (weekNumber >= 1 && weekNumber <= 7) {
        alert("Weekday for week " + weekNumber + " is: " + weekdays[weekNumber - 1]);
    } else {
        alert("Invalid week number. Please enter a number between 1 and 7.");
    }
}

// Function to input the month number and print the number of days in that month
function printDaysInMonth() {
    var monthNumber = parseInt(prompt("Enter the month number (1-12):"));
    var daysInMonth = new Date(2024, monthNumber, 0).getDate();
    alert("Number of days in month " + monthNumber + " is: " + daysInMonth);
}

// Function to count a minimum number of notes in a given amount
function countMinimumNotes() {
    var amount = parseInt(prompt("Enter the amount:"));
    var notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    var count = 0;
    for (var i = 0; i < notes.length; i++) {
        count += Math.floor(amount / notes[i]);
        amount %= notes[i];
    }
    alert("Minimum number of notes required: " + count);
}

// Function to input marks of five subjects and calculate percentage and grade
function calculateGrade() {
    var physics = parseFloat(prompt("Enter marks in Physics:"));
    var chemistry = parseFloat(prompt("Enter marks in Chemistry:"));
    var biology = parseFloat(prompt("Enter marks in Biology:"));
    var mathematics = parseFloat(prompt("Enter marks in Mathematics:"));
    var computer = parseFloat(prompt("Enter marks in Computer:"));
    var totalMarks = physics + chemistry + biology + mathematics + computer;
    var percentage = (totalMarks / 500) * 100;
    var grade;
    if (percentage >= 90) {
        grade = 'A';
    } else if (percentage >= 80) {
        grade = 'B';
    } else if (percentage >= 70) {
        grade = 'C';
    } else if (percentage >= 60) {
        grade = 'D';
    } else if (percentage >= 40) {
        grade = 'E';
    } else {
        grade = 'F';
    }
    alert("Percentage: " + percentage.toFixed(2) + "%\nGrade: " + grade);
}

// Function to input basic salary and calculate gross salary
function calculateGrossSalary() {
    var basicSalary = parseFloat(prompt("Enter basic salary:"));
    var hra, da;
    if (basicSalary <= 10000) {
        hra = basicSalary * 0.2;
        da = basicSalary * 0.8;
    } else if (basicSalary <= 20000) {
        hra = basicSalary * 0.25;
        da = basicSalary * 0.9;
    } else {
        hra = basicSalary * 0.3;
        da = basicSalary * 0.95;
    }
    var grossSalary = basicSalary + hra + da;
    alert("Gross Salary: " + grossSalary.toFixed(2));
}

// Function to input electricity unit charges and calculate total electricity bill
function calculateElectricityBill() {
    var units = parseInt(prompt("Enter electricity units consumed:"));
    var totalBill = 0;
    if (units <= 50) {
        totalBill = units * 0.5;
    } else if (units <= 150) {
        totalBill = 50 * 0.5 + (units - 50) * 0.75;
    } else if (units <= 250) {
        totalBill = 50 * 0.5 + 100 * 0.75 + (units - 150) * 1.20;
    } else {
        totalBill = 50 * 0.5 + 100 * 0.75 + 100 * 1.20 + (units - 250) * 1.50;
    }
    totalBill *= 1.2; // Adding 20% surcharge
    alert("Total Electricity Bill: Rs. " + totalBill.toFixed(2));
}