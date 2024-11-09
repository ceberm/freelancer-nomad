import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-marble text-pearl mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-roboto text-xl mb-4">About Freelancer Nomad</h3>
            <p className="text-silk/80">
              Curating thoughtful perspectives on digital nomad lifestyle,
              remote work, and modern living.
            </p>
          </div>
          <div>
            <h3 className="font-roboto text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Articles', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button className="text-silk/80 hover:text-champagne transition-colors duration-200">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-roboto text-xl mb-4">Newsletter</h3>
            <p className="text-silk/80 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-full bg-velvet text-pearl placeholder-silk/50 focus:outline-none"
              />
              <button className="px-6 py-2 bg-onyx text-pearl rounded-r-full hover:bg-champagne hover:text-marble transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
