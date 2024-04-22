import Posts from "@/components/posts";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.div initial={{ y: -50 }} animate={{ y: 0 }}>
      <section className="flex flex-col gap-5">
        <Posts topFive />
      </section>
    </motion.div>
  );
}
