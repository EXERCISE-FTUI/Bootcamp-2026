interface Division {
    title: string;
    description: string;
    projectTitle: string;
    modules: string[];
}

export const divisionsContent: Division[] = [
    {
        title: "Software",
        projectTitle: "Automated Productivity Planner Web App",
        description:
            "In this project, you will develop a high-performance productivity planner web application designed for maximum efficiency. By leveraging robust API integrations, the system delivers intelligent, automated reminders to ensure users never miss a deadline and seamlessly stay on top of their priorities.",
        modules: [
            "HTML, CSS & React",
            "Javascript & Data Structure",
            "Website Interactivity",
            "AI Integration",
        ],
    },
    {
        title: "Hardware",
        projectTitle: "Pomodoro Desktop Buddy",
        description:
            "In this project, you will build a Pomodoro Desktop Buddy, a desktop companion device designed to help users manage study and work intervals efficiently using focused time-blocking features.",
        modules: [
            "Electronics Fundamentals",
            "Programming for Microcontrollers",
            "IoT",
            "3D Modelling",
        ],
    },
    {
        title: "UI/UX",
        projectTitle: "Campus Life & Task Management System",
        description:
            "This project aims to design an integrated web platform that helps students effectively manage all their college schedules and tasks. Far beyond purely academic responsibilities like coursework and exams, this platform also covers non-academic activities, organization duties, personal schedules, and other essential aspects of campus life.",
        modules: [
            "UI/UX, Figma Fundamentals & Flowcharts",
            "Wireframe, UI, Color, Design, & Typography",
            "Prototyping",
            "One on One Mentoring",
        ],
    },
];
