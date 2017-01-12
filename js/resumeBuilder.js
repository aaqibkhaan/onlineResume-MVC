/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
 */

 // creating a work object which contains array of jobs 
var work = {
    "jobs": [{
            "employer": "Energy Efficient Homes Ltd",
            "title": "Manager",
            "location": "London, UK",
            "dates": "March,2013 - Current",
            "description": "Manging companies day to day tasks including dealing with clients direct"
        },
        {
            "employer": "Pro Energy Advice Ltd",
            "title": "Lead Generator Team Leader",
            "location": "London, UK",
            "dates": "Jan,2012-March,2013",
            "description": "Dealing with the lead genrators (field sales) and manging them"
        },
        {
            "employer": "Lapa Security",
            "title": "Door Supervisor",
            "location": "London, Uk",
            "dates": "December,2010- December,2012",
            "description": "Securing the premisis and dealing with the public"
        }

    ]

};

// creating an object of projects showing an array of projects
var projects = {
    "projects": [{
            "title": "Project 1 ",
            "dates": "September-2015",
            "images": ["images/197x148.gif", "images/197x148.gif"],
            "description": "It was a first project where we have to build a website .."

        },
        {
            "title": "Project 2",
            "dates": "January-2017",
            "images": ["images/197x148.gif"],
            "description": "Its a online resume porject"

        },

    ]
};

// creating an object bio which contains all the personal information

var bio = {
    "name": "Aaqib Rashid",
    "role": "Web Developer",
    "skills": ["Awsomness", "Time Management", "Cricket Sometimes"],
    "contacts": {
        "mobile": "0044742755689",
        "email": "aaqibrashid@hotmail.com",
        "github": "aaqibrashid",
        "twitter": "@AKhan",
        "location": "London, United Kingdom"
    },

    "biopic": "images/fido-dido-6.jpg",
    "welcomeMessage": "Hi Welcome to my PAGE!"
};

// creating an object education which contains information about schools and onlineCourses
var education = {
    "schools": [{
        "name": "Middlesex University London",
        "location": "London , United Kingdom",
        "degree": "BSC(HONS) IN IT",
        "url": "www.middlesexuniversity.com",
        "majors": ["Information Technology", "OOP"],
        "dates": " December-2014"
    }, {
        "name": "University College Kingston(UCK)",
        "location": "Manchester , United Kingdom",
        "degree": "Computer Science",
        "url": "www.lcuck.com",
        "majors": ["Computer Science"],
        "dates": " Decmeber-2012"
    }],
    "onlineCourses": [{

        "title": "Frontend Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "www.udacity.com "

    }, {

        "title": "Javascripts Basic",
        "school": "Udacity",
        "dates": "2017",
        "url": "www.udacity.com "

    }, {

        "title": "HTML5 & CSS3",
        "school": "Udacity",
        "dates": "2016",
        "url": "www.udacity.com"

    }]
};

// Display function of an object bio which displays all the data from bio object
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts , #footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts , #footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts , #footerContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts , #footerContacts").append(formattedLocation);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBiopic);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
    }

};
// Display function of an object work which displays all the data from work object
work.display = function () {
    // body...
    $("#workExperience").append(HTMLworkStart);
    work.jobs.forEach(function(job) {
        var formattedWork = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedWorkTitle = formattedWork + formattedTitle;
        $(".work-entry:last").append(formattedWorkTitle);
        var formattedDate = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDate);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

// Display function of an object projects which displays all the data from projects object
projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    projects.projects.forEach(function(project) {
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedProjectDescription);
        if (project.images.length > 0) {
            project.images.forEach(function(image) {

                var formattedImage = HTMLprojectImage.replace("%data%", image);

                $(".project-entry:last").append(formattedImage);

            });
        }

    });
};



// Display function of an object education  which displays all the data from education object
education.display = function() {
    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(school) {
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(formattedSchoolLocation);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedSchoolDates);
            
            if (school.majors.length > 0) {
                for (var a = 0; a < school.majors.length; a++) {
                    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors[a]);
                    $(".education-entry:last").append(formattedSchoolMajor);
                }     
            }
        });

    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    education.onlineCourses.forEach(function(course) {

        var formattedOnlineSchoolTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        $(".education-entry:last").append(formattedOnlineSchoolTitle + formattedOnlineSchool);
        var formattedOnlineSchoolDates = HTMLonlineDates.replace("%data%", course.dates);
        $(".education-entry:last").append(formattedOnlineSchoolDates);
        var formattedOnlineSchoolUrl = HTMLonlineURL.replace("%data%", course.url);
        $(".education-entry:last").append(formattedOnlineSchoolUrl);
        
    });
};


bio.display();
projects.display();
work.display();
education.display();

$("#mapDiv").append(googleMap);
