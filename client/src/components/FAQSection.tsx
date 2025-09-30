import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does Aura Persona offer?",
    answer: "We provide comprehensive digital solutions including business consulting, custom software development, digital marketing, cloud solutions, cybersecurity, process automation, data analytics, and 24/7 technical support.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. Simple projects may take 4-6 weeks, while comprehensive enterprise solutions can span 3-6 months. We provide detailed timelines during initial consultation.",
  },
  {
    question: "Do you work with startups or only established companies?",
    answer: "We work with businesses of all sizes, from startups to Fortune 500 companies. Our solutions are scalable and tailored to meet the unique needs and budgets of each client.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have expertise across multiple industries including technology, healthcare, finance, retail, manufacturing, education, and non-profit organizations. Our diverse experience allows us to adapt solutions to any sector.",
  },
  {
    question: "How do you ensure project success?",
    answer: "We follow agile methodologies with regular communication, milestone tracking, and iterative feedback loops. Our dedicated project managers ensure transparency and alignment throughout the entire process.",
  },
  {
    question: "What kind of support do you provide after project completion?",
    answer: "We offer comprehensive post-launch support including 24/7 technical assistance, regular maintenance, performance monitoring, security updates, and ongoing optimization services.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer: "Absolutely! We specialize in seamless integration with existing infrastructure, ensuring minimal disruption while maximizing the value of your current technology investments.",
  },
  {
    question: "How do you handle data security and privacy?",
    answer: "Security is our top priority. We implement industry-leading security protocols, conduct regular audits, ensure compliance with regulations like GDPR and HIPAA, and maintain strict data protection standards.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing models including project-based, retainer, and hourly rates depending on your needs. Every project begins with a free consultation to discuss budget and requirements.",
  },
  {
    question: "How can I get started with Aura Persona?",
    answer: "Simply fill out our contact form or give us a call. We'll schedule a free consultation to understand your needs, discuss potential solutions, and create a customized proposal for your project.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-dark mb-4">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our services, processes, and how we can help your business succeed.
          </p>
        </div>

        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-md px-6 hover-elevate"
                data-testid={`accordion-item-${index}`}
              >
                <AccordionTrigger className="text-left text-navy-dark hover:text-gold font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
