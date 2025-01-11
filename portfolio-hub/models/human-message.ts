import Question from "./question"

export default class HumanMessage{
    question: Question

    constructor(question: Question){
        this.question = question
    }
}