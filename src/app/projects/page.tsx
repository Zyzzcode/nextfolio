'use client';
import { motion } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  {
    title: 'FitGenius',
    description: 'An AI-powered fitness and nutrition tracker built with Next.js, Flask, and OpenAI.',
    link: 'https://github.com/Zyzzcode/fitgenius',
  },
  {
    title: 'Personal Portfolio',
    description: 'This portfolio site — built with TypeScript, Next.js App Router, and Tailwind CSS.',
    link: 'https://github.com/Zyzzcode/nextfolio',
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-5xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">My Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="p-6 border border-gray-200 rounded-lg shadow hover:shadow-lg transition bg-white"
        >
          <h2 className="text-2xl font-semibold mb-2 text-gray-900">{project.title}</h2>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 hover:underline cursor-pointer font-medium"
          >
            View Project →
          </a>
        </motion.div>
      ))}

      </div>
    </section>
  );
}
