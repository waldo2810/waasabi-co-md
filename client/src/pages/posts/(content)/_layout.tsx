import PostTitle from "@/components/ui/post-title";
import { getPostInfo } from "@/helpers/get-post-info";
import { Path, useNavigate } from "@/router";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function PostsLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const postId = location.pathname.split("/").pop();
  const post = getPostInfo(postId as string);

  useEffect(() => {
    if (!post) {
      navigate("/404" as Path);
    }
  }, [post]);

  return (
    <div className="flex flex-col items-center justify-center">
      <PostTitle>{post?.title}</PostTitle>
      <p>Posted on {new Date(post?.date as string).toDateString()}</p>
      <Outlet />
    </div>
  );
}
