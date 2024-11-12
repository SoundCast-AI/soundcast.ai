import Button from "@/components/landing/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { getInfluencerByID } from "@/lib/character-apis";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
const Header = () => {
  const [character, setCharacter] = useState<TInfluencer | null>(null);

  useEffect(() => {
    const fetchInfluencer = async () => {
      const influencer = await getInfluencerByID("2");
      console.log(influencer);
      setCharacter(influencer);
    };

    fetchInfluencer();
  }, []);

  const handleScrollToFeature = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        `flex justify-center items-center bg-white h-screen md:h-[50rem]`
      )}
    >
      <div
        className={cn(
          `container mx-auto px-6 py-20 grid grid-rows-1 gap-4 md:gap-14 lg:grid-cols-2 lg:gap-8`
        )}
      >
        <div className="">
          <h1
            className={cn(
              ` flex justify-center lg:justify-start  font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`,
              `bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent`
            )}
          >
            SoundCast
            <span className="text-gray-800">.ai</span>
          </h1>
          <h1 className={cn(`mt-10 text-gray-500  text-xl lg:text-3xl`)}>
            Create lifelike AI voice replicas and assistants powered by
            cutting-edge technology. Transform your communication with natural,
            engaging AI voices.
          </h1>
          <div
            className={cn(
              `mt-10 flex justify-center items-center lg:justify-start  w-full mx-auto`
            )}
          >
            <Link href={"/characters"}>
              <Button primary>Get started</Button>
            </Link>

            <span className={cn(`mx-2`)}>or</span>
            <Link href={"/contact-us"}>
              {" "}
              <Button>Contact us</Button>
            </Link>
          </div>
        </div>

        <div className="relative">
          {character && (
            <Card className="max-w-full h-full mx-auto overflow-hidden mb-4">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 h-[21rem] md:h-[15rem] lg:h-[15rem]">
                  <div className="w-full md:w-[15rem] h-[15rem] sm:h-[12rem] md:h-[15rem] sm:w-[15rem] rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      width={192}
                      height={192}
                      src={character.imageUrl}
                      alt={`AI Assistant ${character.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {character.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">
                      {character.description}
                    </p>
                    <div className="flex gap-4">
                      <Button>
                        <Link href={`/characters/${character.id}`}>
                          Chat Now
                        </Link>
                      </Button>

                      <Button primary onClick={handleScrollToFeature}>
                        More
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
