
import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
  pfp?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "Skill Orbit transformed our talent acquisition process, matching us with highly skilled candidates that perfectly fit our company culture. We've seen a 30% increase in successful hires within three months.",
  author: "Sarah Chen",
  role: "VP of HR, Axion Tech",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/background-section1.webp",
  pfp: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg`
}, {
  content: "Implementing Skill Orbit in our recruitment strategy has reduced time-to-hire by 40% while improving candidate quality. The AI-driven matching capabilities are remarkable.",
  author: "Michael Rodriguez",
  role: "Director of Talent Acquisition, GlobalTech",
  gradient: "from-indigo-900 via-purple-800 to-orange-500",
  backgroundImage: "/background-section2.webp",
  pfp: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`
}, {
  content: "Skill Orbit adapted to our unique hiring needs faster than any system we've used. It's like having another recruiter who never gets tired and maintains perfect precision in candidate matching.",
  author: "Dr. Amara Patel",
  role: "Lead Researcher, BioTech Innovations",
  gradient: "from-purple-800 via-pink-700 to-red-500",
  backgroundImage: "/background-section3.webp",
  pfp: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg`
}, {
  content: "As a mid-size business, we never thought advanced AI-driven recruitment would be accessible to us. Skill Orbit changed that equation entirely with its versatility and ease of implementation.",
  author: "Jason Lee",
  role: "CEO, TechSolutions Inc.",
  gradient: "from-orange-600 via-red-500 to-purple-600",
  backgroundImage: "/background-section1.webp",
  pfp: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`
}];

const TestimonialCard = ({
  content,
  author,
  role,
  pfp,
  backgroundImage = "/background-section1.webp"
}: TestimonialProps) => {
  return <div className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" style={{
    backgroundImage: `url('${backgroundImage}')`
  }}>
      <div className="absolute top-0 right-0 w-24 h-24 bg-white z-10"></div>
      
      <div className="relative z-0">
        
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        <div className="flex items-center">
          {pfp && <img src={pfp} alt={author} className="w-12 h-12 rounded-full mr-4" />}
          <div>
            <h4 className="font-semibold text-xl">{author}</h4>
            <p className="text-white/80">{role}</p>
          </div>
        </div>
        
      </div>
    </div>;
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return <section className="py-12 bg-white relative" id="testimonials" ref={sectionRef}> {/* Reduced from py-20 */}
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
            <span>Testimonials</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-display font-bold mb-12 text-left">What others say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} content={testimonial.content} author={testimonial.author} role={testimonial.role} gradient={testimonial.gradient} backgroundImage={testimonial.backgroundImage} pfp={testimonial.pfp} />)}
        </div>
      </div>
    </section>;
};

export default Testimonials;
