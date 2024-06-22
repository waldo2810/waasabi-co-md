import MeNow from "@/components/me-now";
import Posts from "@/components/posts";
import RelevantLinks from "@/components/relevant-links";
import { motion } from "framer-motion";

export default function HomePage() {
    return (
        <motion.div initial={{ y: -50 }} animate={{ y: 0 }}>
            <section className="flex flex-col gap-5">
                <p>Systems Engineer. I build things (kind of). I solve problems. More importantly, human.</p>
                <Posts topFive />
                <MeNow />
                <RelevantLinks />
            </section>
        </motion.div>
    );
}
