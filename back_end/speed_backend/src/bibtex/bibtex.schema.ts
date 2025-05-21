import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class BibtexEntry extends Document {
  @Prop()
  entryType: string;

  @Prop()
  citationKey: string;

  @Prop({ type: Object })
  entryTags: Record<string, string>;
}

export const BibtexSchema = SchemaFactory.createForClass(BibtexEntry);