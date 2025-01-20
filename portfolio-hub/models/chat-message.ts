import HumanMessage from "./human-message";
import AIMessage from "./ai-message";

export default class ChatMsg{
    humanMessage?: HumanMessage
    aiMessage?: AIMessage

    constructor(humanMessage?: HumanMessage);
    constructor(aiMessage?: AIMessage);

    constructor(message?: HumanMessage | AIMessage){
        if(message instanceof HumanMessage){
            this.humanMessage=message;
        }else if(message instanceof AIMessage){
            this.aiMessage=message;
        }
    }
}