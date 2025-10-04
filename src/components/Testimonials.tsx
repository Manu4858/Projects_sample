import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      score: "Band 8.5",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      feedback: "IELTS Excellence transformed my preparation completely. The personalized coaching and mock tests were incredibly helpful. I achieved my target score in just 3 months!",
      rating: 5
    },
    {
      name: "Michael Chen",
      score: "Band 8.0",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
      feedback: "The AI band score predictor was amazingly accurate. It helped me identify my weak areas and focus on improvement. Highly recommend their speaking practice sessions!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      score: "Band 7.5",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      feedback: "Amazing experience! The trainers are so supportive and the study material is comprehensive. I went from band 6 to 7.5 in just 2 months. Thank you IELTS Excellence!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students who achieved their dream IELTS scores and transformed their futures.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 relative hover:shadow-xl transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-blue-700 text-white p-3 rounded-full">
                  <Quote className="h-6 w-6" />
                </div>
              </div>

              {/* Content */}
              <div className="pt-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.feedback}"
                </p>

                {/* Student Info */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-teal-600 font-medium">{testimonial.score}</p>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-700/5 to-teal-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-700 mb-2">5000+</div>
              <p className="text-gray-600">Happy Students</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-700 mb-2">95%</div>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-700 mb-2">8.2</div>
              <p className="text-gray-600">Average Band Score</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-700 mb-2">10+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;