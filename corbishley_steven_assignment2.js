// Steven Corbishley
// SDI 1307
// Project 2
// My SDI Project 2 JavaScript file.

// My Variables
var myQueueName = "Team Case Queue"; // String
var numOfCases = 15; // Number
var casesInIncorrectQueue = 2; // Number
var helperNames = ["Bob", "Mike", "Chris"]; // Array

// Console Log Function
var say = function ( textToOutput ) {
	console.log ( textToOutput );
};

// My Procedure
var hasCases = function ( casesInQueue ) { // Procedure takes an Argument.
	if ( casesInQueue > 0 ) { // My Argument Conditional
		say ("The queue has cases. There are " + casesInQueue + " cases."); // If True, Output 1
	} else {
		say ("The queue is currently empty."); // If False, Output 2
	}
};

// My Boolean Function
var casesInCorrectQueue = function ( incorrectCases, casesInQueue ) { // Boolean Function takes in two Arguments.
	var valueToReturn;
	if( incorrectCases != casesInQueue ) { // Compares the two arguments.
		say ("There are " + (casesInQueue-incorrectCases) + " cases that belong in this queue."); // If True, Output 1
		casesInQueue = casesInQueue-incorrectCases;
		casesInIncorrectQueue = 0;
		valueToReturn = true;
	} else {
		say ("There are no cases in this queue that belong in this queue."); // If False, Output 2
		casesInQueue = casesInQueue-incorrectCases;
		casesInIncorrectQueue = 0;
		valueToReturn = false;
	}
	return valueToReturn; // Return Boolean
};

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
};

// My String Function
	// String Function takes in two String arguments.
	// Includes local variables.
	// Concatenates Strings.
	// Returns String.

// My Array Function
var callOnHelpers = function ( myHelpers, casesInQueue ) { // Array Function takes in an Array argument AND a Number argument.
	var helpersUsed = []; // Includes local variables.
	for ( i = 0; casesInQueue > 0;  i++) { // Enters For Loop
		casesInQueue--;
		var helperToUse;
		
		if(i<myHelpers.length){
			helperToUse = i;
		}else{
			helperToUse = Math.round(
				(
					( ( (i+1) / 3) ) - 
					Math.floor( (i+1) / 3)
				)
			*3);
		};

		helpersUsed[i] = myHelpers[helperToUse];
		say ("One case was assigned. There are " + (casesInQueue) + " cases remaining in the queue.");
		// If True, performs Math, Outputs, and continues For Loop.
	}
	say ("All cases have been assigned out.");
	return helpersUsed; // If False, returns an Array.
};

// My Returned Values
hasCases(numOfCases);
var correctQueue = casesInCorrectQueue( casesInIncorrectQueue, numOfCases );
var workOnCases = workQueue(numOfCases);
var casesAssignedWithHelp = callOnHelpers(helperNames, numOfCases);

// My Output
say ("It is " + correctQueue + " that at least one case belonged in this queue.");
say ("After working cases from the queue on my own, there were " + workOnCases + " cases remaining in the queue.");
say ("I received help with " + casesAssignedWithHelp.length + " cases. They were assigned, in order, to " + casesAssignedWithHelp + ".");