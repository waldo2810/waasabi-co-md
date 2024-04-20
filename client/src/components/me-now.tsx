import { getTopFiveMeNow } from "@/services/api/rq/me-now/get-top-5";
import { Link } from "react-router-dom";
import SectionTitle from "./ui/section-title";
import LoadingSpinner from "./ui/spinner";

const MeNow = () => {
  const { data, isLoading, isError } = getTopFiveMeNow();
  if (isLoading) {
    return <div>{isLoading ? <LoadingSpinner /> : null}</div>;
  }
  if (isError) {
    return <div>{isError ? <p>Cannot load me now.</p> : null}</div>;
  }
  return (
    <div>
      <SectionTitle text="Me Now" />
      <div>
        {!data.length && <p>Haven&apos;t done anything interesting yet</p>}
        {data.length > 0 && (
          <div>
            {data.map((post: any) => (
              <>
                <p className="my-1" key={post.id}>
                  <Link to={`/me-now/${post.id}`}>{post.title}</Link>
                </p>
              </>
            ))}
            <Link to="/me-now">
              <span className="italic font-bold">See full me ↗</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MeNow;
