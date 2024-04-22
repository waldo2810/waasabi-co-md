import { useQuery } from "@tanstack/react-query";
import { getPostByIdService } from "../../axios/posts/get-by-id";

export function getPostById(id: string) {
  return useQuery({
    queryKey: ["post"],
    queryFn: () => getPostByIdService(id),
  });
}
