import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class ProgressService {
  constructor(private prisma: PrismaService) {}

  async mark(userId: string, sprintId: string, completion: number) {
    const progress = await this.prisma.progress.upsert({
      where: { userId_sprintId: { userId, sprintId } },
      update: { completion },
      create: { userId, sprintId, completion }
    })

    if (completion >= 100) {
      await this.awardCoins(userId, 50, 'Completed sprint')
    }

    return progress
  }

  private async awardCoins(userId: string, amount: number, reason: string) {
    const last = await this.prisma.sparkCoinTransaction.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    })
    const balance = (last?.balance || 0) + amount
    await this.prisma.sparkCoinTransaction.create({
      data: { userId, type: 'EARN', reason, amount, balance }
    })
    return balance
  }
}