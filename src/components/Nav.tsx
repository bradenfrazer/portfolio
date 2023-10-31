import { useState } from "react";
import { cx } from "class-variance-authority";
import logo from "../assets/logo-128.png";
import logoFull from "../assets/logo.png";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Container } from "./ui/Container";

type NavItemProps = {
  href: string;
  children: React.ReactNode;
};

const NavItem = (props: NavItemProps) => {
  const { href, children } = props;
  return (
    <li className="m-0 text-center">
      <a
        className="block w-full px-4 py-3 font-semibold text-primary-50 transition hover:bg-primary-800 md:rounded-full md:py-2 md:text-primary-950 md:hover:bg-primary-50/25"
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
    <nav className="absolute z-10 w-full px-5 py-4 md:p-14 md:py-8">
      <Container className="flex justify-between">
        <a className="hover:animate-flip w-12 md:w-16" href="/">
          <picture>
            <source media="(min-width: 768px)" srcSet={logoFull} />
            <img src={logo} alt="Braden Frazer logo" />
          </picture>
        </a>
        <div className="flex items-center">
          <button
            className="-mr-4 block rounded-full p-4 hover:bg-primary-50/25 md:hidden"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            {isNavExpanded && <XMarkIcon className="w-6 text-primary-950" />}
            {!isNavExpanded && (
              <Bars3BottomRightIcon className="w-6 text-primary-950" />
            )}
          </button>
          <ul
            className={cx(
              "absolute left-0 top-24 ml-5 w-[calc(100%-40px)] flex-col divide-y divide-primary-900 rounded-lg bg-primary-950 text-primary-50 md:relative md:top-0 md:flex md:flex-row md:gap-6 md:divide-y-0 md:rounded-full md:bg-primary-400 md:text-primary-950 lg:gap-12",
              isNavExpanded ? "flex" : "hidden",
            )}
          >
            <NavItem href="/#work">Work</NavItem>
            <NavItem href="/#about">About</NavItem>
            <NavItem href="/#contact">Contact</NavItem>
          </ul>
        </div>
      </Container>
    </nav>
  );
};
