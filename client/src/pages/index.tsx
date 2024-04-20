import MeNow from "@/components/me-now";
import Posts from "@/components/posts";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div initial={{ y: -50 }} animate={{ y: 0 }}>
      <section className="flex flex-col gap-5">
        <Posts />
        <MeNow />
      </section>
    </motion.div>
  );
}
