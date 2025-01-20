interface SkillStruct{
    name: string,
    level: number
}

export default class Skill{
    name: string
    level: number

    constructor({name, level}: SkillStruct){
        this.name = name;
        this.level = level;
    }
}