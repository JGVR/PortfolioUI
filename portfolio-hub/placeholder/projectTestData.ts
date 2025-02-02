import Project from "@/models/project";
import Badge from "@/models/badge";


let projectTestData = [
    new Project(
        1,
        "PortfolioHub",
        "Web App to display my professional portfolio. Built with NestJS.",
        [new Badge("Typescript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg")],
        [],
        ""
    ),
    new Project(
        2,
        "PortfolioHubApi",
        "Web App to perform CRUD operations in a MongoDB Atlas. Also exposes a WebSocket endpoint for a chatbot",
        [
            new Badge("Python", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"),
            new Badge("Django", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"),
            new Badge("Django", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg")
        ],
        [],
        ""
    )
];

export default projectTestData;
