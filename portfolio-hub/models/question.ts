import IMessage from "../contracts/message";

export default class Question implements IMessage{
    text: string
    
    constructor(text: string){
        this.text=text
    }
}