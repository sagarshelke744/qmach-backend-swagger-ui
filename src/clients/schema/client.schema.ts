import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type ClientDocument = Client & Document;
@Schema()
export class Client {
  @Prop({ default: '' })
  companyName: string;

  @Prop({ default: '' })
  contactPersonName: string;

  @Prop({ default: '' })
  email: string;

  @Prop({ default: '' })
  mobile: string;

  @Prop({ default: '' })
  address: string;

  @Prop({ default: '' })
  gstNo: string;

  @Prop({ default: '' })
  plant: string;

  @Prop({ default: '' })
  state: string;

  @Prop({ default: '' })
  zone: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
