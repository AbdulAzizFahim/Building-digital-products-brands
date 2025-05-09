export default function BannerImage({ className, source, alt }) {
  return (
    <div className={className}>
      <img src={source} alt={alt} />
    </div>
  );
}
