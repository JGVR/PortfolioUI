import Profile from "@/models/profile";
import Skill from "@/models/skill";

let profileTestData = new Profile({
    userId:1,
    firstName: "Juan",
    lastName: "Vasquez",
    shortBio: "Hello! I’m Juan Vasquez, a passionate Software Developer with over 2 years of hands-on experience creating impactful and efficient software solutions. I thrive on solving problems and believe in the power of technology to transform lives. By crafting intuitive and reliable applications, I aim to make everyday tasks smoother and more enjoyable for people. Let’s build something amazing together!",
    bio: "Hello! I’m Juan Vasquez, a passionate Software Developer with over 2 years of hands-on experience creating impactful and efficient software solutions. I thrive on solving problems and believe in the power of technology to transform lives. By crafting intuitive and reliable applications, I aim to make everyday tasks smoother and more enjoyable for people. Let’s build something amazing together! \nHello! I’m Juan Vasquez, a passionate Software Developer with over 2 years of hands-on experience creating impactful and efficient software solutions. I thrive on solving problems and believe in the power of technology to transform lives. By crafting intuitive and reliable applications, I aim to make everyday tasks smoother and more enjoyable for people. Let’s build something amazing together! \n\nHello! I’m Juan Vasquez, a passionate Software Developer with over 2 years of hands-on experience creating impactful and efficient software solutions. I thrive on solving problems and believe in the power of technology to transform lives. By crafting intuitive and reliable applications, I aim to make everyday tasks smoother and more enjoyable for people. Let’s build something amazing together!",
    dateOfBirth: new Date(1996, 8, 11),
    countryOfResidence: "United States",
    gitHubUrl: "https://github.com/JGVR",
    linkedInUrl: "https://github.com/JGVR",
    skills: [
        new Skill({name: "react", level:6}),
        new Skill({name: "csharp", level:6}),
        new Skill({name: "python", level:8}),
        new Skill({name: "javascript", level:5}),
        new Skill({name: "dotnetcore", level:6}),
        new Skill({name: "nextjs", level:6}),
        new Skill({name: "djangorest", level:4}),
        new Skill({name: "mongodb", level:3})
    ],
    email: "juangabrielvasquez11@gmail.com"
});

export default profileTestData