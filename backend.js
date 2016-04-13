/**
 * This file contains all of the backend javascript for the project
 */
 
var Dancer = function(firstName, lastName, gender, picture, notes, shape) {
    ////////////////////////////////////////////////
    // Representation
    //
	this.firstName = firstName
	this.lastName = lastName
	this.gender = gender
	this.profilePicture = picture
	this.notes = notes
	this.shapeOf = shape

	////////////////////////////////////////////////
	// Public methods
	//

	this.toString = function(){			
		return "first name", this.firstName, "last name", this.lastName, "gender", 
		this.gender, "profile pic", this.profilePicture, "notes", this.notes
	}
}

var Checker = function(color, isKing) {
    ////////////////////////////////////////////////
    // Representation
    //
	if (color != "red" && color != "black") {
		alert('color must be one of "red" or "black"');
	}

	this.color = color;			
	this.isKing = isKing;			
	this.row;
	this.col;

	////////////////////////////////////////////////
	// Public methods
	//

	this.toString = function(){			
		var name = this.color;
		if (this.isKing) name = name.toUpperCase();
		return name;
	}
}