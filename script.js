// Skills array
const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Python"];

const skillsList = document.getElementById("skills-list");

for (let i = 0; i < skills.length; i++) {
    const li = document.createElement("li");
    li.textContent = skills[i];
    skillsList.appendChild(li);
}

// Projects array of objects
const projects = [
    {
        title: "Collaborative Real-Time Car Speed-Tracker",
        description: "A tool that tracks and shares car speed data in real time between users.",
        tech: "Python, JavaScript, WebSockets"
    },
    {
        title: "Transactional Ticket Booking API",
        description: "An API that handles ticket booking with reliable transactions.",
        tech: "Python, Flask, SQL"
    }
];

const projectsList = document.getElementById("projects-list");

for (let i = 0; i < projects.length; i++) {
    const project = projects[i];

    const card = document.createElement("div");
    card.className = "project-card";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const tech = document.createElement("p");
    tech.textContent = "Tech used: " + project.tech;

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(tech);

    projectsList.appendChild(card);
}