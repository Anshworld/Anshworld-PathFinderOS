import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  async createOrder(userId: string, amount: number, currency = 'INR') {
    const orderId = 'order_' + Math.random().toString(36).slice(2)
    const payment = await this.prisma.payment.create({
      data: { userId, amount, currency, orderId, status: 'CREATED', provider: 'RAZORPAY' }
    })
    return { orderId, paymentId: payment.id, amount, currency }
  }

  async webhookVerify(payload: any) {
    // In production, verify signature using RAZORPAY_KEY_SECRET
    const orderId = payload?.payload?.payment?.entity?.order_id || payload.orderId
    const paymentId = payload?.payload?.payment?.entity?.id || payload.paymentId
    if (!orderId) return { ok: false }
    const payment = await this.prisma.payment.findFirst({ where: { orderId } })
    if (!payment) return { ok: false }
    await this.prisma.payment.update({ where: { id: payment.id }, data: { paymentId, status: 'CAPTURED' } })
    return { ok: true }
  }

  list(userId: string) {
    return this.prisma.payment.findMany({ where: { userId }, orderBy: { createdAt: 'desc' } })
  }
}