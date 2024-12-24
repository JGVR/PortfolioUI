interface ProfileStruct{
    userId: number
    firstName: string
    lastName: string
    dateOfBirth?: Date
    hobbies?: string[]
    skills?: string[]
    shortBio?: string
    bio?: string
    countryOfBirth?: string
    countryOfResidence?: string
    linkedInUrl?: string
    gitHubUrl?: string
}

export default class Profile{
    userId: number
    firstName: string
    lastName: string
    dateOfBirth?: Date
    hobbies?: string[]
    skills?: string[]
    shortBio?: string
    bio?: string
    countryOfBirth?: string
    countryOfResidence?: string
    linkedInUrl?: string
    gitHubUrl?: string

    constructor({userId, firstName, lastName, dateOfBirth, hobbies=[], skills=[], shortBio="", bio="", countryOfBirth="", countryOfResidence="", linkedInUrl="", gitHubUrl=""}: ProfileStruct){
        this.userId = userId
        this.firstName = firstName
        this.lastName = lastName
        this.dateOfBirth = dateOfBirth
        this.hobbies = hobbies
        this.skills = skills
        this.shortBio = shortBio
        this.bio = bio
        this.countryOfBirth = countryOfBirth
        this.countryOfResidence = countryOfResidence
        this.linkedInUrl = linkedInUrl
        this.gitHubUrl = gitHubUrl
    }
}