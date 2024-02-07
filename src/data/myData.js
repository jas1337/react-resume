const myData = {
    name: "Jakub Zaręba",
    motto: "I believe that complex problems often have simple solutions and are worth taking the time to find them. Team player, humble, hungry for new experiences and smart.",
    contact: {
        envelope: "jakub.zareba@interia.pl",
        phone: "(+48) 726 690 432",
        linkedin: "www.linkedin.com/in/jakub-zareba",
        github: "https://github.com/jas1337"
    },
    programingSkills: {
        "Front-end technologies": [
            {
                name: "JavaScript",
                rate: 5
            },
            {
                name: "TypeScript",
                rate: 4
            },
            {
                name: "HTML 5",
                rate: 5
            },
            {
                name: "CSS",
                rate: 5
            },
            {
                name: "Angular.js",
                rate: 3
            },
            {
                name: "Angular 2+",
                rate: 4
            },
            {
                name: "React.js",
                rate: 3
            },
            {
                name: "Polymer 3",
                rate: 4
            },
            {
                name: "LitElements",
                rate: 5
            }
        ],
        "UX Design tools": [
            {
                name: "Figma",
                rate: 4.5
            },
            {
                name: "InVision",
                rate: 4
            }
        ],
        "Back-end technologies": [
            {
                name: "Node.js",
                rate: 4
            },
            {
                name: "Express.js",
                rate: 3
            },
            {
                name: "Nest.js",
                rate: 3
            },
            {
                name: "Python 3",
                rate: 1
            }
        ],
        Databases: [
            {
                name: "MongoDB",
                rate: 4
            },
            {
                name: "DynamoDB",
                rate: 4
            },
            {
                name: "MySQL",
                rate: 3
            },
            {
                name: "PostgreSQL",
                rate: 3
            }
        ],
        "Testing tools": [
            {
                name: "Karma",
                rate: 4
            },
            {
                name: "Jasmine",
                rate: 4
            }
        ],
        "Cloud technologies": [
            {
                name: "Google Cloud Platform",
                rate: 4.5
            },
            {
                name: "Amazon Web Services",
                rate: 4
            },
            {
                name: "Serverless",
                rate: 3
            }
        ]
    },
    languages: [
        {
            name: "Polish",
            rate: "Native"
        },
        {
            name: "English",
            rate: "B2 +"
        }
    ],
    hobbies: ["Sailing", "Archery", "Aikido", "Snowboard"],
    projects: [
        {
            title: "Google Governance, Risk & Compliance Manager",
            description:
                "The GGRC Platform provides a collection of capabilities that enables end-to-end management of the risk and compliance life cycle. GGRC centrally organizes and supports various compliance-related programs and processes at Google.",
            technologies: [
                "JavaScript",
                "LitElements",
                "Polymer 3",
                "HTML5",
                "CSS3",
                "Redux",
                "Webpack",
                "Python 3",
                "Flask"
            ]
        },
        {
            title: "Screen9 Chat Client",
            description:
                "Application used for adding and moderating comments during live streams in Screen9 system.",
            technologies: [
                "JavaScript",
                "websockets",
                "HTML5",
                "Sass",
                "React.js",
                "Redux",
                "microservices",
                "oAuth2",
                "Webpack",
                "Jest",
                "Jasmine",
                "Captcha"
            ]
        },
        {
            title: "Screen9 Onyx Player",
            description:
                "Custom video player based on Flowplayer, integrated with Screen9 media management system.",
            technologies: ["Flowplayer", "HTML5", "CSS3", "JavaScript"]
        },
        {
            title: "Screen9 Console",
            description:
                "Platform for managing media in Screen9 system. Allows uploading, editing media on demand, creating live and livemixer events, generating media embed codes, gather media statistics data and much more. ",
            technologies: [
                "Angular",
                "JavaScript",
                "Bootstrap 2.2.0",
                "Less",
                "oAuth2",
                "microservices",
                "Google Analytics",
                "Gulp",
                "Webpack",
                "Bower",
                "Karma",
                "npm",
                "ESLint",
                "Babel",
                "REST API",
                "XML-RPC",
                "Jenkins",
                "Nightwatch",
                "Websocket",
                "JsDoc"
            ]
        },
        {
            title: "Webcon Business Processing Suite",
            description:
                "An application designed to automate business processes, such as document workflows for corporate solutions.",
            technologies: ["MySQL", "JavaScript", "CSS3", "HTML5"]
        }
    ],
    experience: [
        {
            position: "Key Developer",
            company: "Google Poland",
            time: "06/2019 – Present",
            responsibilities: [
                "Conducted deployment of application to production environment on Google Cloud Platform",
                "Provided high quality solutions for Front end application issues using Polymer & LitElements Components and Material UI styles",
                "Designed and implemented functionalities based on mockups provided by ux designer in InVision",
                "Prepared technical design document for upcoming functionalities",
                "Created Web Component Tests for new and existing components using Mocha framework",
                "Covered new functionalities with unit tests",
                "Performed Developer testing",
                "Reviewed and approved changelists of colleagues from all teams across the project",
                "Played team leader and scrum master role of team consisting of 12 software engineers",
                "Represented the team at management meetings on daily basis",
                "Planned and coordinated the work of scrum team",
                "Participated in meetings with the client",
                "Configured JIRA board for the team",
                "Prepared reports of team work results on weekly basis",
                "Designed promotion plan for junior team member together with his resource manager",
                "Conducted daily scrum meetings, tracked the sprint burndown chart, took actions on blockers",
                "Arranged and conducted estimating sessions and backlog review sessions on weekly basis",
                "Helped new team member get started on project",
                "Transferred knowledge related to project"
            ]
        },
        {
            position: "Senior Software Developer",
            company: "Epam Systems",
            time: "11/2021 – Present",
            responsibilities: [
                "Key Front-end developer on Google project",
                "Member of Technical Interviewers community"
            ]
        },
        {
            position: "Software Developer",
            company: "Epam Systems",
            time: "06/2019 – 11/2021",
            responsibilities: ["Front-end developer on Google project"]
        },
        {
            position: "Front End Developer",
            company: "Screen9",
            time: "01/2018 – 06/2019",
            responsibilities: [
                "Created custom videoposter plugin for Screen9 media player",
                "Developed functionality allowing editing videos from web application perspective",
                "Created chat application allowing communication between users during live events",
                "Covered code with unit tests",
                "Performed second line (technical) support for customers",
                "Optimised application to work on multiple popular web browsers and devices"
            ]
        },
        {
            position: "Junior Implementer",
            company: "WEBCON ",
            time: "08/2017 – 11/2017",
            responsibilities: [
                "Gathering requirements on meetings with client",
                "Composing WEBCON BPS (native product) workflow adjusted for client needs",
                "Using OCR and machine learning technologies to develop an algorithm that extracts data from invoices"
            ]
        },
        {
            position: "Seismic Data Processing Specialist",
            company: "Geofizyka Kraków",
            time: "01/2016 – 12/2016",
            responsibilities: [
                "Creating geometry database",
                "First break picking",
                "Signal to noice enhancement",
                "Enhancement of resolution",
                "Static corrections",
                "Veolocity analysis",
                "5D Interpolation and regularization",
                "Pre-stack and post-stack migration",
                "Advanced seismic data processing"
            ]
        }
    ],
    education: [
        {
            faculty:
                "Faculty of Electrical Engineering, Automatics, Computer Science and Biomedical Engineering",
            name: "Web Applications Programming",
            time: "10/2017 – 07/2018",
            university: "AGH University of Science and Technology in Cracow"
        },
        {
            faculty:
                "Faculty of Geology, Geophysics and Environmental Protection",
            name: "Master engineer degree in Applied Geophysics",
            time: "10/2010 – 07/2015",
            university: "AGH University of Science and Technology in Cracow"
        }
    ]
};
export default myData;
