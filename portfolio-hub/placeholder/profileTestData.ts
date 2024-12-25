import Profile from "@/models/profile"

let profileTestData = new Profile({
    userId:1,
    firstName: "Juan",
    lastName: "Vasquez",
    shortBio: "Hello! I'm Juan Vasquez, I'm a Software Developer. More than 2 years of experience",
    dateOfBirth: new Date(1996, 8, 11),
    countryOfResidence: "United States",
    gitHubUrl: "https://github.com/JGVR",
    linkedInUrl: "https://github.com/JGVR"
});

export default profileTestData