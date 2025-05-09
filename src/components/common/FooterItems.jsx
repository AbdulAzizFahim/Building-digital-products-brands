export default function FooterItems({ data }) {
  const { heading, items } = data;
  return (
    <div>
      <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        {heading}
      </h3>
      <ul className="text-gray-500 dark:text-gray-400">
        {items.map((item) => {
          return (
            <li className="mb-4" key={item.key}>
              <a href="#" className=" hover:underline">
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
