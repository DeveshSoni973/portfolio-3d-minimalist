
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubLink?: string;
  liveLink?: string;
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  
  const projects: Project[] = [
    {
      title: "Predictive Analytics Dashboard",
      description: "A machine learning model predicting customer behavior with interactive visualizations using Python, TensorFlow and React.",
      tags: ["Machine Learning", "Python", "React"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    },
    {
      title: "NLP Text Classifier",
      description: "Natural language processing system for sentiment analysis and text classification using BERT and PyTorch.",
      tags: ["NLP", "PyTorch", "BERT"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
      githubLink: "https://github.com"
    },
    {
      title: "Time Series Forecasting Tool",
      description: "Advanced time series analysis application for financial forecasting using ARIMA, Prophet and deep learning models.",
      tags: ["Time Series", "Prophet", "Deep Learning"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      liveLink: "https://example.com"
    },
    {
      title: "Computer Vision Object Detection",
      description: "Real-time object detection system using YOLOv5 with applications in retail analytics.",
      tags: ["Computer Vision", "PyTorch", "YOLOv5"],
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    }
  ];
  
  const filters = ['All', 'Machine Learning', 'NLP', 'Computer Vision', 'Time Series', 'Python'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));
  
  return (
    <section id="projects" className="py-24 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight animate-fade-in">Featured <span className="text-primary">Projects</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8 animate-scale-up"></div>
          <p className="text-lg text-white/80 leading-relaxed animate-fade-in">
            Explore my data science and machine learning projects showcasing analytical skills and technical expertise.
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-primary text-black' 
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-black/60 text-primary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-white/70 mb-6">{project.description}</p>
                
                <div className="flex gap-4">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  )}
                  
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
