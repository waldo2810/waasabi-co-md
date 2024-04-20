import { api } from "../client";

export async function getMeNowsService() {
  const { data } = await api.get("/me-now");
  return data;
}
