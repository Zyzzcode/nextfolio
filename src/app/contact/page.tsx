export default function Contact() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Have a project in mind, a question, or just want to connect? Send me a message.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="text-center text-sm text-gray-500 mt-6">
          Or reach out directly:{" "}
          <a
            href="mailto:mattarjeanmarie91@gmail.com"
            className="text-blue-600 hover:underline"
          >
            mattarjeanmarie91@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
