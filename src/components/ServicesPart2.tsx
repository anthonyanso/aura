import { Shield, Zap, Users, BarChart, Headphones, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Streamline operations with intelligent automation that reduces costs and improves efficiency.",
  },
  {
    icon: Users,
    title: "Team Training",
    description: "Empower your workforce with cutting-edge skills through customized training programs.",
  },
  {
    icon: BarChart,
    title: "Data Analytics",
    description: "Transform data into actionable insights with advanced analytics and visualization tools.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock technical support ensuring your operations run smoothly without interruption.",
  },
  {
    icon: Rocket,
    title: "Innovation Labs",
    description: "Collaborate with our experts to develop groundbreaking solutions for emerging challenges.",
  },
];

export default function ServicesPart2() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-dark mb-4">
            Additional <span className="text-gold">Services</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Extend your capabilities with our specialized services designed to address every aspect of your digital journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-gray-200 hover-elevate active-elevate-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardContent className="p-6">
                <div className="h-16 w-16 rounded-md bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-navy-dark" />
                </div>
                <h3 className="text-xl font-bold text-navy-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
