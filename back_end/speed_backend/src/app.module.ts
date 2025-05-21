import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BibtexController } from './bibtex/bibtex.controller';
import { BibtexService } from './bibtex/bibtex.service';

@Module({
  imports: [],
  controllers: [AppController, BibtexController],
  providers: [AppService, BibtexService],
})
export class AppModule {}