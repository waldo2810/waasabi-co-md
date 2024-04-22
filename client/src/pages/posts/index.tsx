import Posts from "@/components/posts";
import { motion } from "framer-motion";

export default function PostsPage() {
  return (
    <motion.div initial={{ y: -50 }} animate={{ y: 0 }}>
      <Posts />
    </motion.div>
  );
}
