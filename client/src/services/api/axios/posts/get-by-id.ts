import { api } from "../client";

export async function getPostByIdService(id: string) {
  const { data } = await api.get(`/posts/${id}`);
  return data;
}
