import { useQuery } from "@tanstack/react-query";
import { getTopFivePostsService } from "../../axios/posts/get-top-5";

export function getTopFivePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getTopFivePostsService,
  });
}
