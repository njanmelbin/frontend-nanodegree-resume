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
	bio.skills.forEach(function(skill){
			// console.log(bio.skills[skill]);
			var fskill=HTMLskills.replace("%data%",skill);
			$('#skills-h3').append(fskill);

	});
}
var education={
		"schools": [{
			"name":  "Marygiri Senior Secondary School",
			"location": "Kannur,Kerala",
			"degree": "value", 
			"majors": ["Physics ","Chemistry ","Mathematics "],
		    "date": "2009-2011",
		    "url": "www.marygiri.com"   
		   },
		   {
		   	"name" :"SCT College of Engineering",
		   	"location" : "Trivandrum,Kerala",
		   	"degree": "B.Tech",
		   	"majors": ["Computer Science"],
		   	"date" : "2012-2016",
		   	"url"  : "www.sctce.ac.in"
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
    education.schools.forEach(function(school){
		var fsname=HTMLschoolName.replace("%data%",school.name);
		$('#education').append(fsname);

		var flocation=HTMLschoolLocation.replace("%data%",school.location);
		$('#education').append(flocation);
        var majorlist="";
	    school.majors.forEach(function(major){
			majorlist=majorlist+major;
		});
		//console.log(majorlist);

		var fmajor=HTMLschoolMajor.replace("%data%",majorlist);
		$("#education").append(fmajor);

		var fdate=HTMLschoolDates.replace("%data%",school.date);
		$('#education').append(fdate);

		var furl=HTMLschoolURL.replace("%data%",school.url);
		$('#education').append(furl);
	});	
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
     		"location":  "KannurKerala",
     		"dates"   :  "2011",
     		"description" : "Worked as a waiter for some pocket money.Blah blah blah blah blah blah blahb blahb bablhababalbabalba abalblabjalblabljalblabljaljblajb"
       }
     ] 
}

 work.display=function(){
 		$('#workExperience').append(HTMLworkStart);
  		work.jobs.forEach(function(job){
		 		var femployer=HTMLworkEmployer.replace("%data%",job.employer);
		 		$('#workExperience').append(femployer);

		 		var ftitle=HTMLworkTitle.replace("%data%",job.title);
		 		$('#workExperience').append(ftitle);

		 		var flocation=HTMLworkLocation.replace("%data%",job.location);
		 		$('#workExperience').append(flocation);

		 		var fdates=HTMLworkDates.replace("%data%",job.dates);
		 		$('#workExperience').append(fdates);

		 		var fdescription=HTMLworkDescription.replace("%data%",job.description);
		 		$('#workExperience').append(fdescription);					
		});
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
	projects.projects.forEach(function(project){
		var ftitle=HTMLprojectTitle.replace("%data%",project.title);
		$('#projects').append(ftitle);

		var fdates=HTMLprojectDates.replace("%data%",project.dates);
		$('#projects').append(fdates);

		var fdescription=HTMLprojectDescription.replace("%data%",project.description);
		$('#projects').append(fdescription);
	
		 	 project.images.forEach(function(image){
				var fimages=HTMLprojectImage.replace("%data%",image);					
				$('#projects').append(fimages);

			 });	
	});	

}

var display=function(){

	var fmobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
	$('#footerContacts').append(fmobile);

	var femail=HTMLemail.replace("%data%",bio.contacts.email);
	// console.log(femail);
	// console.log(bio.contacts.email);
	$('#footerContacts').append(femail);

	var fgithub=HTMLgithub.replace("%data%",bio.contacts.github);
	$('#footerContacts').append(fgithub);

	var flocation=HTMLlocation.replace("%data%",bio.contacts.location);
	$('#footerContacts').append(flocation);
};
bio.display();
work.display();
projects.display();
education.display();
display();
$('#mapDiv').append(googleMap);