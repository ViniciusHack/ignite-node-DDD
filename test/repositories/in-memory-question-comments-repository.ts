import { QuestionCommentsRepository } from '@/domain/forum/application/repositories/question-comments-repository'
import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'

export class InMemoryQuestionCommentsRepository
  implements QuestionCommentsRepository
{
  async findById(id: string) {
    return this.items.find((item) => item.id.toString() === id) ?? null
  }

  async delete(questionComment: QuestionComment) {
    const itemIndex = this.items.findIndex(
      (item) => item.id === questionComment.id,
    )

    this.items.splice(itemIndex, 1)
  }

  public items: QuestionComment[] = []

  async create(questionComments: QuestionComment) {
    this.items.push(questionComments)
  }
}
