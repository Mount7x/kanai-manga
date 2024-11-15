import React from 'react';
import { Zap, Shield, Smartphone, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: 'Lightning Fast',
      description: 'Built for speed and optimized for performance.',
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: 'Secure by Default',
      description: 'Enterprise-grade security out of the box.',
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-500" />,
      title: 'Mobile First',
      description: 'Responsive design that works on any device.',
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      title: 'Global Scale',
      description: 'Deploy worldwide with a single click.',
    },
  ];

  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide the tools you need to build amazing websites quickly and efficiently.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <div className="bg-gray-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;