import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.div className="p-8 max-w-4xl mx-auto dark:text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <h1 className="text-3xl font-bold mb-6">Experience</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Full Stack Developer – Readycoder</h2>
          <p className="text-sm text-gray-400">Jan 2024 – Apr 2024</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Built APIs & UI to reduce latency by 35%</li>
            <li>Optimized backend and collaborated in agile teams</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Data Analyst – Suvidha Foundation</h2>
          <p className="text-sm text-gray-400">Apr 2024 – Jun 2024</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Automated data processing pipelines</li>
            <li>Built dashboards for decision-making</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
