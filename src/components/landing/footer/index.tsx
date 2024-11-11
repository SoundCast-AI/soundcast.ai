import Button from "@/components/landing/button";
import { toast } from "@/hooks/use-toast";
import { newsLetter } from "@/lib/news-letter";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const productLinks = [
  { id: 1, name: `Features`, href: `/#features` },
  { id: 2, name: `Customers`, href: `/#customers` },
  { id: 3, name: `Platform`, href: `/` },
  { id: 4, name: `Pricing`, href: `/#pricing` },
  { id: 5, name: `Enterprise`, href: `/#customers` },
  { id: 6, name: `What's new?`, href: `/` },
];
const aboutLinks = [
  { id: 1, name: `About Us`, href: `/` },
  // { id: 2, name: `Careers`, href: `/careers` },
  { id: 3, name: `Leadership`, href: `/leadership` },
  { id: 4, name: `Blog`, href: `/blogs` },
  { id: 5, name: `Events`, href: `/events` },
  { id: 6, name: `Press`, href: `/press` },
];

const resourceLinks = [
  { id: 1, name: `Get started`, href: `/characters` },
  { id: 2, name: `Guides`, href: `/` },
  { id: 3, name: `Tools`, href: `/` },
  { id: 4, name: `Case studies`, href: `/` },
  { id: 5, name: `Solutions`, href: `/` },
  { id: 6, name: `FAQs`, href: `/` },
  { id: 7, name: `Help Center`, href: `/` },
  { id: 8, name: `Training`, href: `/` },
  { id: 9, name: `Other resources`, href: `/` },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    try {
      const response = await newsLetter(email);
      console.log("response", response);
      toast({
        type: "foreground",
        title: "Subscribed successfully",
        description: "Thank you for subscribing",
      });

      return response;
    } catch (e) {
      console.log("Error in subscribing", e);
      toast({
        type: "foreground",
        title: "Invalid email",
        description: "Check your email and try again",
      });
    }
  };

  return (
    <footer className={cn(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
      <div
        className={cn(
          `max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`
        )}
      >
        <div className={cn(`mb-14 flex items-center w-full`)}>
          <Image
            className={cn(`h-12 w-12 mr-4`)}
            src="logo.svg"
            alt="logo"
            width={48}
            height={48}
          />
          <p className={cn(`text-4xl text-indigo-500 font-bold`)}>SoundCast</p>
        </div>
        <div className={cn(`w-full lg:w-1/2`)}>
          <ul className={cn(`text-lg font-light flex flex-wrap w-full`)}>
            <li className={cn(`w-1/2 md:w-1/3 lg:w-1/3`)}>
              <div>
                <h4 className={cn(`text-gray-900 text-base font-bold mb-1`)}>
                  Product
                </h4>
                <ul>
                  {productLinks.map((link) => (
                    <li
                      className={cn(
                        `text-gray-800 text-sm font-medium leading-6`
                      )}
                      key={link?.id}
                    >
                      <Link href={link?.href}>{link?.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className={cn(`w-1/2 md:w-1/3 lg:w-1/3`)}>
              <div>
                <h4 className={cn(`text-gray-900 text-base font-bold mb-1`)}>
                  Resources
                </h4>
                <ul>
                  {resourceLinks.map((link) => (
                    <li
                      className={cn(
                        `text-gray-800 text-sm font-medium leading-6`
                      )}
                      key={link.id}
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className={cn(`w-1/2 md:w-1/3 lg:w-1/3`)}>
              <div>
                <h4 className={cn(`text-gray-900 text-base font-bold mb-1`)}>
                  About Us
                </h4>
                <ul>
                  {aboutLinks.map((link) => (
                    <li
                      className={cn(
                        `text-gray-800 text-sm font-medium leading-6`
                      )}
                      key={link.id}
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className={cn(`w-full lg:w-1/2 mt-12 lg:mt-0`)}>
          <div className={cn(`border border-gray-400 rounded py-5 px-4`)}>
            <h4
              className={cn(`font-mono text-sm uppercase text-gray-500 mb-3`)}
            >
              Subscribe our newsletter
            </h4>
            <div className={cn(`flex w-full`)}>
              <input
                aria-label="email address"
                type="text"
                className={cn(
                  `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`
                )}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button onClick={handleSubscribe}>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
