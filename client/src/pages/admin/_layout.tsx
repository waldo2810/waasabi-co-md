import { Outlet } from "react-router-dom";

export default function Admin() {
  const token = cookies().get("auth_token");
  if (!token) {
    redirect("/auth");
  }
  return (
    <div className="flex flex-col items-center md:justify-between">
      <ul className="flex items-center justify-center pb-5 text-gray-900 text-sm font-medium gap-3 w-full">
        <li className="list-none">
          <Link href="/admin/posts" className="hover:underline-offset-2">
            Posts
          </Link>
        </li>
        <li className="list-none">
          <Link href="/admin/interesting-stuff">Interesting stuff</Link>
        </li>
      </ul>
      <div className="w-full md:w-[50rem]">
        <Outlet />
      </div>
    </div>
  );
}
