import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class TracksService {
  constructor(private prisma: PrismaService) {}

  list() {
    return this.prisma.track.findMany({ include: { sprints: true } })
  }

  get(id: string) {
    return this.prisma.track.findUnique({ where: { id }, include: { sprints: true } })
  }
}