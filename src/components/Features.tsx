import React from 'react';
import { Mic, FileText, Brain, Users, Clock, Target } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Speaking Practice",
      description: "One-on-one speaking sessions with certified trainers to boost your confidence and fluency."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Mock Tests",
      description: "Full-length practice tests that simulate the real IELTS exam experience with detailed feedback."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Band Score Predictor",
      description: "Advanced AI technology analyzes your performance and predicts your likely IELTS band score."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Personalized Coaching",
      description: "Customized study plans and individual attention to address your specific weaknesses."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Flexible Scheduling",
      description: "Choose from morning, evening, or weekend batches that fit your busy lifestyle."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Target-Focused Training",
      description: "Specialized programs designed for your specific target band score and requirements."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose IELTS Excellence?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach combines proven teaching methods with cutting-edge technology 
            to ensure your IELTS success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="text-blue-700 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-700 to-teal-600 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Start Your IELTS Journey?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join our next batch and take the first step towards achieving your dream IELTS score.
            </p>
            <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Enroll Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;