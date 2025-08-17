import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) {}

  async notify(userId: string, title: string, body: string, metadata?: any) {
    const notif = await this.prisma.notification.create({
      data: { userId, title, body, channel: 'IN_APP', metadata }
    })
    // Email/SMS adapters would go here
    // eslint-disable-next-line no-console
    console.log('Notify:', { userId, title })
    return notif
  }
}