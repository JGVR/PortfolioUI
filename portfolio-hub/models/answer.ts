import IMessage from "../contracts/message";
import Question from "./question";

export default class Answer implements IMessage{
    text: string 
    question: Question
    completed: boolean

    constructor(text: string, question: Question, completed: boolean){
        this.text=text;
        this.question=question;
        this.completed=completed;
    }
}