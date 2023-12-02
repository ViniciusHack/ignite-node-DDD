import { expect, test } from "vitest";
import { Answer } from "../entities/answer";
import { AnswersRepository } from "../repositories/answers-repository";
import { AnswerQuestionUseCase } from "./answer-question";


const fakeAnswerRepository: AnswersRepository = {
  create: async (answer: Answer) => {
    return;
  }
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository);

  const answer = await answerQuestion.execute({ content: 'Nova resposta', instructorId: '123', questionId: '123'})

  expect(answer.content).toBe('Nova resposta')
})