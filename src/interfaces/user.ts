import { Document } from "mongoose";

export default interface Iuser extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  image: string;
}

export interface InewUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  image: string;
}

export interface Ilogin {
  email: string;
  password: string;
}