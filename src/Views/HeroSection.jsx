import Title from "../components/Hero Section/Title";
import GithubButton from "../components/Hero Section/GithubButton";
import FigmaButton from "../components/Hero Section/FigmaButton";
import BannerImage from "../components/common/BannerImage";

export default function HeroSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <Title />
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <GithubButton />
            <FigmaButton />
          </div>
        </div>

        <BannerImage
          className="hidden lg:mt-0 lg:col-span-5 lg:flex"
          source="./assets/hero.png"
          alt="hero image"
        />
      </div>
    </section>
  );
}
