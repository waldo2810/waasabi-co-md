import Footer from "@/components/footer";
import Nav from "@/components/nav";
import { Outlet, Route, Routes  } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/posts/Page";
import PostsLayout from "./pages/posts/Layout";
import NotFound from "./pages/404";

export default function App() {
    return (
        <section className="flex flex-col justify-between max-w-2xl mx-auto min-h-screen">
            <Nav />
            <div className="my-5 md:my-20">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/posts" element={<PostsPage/>}/>
                    <Route path="/posts/:id" element={<PostsLayout/>}/>
                    <Route path="404" element={<NotFound/>}/>
                </Routes>
            </div>
            <Outlet/>
            <Footer />
        </section>
    );
}
