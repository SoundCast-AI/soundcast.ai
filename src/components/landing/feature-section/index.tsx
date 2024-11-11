// import Check from "@/constants/svg/check.svg";
// import { cn } from "@/lib/utils";
import Image from "next/image";
import { getAllInfluencers } from "@/lib/character-apis";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const features = [
  {
    icon: "🎭",
    title: "Celebrity AI Replicas",
    description:
      "Interact with AI personalities inspired by thought leaders, entrepreneurs, and influencers. Experience their knowledge and insights firsthand.",
  },
  {
    icon: "🎯",
    title: "Custom Voice Agents",
    description:
      "Create personalized AI agents with your own data and voice. Perfect for business representatives, customer service, and unique applications.",
  },
  {
    icon: "📞",
    title: "Phone Conversations",
    description:
      "Take your AI interactions beyond text. Engage in natural phone conversations with voice-enabled AI personalities.",
  },
];

// const personalities = [
//   {
//     name: "Elon Musk AI",
//     description:
//       "Explore innovation, space, and technology with an AI inspired by the Tesla & SpaceX CEO.",
//     image:
//       "https://www.investopedia.com/thmb/XJDLdvCuNbcWk_EVZzXx84ae82c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1258889149-1f50bb87f9d54dca87813923f12ac94b.jpg",
//   },
//   {
//     name: "Naval Ravikant AI",
//     description:
//       "Discuss wealth creation, philosophy, and personal growth with an AI based on the AngelList founder.",
//     image:
//       "https://i0.wp.com/tim.blog/wp-content/uploads/2020/10/Naval-Ravikant-scaled.jpg?fit=2560%2C2048&ssl=1",
//   },
//   {
//     name: "Sadhguru AI",
//     description:
//       "Experience spiritual wisdom and transformative insights with an AI inspired by Sadhguru's teachings.",
//     image:
//       "https://mrwallpaper.com/images/thumbnail/sadhguru-intertwining-his-fingers-t0glt8st69bmwls9.webp",
//   },
//   {
//     name: "Ratan Tata AI",
//     description:
//       "Gain business acumen and leadership wisdom with an AI inspired by Ratan Tata's legacy.",
//     image: "https://im.rediff.com/money/2012/dec/20tata1.jpg",
//   },
// ];

export default function FeatureSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Powerful Voice AI Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Personalities() {
  const [featured, setFeatured] = useState<TInfluencer[]>([]);
  useEffect(() => {
    async function getAllInflencers() {
      const influencers = await getAllInfluencers();
      const featuredInfluencers = influencers.filter(
        (influencers) => influencers.featured === true
      );
      console.log(featuredInfluencers);
      setFeatured(featuredInfluencers);
    }
    getAllInflencers();
  }, []);
  return (
    <section id="personalities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Featured AI Personalities
        </h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }} // Make pagination clickable
          modules={[EffectCoverflow, Pagination]} // Ensure correct modules are included
          className="mySwiper w-full lg-w[50%] md:w-[50%]"
        >
          {featured.map((featuredItem) => (
            <SwiperSlide key={featuredItem.id}>
              <Link
                href={`/characters/${featuredItem.id}`}
                className="transition-transform"
              >
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <Image
                    width={280}
                    height={280}
                    src={featuredItem.imageUrl || "/placeholder.jpg"}
                    alt={featuredItem.name}
                    className="rounded-lg mb-4 w-full h-[20rem] object-contain"
                  />
                  <h3 className="font-bold mb-2">{featuredItem.name}</h3>
                  <p className="text-gray-600">{featuredItem.description}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
