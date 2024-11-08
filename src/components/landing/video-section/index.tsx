import Play from "@/constants/svg/play.svg";
import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PlayButton = () => (
  <button
    type="button"
    className={cn(
      `w-64 lg:w-auto absolute top-full left-1/2 flex items-center transform
      -translate-y-1/2 -translate-x-1/2 bg-white rounded-full font-medium group p-4 shadow-xl`
    )}
    aria-label="play video"
  >
    <Play
      className={cn(
        `w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0`
      )}
    />
    <span className={cn(`ml-3`)}>Watch the video (5 min)</span>
  </button>
);

const VideoSection = () => (
  <section
    className={cn(`bg-gradient-to-b from-gray-50 to-white shadow-inner`)}
  >
    <div className={cn(`max-w-7xl mx-auto`)}>
      <div className={cn(`flex flex-col max-w-4xl mx-auto pt-28`)}>
        <div className={cn(`w-full`)}>
          <div className={cn(`relative shadow-2xl mx-6 lg:mx-0 `)}>
            <iframe
              width="100%"
              height="400"
              className="rounded-lg"
              src="https://www.youtube.com/embed/tmEgM6bhtZU?controls=0&modestbranding=1&rel=0&fs=0&autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VideoSection;
