import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BibtexEntry } from './bibtex.schema';

@Injectable()
export class BibtexService {
  constructor(
    @InjectModel(BibtexEntry.name) private bibtexModel: Model<BibtexEntry>
  ) {}

  async create(entries: Partial<BibtexEntry>[]) {
    return this.bibtexModel.insertMany(entries);
  }

  async findAll() {
    return this.bibtexModel.find().exec();
  }
}