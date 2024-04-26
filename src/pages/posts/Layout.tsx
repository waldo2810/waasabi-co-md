import PostTitle from "@/components/ui/post-title";
import { getPostInfo } from "@/helpers/get-post-info";
import { motion } from "framer-motion";
import { Suspense, lazy, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function getPostComponent(id: string): React.FC {
    const PostComponent = lazy(() => import(`./${id}/index.mdx`))
    return () => (
        <Suspense fallback={<div>Loading post...</div>}>
            <PostComponent />
        </Suspense>
    );
};

export default function PostsLayout() {
    const navigate = useNavigate();
    const { id } = useParams();
    const post = getPostInfo(id as string);

    useEffect(() => {
        if (!post) navigate('/404')
    }, [post])
    
    if (!post) {
        return
    }
    
    const PostContent = getPostComponent(post.id)
    return (
        <motion.div initial={{ y: -50 }} animate={{ y: 0 }}>
            <article className="flex flex-col items-center justify-center">
                <PostTitle>{post?.title}</PostTitle>
                <p>Posted on {new Date(post?.date as string).toDateString()}</p>
                {<PostContent/>}
            </article>
        </motion.div>
    );
}
