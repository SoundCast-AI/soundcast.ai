import Check from "@/constants/svg/check.svg";
import { cn } from "@/lib/utils";

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

const personalities = [
  {
    name: "Elon Musk AI",
    description:
      "Explore innovation, space, and technology with an AI inspired by the Tesla & SpaceX CEO.",
  },
  {
    name: "Naval Ravikant AI",
    description:
      "Discuss wealth creation, philosophy, and personal growth with an AI based on the AngelList founder.",
  },
  {
    name: "Create Custom AI",
    description:
      "Build your own AI personality with custom knowledge, voice, and characteristics.",
  },
  {
    name: "Enterprise Solutions",
    description:
      "Deploy custom voice agents for your business needs and customer service.",
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

export function Personalities() {
  return (
    <section id="personalities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Featured AI Personalities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalities.map((personality, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <img
                src="/api/placeholder/280/280"
                alt={personality.name}
                className="rounded-lg mb-4 w-full"
              />
              <h3 className="font-bold mb-2">{personality.name}</h3>
              <p className="text-gray-600">{personality.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
