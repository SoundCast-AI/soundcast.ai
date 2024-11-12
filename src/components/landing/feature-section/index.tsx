// import Check from "@/constants/svg/check.svg";
// import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { getAllInfluencers } from "@/lib/character-apis";
import { PhoneCall, TabletSmartphone, Youtube } from "lucide-react";
import { DiscordLogoIcon } from "@radix-ui/react-icons";

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
  {
    icon: <DiscordLogoIcon className="w-10 h-10" />,
    title: "AI-Powered Discord Engagement",
    description:
      "Engage in AI interactions directly through Discord, enabling influencers and communities to integrate AI seamlessly into their channels. Experience dynamic conversations and enhanced engagement firsthand.",
  },
  {
    icon: <Youtube size={50} />,
    title: "Interactive AI for Your YouTube Channel",
    description:
      "Connect with AI through YouTube, allowing influencers and viewers to interact seamlessly within videos and live streams. Experience enriched content and real-time engagement firsthand.",
  },
];

const commingSoon = [
  {
    icon: <TabletSmartphone />,
    title: "Offline GPT",
    description:
      "Run AI models locally on your device for enhanced privacy and offline access.",
  },
  {
    icon: <PhoneCall />,
    title: "AI Calling Assistant",
    description:
      "Hardware solution for seamless AI-powered voice calls and communication.",
  },
];

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

export function CommingSoon() {
  return (
    <section id="features" className="py-20 bg-white ">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Currently Under Development
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {commingSoon.map((app, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{app.icon}</div>
              <h3 className="text-xl font-bold mb-4">{app.title}</h3>
              <p className="text-gray-600">{app.description}</p>
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
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured AI Personalities
        </h2>

        <Carousel className="w-full">
          <CarouselContent>
            {featured.map((personality, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/4 h-full py-4"
              >
                <div className="bg-white relative flex flex-col items-center p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow h-[580px]">
                  <Image
                    width={280}
                    height={280}
                    src={personality.imageUrl || "/placeholder.jpg"}
                    alt={personality.name}
                    className="rounded-lg mb-4 w-full h-[20rem] object-cover"
                  />

                  <h3 className="font-bold mb-2">{personality.name}</h3>

                  <p className="text-gray-600">{personality.description}</p>

                  <div className="flex-1"></div>

                  <Link
                    href={`/characters/${personality.id}`}
                    className="w-full"
                    target="_blank"
                  >
                    <Button variant="secondary" className="w-full">
                      Chat Now
                    </Button>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* <CarouselPrevious /> */}
          {/* <CarouselNext /> */}
        </Carousel>
      </div>
    </section>
  );
}
