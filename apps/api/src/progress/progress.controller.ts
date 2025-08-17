import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from '../auth/jwt.guard'
import { ProgressService } from './progress.service'

@ApiTags('progress')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('progress')
export class ProgressController {
  constructor(private progress: ProgressService) {}

  @Post('mark')
  mark(@Req() req: any, @Body() body: { sprintId: string; completion: number }) {
    return this.progress.mark(req.user.sub, body.sprintId, body.completion)
  }
}