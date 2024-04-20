import { getTopFivePosts } from "@/services/api/rq/posts/get-top-5";
import { Link } from "react-router-dom";
import SectionTitle from "./ui/section-title";
import LoadingSpinner from "./ui/spinner";

const Posts = () => {
  const { data, isLoading, isError } = getTopFivePosts();
  if (isLoading) {
    return <div>{isLoading ? <LoadingSpinner /> : null}</div>;
  }
  if (isError) {
    return <div>{isError ? <p>Cannot load recent thoughts.</p> : null}</div>;
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
                  <Link to={`/recent-thoughts/${post.id}`}>{post.title}</Link>
                </p>
              </>
            ))}
            <Link to="/recent-thoughts">
              <span className="italic font-bold">See all thoughts ↗</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
