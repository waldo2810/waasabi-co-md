import Footer from "@/components/footer";
import Nav from "@/components/nav";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <section className="mx-5 md:mx-20 h-screen flex flex-col justify-between">
      <Nav />
      <div className="my-5 md:my-20">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
}
