import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  { name: "Sarah Johnson", role: "CEO, TechCorp", text: "Aura Persona transformed our digital infrastructure completely. Outstanding results!" },
  { name: "Michael Chen", role: "Director, InnovateCo", text: "The team's expertise and dedication exceeded all our expectations. Highly recommend!" },
  { name: "Emily Rodriguez", role: "Founder, StartupHub", text: "Professional, efficient, and incredibly knowledgeable. A game-changer for our business." },
  { name: "David Thompson", role: "CTO, DataStream", text: "Their cloud solutions saved us 40% in costs while improving performance dramatically." },
  { name: "Lisa Anderson", role: "VP Marketing, BrandPro", text: "The marketing strategies delivered exceptional ROI. Our traffic increased by 300%!" },
  { name: "James Wilson", role: "Owner, LocalRetail", text: "From consultation to implementation, every step was seamless and professional." },
  { name: "Maria Garcia", role: "CFO, FinanceHub", text: "The data analytics insights revolutionized our decision-making process." },
  { name: "Robert Kim", role: "Manager, GlobalTech", text: "Outstanding support team available 24/7. They truly care about our success." },
  { name: "Jennifer Lee", role: "Director, MediaCorp", text: "The custom development perfectly matched our unique business requirements." },
  { name: "Thomas Brown", role: "President, EnterprisePlus", text: "Aura Persona's consulting services helped us navigate complex digital transformation." },
  { name: "Amanda White", role: "COO, ServicePro", text: "Process automation reduced our operational costs by 50%. Incredible value!" },
  { name: "Daniel Martinez", role: "Head of IT, SecureNet", text: "Their cybersecurity solutions gave us peace of mind and regulatory compliance." },
  { name: "Patricia Taylor", role: "Founder, CreativeStudio", text: "The innovation lab collaboration led to breakthrough solutions for our industry." },
  { name: "Christopher Lee", role: "VP Operations, LogiChain", text: "Training programs upskilled our entire team. The impact was immediate and measurable." },
  { name: "Michelle Adams", role: "CMO, GrowthCo", text: "Best decision we made was partnering with Aura Persona. Results speak for themselves!" },
  { name: "Kevin Zhang", role: "CEO, VentureTech", text: "They don't just deliver services; they become true partners in your success." },
  { name: "Sandra Miller", role: "Director, HealthPlus", text: "The attention to detail and commitment to excellence is unmatched in the industry." },
  { name: "Richard Moore", role: "Founder, EcoSolutions", text: "Sustainable, scalable solutions that grow with our business. Exactly what we needed." },
  { name: "Laura Jackson", role: "President, RetailMax", text: "From day one, the team understood our vision and brought it to life beautifully." },
  { name: "Andrew Davis", role: "CTO, CloudFirst", text: "Technical expertise combined with business acumen. A rare and valuable combination." },
  { name: "Jessica Wilson", role: "Owner, BoutiqueBrand", text: "The digital marketing campaign exceeded all our KPIs. Simply phenomenal!" },
  { name: "Mark Thompson", role: "VP Sales, SalesPro", text: "Our conversion rates doubled within three months. The ROI is undeniable." },
  { name: "Karen Martinez", role: "Director, NonProfitOrg", text: "They worked within our budget and delivered premium quality. Truly grateful!" },
  { name: "Steven Clark", role: "Manager, TechStart", text: "The ongoing support ensures we're always at the cutting edge of technology." },
  { name: "Rachel Green", role: "CEO, FashionForward", text: "Creative solutions that perfectly balanced aesthetics with functionality." },
  { name: "Brian Hall", role: "Founder, EdTech Innovations", text: "Their educational technology solutions transformed how we deliver learning." },
  { name: "Nicole Young", role: "CFO, FinTech Solutions", text: "Security and compliance were handled flawlessly. Professional at every level." },
  { name: "Paul Allen", role: "Director, MediaStream", text: "The streaming platform they built handles millions of users seamlessly." },
  { name: "Diana King", role: "COO, SupplyChain Pro", text: "Supply chain optimization increased our efficiency by 60%. Game-changing results!" },
  { name: "George Scott", role: "President, ManufacturePlus", text: "Manufacturing 4.0 implementation was smooth thanks to their expert guidance." },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <Card className="mx-3 w-80 bg-white/10 border-white/20 backdrop-blur-sm">
    <CardContent className="p-6">
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
        ))}
      </div>
      <p className="text-white mb-4 italic">"{testimonial.text}"</p>
      <div>
        <p className="text-gold font-semibold">{testimonial.name}</p>
        <p className="text-gray-300 text-sm">{testimonial.role}</p>
      </div>
    </CardContent>
  </Card>
);

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-br from-navy-dark via-navy-deep to-navy-blue overflow-hidden">
      <div className="mb-16 text-center" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Client <span className="text-gold">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover why hundreds of businesses trust Aura Persona for their digital transformation journey.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <Marquee speed={40} gradient={false}>
          {testimonials.slice(0, 10).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Marquee>

        <Marquee speed={60} gradient={false} direction="right">
          {testimonials.slice(10, 20).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Marquee>

        <Marquee speed={40} gradient={false}>
          {testimonials.slice(20, 30).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
