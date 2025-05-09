'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center h-[80vh] text-center px-4"
    >
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        Hi, I am Jean-Marie Mattar
      </h1>
      <p className="text-xl text-gray-700 max-w-xl">
        I am a passionate full-stack developer. Welcome to my portfolio.
      </p>
      <div className="mt-6 space-x-4">
        <a href="/projects" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          View Projects
        </a>
        <a href="/contact" className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition">
          Contact Me
        </a>
      </div>
    </motion.section>
  );
}
