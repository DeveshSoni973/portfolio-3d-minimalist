
import React from 'react';

const Skills: React.FC = () => {
  const skillsCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", proficiency: 95 },
        { name: "R", proficiency: 85 },
        { name: "SQL", proficiency: 90 },
        { name: "JavaScript", proficiency: 75 }
      ]
    },
    {
      category: "Machine Learning",
      skills: [
        { name: "TensorFlow/Keras", proficiency: 90 },
        { name: "PyTorch", proficiency: 85 },
        { name: "scikit-learn", proficiency: 95 },
        { name: "Deep Learning", proficiency: 80 }
      ]
    },
    {
      category: "Data Processing",
      skills: [
        { name: "Pandas", proficiency: 95 },
        { name: "NumPy", proficiency: 90 },
        { name: "Spark", proficiency: 75 },
        { name: "Dask", proficiency: 70 }
      ]
    },
    {
      category: "Visualization",
      skills: [
        { name: "Matplotlib", proficiency: 85 },
        { name: "Seaborn", proficiency: 90 },
        { name: "Plotly", proficiency: 80 },
        { name: "Tableau", proficiency: 75 }
      ]
    }
  ];
  
  return (
    <section id="skills" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight animate-fade-in">Technical <span className="text-primary">Skills</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8 animate-scale-up"></div>
          <p className="text-lg text-white/80 leading-relaxed animate-fade-in">
            Proficiency in various technologies and tools for data science and machine learning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {skillsCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-black/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:border-primary/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.category}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-white/60">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full"
                        style={{ 
                          width: `${skill.proficiency}%`,
                          transition: "width 1s ease-in-out",
                          animation: `animate-fade-in 1s ease-out forwards ${0.5 + i * 0.2}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
