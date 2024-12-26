import Profile from "@/models/profile"

let profileTestData = new Profile({
    userId:1,
    firstName: "Juan",
    lastName: "Vasquez",
    shortBio: "Hello! I’m Juan Vasquez, a passionate Software Developer with over 2 years of hands-on experience creating impactful and efficient software solutions. I thrive on solving problems and believe in the power of technology to transform lives. By crafting intuitive and reliable applications, I aim to make everyday tasks smoother and more enjoyable for people. Let’s build something amazing together!",
    dateOfBirth: new Date(1996, 8, 11),
    countryOfResidence: "United States",
    gitHubUrl: "https://github.com/JGVR",
    linkedInUrl: "https://github.com/JGVR"
});

export default profileTestData