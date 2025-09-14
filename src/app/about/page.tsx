'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';





export default function AboutPage() {
  return (
    <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto py-16 px-4 text-center"
        >
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
       <Image
        src="/car.jpeg"
        alt="Jean-Marie Mattar"
        width={200}
        height={200}
        className="rounded-full object-cover shadow-md mx-auto"
      />

      </div>

      <h2 className="text-3xl font-bold mb-4 text-blue-600">Hi, I am Jean-Marie 👋</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        I am a full-stack developer with a passion for building clean, modern web applications using TypeScript, Next.js, and AI tools. My work blends functionality and aesthetics.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-gray-800">Skills</h3>
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Next.js</span>
        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">TypeScript</span>
        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">Python</span>
        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">C#</span>
        <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">Flask</span>
        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">JAVA</span>
        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">C++</span>
        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">SQL</span>
      </div>

      <h3 className="text-xl font-semibold mb-2 text-gray-800">Fun Facts</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1 text-left max-w-md mx-auto">
        <li>I built an AI-powered fitness tracker as my senior project (FitGenius)</li>
        <li>I love optimizing performance and UI/UX design</li>
        <li>I am curious about the connection between AI, trading, and astrology 🌙</li>
      </ul>
    </motion.section>
  );
}
