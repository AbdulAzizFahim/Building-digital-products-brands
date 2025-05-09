import Navbar from "../components/Header/Navbar";
import NavbarDownloadButton from "../components/Header/NavbarDownloadButton";
import NavbarLogo from "../components/Header/NavbarLogo";

export default function Header() {
  return (
    <header className="fixed w-full">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <NavbarLogo />
          <NavbarDownloadButton />
          <Navbar />
        </div>
      </nav>
    </header>
  );
}
