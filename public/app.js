                                      // Chap 01 "ALERTS"


// 1. Write a script to greet your website visitor using JS alert box.
// alert(" We are glad to see you in our Website! plz let Us know How we can help You .. ");

// // 2. Write a script to display following message on your web page:
// alert("Error! Please enter a valid password.");

// 3. Write a script to display following message on your web 
// page: (Hint : Use line break)
// document.write("Welcome to JS Land...<br>");
// document.write("Happy Coding!");

// 4. Write a script to display following messages in sequence:
// alert("Welcome to JS Land...");

// document.write("Happy Coding! <br>");
// document.write("Prevent this page from creatingadditional dialogs");

// 5. Generate the following message through browser’s 
// developer console:
// console.log("Hello... I can run JS through my web browser's console");

// 6. Make use of alerts in your new/existing HTML & CSS project.

// 7. Practice placement of <script></script> element in following sections of your project in exercise 6:

//a. Head
//   <!-- <script>
//         document.write("Hello World");
//     </script> -->

// b. Body (before your page’s HTML)

// c. Body (inside your page’s HTML)

// d. Body (after your page’s HTML)


                                     // Chap 02 "VARIABLES FOR STRINGS"


// 1. Declare a variable called username.
// var usename;

// // 2. Declare a variable called myName & assign to it a string that represents your Full Name.
// var myName = "Abdullah Mushtaq";


// // 3. Write script to,,

// // a) Declare a JS variable, titled message.
// var message;
// // b) Assign “Hello World” to variable message
// message = "Hello World";
// // c) Display the message in alert box.
// alert(message);

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
// var name = "M Shakir";
// var age = "23 Years Old";
// var profession = "Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(profession);

// 5. Write a script to display the following alert using one JS variable:
// document.write("PIZZA <br>");
// document.write("PIZZ <br>");
// document.write("PIZ <br>");
// document.write("PI <br>");
// document.write("P");

// document.write("PIZZA"  , "PIZZ");

// 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)
// var mine = "My email address is ";
// var email = "abdullahmushtaq933@gmail.com";
// alert(mine + email);

// // 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the followingmessage in an alert box:
// var det = "I am trying to learn from the book ";
// var book = "A smarter way to learn JavaScript";
// var c = det + book;
// alert(c);

// // 8. Write a script to display this in browser through JS
// document.write("Yah! I can write HTML content through JavaScript");

// // 9. Store following string in a variable and show in alert and browser through JS
// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");


                                    // Chap 03 "VARIABLES FOR NUMBERS"


// 1. Declare a variable called age & assign to it your age. Show your age in an alert box
// var age = 22;
// alert("I am " + age + " years old");

// // 2. Declare & initialize a variable to keep track of how manytimes a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
// var visit;
// visit = 14;
// alert("You have visited this site " + visit + " times");

//3. Declare a variable called birthYear & assign to it yourbirth year. Show the following message in your browser:
// var birthYear = 2000;
// document.write("My birth year is " + birthYear + "<br>");
// document.write("Data type of my declared variable is number");

//4. A visitor visits an online clothing storewww.xyzClothing.com . Write a script to store in variables the following information:

// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order

// Show the following message in your browser: 
// “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

// var visitorsName = "John Doe";
// var productTitle= " XYZ Clothing store";
// var quantity = 5;
// document.write(visitorsName + " ordered " + quantity + "<b> T-shirt</b>(s) on " +productTitle);


                                     // Chap 04 "VARIABLE NAMES: LEGAL & ILLEGAL"


// 2. Declare 5 legal & 5 illegal variable names.

// Legal Variables
// var abcd;
// var _abc;
// var $abc;
// var abc1;
// var ab_c;

// // Illegal Variables
// var 1234;
// var %abcs;
// var &ab1;
// var .abc;
// var ab-;


// 3. Display this in your browser

// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

// document.write("<h2> Rules for naming JS variables </h2> <br>");

// document.write("Variable names can only contain numbers, $ and _. For example : $my_1stVariable <br>");
// document.write(" Variables must begin with a letter, $ or _ . For example $name, _name or name <br>");
// document.write("Variable names are case sensitive <br>");
// document.write("Variable names should not be JS keywords");


                                      // Chap 05 "MATH EXPRESSIONS"


// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// var value1 = 7;
// var value2 = 9;
// var sum = value1 + value2;
// document.write(sum);
// document.write("Sum of " +value1+ " and " +value2+ " is " +sum );

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

//Subtraction
// var value1 = 7;
// var value2 = 9;
// var diff = value1 - value2;
// document.write(diff);
// document.write("Difference between " +value1+ " and " +value2+ " is " +diff );

//Multiplication
// var value1 = 7;
// var value2 = 9;
// var product = value1 * value2;
// document.write(product);
// document.write("Product of " +value1+ " and " +value2+ " is " +product );

//Division
// var value1 = 9;
// var value2 = 3;
// var division = value1 / value2;
// // document.write(division);
// document.write("Division of " +value1+ " by " +value2+ " is " +division );

//Modulus
// var value1 = 20;
// var value2 = 9;
// var remainder = value1 % value2;
// // document.write(remainder);
// document.write("Remainder of " +value1+ " and " +value2+ " is " +remainder);

// 3. Do the following using JS Mathematic Expressions


// // a. Declare a variable.
// var values;

// // b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// document.write("Value after variable declaration is Undefined <br>");

// // c. Initialize the variable with some number.
// values = 29;

// // d. Show the value of variable in your browser like “Initial value: 5”
// document.write ("Initial value: " +values+ "<br>");

// // e. Increment the variable.
// values += 1;

// // f. Show the value of variable in your browser like “Valueafter increment is: 6”.
// document.write( "Value after Increment is: " +values+ "<br>");

// // g. Add 7 to the variable.
// values = values + 7;
// document.write("Value after addition is: " +values+ "<br>");

// // i. Decrement the variable.
// values -= 1;

// // j. Show the value of variable in your browser like “Value after decrement is: 12”.
// document.write("Value after decrement is: " +values+ "<br>");

// // k. Show the remainder after dividing the variable’s value by 3. 
// values = values % 3;

// // l. Output : “The remainder is : 0”.
// document.write("The remainder is: " +values);

//4. Cost of one movie ticket is 600 PKR. Write a script to storeticket price in a variable & calculate the cost of buying 5 ticketsto a movie. Example output:
// var ticketPrice = 600;
// var buying = 5;
// var cost = ticketPrice * buying;
// document.write("Total cost of buy " +buying+ " tickets to a movie is " +cost+ "PKR");

// 5. Write a script to display multiplication table of any number in your browser. E.g

// document.write("Table of 5 <br>");

// var num1 = 5;
// var num2 = 1;
// var res1 = num1 * num2;
// document.write( +num1+ " x " +num2+ " = " +res1+ "<br>" );

// var num1 = 5;
// var num2 = 2;
// var res1 = num1 * num2;
// document.write( +num1+ " x " +num2+ " = " +res1+ "<br>" );

// var num1 = 5;
// var num2 = 3;
// var res1 = num1 * num2;
// document.write( +num1+ " x " +num2+ " = " +res1+ "<br>" );

// var num1 = 5;
// var num2 = 4;
// var res1 = num1 * num2;
// document.write( +num1+ " x " +num2+ " = " +res1+ "<br>" );

// var num1 = 5;
// var num2 = 5;
// var res1 = num1 * num2;
// document.write( +num1+ " x " +num2+ " = " +res1+ "<br>" );

// var num1 = 5;
// var num2 = 6;
// var res1 = num1 * num2;
// document.write( +num1+ " x " +num2+ " = " +res1+ "<br>" );

// var num1 = 5;
// var num2 = 7;
// var res1 = num1 * num2;
// document.write( +num1+ " x " +num2+ " = " +res1+ "<br>" );

// var num1 = 5;
// var num2 = 8;
// var res1 = num1 * num2;
// document.write( +num1+ " x " +num2+ " = " +res1+ "<br>" );

// var num1 = 5;
// var num2 = 9;
// var res1 = num1 * num2;
// document.write( +num1+ " x " +num2+ " = " +res1+ "<br>" );

// var num1 = 5;
// var num2 = 10;
// var res1 = num1 * num2;
// document.write( +num1+ " x " +num2+ " = " +res1+ "<br>" );

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.

// a. Store a Celsius temperature into a variable.
// var c = 39;

// // b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// var Fahrenheit = (c * 9 / 5) + 32;
// document.write("39C is " +Fahrenheit+ "F <br>");

