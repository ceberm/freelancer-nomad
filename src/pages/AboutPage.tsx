import React from 'react';
import { BookOpen } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <BookOpen className="h-16 w-16 text-onyx mx-auto mb-6" />
        <h1 className="text-4xl font-roboto font-bold text-marble mb-4">
          About Freelancer Nomad
        </h1>
        <p className="text-lg text-marble/80">
          Curating thoughtful perspectives on modern living, remote work, and
          digital culture.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p>
          Freelancer Nomad was founded with a simple mission: to provide
          insightful, well-crafted content for modern professionals navigating
          the intersection of work, lifestyle, and technology.
        </p>

        <h2>Our Vision</h2>
        <p>
          We believe in the power of storytelling to inspire, educate, and
          connect. Our platform serves as a hub for thought-provoking
          discussions about the future of work, sustainable living, and cultural
          innovations.
        </p>

        <h2>Editorial Standards</h2>
        <p>
          Every article published on Freelancer Nomad undergoes rigorous
          editorial review to ensure accuracy, depth, and relevance. We
          collaborate with expert contributors who bring authentic perspectives
          and practical insights to our readers.
        </p>

        <h2>Join Our Community</h2>
        <p>
          Whether you're a digital nomad, remote worker, or simply interested in
          modern living, we invite you to join our growing community of
          forward-thinking individuals.
        </p>
      </div>
    </div>
  );
}
