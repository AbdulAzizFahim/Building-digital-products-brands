import FeatureList from "../common/FeatureList";

export default function SubService({ Data }) {
  return (
    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
      {Data.showImageFirst && (
        <img className={Data.imageClassName} src={Data.source} alt={Data.alt} />
      )}
      <div className="text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {Data.title}
        </h2>
        <p className="mb-8 font-light lg:text-xl">{Data.description}</p>

        <FeatureList features={Data.features} />

        <p className="mb-8 font-light lg:text-xl">{Data.closing}</p>
      </div>
      {Data.showImageLast && (
        <img className={Data.imageClassName} src={Data.source} alt={Data.alt} />
      )}
    </div>
  );
}
