import SectionTitle from "@/components/ui/section-title";
import LoadingSpinner from "@/components/ui/spinner";
import { getPosts } from "@/services/api/rq/posts/get-all";
import { Link } from "react-router-dom";

export default function Posts() {
  const { data, isLoading, isError } = getPosts();
  if (isLoading) {
    return <div>{isLoading ? <LoadingSpinner /> : null}</div>;
  }
  if (isError) {
    return <div>{isError ? <p>Cannot load thoughts.</p> : null}</div>;
  }
  return (
    <div>
      <SectionTitle text="Recent Thoughts" />
      <div>
        {!data.length && <p>Haven&apos;t posted yet</p>}
        {data.length > 0 && (
          <div>
            {data.map((post: any) => (
              <>
                <p className="my-1" key={post.id}>
                  <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </p>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
