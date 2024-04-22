import PostTitle from "@/components/ui/post-title";
import { getPostInfo } from "@/helpers/get-post-info";
import { Path, useNavigate } from "@/router";
import { motion } from "framer-motion";
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
    <motion.div initial={{ y: -50 }} animate={{ y: 0 }}>
      <article className="flex flex-col items-center justify-center">
        <PostTitle>{post?.title}</PostTitle>
        <p>Posted on {new Date(post?.date as string).toDateString()}</p>
        <Outlet />
      </article>
    </motion.div>
  );
}
