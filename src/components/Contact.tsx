
import React, { useState } from 'react';
import { Send, Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight animate-fade-in">Get In <span className="text-primary">Touch</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8 animate-scale-up"></div>
          <p className="text-lg text-white/80 leading-relaxed animate-fade-in">
            Have a project in mind or want to discuss a data science opportunity? I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-primary/20 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-primary">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <a href="mailto:yourname@example.com" className="text-white hover:text-primary transition-colors">
                      yourname@example.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4 text-white">Connect With Me</h4>
                <div className="flex gap-4">
                  {[
                    { icon: <Linkedin size={20} />, url: "https://linkedin.com" },
                    { icon: <Github size={20} />, url: "https://github.com" },
                    { icon: <Twitter size={20} />, url: "https://twitter.com" }
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-primary/20 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-primary">Send a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white/60 text-sm mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white/60 text-sm mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/60 text-sm mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Enter your message"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-black font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>Processing<span className="animate-pulse">...</span></>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
