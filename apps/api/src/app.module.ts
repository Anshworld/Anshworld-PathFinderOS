import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from './prisma/prisma.module'
import { HealthModule } from './health/health.module'
import { MetricsModule } from './metrics/metrics.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { TracksModule } from './tracks/tracks.module'
import { EnrollmentModule } from './enrollment/enrollment.module'
import { ProgressModule } from './progress/progress.module'
import { MentorshipModule } from './mentorship/mentorship.module'
import { PaymentsModule } from './payments/payments.module'
import { NotificationsModule } from './notifications/notifications.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    HealthModule,
    MetricsModule,
    AuthModule,
    UsersModule,
    TracksModule,
    EnrollmentModule,
    ProgressModule,
    MentorshipModule,
    PaymentsModule,
    NotificationsModule
  ]
})
export class AppModule {}