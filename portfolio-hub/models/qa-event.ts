import IChatEvent from "@/contracts/chat-event";
import Question from "./question";

export default class QaEvent implements IChatEvent{
    event: string
    question: string
    text: string

    constructor(event: string, question: string, text: string){
        this.event = event;
        this.question = question;
        this.text = text;
    }
}
