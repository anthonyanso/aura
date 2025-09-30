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
    title: "Transform Your Business Vision",
    description: "Empowering organizations with innovative digital solutions that drive growth and excellence in the modern marketplace.",
  },
  {
    image: heroImage2,
    title: "Innovation Meets Excellence",
    description: "Cutting-edge technology and strategic consulting converge to create unprecedented opportunities for your success.",
  },
  {
    image: heroImage3,
    title: "Elevate Your Digital Presence",
    description: "Partner with industry leaders to unlock your potential and achieve remarkable business transformation.",
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
                      size="lg"
                      className="bg-gradient-to-r from-gold to-gold-light text-navy-dark font-semibold text-lg px-8 py-6 hover:shadow-xl transition-all"
                      data-testid={`button-hero-cta-${index}`}
                      onClick={() => console.log(`Hero CTA ${index + 1} clicked`)}
                    >
                      Get Started Today
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
