import React from 'react';
import FeaturedPost from '../components/FeaturedPost';
import BlogCard from '../components/BlogCard';
import { posts } from '../data/posts';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate(`/article/${posts[0].id}`)} className="cursor-pointer">
        <FeaturedPost post={posts[0]} />
      </div>
      
      <div className="mb-12">
        <h2 className="text-3xl font-serif text-marble mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} onClick={() => navigate(`/article/${post.id}`)} className="cursor-pointer">
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}