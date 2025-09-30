import { Briefcase, Code, TrendingUp, Cloud } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import consultingImage from "@assets/generated_images/Service_consulting_image_6a2b3001.png";
import developmentImage from "@assets/generated_images/Service_development_image_977db785.png";
import marketingImage from "@assets/generated_images/Service_marketing_image_27861f18.png";
import cloudImage from "@assets/generated_images/Service_cloud_solutions_image_8db22d2b.png";

const services = [
  {
    icon: Briefcase,
    title: "Business Consulting",
    description: "Strategic guidance to optimize operations, enhance efficiency, and accelerate growth through data-driven insights and proven methodologies.",
    image: consultingImage,
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored software solutions built with cutting-edge technologies to meet your specific business requirements and scale with your growth.",
    image: developmentImage,
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Comprehensive marketing strategies leveraging SEO, social media, and content marketing to amplify your brand and drive measurable results.",
    image: marketingImage,
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Secure, scalable cloud infrastructure and migration services to modernize your operations and reduce IT overhead costs.",
    image: cloudImage,
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
