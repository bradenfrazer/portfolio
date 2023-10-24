import { useState } from "react";
import { cx } from "class-variance-authority";
import logo from "../assets/logo-256.png";
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
        className="block w-full px-4 py-2 text-gray-950 transition hover:bg-blue-500 sm:text-white"
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
    <nav className="container absolute z-10 flex w-full max-w-screen-xl justify-between px-5 py-4 md:p-14">
      <a className="w-16 sm:w-28" href="/">
        <picture>
          <source media="(min-width: 768px)" srcSet={logoFull} />
          <img src={logo} alt="Braden Frazer logo" />
        </picture>
      </a>
      <div className="flex items-center">
        <button
          className="block sm:hidden"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {isNavExpanded && <XMarkIcon className="w-6" />}
          {!isNavExpanded && <Bars3BottomRightIcon className="w-6" />}
        </button>
        <ul
          className={cx(
            "absolute left-0 top-24 w-full flex-col divide-y divide-blue-500 bg-blue-400 text-gray-950 sm:relative sm:top-0 sm:flex sm:flex-row sm:gap-16 sm:divide-y-0 sm:bg-transparent",
            isNavExpanded ? "flex" : "hidden",
          )}
        >
          <NavItem href="/#work">Work</NavItem>
          <NavItem href="/#about">About</NavItem>
          <NavItem href="/#contact">Contact</NavItem>
        </ul>
      </div>
    </nav>
  );
};
