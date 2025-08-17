import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from '../auth/jwt.guard'
import { PaymentsService } from './payments.service'

@ApiTags('payments')
@Controller('payments')
export class PaymentsController {
  constructor(private payments: PaymentsService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('order')
  create(@Req() req: any, @Body() body: { amount: number; currency?: string }) {
    return this.payments.createOrder(req.user.sub, body.amount, body.currency || 'INR')
  }

  @Post('webhook')
  webhook(@Body() body: any) {
    return this.payments.webhookVerify(body)
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  list(@Req() req: any) {
    return this.payments.list(req.user.sub)
  }
}