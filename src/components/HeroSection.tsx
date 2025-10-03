import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Button } from "@/components/ui/button";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import heroImage1 from "@assets/generated_images/Hero_slide_business_collaboration_10b24168.png";
import heroImage2 from "@assets/generated_images/Hero_slide_tech_innovation_65d02dfb.png";
import heroImage3 from "@assets/generated_images/Hero_slide_business_growth_fff47087.png";

const slides = [
  {
    image: heroImage1,
    title: "Welcome to Aura Persona",
    description: "Empowering the extraordinary. At Aura Persona, we redefine celebrity management by connecting talent with meaningful opportunities that reflect their unique essence."  
  },
  {
    image: heroImage2,
    title: "Crafting Iconic Careers",
    description: "From brand partnerships to public relations, we create bespoke strategies that position our clients for long-lasting influence and impact.",
  },
  {
    image: heroImage3,
    title: "A Legacy of Excellence",
    description: "Our commitment to integrity, personalization, and innovation ensures every client's journey is one of lasting success and authenticity.",
  },
];

export default function HeroSection() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .hero-swiper .swiper-pagination-bullet {
        background: #ffd400;
        opacity: 0.5;
        width: 12px;
        height: 12px;
      }
      .hero-swiper .swiper-pagination-bullet-active {
        background: #ffbf00;
        opacity: 1;
        width: 32px;
        border-radius: 6px;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

    const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="hero-swiper h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-deep/80 to-navy-blue/70" />
              <div className="relative h-full flex items-center justify-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                      {slide.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                      {slide.description}
                    </p>
                    <Button
                      onClick={scrollToAbout}
                      size="lg"
                      className="bg-gradient-to-r from-gold to-gold-light text-navy-dark font-semibold text-lg px-8 py-6 hover:shadow-xl transition-all"
                      data-testid={`button-hero-cta-${index}`}
                    >
                      Discover More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
