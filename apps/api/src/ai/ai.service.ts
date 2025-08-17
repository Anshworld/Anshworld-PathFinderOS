import { Injectable } from '@nestjs/common'
import OpenAI from 'openai'

@Injectable()
export class AiService {
  private client: OpenAI | null
  private enabled: boolean
  private model: string

  constructor() {
    this.enabled = process.env.AI_ENABLED === 'true'
    this.model = process.env.AI_MODEL || 'gpt-4o-mini'
    const key = process.env.OPENAI_API_KEY
    this.client = this.enabled && key ? new OpenAI({ apiKey: key }) : null
  }

  async summarize(text: string) {
    if (!this.client) return { summary: text.slice(0, 200) }
    const resp = await this.client.chat.completions.create({
      model: this.model,
      messages: [
        { role: 'system', content: 'Summarize the content concisely for students.' },
        { role: 'user', content: text }
      ],
      temperature: 0.2
    })
    return { summary: resp.choices[0]?.message?.content?.trim() || '' }
  }

  async generateQuiz(topic: string, count = 5) {
    if (!this.client) {
      return {
        items: Array.from({ length: count }).map((_, i) => ({
          type: 'MCQ',
          prompt: `Placeholder question ${i + 1} about ${topic}?`,
          options: ['A', 'B', 'C', 'D'],
          answerKey: 'A'
        }))
      }
    }
    const resp = await this.client.chat.completions.create({
      model: this.model,
      messages: [
        { role: 'system', content: 'Create JSON array of MCQ questions with fields: prompt, options[4], answerKey.' },
        { role: 'user', content: `Topic: ${topic}. Count: ${count}.` }
      ],
      temperature: 0.5
    })
    const raw = resp.choices[0]?.message?.content || '[]'
    try {
      const items = JSON.parse(raw)
      return { items }
    } catch {
      return { items: [] }
    }
  }

  async gradeSubjective(prompt: string, answer: string) {
    if (!this.client) return { score: 3, feedback: 'Baseline feedback' }
    const resp = await this.client.chat.completions.create({
      model: this.model,
      messages: [
        { role: 'system', content: 'Grade on a 1-5 scale with concise feedback. Respond JSON: {"score":number,"feedback":string}.' },
        { role: 'user', content: `Prompt: ${prompt}\nAnswer: ${answer}` }
      ],
      temperature: 0.3
    })
    try {
      const json = JSON.parse(resp.choices[0]?.message?.content || '{}')
      return json
    } catch {
      return { score: 4, feedback: 'Good attempt' }
    }
  }

  async recommendNextSprints(profile: any, history: any[]) {
    if (!this.client) return { recommendations: [] }
    const resp = await this.client.chat.completions.create({
      model: this.model,
      messages: [
        { role: 'system', content: 'Recommend 3 next sprints as array of {"title":string,"reason":string}.' },
        { role: 'user', content: `Profile: ${JSON.stringify(profile)}\nHistory: ${JSON.stringify(history)}` }
      ],
      temperature: 0.4
    })
    try {
      const recommendations = JSON.parse(resp.choices[0]?.message?.content || '[]')
      return { recommendations }
    } catch {
      return { recommendations: [] }
    }
  }
}