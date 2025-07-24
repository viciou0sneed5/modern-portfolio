import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-900 to-gray-900 dark:from-black dark:to-gray-800 text-white"
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img src="/profile.png" className="w-32 h-32 rounded-full shadow-lg mb-4" alt="Profile" />
      <h1 className="text-4xl font-bold">Hi, I'm Himanshu Upadhyay</h1>
      <p className="mt-2 text-lg">Founder|CTO|Software Engineer|DataAnalyst</p>
      <div className="mt-6">
        <a href="/projects" className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-700">View Projects</a>
      </div>
    </motion.div>
  );
}
