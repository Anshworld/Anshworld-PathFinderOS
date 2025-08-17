import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from '../auth/jwt.guard'
import { EnrollmentService } from './enrollment.service'

@ApiTags('enrollment')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('enroll')
export class EnrollmentController {
  constructor(private enrollment: EnrollmentService) {}

  @Post()
  enroll(@Req() req: any, @Body() body: { trackId: string }) {
    return this.enrollment.enroll(req.user.sub, body.trackId)
  }
}