import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getMe(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      include: { profile: true }
    })
  }

  async updateMe(userId: string, data: { fullName?: string; avatarUrl?: string; locale?: string }) {
    return this.prisma.profile.upsert({
      where: { userId },
      create: { userId, fullName: data.fullName || 'User', avatarUrl: data.avatarUrl, locale: data.locale || 'en' },
      update: { fullName: data.fullName, avatarUrl: data.avatarUrl, locale: data.locale }
    })
  }
}