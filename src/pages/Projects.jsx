import { motion } from "framer-motion";

const projects = [
  {
    title: "Remote DevOps Hub",
    desc: "Deploy GitHub repos with one click using Render. Integrated CI/CD, monitoring, AI support.",
    stack: "React, Node.js, MongoDB, GitHub Actions, Render",
  },
  {
    title: "News Aggregator",
    desc: "Scrapes and summarizes news using Python & NLP in real-time.",
    stack: "Python, FastAPI, MongoDB",
  },
  {
    title: "Retinopathy Detector",
    desc: "Detects diabetic retinopathy from images using ML.",
    stack: "OpenCV, SVM, Python",
  }
];

export default function Projects() {
  return (
    <motion.div className="p-8 max-w-6xl mx-auto dark:text-white" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }}>
      <h1 className="text-3xl font-bold text-center mb-6">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div key={i} className="p-4 border rounded dark:border-gray-700 bg-white dark:bg-gray-800"
            whileHover={{ y: -5, scale: 1.02 }}>
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-400">{p.stack}</p>
            <p className="mt-2">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
