//create a variable to hold the quantity of available plane seats left on a flight
var planeSeatsAvailable = 100;
		
//create a variable to hold the cost of groceries at checkout
var groceriesCost =12.93;

//create a variable to hold a person's middle initial
var middleInitial ='C';

//create a variable to hold true if it's hot outside and false if it's cold outside
var hotOutside = false;

//create a variable to hold a customer's first name
var customerFirstName ="Bob";

//create a variable to hold a street address
var streetAddress ="12 Meadow Run Dr";

//print all variables to the console

console.log('Plane Seats Available=' + planeSeatsAvailable);
console.log('Grocery Cost=' + groceriesCost);
console.log('Middle Initial=' + middleInitial);
console.log('Hot Outside=' + hotOutside);
console.log('Customer First Name=' + customerFirstName);
console.log('Street Address= ' + streetAddress);


//a customer booked 2 plane seats, remove 2 seats from the available seats variable
planeSeatsAvailable -=2


//impulse candy bar purchase, add 2.15 to the grocery total
//costOfGroceries = costOfGroceries + 2.15;
groceriesCost +=2.15;

//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial ='E';

//the season has changed, update the hot outside variable to be opposite of what it was
hotOutside = true;


console.log('Changes');
console.log('Plane Seats Available=' + planeSeatsAvailable);
console.log('Grocery Cost=' + groceriesCost);
console.log('Middle Initial=' + middleInitial);
console.log('Hot Outside=' + hotOutside);
console.log('Customer First Name=' + customerFirstName);
console.log('Street Address= ' + streetAddress);


//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
var fullName= customerFirstName + ' ' + middleInitial + ' Franks';

//print a line to the console that introduces the customer and says they live at the address variable
console.log('Hello, this is '+ fullName + ' they live at ' + streetAddress);