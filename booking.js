"use strict";


$(document).ready(function() {
	$( function() {
		//$( "#from_date" ).datepicker();
		//$( "#to_date" ).datepicker();
		var availableTitles = [
			"Mr.", "Mrs.", "Miss.", "Dr.", "Prof."
		  ];
		  $( "#salutation" ).autocomplete({
			source: availableTitles
		});
	});
	$("#first_name").focus();
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	let phonePattern1 = /\b[0-9]{3}[-][0-9]{3}[-][0-9]{4}\b/;
	let phonePattern2 = /\b[0-9]{10}\b/;
	let isValid = true;

	//Event handler for the submit event of the form
	$("#reservation_form").submit (event => {

		//First Name Text box required validation
		if($("#first_name").val().trim() == ""){
			$("#first_name").next().text("This field is required");
			isValid = false;
		}
		else {
			$("#first_name").next().text("");
		}
		$("#first_name").val($("#first_name").val().trim());

		//Last Name Text box required validation
		if($("#last_name").val().trim() == ""){
			$("#last_name").next().text("This field is required");
			isValid = false;
		}
		else {
			$("#last_name").next().text("");
		}
		$("#last_name").val($("#last_name").val().trim());

		//Email address validation
		if ($("#email").val().trim() == "") {
			$("#email").next().text("This field is required");
			isValid = false;
		}
		else if (!emailPattern.test($("#email").val().trim())) {
			$("#email").next().text("Must be a valid email address.");
			isValid = false;
		}
		else {
			$("#email").next().text("");
		}
		$("#email").val($("#email").val().trim());

		//Phone Text box required validation
		if($("#phone").val().trim() == ""){
			$("#phone").next().text("This field is required");
			isValid = false;
		}
		else if(!phonePattern1.test($("#phone").val().trim()) && !phonePattern2.test($("#phone").val().trim())){
			$("#phone").next().text("Phone number must be 10 digits");
			isValid = false;
		}
		else {
			$("#phone").next().text("");
		}
		$("#phone").val($("#phone").val().trim());				
		
		//Check-in date required validation
		if($("#from_date").val().trim() == ""){
			$("#from_date").next().text("This field is required");
			isValid = false;
		}
		else if($("#to_date").val().trim() < $("#from_date").val().trim()){
			$("#from_date").next().text("Check-in date must precede the check-out date");
			isValid = false;
		}
		else {
			$("#from_date").next().text("");
		}
		$("#from_date").val($("#from_date").val().trim());

		//Check-out date required validation
		if($("#to_date").val().trim() == ""){
			$("#to_date").next().text("This field is required");
			isValid = false;
		}
		else {
			$("#to_date").next().text("");
		}
		$("#to_date").val($("#to_date").val().trim());

		//Number of adults validation
		if($("#adults").val().trim() == ""){
			$("#adults").next().text("This field is required");
			isValid = false;
		}
		else if($("#adults").val().trim() <= 0){
			$("#adults").next().text("Number of adults must be greater than or equal to 1");
			isValid = false;
		}
		else {
			$("#adults").next().text("");
		}
		$("#adults").val($("#adults").val().trim());

		//Number of children validation
		if($("#children").val().trim() == ""){
			$("#children").next().text("This field is required");
			isValid = false;
		}
		else if($("#children").val().trim() < 0){
			$("#children").next().text("Number of children must be either 0 or a positive number");
			isValid = false;
		}
		else {
			$("#children").next().text("");
		}
		$("#children").val($("#children").val().trim());


		//Prevents submission of form if any entries are invalid
		if (isValid == false) {
			event.preventDefault();
		}
	});	
}); // end ready

$( function() {
    $( "checkbox" ).checkboxradio();
  } );

  $( function() {
    $( "#from_date" ).datepicker();
	$( "#to_date" ).datepicker();
  } );