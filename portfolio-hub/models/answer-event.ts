import IChatEvent from "@/contracts/chat-event";
import Answer from "./answer";

export default class AnswerEvent implements IChatEvent{
    event: string
    message: Answer

    constructor(event: string, answer: Answer){
        this.event=event;
        this.message=answer;
    }
}