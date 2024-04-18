import MeNow from "@/components/me-now";
import RecentThoughts from "@/components/recent-thoughts";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div initial={{ y: -50 }} animate={{ y: 0 }}>
      <section className="flex flex-col gap-5">
        <RecentThoughts />
        <MeNow />
      </section>
    </motion.div>
  );
}
