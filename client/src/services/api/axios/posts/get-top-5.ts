import { api } from "../client";

export async function getTopFivePostsService() {
  const { data } = await api.get("/posts/top-five");
  return data;
}
