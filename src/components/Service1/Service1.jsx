import SubService from "../common/SubService";

const FirstServiceData = {
  showImageFirst: false,
  showImageLast: true,
  imageClassName: "hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex",
  source: "./assets/features/feature-1.png",
  alt: "dashboard feature image",
  title: "Work with tools you already use",
  description:
    "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.",
  features: [
    { key: 1, text: "Continuous integration and deployment" },
    { key: 2, text: "Development workflow" },
    { key: 3, text: "Knowledge management" },
  ],
  closing:
    "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.",
};

const SecondServiceData = {
  showImageFirst: true,
  showImageLast: false,
  imageClassName: "hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex",
  source: "./assets/features/feature-2.png",
  alt: "feature image 2",
  title: "We invest in the world’s potential",
  description:
    "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.",
  features: [
    { key: 1, text: "Dynamic reports and dashboards" },
    { key: 2, text: "Templates for everyone" },
    { key: 3, text: "Development workflow" },
    { key: 4, text: "Limitless business automation" },
    { key: 5, text: "Knowledge management" },
  ],
  closing:
    "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.",
};

export default function Service1() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <SubService Data={FirstServiceData} />
        <SubService Data={SecondServiceData} />
      </div>
    </section>
  );
}
