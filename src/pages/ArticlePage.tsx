import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { posts } from '../data/posts';
import { ArrowLeft, Clock, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function ArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-roboto text-marble mb-4">
          Article not found
        </h2>
        <button
          onClick={() => navigate('/')}
          className="text-onyx hover:text-marble transition-colors duration-200"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto">
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-onyx hover:text-marble transition-colors duration-200 mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2 " />
        Back to Home
      </button>

      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-[400px] object-cover rounded-xl mb-8"
      />

      <div className="flex items-center space-x-4 mb-6">
        <span className="text-sm px-3 py-1 bg-silk text-marble rounded-full">
          {post.category}
        </span>
        <div className="flex items-center text-sm text-marble/60">
          <User className="h-4 w-4 mr-1" />
          {post.author}
        </div>
        <div className="flex items-center text-sm text-marble/60">
          <Clock className="h-4 w-4 mr-1" />
          {post.date}
        </div>
      </div>

      <h1 className="text-4xl font-roboto font-bold text-marble mb-6">
        {post.title}
      </h1>

      <div className="prose font-roboto prose-lg max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
