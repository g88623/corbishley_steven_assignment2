// Steven Corbishley
// SDI 1307
// Project 2
// My SDI Project 2 JavaScript file.

// My Variables
var myQueueName = "Team Case Queue"; // String
var numOfCases = 5; // Number
var workerNames = ["Steven", "Bob", "Mike", "Chris"]; // Array

// Console Log Function
var say = function ( textToOutput ) {
	console.log ( textToOutput );
}

// My Procedure
var hasCases = function ( casesInQueue ) { // Procedure takes an Argument.
	if ( casesInQueue > 0 ) { // My Argument Conditional
		say ("The queue has cases. There are " + casesInQueue + " cases."); // If True, Output 1
	} else {
		say ("The queue is currently empty."); // If False, Output 2
	}
}

// My Boolean Function
var casesInCorrectQueue = function ( incorrectCases, casesInQueue ) { // Boolean Function takes in two Arguments.
	var valueToReturn;
	if( incorrectCases != casesInQueue ) { // Compares the two arguments.
		say ("There are " + (casesInQueue-incorrectCases) + " cases that belong in this queue."); // If True, Output 1
		valueToReturn = true;
	} else {
		say ("There are no cases in this queue that belong in this queue."); // If False, Output 2
		valueToReturn = false;
	}
	return valueToReturn; // Return Boolean
}

// My Number Function
	// Number Function takes a Number argument.
	// Includes local variables.
	// Enters While Loop.
		// If True, Perform Math, Output, and continue loop.
		// If False, finish loop and return Number.

// My String Function
	// String Function takes in two String arguments.
	// Includes local variables.
	// Concatenates Strings.
	// Returns String.

// My Array Function
	// Array Function takes in an Array argument AND a Number argument.
	// Includes local variables.
	// Enters For Loop
		// If True, performs Math, Outputs, and continues For Loop.
		// If False, returns an Array.

// My Returned Values
var correctQueue = casesInCorrectQueue( 1, numOfCases );

// My Output
hasCases(numOfCases);
say ("It is " + correctQueue + " that at least one case belongs in this queue.");