// // c. Now store a Fahrenheit temperature into a variable.
// var f = 150;

// // d. Convert it to Celsius & output “NNoF is NNoC”.
// var celsius = (f - 32) * 5 / 9 ;
// document.write("150F is " +celsius+ "C");

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store th following in variables


// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// document.write("<h1> Shopping Cart </h1> <br><br>");

// var item1 = 700;
// document.write("Price of item 1 is " +item1+ "<br>");
// var qtyOfItem1 = 3;
// document.write("Quantity if item 1 is " +qtyOfItem1+ "<br>");

// var totalCostOfItem1 = item1 * qtyOfItem1;

// var item2 = 1700;
// document.write("Price of item 2 is " +item2+ "<br>");
// var qtyOfItem2 = 2;
// document.write("Quantity if item 2 is " +qtyOfItem2+ "<br>");

// var totalCostOfItem2 = item2 * qtyOfItem2;

// var shippingCharges = 170;
// document.write("Shipping Charges " +shippingCharges+ "<br> <br>");

// // Compute the total cost & show the receipt in your browser.
// var totalCost = totalCostOfItem1 + totalCostOfItem2 + shippingCharges;

// document.write("Total cost of your order is " +totalCost);

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser.

// var totalMarks = 600;
// document.write("Total Marks: " +totalMarks+ "<br>");
// var obtainedMarks = 473;
// document.write("Marks Obtained: " +obtainedMarks+ "<br>");

// var candidatePercentage = (obtainedMarks / totalMarks) * 100 ;

// document.write("Percentage: " +candidatePercentage+ "%");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.

// document.write("<h1> Currency in PKR </h1> <br><br>");

// var dollarsInUS = 104.80;  
// var ten = 10;
// var convert1 = dollarsInUS * ten ;

// var saudiRiyals = 28; 
// var twentyFive = 25;
// var convert2 = saudiRiyals * twentyFive ;

// var totalAmount = convert1 + convert2 ;

// document.write("Total Currency in PKR: " +totalAmount);

                  //   OR                 The above code is Detailed___The below code is in single step

// var dollarsInUS = 104.80;  
// var saudiRiyals = 25; 
// document.write("Total Currency in PKR: " , ((dollarsInUS * 10) + (saudiRiyals * 28)) );

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// var arithmaticOperations = (5 * 10) / 2 ;
// document.write("The Result is " +arithmaticOperations);

// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.

// document.write("<h1> Age Calculator </h1> <br><br>");

// var currentYear = 2022;
// document.write("Current Year: " +currentYear+ "<br>");

// var birthYear = 2000;
// document.write("Birth Year: " +birthYear+ "<br>");

// var ages = currentYear - birthYear ;
// document.write("Your Age is: " +ages);

//12. The Geometrizer: Calculate properties of a circle.

// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, andoutput “The circumference is NN”.
// c. Calculate the area based on the radius, and output “The area is NN”.

// document.write("<h1> The Geometrizer </h1> <br><br>");

// var radius = 20;
// document.write("The Radius is: " +radius+ "<br>");

// var circumference = 2 * 3.142 * 20 ;  // circumference = 2πr
// document.write("The circumference is: " +circumference+ "<br>");

// var area = 3.142 * (20 * 20) ; // Area of a circle = πr^2
// document.write("The Area is: " +area);

// 13. The Lifetime Supply Calculator: Ever wonder howmuch a “lifetime supply” of your favorite snack is? Wonder no more.

// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.

// document.write("<h1> LifetimeSupply Calculator </h1> <br><br>");

// var favoriteSnack = "<b> Oreo </b>";
// document.write("Favorite Snack: " +favoriteSnack+ "<br>");

// var myCurrentAge = 22;
// document.write("Current Age: " +myCurrentAge+ "<br>");

// var myMaxAge = 63;
// document.write("Inshallah Estimated Maximum Age: " +myMaxAge+ "<br>");

// var snacksPerDay = 4;
// document.write("Amount of Snacks per day: " +snacksPerDay+ "<br>");

// var total_snacks_forTheRestOfYourLife = (myMaxAge - myCurrentAge) * snacksPerDay ;
// document.write("You will need " +total_snacks_forTheRestOfYourLife+ "<b> Oreo's </b> to last you until the ripe old age of 63");


                              // Chap 06-09 "MATH EXPRESSIONS"


