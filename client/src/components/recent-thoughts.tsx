import { getTopFivePosts } from "@/services/api/rq/posts/get-top-5";
import SectionTitle from "./ui/section-title";
import LoadingSpinner from "./ui/spinner";

const RecentThoughts = () => {
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
                  <a href={`/recent-thoughts/${post.id}`}>{post.title}</a>
                </p>
              </>
            ))}
            <a href="/recent-thoughts">
              <span className="italic font-bold">See all thoughts ↗</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentThoughts;
