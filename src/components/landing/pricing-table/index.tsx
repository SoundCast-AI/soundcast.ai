import Check from "@/constants/svg/check.svg";
// import Button from "@/components/landing/button";
import { cn } from "@/lib/utils";

const features = [
  `Comprehensive Support`,
  `Tailored Solutions`,
  `Seamless Integration`,
  `Advanced Technology`,
  `Real-time Analytics`,
  `Scalability`,
  `Innovation`,
  `Dedicated Team`,
];

const PricingTable = () => (
  <section
    className={cn(
      `bg-gradient-to-b from-gray-100 to-white shadow-inner pt-12 `
    )}
  >
    <div className={cn(`relative max-w-7xl mx-auto mb-24 p-0 md:p-[2rem]`)}>
      <div className={cn(`overflow-hidden lg:max-w-none lg:flex`)}>
        <div className={cn(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
          <h2
            className={cn(`text-4xl lg:text-7xl font-bold text-gray-800 mb-12`)}
          >
            Are you ready?
          </h2>
          <p className={cn(`mt-6 text-base leading-6 text-gray-500`)}>
            Step into the future of seamless experiences with our cutting-edge
            service. From innovative solutions to enhanced efficiency, we’ve got
            everything you need to succeed. Don’t wait — transform your business
            today!
          </p>
          <div className={cn(`mt-8`)}>
            <div className={cn(`flex items-center`)}>
              <h3
                className={cn(
                  `flex-shrink-0 pr-4 text-sm leading-5
                tracking-wider font-semibold uppercase text-indigo-600`
                )}
              >
                What is included
              </h3>
              <div className={cn(`flex-1 border-t-2 border-gray-200`)} />
            </div>
            <ul className={cn(`mt-8 lg:grid lg:grid-cols-2 text-justify`)}>
              {features.map((feature) => (
                <li
                  className={cn(`flex items-center lg:col-span-1`)}
                  key={feature}
                >
                  <div className={cn(`flex-shrink-0`)}>
                    <Check className={cn(`h-8 w-8 mr-3 mb-1`)} />
                  </div>
                  <p className={cn(`text-gray-600`)}>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 flex justify-start gap-3 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Contact:-</h3>
            </div>
            <div className="text-lg text-blue-600">
              <a
                href="mailto:vivekans2016@gmail.com"
                className="hover:underline"
              >
                vivekans2016@gmail.com
              </a>
            </div>
          </div>
        </div>
        {/* <div
          className={cn(
            `py-8 px-6 text-center lg:flex-shrink-0
            lg:flex lg:flex-col lg:justify-center lg:p-12`
          )}
        >
          <p className={cn(`text-lg font-medium text-gray-800`)}>
            If you order now...
          </p>
          <div
            className={cn(
              `my-4 flex items-center justify-center text-6xl leading-none font-bold text-gray-800`
            )}
          >
            $99/mo
          </div>
          <Button primary modifier="mt-6">
            Contact sales
          </Button>
        </div> */}
      </div>
    </div>
  </section>
);

export default PricingTable;
