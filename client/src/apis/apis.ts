import axios from "axios";
import { todoInfo } from "../type/types";

const serverUrl = import.meta.env.VITE_SERVER_URL;

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

// 투두 생성
export const addTodo = async (text: string): Promise<void> => {
  await axiosInstance.post<todoInfo>('/', {
    content: text,
    isDone: false
  });
}

// 투두 삭제
export const deleteTodo = async (todoId: string): Promise<todoInfo> => {
  console.log(todoId);
  const res = await axiosInstance.delete(`/todo/${todoId}`);
  return res.data;
}