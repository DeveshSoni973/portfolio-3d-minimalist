
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight animate-fade-in">About <span className="text-primary">Me</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8 animate-scale-up"></div>
          <p className="text-lg text-white/80 leading-relaxed animate-fade-in">
            I'm a passionate data scientist with expertise in machine learning, statistical analysis, and data visualization. 
            My approach combines technical skill with creative problem-solving to extract meaningful insights from complex datasets.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Data Analysis",
              description: "Transforming raw data into actionable insights through statistical methods and exploratory analysis.",
              icon: "📊"
            },
            {
              title: "Machine Learning",
              description: "Building predictive models that learn from data patterns to solve complex business problems.",
              icon: "🤖"
            },
            {
              title: "Visualization",
              description: "Creating compelling visual narratives that communicate data insights with clarity and impact.",
              icon: "📈"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-black/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 group animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
