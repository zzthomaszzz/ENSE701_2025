import { Body, Controller, Get, Post } from '@nestjs/common';
import { BibtexService } from './bibtex.service';
import { BibtexEntry } from './bibtex.schema';

@Controller('bibtex')
export class BibtexController {
  constructor(private readonly bibtexService: BibtexService) {}

  @Post()
  async uploadBibtex(@Body() entries: Partial<BibtexEntry>[]) {
    return this.bibtexService.create(entries);
  }

  @Get()
  async getAll() {
    return this.bibtexService.findAll();
  }
}