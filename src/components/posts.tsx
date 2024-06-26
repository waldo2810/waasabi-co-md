import { getPosts } from "@/helpers/get-posts";
import { Link } from "react-router-dom";
import SectionTitle from "./ui/section-title";

const Posts = ({ topFive }: { topFive?: boolean }) => {
  let posts;
  if (topFive) {
    posts = getPosts().slice(0, 5);
  } else {
    posts = getPosts();
  }
  return (
    <div>
      <SectionTitle text="Recent Thoughts" />
      <div>
        {!posts.length ? (
          <p>Haven&apos;t posted yet</p>
        ) : (
          <table className="w-full">
            {posts.map((post) => (
              <tr>
                <td>
                  <p className="my-1" key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                  </p>
                </td>
                <td>{post.date}</td>
              </tr>
            ))}
            {topFive && posts.length > 5 ? (
              <Link to="/posts">
                <span className="italic font-bold">See all thoughts ↗</span>
              </Link>
            ) : null}
          </table>
        )}
      </div>
    </div>
  );
};

export default Posts;
