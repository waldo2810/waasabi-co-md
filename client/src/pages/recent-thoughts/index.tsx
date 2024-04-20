import SectionTitle from "@/components/ui/section-title";
import LoadingSpinner from "@/components/ui/spinner";
import { getPosts } from "@/services/api/rq/posts/get-all";

export default function RecentThoughts() {
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
                  <a href={`/recent-thoughts/${post.id}`}>{post.title}</a>
                </p>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
