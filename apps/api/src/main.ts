import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { json, urlencoded } from 'express'
import rateLimit from 'express-rate-limit'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false })

  app.use(helmet())
  app.use(cookieParser())
  app.use(json({ limit: '10mb' }))
  app.use(urlencoded({ extended: true }))

  const origin = process.env.FRONTEND_ORIGIN || 'http://localhost:5173'
  app.enableCors({ origin, credentials: true })

  app.use(
    rateLimit({
      windowMs: 60 * 1000,
      max: 120
    })
  )

  const config = new DocumentBuilder()
    .setTitle('PathFinderOS API')
    .setDescription('API documentation for PathFinderOS')
    .setVersion('0.1.0')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document)

  const port = process.env.PORT || 3000
  await app.listen(port)
  // eslint-disable-next-line no-console
  console.log(`API running on http://localhost:${port}`)
}

bootstrap()