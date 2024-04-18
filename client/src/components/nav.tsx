import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="py-2 flex justify-start">
      <Link to="/" className="inline-block">
        <div className="flex items-center gap-3">
          <img src="/pfp-no-bg.gif" className="h-[20px] w-[20px]" />
          <h6>waasabi.co</h6>
        </div>
      </Link>
    </nav>
  );
};

export default Nav;
