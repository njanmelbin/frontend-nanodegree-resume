var bio = {
    "name": "Melbin Thomas",
    "role": "Frontend Developer",
    "contacts": {
        "mobile": "8281276178",
        "email": "njanmelbin@gmail.com",
        "github": "github.com/njanmelbin",
        "location": "Kannur,Kerala,India"
    },
    "welcomeMessage": "Namaste",
    "skills": ["awsomeness", "simplicity"],
    "biopic": "images/fry.jpg"
};

bio.display = function() {
    var fheadername = HTMLheaderName.replace("%data%", bio.name);
    $('#header').append(fheadername);

    var fheaderRole = HTMLheaderRole.replace("%data%", bio.role);
    $('#header').append(fheaderRole);

    var fmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $('#topContacts').append(fmobile);

    var femail = HTMLemail.replace("%data%", bio.contacts.email);
    $('#topContacts').append(femail);

    var fgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $('#topContacts').append(fgithub);

    var flocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $('#topContacts').append(flocation);

    var fimage = HTMLbioPic.replace("%data%", bio.biopic);
    $('#header').append(fimage);

    var fwelcomemsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $('#header').append(fwelcomemsg);
    
    $('#header').append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
        var fskill = HTMLskills.replace("%data%", skill);
        $('#skills-h3').append(fskill);

    });

    $('#footerContacts').append(fmobile);

    $('#footerContacts').append(femail);

    $('#footerContacts').append(fgithub);

    $('#footerContacts').append(flocation);

};
var education = {
    "schools": [{
        "name": "Marygiri Senior Secondary School",
        "location": "Kannur,Kerala",
        "degree": "value",
        "majors": ["Physics ", "Chemistry ", "Mathematics "],
        "dates": "2009-2011",
        "url": "www.marygiri.com"
    }, {
        "name": "SCT College of Engineering",
        "location": "Trivandrum,Kerala",
        "degree": "B.Tech",
        "majors": ["Computer Science"],
        "dates": "2012-2016",
        "url": "www.sctce.ac.in"
    }],
    "onlineCourses": [{
        "title": "Udacity Frontend Nanodegree",
        "school": "Udacity",
        "date": "2016",
        "url": "www.udacity.com"
    }]
};
$('#education').append(HTMLschoolStart);
education.display = function() {
    education.schools.forEach(function(school) {

        var fsname = HTMLschoolName.replace("%data%", school.name);
        $('.education-entry').append(fsname);

        var flocation = HTMLschoolLocation.replace("%data%", school.location);
        $('.education-entry').append(flocation);

        var majorlist = "";
        school.majors.forEach(function(major) {
            majorlist = majorlist + major;
        });
        var fmajor = HTMLschoolMajor.replace("%data%", majorlist);
        $('.education-entry').append(fmajor);

        var fdate = HTMLschoolDates.replace("%data%", school.dates);
        $('.education-entry').append(fdate);

        var furl = HTMLschoolURL.replace("%data%", school.url);
        $('.education-entry').append(furl);
    });
    $('#education').append(HTMLonlineClasses);
    $('#education').append(HTMLschoolStart);

    education.onlineCourses.forEach(function(course) {
        var ftitle = HTMLonlineTitle.replace("%data%", course.title);
        $('.education-entry:last').append(ftitle);

        var fschool = HTMLonlineSchool.replace("%data%", course.school);
        $('.education-entry:last').append(fschool);

        var fdate = HTMLonlineDates.replace("%data%", course.date);
        $('.education-entry:last').append(fdate);

        var furl = HTMLonlineURL.replace("%data%", course.url);
        $('.education-entry:last').append(furl);
    });

    var allElements = $('.education-entry');

 console.log('allElements: ', allElements);

 console.log('allElements length: ', allElements.length);

 var lastElement = $('.education-entry:last');

 console.log('lastElement: ', lastElement);

 console.log('lastElement length: ', lastElement.length);

};

var work = {
    "jobs": [{
        "employer": "Hilton Hotel",
        "title": "waiter",
        "location": "KannurKerala",
        "dates": "2011",
        "description": "Worked as a waiter for some pocket money.Blah blah blah blah blah blah blahb blahb bablhababalbabalba abalblabjalblabljalblabljaljblajb"
    }]
};

work.display = function() {
    $('#workExperience').append(HTMLworkStart);
    work.jobs.forEach(function(job) {
        var femployer = HTMLworkEmployer.replace("%data%", job.employer);
        $('.work-entry').append(femployer);

        var ftitle = HTMLworkTitle.replace("%data%", job.title);
        $('.work-entry').append(ftitle);

        var flocation = HTMLworkLocation.replace("%data%", job.location);
        $('.work-entry').append(flocation);

        var fdates = HTMLworkDates.replace("%data%", job.dates);
        $('.work-entry').append(fdates);

        var fdescription = HTMLworkDescription.replace("%data%", job.description);
        $('.work-entry').append(fdescription);
    });
};

var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "2016",
        "description": "I build a portfolio for given mockup.Bootstrap framework was used.Grunt was used to automate tasks .Images were optimized by using responsive images grunt plugin.Media queries were used to add responsiveness.",
        "images": ["images/img/portfolio-medium.jpg", "images/img/portfolio-medium.jpg"]
    }, {
        "title": "Resume",
        "dates": "2016",
        "description": "Resume was build and all contents for the resume was storeed in JSON format.Grunt is used to automate tasks.",
        "images": ["images/img/resume-medium.jpg", "images/img/resume-medium.jpg"]
    }]
};

projects.display = function() {
    $('#projects').append(HTMLprojectStart);
    projects.projects.forEach(function(project) {
        var ftitle = HTMLprojectTitle.replace("%data%", project.title);
        $('.project-entry').append(ftitle);

        var fdates = HTMLprojectDates.replace("%data%", project.dates);
        $('.project-entry').append(fdates);

        var fdescription = HTMLprojectDescription.replace("%data%", project.description);
        $('.project-entry').append(fdescription);

        project.images.forEach(function(image) {
            var fimages = HTMLprojectImage.replace("%data%", image);
            $('.project-entry').append(fimages);

        });
    });

};



bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);