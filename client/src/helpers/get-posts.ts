import postData from "@/posts.json";
import { Post } from "@/shared/interfaces/Post";

export function getPosts(): Post[] {
  return postData.posts;
}
