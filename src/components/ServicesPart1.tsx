import { Briefcase, Users, Megaphone, Target, Globe2, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import cloudImage from "@assets/generated_images/Service_cloud_solutions_image_8db22d2b.png";
import PersonalBrandngImage from "@/assets/img/services/PersonalBranding.jpg";
import EventMedia from "@/assets/img/services/event_planning.jpg";
import PublicRelation from "@/assets/img/services/public_relation.jpg";
import GlobalMedia from "@/assets/img/services/media_outreach.jpg";
import Reputation from "@/assets/img/services/reputation_management.jpg";

const services = [
  {
    icon: Briefcase,
    title: "Personal Branding",
    description: "Craft a powerful personal image that resonates with your audience and aligns with your core values.",
    image: PersonalBrandngImage,
  },
  {
    icon: Users,
    title: "Event & Media Strategy",
    description: "Ensure every public appearance is impactful and every media interaction strengthens your reputation.",
    image: EventMedia,
  },
  {
    icon: Megaphone,
    title: "Public Relations",
    description: "Communicate with confidence. Our PR strategies help manage your narrative and build trust with your audience.",
    image: PublicRelation,
  },
  {
    icon: Target,
    title: "Brand Positioning",
    description: "Identify and highlight what sets you apart with clear, consistent messaging and strategic positioning.",
    image: cloudImage,
  },
  {
    icon: Globe2,
    title: "Global Media Outreach",
    description: "Expand your influence with our international media outreach services tailored to your goals.",
    image: GlobalMedia,
  },
  {
    icon: ShieldCheck,
    title: "Reputation Management",
    description: "Safeguard your image with proactive reputation management tailored to your personal or professional needs.",
    image: Reputation,
  },
];

export default function ServicesPart1() {
  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-br from-navy-dark via-navy-deep to-navy-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Core <span className="text-gold">Services</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions designed to transform your business and drive sustainable growth in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-white/5 border-white/10 backdrop-blur-sm hover-elevate active-elevate-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent" />
                <div className="absolute top-4 left-4 h-14 w-14 rounded-md bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                  <service.icon className="h-7 w-7 text-navy-dark" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
