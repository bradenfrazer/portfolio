type NavProps = {};

export const Nav = (props: NavProps) => {
  const {} = props;
  return (
    <nav className="container flex max-w-screen-xl justify-center px-5 py-8 md:p-14">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/#work">Work</a>
        </li>
        <li>
          <a href="/#about">About</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
