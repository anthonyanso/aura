import { Button } from "@/components/ui/button";
import aboutImage from "@assets/generated_images/About_Us_team_image_504c495d.png";

export default function AboutSection() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <img
              src={aboutImage}
              alt="About Aura Persona Team"
              className="rounded-md shadow-2xl w-full object-cover"
            />
          </div>
          <div data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-dark mb-6">
              About <span className="text-gold">Aura Persona</span>
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              At Aura Persona, we are passionate about transforming businesses through innovative digital solutions.
              With over a decade of experience, our team of experts delivers cutting-edge technology and strategic
              consulting services tailored to your unique needs.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We believe in creating lasting partnerships built on trust, transparency, and exceptional results. Our
              holistic approach combines technical excellence with business acumen to drive sustainable growth and
              competitive advantage.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Join hundreds of satisfied clients who have transformed their digital presence and achieved remarkable
              success with Aura Persona.
            </p>
            <Button
              size="lg"
              onClick={scrollToServices}
              className="bg-gradient-to-r from-gold to-gold-light text-navy-dark font-semibold hover:shadow-xl transition-all"
              data-testid="button-explore-services"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
