export default function FooterIcon({ data }) {
  const { clipRule = null, fillRule = null, d } = data;
  return (
    <a
      href="#"
      className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
    >
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path fillRule={fillRule} d={d} clipRule={clipRule} />
      </svg>
    </a>
  );
}
