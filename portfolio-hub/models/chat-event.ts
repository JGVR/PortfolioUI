import Answer from "./answer"

export default class ChatEvent{
    event: string
    message: Answer

    constructor(event: string, message: Answer){
        this.event = event
        this.message = message
    }
}
