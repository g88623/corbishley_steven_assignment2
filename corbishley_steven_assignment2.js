// Steven Corbishley
// SDI 1307
// Project 2
// My SDI Project 2 JavaScript file.

// My Variables
var myQueueName = "Team Case Queue"; // String
var numOfCases = 15; // Number
var helperNames = ["Bob", "Mike", "Chris"]; // Array

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
var workQueue = function ( casesInQueue ) { // Number Function takes a Number argument.
	var bandwidthForCases = 5; // Includes local variables.
	while ( bandwidthForCases > 0 ) { // Enters While Loop.
		bandwidthForCases--;
		casesInQueue--;
		say ("I took one case, and there are now " + casesInQueue + " cases remaining."); // If True, Perform Math, Output, and continue loop.
	}
	say ("I have reached my bandwidth for cases. There are " + casesInQueue + " cases remaining."); 
	numOfCases = casesInQueue;
	return casesInQueue; // If False, finish loop and return Number.
}

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
hasCases(numOfCases);
var correctQueue = casesInCorrectQueue( 1, numOfCases );
var workOnCases = workQueue(numOfCases);

// My Output
say ("It is " + correctQueue + " that at least one case belongs in this queue.");
say ("After working cases from the queue on my own, there were " + workOnCases + " cases remaining in the queue.");