import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Build Something{' '}
          <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
            Amazing
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Create stunning websites with our modern platform. Fast, reliable, and beautiful out of the box.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg transition-colors">
            Learn More
          </button>
        </div>
        <div className="mt-16">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=80"
            alt="Dashboard Preview"
            className="rounded-xl shadow-2xl border border-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;