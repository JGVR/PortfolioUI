import Badge from "./badge"

export default class Project{
    userId: number
    name: string
    description: string
    badges: Badge[]
    images: string[]
    url?: string

    constructor(userId: number, name: string, description: string, badges: Badge[], images: string[], url?: string){
        this.userId=userId;
        this.name=name;
        this.description=description;
        this.badges=badges;
        this.images=images;
        this.url=url;
    }
}