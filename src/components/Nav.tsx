import { useState } from "react";
import { cx } from "class-variance-authority";
import logo from "../assets/logo-256.png";
import logoFull from "../assets/logo.png";

type NavItemProps = {
  href: string;
  children: React.ReactNode;
};

const NavItem = (props: NavItemProps) => {
  const { href, children } = props;
  return (
    <li className="m-0 text-center">
      <a className="w-full text-black sm:text-white" href={href}>
        {children}
      </a>
    </li>
  );
};

export const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="container absolute z-10 flex w-full max-w-screen-xl justify-between px-5 py-8 md:p-14">
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
          {/* icon from Heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <ul
          className={cx(
            "absolute left-0 top-16 w-full flex-col gap-16 border-t border-black bg-white sm:relative sm:top-0 sm:flex sm:flex-row sm:border-0 sm:bg-transparent",
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
