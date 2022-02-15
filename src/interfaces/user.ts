import { Document } from "mongoose";

export default interface Iuser extends Document{
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  image: string;
}

export interface InewUser {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  image: string;
}