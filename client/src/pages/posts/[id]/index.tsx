import PostContent from "@/components/ui/post-content";
import PostTitle from "@/components/ui/post-title";
import LoadingSpinner from "@/components/ui/spinner";
import { Path, redirect, useParams } from "@/router";
import { getPostById } from "@/services/api/rq/posts/get-by-id";
import { useEffect, useState } from "react";
import { useRemark } from "react-remark";

export default function Post() {
  const params = useParams("/posts/:id/page");
  const [date, setDate] = useState(new Date());
  const [reactContent, setMarkdownSource] = useRemark();
  const { data: post, isLoading } = getPostById(params.id);

  useEffect(() => {
    if (post?.content) {
      setMarkdownSource(post.content);
      setDate(new Date(post.createdAt));
    }
  }, [post, setMarkdownSource]);

  useEffect(() => {
    if (!isLoading) {
      if (!post) {
        redirect("/404" as Path);
      }
    }
  }, [isLoading, post]);

  return (
    <div className="flex flex-col items-center justify-center">
      {isLoading && <LoadingSpinner />}
      <PostTitle>{post?.title}</PostTitle>
      <p>Posted on {date.toDateString()}</p>
      <PostContent>{reactContent}</PostContent>
    </div>
  );
}
