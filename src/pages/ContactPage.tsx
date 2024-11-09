import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <MessageSquare className="h-16 w-16 text-onyx mx-auto mb-6" />
        <h1 className="text-4xl font-roboto font-bold text-marble mb-4">
          Get in Touch
        </h1>
        <p className="text-lg font-roboto text-marble/80">
          Have a question or suggestion? We'd love to hear from you.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium font-roboto text-marble mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg border border-champagne/20 focus:outline-none focus:ring-2 focus:ring-onyx/20"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium font-roboto text-marble mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border border-champagne/20 focus:outline-none focus:ring-2 focus:ring-onyx/20"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium font-roboto text-marble mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-2 rounded-lg border border-champagne/20 focus:outline-none focus:ring-2 focus:ring-onyx/20"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full font-roboto flex items-center justify-center space-x-2 px-6 py-3 bg-marble text-pearl rounded-lg hover:bg-velvet transition-colors duration-200"
          >
            <Send className="h-4 w-4" />
            <span>Send Message</span>
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-champagne/20">
          <div className="flex items-center justify-center space-x-2 text-marble/80">
            <Mail className="h-5 w-5 font-roboto" />
            <span>contact@freelancernomad.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
