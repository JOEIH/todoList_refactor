import { ObjectId } from './../../../server/node_modules/bson/src/objectid';

export interface todoInfo {
  isDone: boolean;
  content: string;
  _id: ObjectId;
}