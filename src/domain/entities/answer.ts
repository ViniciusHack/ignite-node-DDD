import { randomUUID } from "crypto";

interface QuestionProps {
  questionId: string,
  content: string,
  authorId: string
}

export class Answer {
  public id: string
  public content: string
  public authorId: string
  public questionId: string

  constructor(props: QuestionProps, id?: string) {
    this.content = props.content;
    this.authorId = props.authorId;
    this.questionId = props.questionId;
    this.id = id ?? randomUUID()
  }
}