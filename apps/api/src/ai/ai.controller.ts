import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from '../auth/jwt.guard'
import { AiService } from './ai.service'

@ApiTags('ai')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('ai')
export class AiController {
  constructor(private ai: AiService) {}

  @Post('summarize')
  summarize(@Body() body: { text: string }) {
    return this.ai.summarize(body.text)
  }

  @Post('quiz')
  quiz(@Body() body: { topic: string; count?: number }) {
    return this.ai.generateQuiz(body.topic, body.count || 5)
  }

  @Post('grade')
  grade(@Body() body: { prompt: string; answer: string }) {
    return this.ai.gradeSubjective(body.prompt, body.answer)
  }

  @Post('recommend')
  recommend(@Body() body: { profile: any; history: any[] }) {
    return this.ai.recommendNextSprints(body.profile, body.history || [])
  }
}