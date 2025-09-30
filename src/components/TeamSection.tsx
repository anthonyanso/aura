import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Card, CardContent } from "@/components/ui/card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import team1 from "@assets/generated_images/Team_member_portrait_1_48a6a5c4.png";
import team2 from "@assets/generated_images/Team_member_portrait_2_e4731c7a.png";
import team3 from "@assets/generated_images/Team_member_portrait_3_aa70cbc9.png";
import team4 from "@assets/generated_images/Team_member_portrait_4_a8be3733.png";
import team5 from "@assets/generated_images/Team_member_portrait_5_ef098ad4.png";
import team6 from "@assets/generated_images/Team_member_portrait_6_1e9b31e4.png";
import team7 from "@assets/generated_images/Team_member_portrait_7_b7bb25e4.png";
import team8 from "@assets/generated_images/Team_member_portrait_8_4b75304d.png";

const teamMembers = [
  {
    name: "Alexandra Mitchell",
    position: "Chief Executive Officer",
    bio: "Visionary leader with 15+ years driving digital transformation across Fortune 500 companies.",
    image: team1,
  },
  {
    name: "Marcus Chen",
    position: "Chief Technology Officer",
    bio: "Technology innovator specializing in cloud architecture and enterprise solutions.",
    image: team2,
  },
  {
    name: "Sophia Rodriguez",
    position: "Head of Strategy",
    bio: "Strategic consultant helping businesses navigate complex digital landscapes.",
    image: team3,
  },
  {
    name: "David Thompson",
    position: "Director of Marketing",
    bio: "Growth marketing expert with proven track record of scaling brands globally.",
    image: team4,
  },
  {
    name: "Emily Patterson",
    position: "VP of Operations",
    bio: "Operations specialist ensuring seamless delivery and exceptional client experiences.",
    image: team5,
  },
  {
    name: "Jonathan Blake",
    position: "Creative Director",
    bio: "Award-winning designer crafting compelling visual experiences for leading brands.",
    image: team6,
  },
  {
    name: "Rachel Foster",
    position: "Financial Controller",
    bio: "Financial strategist optimizing resources and driving sustainable business growth.",
    image: team7,
  },
  {
    name: "Michael Stevens",
    position: "Head of People",
    bio: "Culture champion building high-performing teams and fostering innovation.",
    image: team8,
  },
];

export default function TeamSection() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .team-swiper .swiper-button-next,
      .team-swiper .swiper-button-prev {
        color: #ffbf00;
        background: rgba(255, 191, 0, 0.1);
        backdrop-filter: blur(10px);
        width: 44px;
        height: 44px;
        border-radius: 6px;
      }
      .team-swiper .swiper-button-next:after,
      .team-swiper .swiper-button-prev:after {
        font-size: 20px;
      }
      .team-swiper .swiper-pagination-bullet {
        background: #ffd400;
        opacity: 0.5;
        width: 10px;
        height: 10px;
      }
      .team-swiper .swiper-pagination-bullet-active {
        background: #ffbf00;
        opacity: 1;
        width: 24px;
        border-radius: 5px;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="team" className="py-20 md:py-28 bg-gradient-to-br from-navy-dark via-navy-deep to-navy-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Meet Our <span className="text-gold">Team</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Talented professionals dedicated to delivering excellence and driving your success forward.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="team-swiper pb-12"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <Card
                className="overflow-hidden bg-white/5 border-white/10 backdrop-blur-sm hover-elevate active-elevate-2"
                data-testid={`card-team-${index}`}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-transparent" />
                </div>
                <CardContent className="p-6 -mt-24 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-gold font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
