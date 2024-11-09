import React from 'react';
import { Clock, User } from 'lucide-react';
import type { BlogPost } from '../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="blog-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-xs font-roboto px-3 py-1 bg-silk text-marble rounded-full">
            {post.category}
          </span>
          <div className="flex items-center font-roboto text-sm text-marble/60">
            <User className="h-4 w-4 mr-1" />
            {post.author}
          </div>
          <div className="flex items-center text-sm text-marble/60">
            <Clock className="h-4 w-4 mr-1" />
            {post.date}
          </div>
        </div>
        <h2 className="text-xl font-roboto font-semibold text-marble mb-2">
          {post.title}
        </h2>
        <p className="text-marble/80 font-roboto mb-4">{post.excerpt}</p>
        <button className="text-onyx font-roboto hover:text-marble transition-colors duration-200">
          Read More →
        </button>
      </div>
    </article>
  );
}
