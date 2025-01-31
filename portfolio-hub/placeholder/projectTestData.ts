import Project from "@/models/project";
import Badge from "@/models/badge";


let projectTestData = new Project(
    1,
    "PortfolioHub",
    "Web App to display my professional portfolio. Built with NestJS.",
    [new Badge("Typescript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg")],
    [],
    ""
);

export default projectTestData;