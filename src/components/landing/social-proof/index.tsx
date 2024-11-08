import { useState } from "react";
import Quote from "@/constants/svg/quote.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";

const socialProofs = [
  {
    name: `Alice Smith`,
    company: `GreenTech Solutions`,
    image: `/images/social-1.webp`,
    text: `I had an amazing experience working with this team. Their professionalism and dedication to delivering high-quality results were evident throughout the entire project. They went above and beyond to ensure that all our requirements were met, and the final product exceeded our expectations. Highly recommend their services for anyone looking for reliable and innovative solutions!`,
  },
  {
    name: `Robert Johnson`,
    company: `Pixel Innovations`,
    image: `/images/social-2.webp`,
    text: `The team truly exceeded our expectations with their attention to detail and commitment to delivering on time. From start to finish, they were communicative, transparent, and willing to tackle every challenge that came their way. Working with them was an absolute pleasure, and we look forward to future collaborations.`,
  },
];

const SocialProof = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex + 1 < socialProofs.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previous = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={cn(`container mx-auto my-8`)}>
      <div className={cn(`max-w-7xl mx-auto`)}>
        <section>
          <figure>
            <div className={cn(`relative bg-white`)}>
              <Quote
                className={cn(
                  `w-16 md:w-12 left-0 md:-left-2 absolute top-0 pl-4 md:pl-0 text-gray-300`
                )}
              />
              <div className={cn(`pt-20 px-6 md:px-0`)}>
                <p className={cn(`text-gray-600 text-base pb-6`)}>
                  {socialProofs[currentIndex].text}
                </p>
                <div className={cn(`flex items-center justify-becneen`)}>
                  <div className={cn(`flex items-center pb-12`)}>
                    <div className={cn(`h-12 w-12`)}>
                      <Image
                        src={socialProofs[currentIndex].image}
                        alt={socialProofs[currentIndex].name}
                        className={cn(
                          `h-full w-full object-cover overflow-hidden rounded-full`
                        )}
                        height={48}
                        width={48}
                      />
                    </div>
                    <p className={cn(`text-gray-600 font-bold ml-3`)}>
                      {socialProofs[currentIndex].name} <br />
                      <span
                        className={cn(`text-gray-600 text-base font-light`)}
                      >
                        {socialProofs[currentIndex].company}
                      </span>
                    </p>
                  </div>
                  <div className={cn(`cursor-pointer flex pb-12`)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#CBD5E0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      onClick={previous}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#CBD5E0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      onClick={next}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </section>
      </div>
    </div>
  );
};

export default SocialProof;
