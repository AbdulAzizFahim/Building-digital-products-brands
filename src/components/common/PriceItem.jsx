export default function PriceItem({ data }) {
  const { naming, des, price, features } = data;
  return (
    <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold">{naming}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        {des}
      </p>
      <div className="flex items-baseline justify-center my-8">
        <span className="mr-2 text-5xl font-extrabold">{price}</span>
        <span className="text-gray-500 dark:text-gray-400">/month</span>
      </div>

      <ul role="list" className="mb-8 space-y-4 text-left">
        {features.map((feature) => {
          return <VariableFeature feature={feature} key={feature.key} />;
        })}
      </ul>
      <a
        href="#"
        className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
      >
        Get started
      </a>
    </div>
  );
}

function VariableFeature({ feature }) {
  const { isSpecial, placeholder, text, key } = feature;
  let variable = "";
  if (isSpecial) {
    variable = (
      <span>
        {placeholder} <span className="font-semibold">{text}</span>
      </span>
    );
  } else {
    variable = <span>{placeholder}</span>;
  }

  return (
    <li className="flex items-center space-x-3" key={key}>
      <svg
        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>

      {variable}
    </li>
  );
}
