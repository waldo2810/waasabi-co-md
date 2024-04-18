import SectionTitle from "@/components/ui/section-title";

export default function RecentThoughts() {
  return (
    <div>
      <SectionTitle text="Recent Thoughts" />
      <div>
        {!posts.length && <p>Haven&apos;t posted yet</p>}
        {posts.length > 0 && (
          <div>
            {posts.map((post: any) => (
              <>
                <p className="my-1" key={post.id}>
                  <Link href={`/recent-thoughts/${post.id}`}>{post.title}</Link>
                </p>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
