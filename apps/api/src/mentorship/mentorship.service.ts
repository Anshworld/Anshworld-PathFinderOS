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
      const changed = await tx.mentorSlot.updateMany({
        where: { id: slotId, isBooked: false, updatedAt: slot.updatedAt },
        data: { isBooked: true }
      })
      if (changed.count !== 1) throw new BadRequestException('Slot just booked')
      const reserved = await tx.mentorSlot.findUnique({ where: { id: slotId } })
      return tx.mentorshipSession.create({
        data: {
          studentId: userId,
          mentorId: reserved!.mentorId,
          slotId: reserved!.id,
          scheduledFor: reserved!.startTime,
          status: 'CONFIRMED'
        }
      })
    })

    return session
  }
}