import Button from "@/components/landing/button";
import Netlify from "@/constants/svg/netlify.svg";
import Nike from "@/constants/svg/nike.svg";
import Figma from "@/constants/svg/figma.svg";
import Aws from "@/constants/svg/aws.svg";
import { cn } from "@/lib/utils";

const Header = () => (
  <header className={cn(`bg-white h-[calc(100vh-6rem)]`)}>
    <div className={cn(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1
        className={cn(
          `font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`,
          `bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent`
        )}
      >
        SoundCast
        <span className="text-gray-800">.ai</span>
      </h1>
      <div className={cn(`max-w-xl mx-auto`)}>
        <p
          className={cn(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}
        >
          Making Voice Intelligent with AI
        </p>
      </div>
      <div
        className={cn(`mt-10 flex justify-center items-center w-full mx-auto`)}
      >
        <Button primary>Get started</Button>
        <span className={cn(`mx-2`)}>or</span>
        <Button>Contact us</Button>
      </div>
    </div>

    <div className={cn(`flex justify-center w-full`)}>
      <div className={cn(`mt-4 w-full`)}>
        <p
          className={cn(
            `font-mono uppercase text-center font-medium text-sm text-gray-600`
          )}
        >
          These folks get it
        </p>
        <div
          className={cn(`flex items-center justify-center mx-auto flex-wrap`)}
        >
          <Aws className={cn(`m-12 mb-8`)} width={120} />
          <Netlify className={cn(`m-12`)} width={140} />
          <Nike className={cn(`m-12`)} width={140} />
          <Figma className={cn(`m-12`)} width={140} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
