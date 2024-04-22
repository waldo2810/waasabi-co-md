import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1 className="text-5xl pb-5">
        Whoops. Looks like this page does not exist.
      </h1>
      <p>
        Go home? <Link to="/">Here</Link>
      </p>
    </div>
  );
}
