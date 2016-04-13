/**
 * This file contains all of the backend javascript for the project
 */

var uid_counter = 0 

var Dancer = function(firstName, lastName, gender, picture, notes, shape, shapeObject,uid = uid_counter) {
    ////////////////////////////////////////////////
    // Representation
    //
	this.firstName = firstName
	this.lastName = lastName
	this.gender = gender
	this.profilePicture = picture
	this.notes = notes
	this.shapeOf = shape
	this.shapeObject = shapeObject
	this.added = 0
	this.uid = uid
	++uid_counter

	////////////////////////////////////////////////
	// Public methods
	//

	this.toString = function(){			
		return "first name", this.firstName, "last name", this.lastName, "gender", 
		this.gender, "profile pic", this.profilePicture, "notes", this.notes
	}
}

var DancerList = function() {
	this.list = []
}
