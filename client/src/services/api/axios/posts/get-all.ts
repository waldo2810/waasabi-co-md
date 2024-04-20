import { api } from "../client";

export async function getPostsService() {
  const { data } = await api.get("/posts");
  return data;
}
