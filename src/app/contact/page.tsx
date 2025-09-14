'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        // attempt to read a message, but stay fully typed
        let errorMessage = `HTTP ${res.status}`;
        try {
          const body: unknown = await res.json();
          if (body && typeof body === 'object' && 'error' in body) {
            const msg = (body as { error?: string }).error;
            if (typeof msg === 'string') errorMessage = msg;
          }
        } catch {
          /* ignore JSON parse errors */
        }
        throw new Error(errorMessage);
      }

      setStatus('✅ Message sent successfully!');
      form.reset();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unexpected error';
      setStatus(`❌ Something went wrong. (${msg})`);
    }
  };

  const baseField =
    'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ' +
    'bg-white text-gray-900 placeholder:text-gray-400 caret-blue-600';

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="w-full max-w-2xl"
      >
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Get in Touch</h1>
        <p className="text-gray-600 text-center mb-10">
          Have a project in mind, a question, or just want to connect? Send me a message.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" name="name" placeholder="John Doe" required className={baseField} />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className={baseField}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Write your message..."
              required
              className={`${baseField} resize-y`}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="text-center mt-4 text-sm text-gray-700 font-medium">{status}</p>
        )}

        <div className="text-center text-sm text-gray-500 mt-6">
          Or reach out directly:{' '}
          <a href="mailto:mattarjeanmarie91@gmail.com" className="text-blue-600 hover:underline">
            mattarjeanmarie91@gmail.com
          </a>
        </div>
      </motion.div>
    </section>
  );
}
