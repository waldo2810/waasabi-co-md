import postData from "@/posts.json";
import { Post } from "@/shared/interfaces/Post";

const posts = postData.posts;

export function getPostInfo(id: string): Post | undefined {
  return posts.find((p) => p.id === id);
}
