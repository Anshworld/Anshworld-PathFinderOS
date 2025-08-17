import { Controller, Get, Param } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { TracksService } from './tracks.service'

@ApiTags('tracks')
@Controller('tracks')
export class TracksController {
  constructor(private tracks: TracksService) {}

  @Get()
  list() {
    return this.tracks.list()
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.tracks.get(id)
  }
}