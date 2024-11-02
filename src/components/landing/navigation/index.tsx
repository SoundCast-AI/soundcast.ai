import { useState } from "react";
import Button from "@/components/landing/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}

type Link = {
  label: string;
  href: string;
};

const links: {
  label: string;
  href: string;
  disabled?: boolean;
}[] = [
  {
    label: "Explore",
    href: "/characters",
  },
  {
    label: `Blog`,
    href: `/blogs`,
    disabled: true,
  },
  {
    label: `Features`,
    href: `/#features`,
  },
  {
    label: `Testimonials`,
    href: `/#testimonials`,
    disabled: true,
  },
  {
    label: `Pricing`,
    href: `/#pricing`,
  },
];

const secondaryLinks: {
  label: string;
  href: string;
  disabled?: boolean;
}[] = [
  {
    label: `Contact`,
    href: `/contact`,
  },
  {
    label: `Log in`,
    href: `/`,
    disabled: true,
  },
  {
    label: `Get Started`,
    href: `/`,
  },
];

const MenuButton = ({ toggleMenu, showMenu }: IMenuButton) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className={cn(`p-2 text-gray-400`)}
  >
    <span className={cn(`sr-only`)}>Open menu</span>
    {showMenu ? (
      <svg
        className={cn(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ) : (
      <svg
        className={cn(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    )}
  </button>
);

const MobileMenu = () => (
  <div className={cn(`md:hidden`)}>
    <div className={cn(`px-2 pt-2 pb-3 space-y-1 sm:px-3`)}>
      {links.map((link) => (
        <Link
          href={link.href}
          className={cn(
            `text-gray-500 block px-3 py-2 text-base font-medium`,
            link?.disabled && `cursor-not-allowed`
          )}
          key={link.label}
        >
          {link.label}
        </Link>
      ))}
    </div>
    <div className={cn(`pt-4 pb-3 border-t border-gray-400`)}>
      <div className={cn(`px-2 space-y-1`)}>
        {secondaryLinks.map((link: Link) => (
          <a
            key={`mobile-${link.label}`}
            href={link.href}
            className={cn(
              `block px-3 py-2 text-base font-medium text-gray-500`
            )}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className={cn(`bg-white`)}>
      <div className={cn(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={cn(`flex items-center justify-becneen h-24`)}>
          <div className={cn(`flex flex-1 items-center`)}>
            <div className={cn(`flex-shrink-0`)}>
              <img
                className={cn(`h-12 w-12`)}
                src="logo.svg"
                alt="logo"
                width={48}
                height={48}
              />
            </div>

            <div className={cn(`hidden md:block`)}>
              <div className={cn(`ml-10 flex items-baseline space-x-4`)}>
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={cn(
                      `text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium`,
                      link?.disabled && `cursor-not-allowed`
                    )}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={cn(`hidden md:block`)}>
            <div className={cn(`ml-4 flex items-center md:ml-6`)}>
              <Button modifier="border-0 mr-2">Contact sales</Button>
              <Button modifier="border-0 mr-2">Log in</Button>
              <Button primary>Get started</Button>
            </div>
          </div>

          <div className={cn(`-mr-2 flex md:hidden`)}>
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {showMenu ? <MobileMenu /> : null}
    </nav>
  );
};

export default Navigation;
