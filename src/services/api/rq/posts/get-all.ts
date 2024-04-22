import { useQuery } from "@tanstack/react-query";
import { getPostsService } from "../../axios/posts/get-all";

export function getPosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPostsService,
  });
}
