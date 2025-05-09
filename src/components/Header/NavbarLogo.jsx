const NavbarLogo = () => {
  return (
    <a href="#" className="flex items-center">
      <img
        src="./assets/logo.svg"
        className="h-6 mr-3 sm:h-9"
        alt="Landwind Logo"
      />
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
        Learn with Sumit
      </span>
    </a>
  );
};

export default NavbarLogo;
