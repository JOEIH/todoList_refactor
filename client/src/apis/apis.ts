import { ObjectId } from './../../../server/node_modules/bson/src/objectid';
import axios from "axios";

require("dotenv").config({path: "../.env"});

interface todoInfo {
  isDone: boolean;
  content: string;
  _id: ObjectId;
}

const serverUrl = process.env.SERVER_URL;

const axiosInstance = axios.create({
  baseURL: serverUrl,
  timeout: 2000,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

// 전체 투두 불러오기
export const getAllData = async (): Promise<todoInfo[]> => {
  const res = await axiosInstance.get<todoInfo[]>('/');
  return res.data;
}
