import Footer from "@/components/footer";
import Nav from "@/components/nav";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <section className="flex flex-col justify-between max-w-2xl mx-auto min-h-screen">
      <Nav />
      <div className="my-5 md:my-20">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
}
