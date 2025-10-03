import { Shield, Zap, Users, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: BarChart,
    title: "Personalized Brand Development",
    bolder: "Craft Your Unique Brand Identity",
    description:
      "We create a distinctive brand that resonates with your audience and aligns with your values.",
    features: [
      "Customized brand strategies that amplify your unique story.",
      "Visual and narrative elements to define your presence.",
      "Ongoing brand support to adapt to market trends.",
    ],
    extra: "With Aura Persona, your brand becomes a memorable presence in the entertainment landscape.",
  },
  {
    icon: Zap,
    title: "Comprehensive Media Strategy",
    bolder: "Media Relations and Strategy",
    description:
      "Our media approach ensures your story reaches the right audience with maximum impact.",
    features: [
      "Targeted press releases and media outreach.",
      "Strategic partnerships with media outlets and influencers.",
      "Reputation-sensitive media management for effective public relations.",
    ],
    extra: "Elevate your profile with a tailored media presence that aligns with your goals and values.",
  },
  {
    icon: Users,
    title: "Audience Engagement and Growth",
    bolder: "Audience Engagement and Growth",
    description:
      "Grow a loyal fan base with strategies designed to foster genuine connections.",
    features: [
      "Social media strategies that engage and resonate.",
      "Targeted content creation and outreach to build your community.",
      "Insightful analytics to track growth and refine engagement.",
    ],
    extra: "Build lasting relationships with your audience, strengthening your impact and reach.",
  },
  {
    icon: Shield,
    title: "Reputation Management",
    bolder: "Reputation and Crisis Management",
    description:
      "Protect and manage your public image with strategies that prioritize integrity and authenticity.",
    features: [
      "24/7 reputation monitoring and proactive management.",
      "Strategic guidance for handling sensitive situations.",
      "Long-term strategies to maintain a positive public image.",
    ],
    extra: "Safeguard your legacy and manage public perception with our experienced team by your side.",
  },
];

export default function ServicesPart2() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-4">
            Our <span className="text-gold">Professional Services</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Elevate your business with our specialized solutions, designed to drive growth and innovation at every stage.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-md bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-5">
                  <service.icon className="h-8 w-8 text-navy-dark" />
                </div>
                <h4 className="text-2xl font-bold text-navy-dark mb-3">{service.title}</h4>
                <h2 className="text-2xl text-navy-dark mb-3">{service.bolder}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500">{service.extra}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
