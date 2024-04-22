import { useQuery } from "@tanstack/react-query";
import { getMeNowsService } from "../../axios/me-now/get-all";

export function getMeNows() {
  return useQuery({
    queryKey: ["me-nows"],
    queryFn: getMeNowsService,
  });
}
