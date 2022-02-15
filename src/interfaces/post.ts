import { Document } from "mongoose";

export default interface Ipost extends Document {
  author: string;
  date: number;
  body: string;
  image?: string;
}

export interface InewPost {
  author: string;
  date: number;
  body: string;
  image?: string;
}