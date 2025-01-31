import Badge from "./badge"

export default class Project{
    userId: number
    name: string
    description: string
    badge: Badge[]
    images: string[]
    url?: string

    constructor(userId: number, name: string, description: string, badge: Badge[], images: string[], url?: string){
        this.userId=userId;
        this.name=name;
        this.description=description;
        this.badge=badge;
        this.images=images;
        this.url=url;
    }
}