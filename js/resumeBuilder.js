/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
 */

var model = {
    init: function(){    
      this.work = {
        "jobs" : [{
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

    this.projects = {
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
        {
            "title": "Project 3",
            "dates": "January-2017",
            "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"],
            "description": "Its a Classic Arcade Game , Frogger Clone . Where game loop engine was provided by Udacity and i have created player and enemies new entity and made game functional"

        },
         {
            "title": "Website Optimization Project",
            "dates": "March-2017",
            "images": ["images/197x148.gif", "images/197x148.gif"],
            "description": "In this project I have achieved (index.html) page speed of 93/100 for mobile and desktop , and made one of the main files 60FPS"

        }         

    ]
    };

    this.bio = {
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

    this.education = {
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
    }
    ],

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

    }, {

        "title": "Critical Path Rendering",
        "school": "Udacity",
        "dates": "2017",
        "url": "www.udacity.com"

    }
    ]
};

}
};



var controller = {
    init : function() {
        model.init();
        projectView.init();
    },

    bioDisplay : function() {
    var bio = model.bio;

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    // caching contacts
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

    }, // end of bio Display function


    workDisplay : function () {
    var work = model.work;
    $("#workExperience").append(HTMLworkStart);
    work.jobs.forEach(function(job) {
        var formattedWork = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedWorkTitle = formattedWork + formattedTitle;
        var formattedDate = HTMLworkDates.replace("%data%", job.dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedWorkTitle + formattedDate + formattedLocation + formattedDescription);
    });
    } , // end of workDisplay

    projectDisplay : function() {

    $("#projects").append(HTMLprojectStart);
    model.projects.projects.forEach(function(project) {
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedProjectTitle + formattedProjectDates + formattedProjectDescription);
        
        if (project.images.length > 0) {
            project.images.forEach(function(image) {

                var formattedImage = HTMLprojectImage.replace("%data%", image);

                $(".project-entry:last").append(formattedImage);

            });
        }

    });
    }, // end of projectDisplay    

    // Display function of an object education  which displays all the data from education object
educationDisplay : function() {
    $("#education").append(HTMLschoolStart);
    model.education.schools.forEach(function(school) {
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolLocation + formattedSchoolDates);
            
            if (school.majors.length > 0) {
                for (var a = 0; a < school.majors.length; a++) {
                    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors[a]);
                    $(".education-entry:last").append(formattedSchoolMajor);
                }     
            }
        });

    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    model.education.onlineCourses.forEach(function(course) {

        var formattedOnlineSchoolTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedOnlineSchoolDates = HTMLonlineDates.replace("%data%", course.dates);
        var formattedOnlineSchoolUrl = HTMLonlineURL.replace("%data%", course.url);

        $(".education-entry:last").append(formattedOnlineSchoolTitle + formattedOnlineSchool + formattedOnlineSchoolDates + formattedOnlineSchoolUrl);
        
    });
    }, // end of educationDisplay

}; // end of Controller

var projectView = {
    init: function () {
        controller.bioDisplay();
        controller.projectDisplay();
        controller.workDisplay();
        controller.educationDisplay();

    },

    render: function() {

    },

};

controller.init();


$("#mapDiv").append(googleMap);
