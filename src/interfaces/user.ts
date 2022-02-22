import { Document } from "mongoose";

export interface Iuser extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  image: string;
}

export interface InewUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  image: string;
}

export interface Ilogin {
  email: string;
  password: string;
}