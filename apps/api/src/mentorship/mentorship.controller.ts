import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from '../auth/jwt.guard'
import { MentorshipService } from './mentorship.service'

@ApiTags('mentorship')
@Controller('mentors')
export class MentorshipController {
  constructor(private svc: MentorshipService) {}

  @Get()
  list() {
    return this.svc.mentors()
  }

  @Get(':id/slots')
  slots(@Param('id') id: string) {
    return this.svc.slots(id)
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('book')
  book(@Req() req: any, @Body() body: { slotId: string }) {
    return this.svc.book(req.user.sub, body.slotId)
  }
}