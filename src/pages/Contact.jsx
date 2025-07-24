import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <motion.div className="p-8 max-w-3xl mx-auto dark:text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>

      {submitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded">✅ Thank you! Your message was sent.</div>
      ) : (
        <form
          action="https://formspree.io/f/mrblpvjl" // <-- replace with your real form ID
          method="POST"
          className="grid gap-4"
          onSubmit={() => setSubmitted(true)}
        >
          <input className="p-2 border rounded dark:bg-gray-800 dark:border-gray-600" type="text" name="name" placeholder="Your Name" required />
          <input className="p-2 border rounded dark:bg-gray-800 dark:border-gray-600" type="email" name="email" placeholder="Your Email" required />
          <textarea className="p-2 border rounded dark:bg-gray-800 dark:border-gray-600" name="message" rows="4" placeholder="Your Message" required />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Send</button>
        </form>
      )}

      <div className="mt-6">
        <p>📧 Email: upadhyayanshu07@gmail.com</p>
        <p>🌐 GitHub: <a className="text-blue-400" href="https://shorturl.at/uCb9J" target="_blank">View Profile</a></p>
        <p>📍 Location: Pune, India</p>
      </div>
    </motion.div>
  );
}
