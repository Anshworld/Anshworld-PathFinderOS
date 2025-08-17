import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class MentorshipService {
  constructor(private prisma: PrismaService) {}

  mentors() {
    return this.prisma.user.findMany({ where: { role: 'MENTOR' }, include: { mentorProfile: true } })
  }

  slots(mentorId: string) {
    return this.prisma.mentorSlot.findMany({ where: { mentorId, isBooked: false } })
  }

  async book(userId: string, slotId: string) {
    const slot = await this.prisma.mentorSlot.findUnique({ where: { id: slotId } })
    if (!slot || slot.isBooked) throw new BadRequestException('Slot unavailable')

    const session = await this.prisma.$transaction(async (tx) => {
      const updated = await tx.mentorSlot.update({ where: { id: slotId }, data: { isBooked: true } })
      return tx.mentorshipSession.create({
        data: {
          studentId: userId,
          mentorId: updated.mentorId,
          slotId: updated.id,
          scheduledFor: updated.startTime,
          status: 'CONFIRMED'
        }
      })
    })

    return session
  }
}