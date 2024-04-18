import { api } from "../client";

export async function getTopFiveMeNowService() {
  const { data } = await api.get("/me-now/top-five");
  return data;
}
