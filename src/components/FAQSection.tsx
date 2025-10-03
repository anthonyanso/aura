import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I get started with Aura Persona?",
    answer: "To get started, simply reach out to us via the contact page or email us directly. We will schedule an introductory meeting to discuss your goals, vision, and how we can best support you in your journey.",
  },
  {
    question: "What services does Aura Persona provide?",
    answer: "We offer a range of services including talent management, public relations, brand strategy, digital content creation, event coordination, sponsorships, and talent development. Our services are tailored to suit each client's unique needs and goals.",
  },
  {
    question: "How does Aura Persona handle media relations?",
    answer: "Aura Persona provides comprehensive media relations services, including managing interviews, press releases, and strategic publicity. We work closely with you to craft your public image, ensuring consistent messaging that resonates with your audience and enhances your brand visibility.",
  },
  {
    question: "How can I book an appearance or event with Aura Persona?",
    answer: "To book an appearance or event, contact us with your requirements. We'll work with you to schedule the event, coordinate logistics, and ensure everything is executed smoothly, whether it's a red carpet event, a private screening, or a charity fundraiser.",
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
