/*
This is empty on purpose! Your code to build the resume will go here.
 */
  // var formattedName=HTMLheaderName.replace("%data%","Melbin Thomas");
//  var formattedRole=HTMLheaderRole.replace("%data%","Frontend Developer");
  // var femail=HTMLemail.replace("%data%","njanmelbin@gmail.com");
  // var fmobile=HTMLmobile.replace("%data%","asdfasdf");
  // var ftwitter=HTMLtwitter.replace("%data%","njanmelbin") 

// $('#header').append(formattedName);
// $('#header').append(formattedRole);
// $('#topContacts').append(fmoblie);
// $('#topContacts').prepend(ftwitter);
// $('#topContacts').append(femail);

var bio={
	"name"	: "Melbin Thomas",
	"role"  : "Frontend Developer",
	"contacts" :{
		"mobile"	: "8281276178",
		"email"		: "njanmelbin@gmail.com",
		"github"	: "github.com/njanmelbin",
		"location"	: "India"  
		},
	"welcomeMessage"	:   "Namaste",
	"skills"			:	["awsomeness","simplicity"],
	"bioPic"			:	"images/fry.jpg" 
}

bio.display=function(){
	var fheadername=HTMLheaderName.replace("%data%",bio.name);
	// console.log(fheadername);
	// console.log(bio.name);
	$('#header').append(fheadername);

	var fheaderRole=HTMLheaderRole.replace("%data%",bio.role);
	// console.log(fheadername);
	// console.log(bio.role);
	$('#header').append(fheaderRole);

	var fmobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
	$('#topContacts').append(fmobile);

	var femail=HTMLemail.replace("%data%",bio.contacts.email);
	// console.log(femail);
	// console.log(bio.contacts.email);
	$('#topContacts').append(femail);

	var fgithub=HTMLgithub.replace("%data%",bio.contacts.github);
	$('#topContacts').append(fgithub);

	var flocation=HTMLlocation.replace("%data%",bio.contacts.location);
	$('#topContacts').append(flocation);

	var fimage=HTMLbioPic.replace("%data%",bio.bioPic);
	$('#header').append(fimage);
	var fwelcomemsg=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$('#header').append(fwelcomemsg);
	$('#header').append(HTMLskillsStart);
	for (skill in bio.skills){
			// console.log(bio.skills[skill]);
			var fskill=HTMLskills.replace("%data%",bio.skills[skill]);
			$('#skills-h3').append(fskill);

	}
}
// var schools={
// 		"schools": [{
// 			"name":  "Marygiri Senior Secondary School",
// 			"location": "Kannur",
// 			"degree": "value", 
// 			"majors": ["Physics","Chemistry","Mathematics"],
// 		    "date": "2009-2011",
// 		    "url": "value",   
// 		}
// 		]  
// }
bio.display();