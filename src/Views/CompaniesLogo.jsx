import AirBnbLogo from "../components/Companies Logo/AirBnbLogo";
import GoogleLogo from "../components/Companies Logo/GoogleLogo";
import MicrosoftLogo from "../components/Companies Logo/MicrosoftLogo";
import SpotifyLogo from "../components/Companies Logo/SpotifyLogo";
import MailChimpLogo from "../components/Companies Logo/MailChimpLogo";
import MashableLogo from "../components/Companies Logo/MashableLogo";

export default function CompaniesLogo() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <AirBnbLogo />
          <GoogleLogo />
          <MicrosoftLogo />
          <SpotifyLogo />
          <MailChimpLogo />
          <MashableLogo />
        </div>
      </div>
    </section>
  );
}
