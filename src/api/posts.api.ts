
import api from "./axios";
import type { Post } from "../types/post";

export async function getPosts(): Promise<Post[]> {
  const response = await api.get<Post[]>("/posts");

  return response.data;
}
