import Preferences from "@/constants/svg/preferences.svg";
import Play from "@/constants/svg/play.svg";
import { cn } from "@/lib/utils";

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
          <div className={cn(`relative shadow-2xl mx-6 lg:mx-0`)}>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/tmEgM6bhtZU?si=qiU6_E8rvmWzSh3M"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VideoSection;
