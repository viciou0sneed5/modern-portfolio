import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div className="p-8 max-w-3xl mx-auto dark:text-white" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.7 }}>
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p>
        Full Stack Developer with 1 year of experience building scalable apps with React, Node.js, and MongoDB. I'm passionate
        about cloud automation, CI/CD pipelines, and simplifying DevOps for startups. I love building tools that reduce tech friction.
      </p>
      <h3 className="mt-8 font-semibold text-xl">Skills</h3>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2 text-sm text-gray-800">
        <li>React</li><li>Tailwind CSS</li><li>Node.js</li>
        <li>MongoDB</li><li>Express.js</li><li>Render</li>
        <li>GitHub Actions</li><li>Vercel</li><li>PostgreSQL</li>
      </ul>
    </motion.div>
  );
}
