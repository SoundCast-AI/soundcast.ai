import FeatureSvg from "@/constants/svg/features.svg";
import { cn } from "@/lib/utils";

const listItems = [
  {
    title: `Influencers`,
    description: `Increase fan engagement by creating an AI replica of yourself. Leverage voice AI to engage with your audience on platforms like YouTube and Discord, while monetizing your content and interactions to earn revenue.`,
  },
  {
    title: `Developers`,
    description: `Integrate intelligent voice technology effortlessly into your projects. With robust APIs and easy-to-use SDKs, SoundCast.ai is built for developers who want rapid, reliable solutions.

`,
  },
  {
    title: `Product owners`,
    description: `Empower your products with AI-driven voice capabilities that align with your brand's tone and objectives. Enhance customer interactions and gather valuable insights.

`,
  },
];

const ListSection = () => (
  <section className={cn(`lg:py-28 pt-28 overflow-hidden`)}>
    <div className={cn(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={cn(`mb-16 text-center`)}>
        <h2
          className={cn(
            `text-base text-indigo-600 font-semibold tracking-wide uppercase`
          )}
        >
          Grow your revenue
        </h2>
        <p
          className={cn(
            `mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`
          )}
        >
          Transform your business
        </p>
      </div>
      <div className={cn(`flex flex-wrap -mx-8 items-center`)}>
        <div className={cn(`w-full lg:w-1/2 px-8`)}>
          <ul className={cn(`space-y-12`)}>
            {listItems.map((item, index) => (
              <li className={cn(`flex -mx-4`)} key={item.title}>
                <div className={cn(`px-4`)}>
                  <span
                    className={cn(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={cn(`px-4`)}>
                  <h3 className={cn(`my-4 text-xl font-semibold`)}>
                    {item.title}
                  </h3>
                  <p className={cn(`text-gray-500 leading-loose`)}>
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={cn(`w-full lg:w-1/2 px-8`)}>
          <div
            className={cn(
              `lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`
            )}
          >
            <FeatureSvg width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