// 1. Write a program to take a number in a variable, do therequired arithmetic to display the following result in your browser:
// var a = prompt("what is the value of a?");
// document.write("Result <br>" , "The value of a is: " +a+ "<hr>" , "<br>");

// a = ++a  ;
// document.write("The value of ++a is: " +a+ "<br>" , "Now the value of a is: " +a+ "<br><br><br>" );

// a = a++;
// document.write("The value of a++ is: " +a+ "<br>" , "Now tha value of a is: " +a+ "<br><br><br>" );

// a = --a;
// document.write("The value of --a is: " +a+ "<br>" , "Now the value of a is: " +a+ "<br><br><br>");

// a = a--;
// document.write("The value of a-- is: " +a+ "<br>" , "Now the value of a is: " +a);

// 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2;
// var b = 1;

// var firstValue = --a;
// document.write(+firstValue+ "<br>");

// var secondValue = --b;
// document.write(+secondValue+ "<br>");

// var thirdValue = ++b;
// document.write(+thirdValue+ "<br>");

// var fourthValue = b--;
// document.write(+fourthValue+ "<br><br>");

// var result = --a - --b + ++b + b-- ;  // 1-0+1+1

// document.write(result);

// 3. Write a program that takes input a name from user & greet the user.
// var name = prompt("Enter your Good Name!");
// alert(" ** Welcome to the 4th Batch of Jawaan Pakistan ** ");

// 4-5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default. 

// var a = +prompt("enter 1st number");
// var b = +prompt("enter 2nd num");
// var result = a * b ;
// document.write( +a+ " x " +b+ " = " +result+ "<br>" );

// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

// var english = +prompt("Enter Your English Subject Marks");
// var maths = +prompt("Enter Your Maths Subject Marks");
// var urdu = +prompt("Enter Your Urdu Subject Marks");

// var totalMarks = 100;


                             // Chap 09-11 "USER INPUT & CONDITIONAL STATEMENT"


// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

// var city = prompt("City Name");

// if (city == "karachi") {
//     alert("Welcome to the city of lights");
// }

// 2. Write a program to take “gender” as input from user. If theuser is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

// var gender = prompt("gender");

// if (gender == "male") {
//     alert("Good Morning Sir");

// }

// else if (gender == "female") {
//     alert("Good Morning Ma’am");
// }

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

// var trafficSignals = prompt("Traffic Signal colors");

// if (trafficSignals == "red") {
//     alert("Must Stop");
// }
// else if (trafficSignals == "yellow") {
//     alert("Ready to move");
// }
// else if (trafficSignals == "green") {
//     alert("Move now");
// }

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25 litres, show the message “Please refill the fuel in your car”

// var fuel = +prompt("remaining fuel in car " );

// if (fuel < 0.25) {
//     alert("Please refill Some Litres of fuel in your car");
// }

// 5. Run this script, & check whether alert message would bedisplayed or not. Record the outputs.

 // a
//    var a = 4;
//   if (++a === 5){
//   alert("given condition for variable a is true");  // Its working
//   }  

 // b
//  var b = 82;
//  if (b++ === 83){
//  alert("given condition for variable b is true"); // its not running
//  }
 
 // c
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");  // condition 2 working
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true"); // condition 4 working
// }

 // d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost){  // working
// alert("The cost equals");
// }

 // e 
// if (true){
// alert("True");  // true working
// }
// if (false){
// alert("False");
// }

//  // f
//  if("car" < "cat"){
// alert("car is smaller than cat");
// }

// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:

// document.write("<h1> Mark Sheet </h1> <br><br>");

// var math = parseFloat ( prompt("Enter maths marks <br>") ) ;
// var sindhi = parseFloat ( prompt("Enter sindhi marks <br>") ) ;
// var programming = parseFloat ( prompt("Enter programming marks <br>") ) ;

// // Total Grades
// var totalGrades = math + sindhi + programming ;

// // Obtained Marks
// // var ObtainedMarks = 

// // Percentage
// var percentage = (totalGrades / 300) * 100 ;

// document.write("Marks obtain: " +totalGrades+ "<br>");
// document.write("Percentage: " +percentage+ "<br>");
// document.write("Grade: " +grades);

