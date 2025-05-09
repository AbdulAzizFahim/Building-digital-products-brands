import PriceItem from "../components/common/PriceItem";

const starter = {
  naming: "Starter",
  des: "Best option for personal use & for your next project.",
  price: "$29",
  features: [
    { key: 0, isSpecial: false, placeholder: "Individual configuration" },
    { key: 1, isSpecial: false, placeholder: "No setup, or hidden fees" },
    { key: 2, isSpecial: true, placeholder: "Team size:", text: "1 developer" },
    { key: 3, isSpecial: true, placeholder: "Premium support:", text: "6 months" },
    { key: 4, isSpecial: true, placeholder: "Free updates:", text: " 6 months" },
  ],
};

const company = {
  naming: "Company",
  des: "Relevant for multiple users, extended & premium support.",
  price: "$99",
  features: [
    { key: 0, isSpecial: false, placeholder: "Individual configuration" },
    { key: 1, isSpecial: false, placeholder: "No setup, or hidden fees" },
    { key: 2, isSpecial: true, placeholder: "Team size:", text: "10 developer" },
    { key: 3, isSpecial: true, placeholder: "Premium support:", text: "24 months" },
    { key: 4, isSpecial: true, placeholder: "Free updates:", text: " 24 months" },
  ],
};

const enterprise = {
  naming: "Enterprise",
  des: "Best for large scale uses and extended redistribution rights.",
  price: "$499",
  features: [
    { key: 0, isSpecial: false, placeholder: "Individual configuration" },
    { key: 1, isSpecial: false, placeholder: "No setup, or hidden fees" },
    { key: 2, isSpecial: true, placeholder: "Team size:", text: "100+ developer" },
    { key: 3, isSpecial: true, placeholder: "Premium support:", text: "36 months" },
    { key: 4, isSpecial: true, placeholder: "Free updates:", text: "36 months" },
  ],
};


export default function Pricing() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Landwind we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <PriceItem data={starter} />
          <PriceItem data={company} />
          <PriceItem data={enterprise} />
        </div>
      </div>
    </section>
  );
}
