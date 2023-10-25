import { useState } from "react";
import { cx } from "class-variance-authority";
import logo from "../assets/logo-128.png";
import logoFull from "../assets/logo.png";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

type NavItemProps = {
  href: string;
  children: React.ReactNode;
};

const NavItem = (props: NavItemProps) => {
  const { href, children } = props;
  return (
    <li className="m-0 text-center">
      <a
        className="block w-full px-4 py-2 text-blue-950 transition hover:bg-blue-500 md:rounded-full md:bg-blue-300 md:hover:bg-blue-50/25"
        href={href}
      >
        {children}
      </a>
    </li>
  );
};

export const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="absolute z-10 w-full">
      <div className="container mx-auto flex w-full max-w-screen-xl justify-between px-5 py-4 md:p-14 md:py-8">
        <a className="w-12 md:w-16" href="/">
          <picture>
            <source media="(min-width: 768px)" srcSet={logoFull} />
            <img src={logo} alt="Braden Frazer logo" />
          </picture>
        </a>
        <div className="flex items-center">
          <button
            className="-mr-4 block rounded-full p-4 hover:bg-blue-50/25 md:hidden"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            {isNavExpanded && <XMarkIcon className="w-6 text-blue-950" />}
            {!isNavExpanded && (
              <Bars3BottomRightIcon className="w-6 text-blue-950" />
            )}
          </button>
          <ul
            className={cx(
              "absolute left-0 top-24 w-full flex-col divide-y divide-blue-500 bg-blue-400 text-blue-950 md:relative md:top-0 md:flex md:flex-row md:gap-12 md:divide-y-0 md:bg-transparent",
              isNavExpanded ? "flex" : "hidden",
            )}
          >
            <NavItem href="/#work">Work</NavItem>
            <NavItem href="/#about">About</NavItem>
            <NavItem href="/#contact">Contact</NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};
