import { Link, useNavigate } from "@/router";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();
  const token = Cookies.get("auth_token");
  useEffect(() => {
    if (!token) {
      console.log(token);
      navigate("/auth");
    }
  }, [token]);
  return (
    <div className="flex flex-col items-center md:justify-between">
      <ul className="flex items-center justify-center pb-5 text-gray-900 text-sm font-medium gap-3 w-full">
        <li className="list-none">
          <Link to="/admin/posts" className="hover:underline-offset-2">
            Posts
          </Link>
        </li>
      </ul>
      <div className="w-full md:w-[50rem]">
        <Outlet />
      </div>
    </div>
  );
}
