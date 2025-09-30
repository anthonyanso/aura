import { Button } from "@/components/ui/button";

export default function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-gold via-gold-light to-gold">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto" data-aos="zoom-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-dark mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-navy-deep mb-10">
            Join hundreds of successful companies that have partnered with Aura Persona to achieve their digital transformation goals.
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-navy-dark text-gold hover:bg-navy-deep font-semibold text-lg px-10 py-7 hover:shadow-2xl transition-all"
            data-testid="button-get-started"
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
}
