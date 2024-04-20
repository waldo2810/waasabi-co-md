import { api } from "../client";

export async function getMeNowByIdService(id: string) {
  const { data } = await api.get(`/me-now/${id}`);
  return data;
}