// // Checking the condition for providing the grade to student based on percentage
// if (percentage >= 80) {
//     var grades = 'A-one';
//     document.write("Excellent");
// }
// else if (percentage >= 70) {
//     var grades = 'A';
//     document.write("Good");

// }
// else if (percentage >= 60) {
//     var grades = 'B';
//     document.write("You need to improve");

// }
// else {
//     var grades = 'Fail';
//     document.write("Sorry");

// }

// 7. Guess game:Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correctanswer”.
// b. If the guessed number +1 is the secret number, show“Close enough to the correct answer”.

// var Secretnumber = +prompt("Enter your Secret Number");

// if (Secretnumber <= 10) {
//     document.write("Bingo! Correctanswer");
// }
// else if (Secretnumber > 10 && Secretnumber < 12) {
//     document.write("Close enough to the correct answer");
// }

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// var num = +prompt("Enter number");

// var res = num / 3 ;

// if (res == num ) {
//     document.write("yes: ");
// }

// 9. Write a program that checks whether the given input is an even number or an odd number.

// var numberChecker = +prompt("Enter a Number to check" , "Enter Even/Odd Number");

// var remaining_1 = numberChecker % 2 ;

// if (remaining_1 == 0) {
//     document.write("Even");
// }
// else {
//     document.write("odd");
// }

// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temperature = +prompt("Temperature Checker");
// document.write("News: " +temperature+ "<br>");

// if (temperature > 40) {
//     document.write("It is too hot outside.");
// }
// else if (temperature > 30) {
//     document.write("The weather today is normal.");
// }
// else if (temperature > 20) {
//     document.write("Today's weather is cool.");
// }
// else if (temperature > 10) {
//     document.write("OMG! Today's weather is so cool.");
// }

// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)

// var firstNumber = parseFloat ( prompt("Enter 1st Number: " , "Enter 1st Number") ) ;
// var opearator = prompt( " Enter Any Operator (+, -, *, /, %): " );
// var secondNumber = parseFloat ( prompt("Enter 2nd Number: " , "Enter 2nd Number") ) ;
// console.log(firstNumber);
// console.log(opearator);
// console.log(secondNumber);

// var result;

// if (opearator == "+" ) {
//     console.log(result = firstNumber + secondNumber) ;
// }
// if (opearator == "-" ) {
//     console.log(result = firstNumber - secondNumber)  ;
// }
// if (opearator == "*" ) {
//     console.log(result = firstNumber * secondNumber)  ;
// }
// if (opearator == "/" ) {
//     console.log(result = firstNumber / secondNumber)  ;
// }
// if (opearator == "%" ) {
//     console.log(result = firstNumber % secondNumber)  ;
// }

// // REsult
// document.write("The Calculated Value of <b>My Calculator </b> is >>> " +result);



                               // Chap 12-13 " IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS "



// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

// var char = prompt("Enter Any String ??");
// x = char.toUpperCase;
// x = char.toLowerCase;

// if ( x ) {
//     document.write("Yes .. It is in Upper Case letters ");
//  }
//  else {
//      document.write("Ooops !! Lowers Case ");
// }


// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// var number = +prompt("Enter Number");

// if (number > 0 ) {
//     alert("Positive ");
// }
// else if (number < 0) {
//     alert("Negative ");
// }
// else if (number == 0) {
//     alert("Zero ");
// }


// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

// var vowels = ( ['a, e, i, o, u'] ) ;

// // var a = vowels.length; // length is 1 
// // alert(a);

// if (vowels) {
//     alert("True");
// }
// else {
//     alert("False");
// }

// 5. Write a program that,

    // a. Store correct password in a JS variable.
    // b. Asks user to enter his/her password
    // c. Validate the two passwords:
       // i. Check if user has entered password. If not, then give message “ Please enter your password ”
      // ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.

    // var user = [] ; 
    // var password =  "@_bse20s0100_@ " ;
    // code = prompt("Enter Your Password" , "Password");
    
    // if (code == password ) {
    //     alert("Correct! The password you entered matches the original password");
    // }
    // else {
    //     alert("Incorrct password");
    // }


// 6. This if/else statement does not work. Try to fix it:

// var greeting;
// var hour = 13;

// if (hour < 18) {
//  alert ( greeting = "Good day" ) ;
// }
// else {
//     alert(greeting = "Good evening");
// }

// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

// var time = prompt("Enter time" , "Enter time");



                                        // Chap 14-16 " ARRAYS  "



// // 1. Declare an empty array using JS literal notation to store student names in future.
// var studentNames = [] ;

// // 2. Declare an empty array using JS object notation to store student names in future.
//  Still we are not done with functions

// // 3. Declare and initialize a strings array.
// var arr3 = [ "Abdullah", "M Shakir", "Mustafa", "Sir Hashir", "Sir Talha <br>" ] ;
// document.write(arr3);

// // 4. Declare and initialize a numbers array.
// var arr4 = [ 23, 45, 67, 2419000, 4543, 0] ;
// document.write(arr4 + "<br>");

// // 5. Declare and initialize a boolean array.
// var arr5_bool = true;
// var arr6_bool = false;
// document.write(arr5_bool + "<br>");
// document.write(arr6_bool + "<br>");

// // 6. Declare and initialize a mixed array.
// var arr7 = [ "abdullah mushtaq" , 2.72 , 356 , "bse-20s-145  <br>" ] ;
// document.write(arr7);


// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

// document.write("<h1> Qualifications: </h1>  <br><br>");
// var qualification = [ "1) SSC <br>" , "2) HSC <br>" , "3) BCS <br>" , "4) BS <br>" , "5) BCOM <br>" , 
// "6) MS <br>" , "7)M. Phil <br>" , "8) PHD" ] ;
// document.write(qualification);

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students .

// var st_names = ["Michael" , "john" , "tony"] ;
// var st_score = [320 , 230 , 480] ;
// var totalMarks = 500;

// var percentage = st_score / totalMarks ;

// document.write("Score of " +st_names+ " is " +st_score+ ". " +percentage+ "<br>");

// 9. Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

// a (unshift Method)
// var colors = [ ' black ', ' green ', ' blue ', ' orange ', ' purple ', ' pink ' ];
// var c = prompt("enter color: ");
// colors.unshift (c);
// document.write(" The best of my Color'z <b> With ***Unshift*** Method </b> are: " +colors);

// b (push method)
// var colors = [ ' black ', ' green ', ' blue ', ' orange ', ' purple ', ' pink ' ];
// var c = prompt("enter color: ");
// colors.push (c);
// document.write(" The best of my Color'z <b> With ***Push*** Method </b> are: " +colors);

// c (unshift method)
// var colors = [ ' black ', ' green ', ' blue ', ' orange ', ' purple ', ' pink ' ];
// colors.unshift (' yellow ', ' red ', ' rose ');
// document.write(" The best of my Color'z <b> With ***Unshift*** Method </b> are: " +colors);

// d (shift method)
// var colors = [ ' black ', ' green ', ' blue ', ' orange ', ' purple ', ' pink ' ];
// colors.shift ();
// document.write(" The best of my Color'z <b> With ***Shift*** Method </b> are: " +colors);

// e (pop method)
// var colors = [ ' black ', ' green ', ' blue ', ' orange ', ' purple ', ' pink ' ];
// colors.pop ();
// document.write(" The best of my Color'z <b> With ***Unshift*** Method </b> are: " +colors);

// f (splice method)
var colors = [ ' black ', ' green ', ' blue ', ' orange ', ' purple ', ' pink ' ];
colors.splice (2, 1, 'lemon , pineapple');
document.write(" The best of my Color'z <b> With ***Splice*** Method </b> are: " +colors);

// g (splice method)








// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

// var score = [320,450,470,200];
// score.sort(); // sort an array alphabtically or in Ascending order
// document.write("Scores of Students : " +score);

// // score.reverse; // sort an array in  descending order: 

// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selected Cities array.

// var city = [ "karachi" , "lahore" , "peshawar" , "islamabad" , "quetta" , "tharparkar" ];
// var selectedCities = city.slice (3, 5);
// document.write("<h1>Cities list:</h1> " +city+ "<br>");
// document.write("<h1>Selected Cities list:</h1> " +selectedCities);

// 12. Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// 13. Create a new array. Store values one by one in such a waythat you can access the values in the order in which they were stored. (FIFO-First In First Out)

// 14. Create a new array. Store values one by one in such a waythat you can access the values in reverse order. (Last InFirst Out)

// 15. Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:


