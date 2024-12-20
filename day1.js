var age = 12; 
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("you are not eligible to vote");
}



var gender = "male";
var age1 = 22;
if (gender === "male") {
  if (age1 >= 21) {
    console.log("You are eligible for marriage.");
    
  } else {
    console.log("You are not eligible for marriage.");
    
  }
} else if (gender === "female") {
  if (age1 >= 18) {
    console.log("You are eligible for marriage.");
  } else {
    console.log("You are not eligible for marriage.");
  }
} 


var age2 = 12; 
var eligibility = 
  age2 >= 18 ? "You are eligible to apply for a driving license." : "You are not eligible to apply for a driving license.";

console.log(eligibility);





var attendancePercentage = 80; 
var attendance = 
  attendancePercentage >= 75 
    ? "You are eligible to appear for the exam." 
    : "You are not eligible to appear for the exam. Attendance must be 75% or higher.";

console.log(attendance);



var age3 = 65;
var discount = 
  age3 >= 60 
    ? "You qualify for the senior citizen discount." 
    : "You do not qualify for the senior citizen discount.";

console.log(discount);