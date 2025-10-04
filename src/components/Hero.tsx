import React from 'react';
import { ArrowRight, Star, Users, Trophy } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <div className="lg:pr-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Achieve Your Dream
              <span className="text-teal-400 block">IELTS Score</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join thousands of successful students who achieved their target IELTS scores with our expert guidance, personalized coaching, and proven strategies.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-all duration-200 flex items-center justify-center group">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-all duration-200">
                Free Practice Test
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-teal-400 mr-2" />
                  <span className="text-2xl font-bold">5000+</span>
                </div>
                <p className="text-blue-100 text-sm">Students Trained</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 text-teal-400 mr-2" />
                  <span className="text-2xl font-bold">4.9</span>
                </div>
                <p className="text-blue-100 text-sm">Average Rating</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Trophy className="h-6 w-6 text-teal-400 mr-2" />
                  <span className="text-2xl font-bold">95%</span>
                </div>
                <p className="text-blue-100 text-sm">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="mt-12 lg:mt-0">
            <div className="relative">
              <div className="bg-gradient-to-tr from-teal-400 to-blue-500 rounded-2xl p-8 transform rotate-3 shadow-2xl">
                <div className="bg-white rounded-xl p-6 transform -rotate-3">
                  <img
                    src="https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="IELTS Student Success"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold text-gray-800">Join Our Success Stories</h3>
                    <p className="text-gray-600 mt-2">Thousands achieve their dreams every year</p>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold shadow-lg">
                Band 8+
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                Guaranteed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;