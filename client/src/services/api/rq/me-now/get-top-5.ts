import { useQuery } from "@tanstack/react-query";
import { getTopFiveMeNowService } from "../../axios/me-now/get-top-5";

export function getTopFiveMeNow() {
  return useQuery({
    queryKey: ["me-now"],
    queryFn: getTopFiveMeNowService,
  });
}
