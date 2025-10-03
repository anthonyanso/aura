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
    <section id="about" className="py-16 md:py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 block lg:flex lg:gap-12 items-center">
        {/* Image */}
        <div data-aos="fade-right" className="mb-8 lg:mb-0 lg:w-1/2">
          <img
            src={aboutImage}
            alt="About Aura Persona Team"
            className="rounded-md shadow-2xl w-full object-cover max-h-80 lg:max-h-none"
          />
        </div>

        {/* Text Content */}
        <div data-aos="fade-left" className="lg:w-1/2">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-navy-dark mb-4 md:mb-6">
            About <span className="text-gold underline">Aura Persona</span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-4">
            At Aura Persona, we believe in shaping more than just careers, we
            create legacies. Our team brings together a wealth of experience
            in celebrity management, helping our clients shine brighter while
            staying true to their unique identities.
          </p>
          <p className="text-base md:text-lg text-gray-700 mb-3 md:mb-4">
            With Aura Persona, clients gain a dedicated partner who is deeply
            invested in their success. Our services go beyond traditional
            management, focusing on creating a positive and lasting influence
            for each talent we represent.
          </p>
          <ul className="list-none mb-6 md:mb-8 space-y-3 md:space-y-4">
            <li className="flex items-start">
              <span className="inline-block w-3 h-3 mt-2 mr-3 rounded-full bg-gold"></span>
              <span className="text-base md:text-lg text-gray-800 font-medium">
                Personalized strategies crafted to amplify each client's
                unique strengths and vision.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-3 h-3 mt-2 mr-3 rounded-full bg-gold"></span>
              <span className="text-base md:text-lg text-gray-800 font-medium">
                Proven expertise in brand partnerships, media relations, and
                career development.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-3 h-3 mt-2 mr-3 rounded-full bg-gold"></span>
              <span className="text-base md:text-lg text-gray-800 font-medium">
                Commitment to integrity, confidentiality, and lasting impact.
              </span>
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
            Join hundreds of satisfied clients who have transformed their
            digital presence and achieved remarkable success with Aura
            Persona.
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
    </section>
  );
}
