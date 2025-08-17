import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { JwtService } from '@nestjs/jwt'
import { hash, compare } from 'bcryptjs'

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async register(email: string, password: string, fullName?: string) {
    const existing = await this.prisma.user.findUnique({ where: { email } })
    if (existing) throw new UnauthorizedException('Email already registered')
    const passwordHash = await hash(password, 10)
    const user = await this.prisma.user.create({
      data: {
        email,
        passwordHash,
        profile: { create: { fullName: fullName || email.split('@')[0] } }
      }
    })
    const tokens = await this.issueTokens(user.id)
    return { user, ...tokens }
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } })
    if (!user) throw new UnauthorizedException('Invalid credentials')
    const ok = await compare(password, user.passwordHash)
    if (!ok) throw new UnauthorizedException('Invalid credentials')
    const tokens = await this.issueTokens(user.id)
    return { user, ...tokens }
  }

  async refresh(userId: string) {
    const tokens = await this.issueTokens(userId)
    return tokens
  }

  private async issueTokens(userId: string) {
    const accessToken = await this.jwt.signAsync({ sub: userId })
    const refreshToken = Math.random().toString(36).slice(2)
    const ttlDays = 7
    await this.prisma.refreshToken.create({
      data: {
        userId,
        token: refreshToken,
        expiresAt: new Date(Date.now() + ttlDays * 24 * 60 * 60 * 1000)
      }
    })
    return { accessToken, refreshToken }
  }
}