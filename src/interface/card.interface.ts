import { Document } from 'mongoose';
export interface ICard extends Document {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt?: Date;
  backgroundImage: string;
}
