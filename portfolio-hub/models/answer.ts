import IMessage from "../contracts/message";
import Question from "./question";

export default class Answer implements IMessage{
    text: string 
    question: Question | string
    completed: boolean

    constructor(text: string, question: Question | string = "", completed: boolean = false){
        this.text=text;
        this.question=question;
        this.completed=completed;
    }
}