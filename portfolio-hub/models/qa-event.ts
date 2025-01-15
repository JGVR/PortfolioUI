import IChatEvent from "@/contracts/chat-event";
import Question from "./question";

export default class QaEvent implements IChatEvent{
    event: string
    question: string
    text: String

    constructor(event: string, question: string, text: String){
        this.event = event;
        this.question = question;
        this.text = text;
    }
}
