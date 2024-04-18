import PostContent from "@/components/ui/post-content";
import PostTitle from "@/components/ui/post-title";
import LoadingSpinner from "@/components/ui/spinner";
import { useEffect, useState } from "react";
import { useRemark } from "react-remark";

export default function Post({ params }: { params: { id: number } }) {
  const [date, setDate] = useState(new Date());
  const [reactContent, setMarkdownSource] = useRemark();

  useEffect(() => {
    if (post?.content) {
      setMarkdownSource(post.content);
      setDate(new Date(post.createdAt));
    }
  }, [post, setMarkdownSource]);

  useEffect(() => {
    if (!isLoading) {
      if (!post) {
        redirect("/404");
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
