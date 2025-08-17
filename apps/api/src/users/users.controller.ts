import { Body, Controller, Get, Put, Req, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from '../auth/jwt.guard'
import { UsersService } from './users.service'

@ApiTags('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('me')
export class UsersController {
  constructor(private users: UsersService) {}

  @Get()
  me(@Req() req: any) {
    return this.users.getMe(req.user.sub)
  }

  @Put()
  update(@Req() req: any, @Body() body: { fullName?: string; avatarUrl?: string; locale?: string }) {
    return this.users.updateMe(req.user.sub, body)
  }
}