import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BibtexController } from './bibtex.controller';
import { BibtexService } from './bibtex.service';
import { BibtexEntry, BibtexSchema } from './bibtex.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: BibtexEntry.name, schema: BibtexSchema }]),
  ],
  controllers: [BibtexController],
  providers: [BibtexService],
})
export class BibtexModule {}