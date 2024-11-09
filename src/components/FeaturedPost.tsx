import React from 'react';
import type { BlogPost } from '../types/blog';

interface FeaturedPostProps {
  post: BlogPost;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <div className="relative h-[500px] rounded-xl overflow-hidden mb-12">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-velvet/90 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <span className="inline-block px-4 py-1 bg-onyx/90 rounded-full text-pearl text-sm mb-4">
          {post.category}
        </span>
        <h1 className="text-4xl font-serif font-bold mb-4">{post.title}</h1>
        <p className="text-silk/90 mb-4 max-w-2xl">{post.excerpt}</p>
        <button className="px-6 py-2 bg-champagne text-marble rounded-full hover:bg-silk transition-colors duration-200">
          Read Article
        </button>
      </div>
    </div>
  );
}