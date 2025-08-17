import { PrismaClient, UserRole, TrackType } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const passwordHash = await hash('Password123!', 10)

  // Users
  const admin = await prisma.user.upsert({
    where: { email: 'admin@manparth.com' },
    update: {},
    create: {
      email: 'admin@manparth.com',
      passwordHash,
      role: UserRole.ADMIN,
      profile: { create: { fullName: 'Admin User', locale: 'en' } }
    }
  })

  const mentors = await Promise.all(
    Array.from({ length: 5 }).map((_, i) =>
      prisma.user.create({
        data: {
          email: `mentor${i + 1}@example.com`,
          passwordHash,
          role: UserRole.MENTOR,
          profile: { create: { fullName: `Mentor ${i + 1}` } },
          mentorProfile: {
            create: {
              expertiseAreas: ['Startup', 'Career', 'Tech']
            }
          }
        }
      })
    )
  )

  const students = await Promise.all(
    Array.from({ length: 20 }).map((_, i) =>
      prisma.user.create({
        data: {
          email: `student${i + 1}@example.com`,
          passwordHash,
          role: UserRole.STUDENT,
          profile: { create: { fullName: `Student ${i + 1}` } }
        }
      })
    )
  )

  // Tracks & Sprints
  const startupTrack = await prisma.track.create({
    data: {
      type: TrackType.STARTUP_BUILDER,
      title: 'Startup Builder',
      description: 'Build your startup from idea to demo day',
      sprints: {
        create: Array.from({ length: 3 }).map((_, si) => ({
          title: `Startup Sprint ${si + 1}`,
          modules: { create: [{ title: 'Intro Module', lessons: { create: [{ title: 'Lesson 1' }] } }] }
        }))
      }
    }
  })

  const skillTrack = await prisma.track.create({
    data: {
      type: TrackType.SKILL_COLLABORATOR,
      title: 'Skill Collaborator',
      description: 'Level up practical skills with peers and mentors',
      sprints: {
        create: Array.from({ length: 3 }).map((_, si) => ({
          title: `Skill Sprint ${si + 1}`,
          modules: { create: [{ title: 'Skill Module', lessons: { create: [{ title: 'Skill Lesson 1' }] } }] }
        }))
      }
    }
  })

  // Enroll first 5 students to startup track
  await Promise.all(
    students.slice(0, 5).map((s) =>
      prisma.enrollment.create({ data: { userId: s.id, trackId: startupTrack.id } })
    )
  )

  // Mentor slots for 2 weeks
  const now = new Date()
  const twoWeeks = 14
  for (const mentor of mentors) {
    for (let d = 0; d < twoWeeks; d++) {
      const day = new Date(now)
      day.setDate(now.getDate() + d)
      day.setHours(15, 0, 0, 0)
      const startTime = new Date(day)
      const endTime = new Date(day)
      endTime.setHours(day.getHours() + 1)
      await prisma.mentorSlot.create({
        data: { mentorId: mentor.id, startTime, endTime }
      })
    }
  }

  console.log(`Seeded: admin=${admin.email}, mentors=${mentors.length}, students=${students.length}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })