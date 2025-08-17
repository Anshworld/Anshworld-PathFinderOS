import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class EnrollmentService {
  constructor(private prisma: PrismaService) {}

  async enroll(userId: string, trackId: string) {
    return this.prisma.enrollment.upsert({
      where: { userId_trackId: { userId, trackId } },
      update: { status: 'ACTIVE' },
      create: { userId, trackId }
    })
  }
}