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
		"location"	: "Kannur,Kerala,India"  
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
var education={
		"schools": [{
			"name":  "Marygiri Senior Secondary School",
			"location": "Kannur,Kerala",
			"degree": "value", 
			"majors": ["Physics ","Chemistry ","Mathematics "],
		    "date": "2009-2011",
		    "url": "value"   
		   },
		   {
		   	"name" :"SCT College of Engineering",
		   	"location" : "Trivandrum,Kerala",
		   	"degree": "B.Tech",
		   	"majors": ["Computer Science"],
		   	"date" : "2012-2016"
		 //  	"url"  : "value"
		   }
		],  
		"onlineCourses" :[{
			   "title"	: "Udacity Frontend Nanodegree",
			   "school":"Udacity",
			   "date":"2016",
			   "url":"www.udacity.com" 
		 }
		]
}

 education.display=function(){
	$('#education').append(HTMLschoolStart);
	for(school in education.schools){
		var fsname=HTMLschoolName.replace("%data%",education.schools[school].name);
		$('#education').append(fsname);

		var flocation=HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$('#education').append(flocation);
        var majorlist="";
		for(major in education.schools[school].majors){
			majorlist=majorlist+education.schools[school].majors[major];
		}
		//console.log(majorlist);

		var fmajor=HTMLschoolMajor.replace("%data%",majorlist);
		$("#education").append(fmajor);

		var fdate=HTMLschoolDates.replace("%data%",education.schools[school].date);
		$('#education').append(fdate);
	}	
	$('#education').append(HTMLonlineClasses);

	education.onlineCourses.forEach(function(course){
			var ftitle=HTMLonlineTitle.replace("%data%",course.title);
			$('#education').append(ftitle);

			var fschool=HTMLonlineSchool.replace("%data%",course.school);
			$('#education').append(fschool);

			var fdate=HTMLonlineDates.replace("%data%",course.date);
			$('#education').append(fdate);

			var furl=HTMLonlineURL.replace("%data%",course.url);
			$('#education').append(furl);
	});
	
}

var work={
     "jobs": [{
     		"employer":  "Hilton Hotel",
     		"title"	  :  "waiter",
     		"location":  "Kannur,Kerala",
     		"dates"   :  "2011",
     		"description" : "Worked as a waiter for some pocket money.Blah blah blah blah blah blah blahb blahb bablhababalbabalba abalblabjalblabljalblabljaljblajb"
       }
     ] 
}

 work.display=function(){
 		$('#workExperience').append(HTMLworkStart);
  		for(job in work.jobs){
		 		var femployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		 		$('#workExperience').append(femployer);

		 		var ftitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
		 		$('#workExperience').append(ftitle);

		 		var flocation=HTMLworkLocation.replace("%data%",work.jobs[job].location);
		 		$('#workExperience').append(flocation);

		 		var fdates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
		 		$('#workExperience').append(fdates);

		 		var fdescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
		 		$('#workExperience').append(fdescription);					
		 }
}

var projects={
	"projects":[
		{
			"title": "Portfolio",
			"dates": "2016",
			"description":"I build a portfolio for given mockup.Bootstrap framework was used.Grunt was used to automate tasks .Images were optimized by using responsive images grunt plugin.Media queries were used to add responsiveness." ,
			"images"	 :["images/img/portfolio-medium.jpg","images/img/portfolio-medium.jpg"]
		},
		{
			"title": "Resume",
			"dates": "2016",
			"description":"Resume was build and all contents for the resume was storeed in JSON format.Grunt is used to automate tasks.", 	
			"images":["images/img/resume-medium.jpg","images/img/resume-medium.jpg"]	
		}
	]	
}

projects.display=function(){
	$('#projects').append(HTMLprojectStart);
	for (project in projects.projects){
		var ftitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$('#projects').append(ftitle);

		var fdates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$('#projects').append(fdates);

		var fdescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$('#projects').append(fdescription);
	
		 for(image in projects.projects[project].images){
				var fimages=HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);					
				$('#projects').append(fimages);

		}	
	}	

}
bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);