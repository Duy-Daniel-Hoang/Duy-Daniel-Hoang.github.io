const HEIGHTS = [28, 42, 58, 48, 66, 82, 92, 78, 62, 52, 68, 88, 100, 84, 58, 38, 52, 72, 92, 100, 88, 68, 48, 34, 44, 62, 78, 56];

export default function EqualizerWave() {
  return (
    <div className="wrap-wide">
      <div className="eq-thumb">
        <img
          src="/assets/flickrz/thumbnail.webp"
          alt="Flickrz app screens — AI-powered webtoon production"
          decoding="async"
          fetchpriority="high"
        />
      </div>
      <div className="eq-wave" aria-hidden="true">
        {HEIGHTS.map((h, i) => (
          <span
            key={i}
            className="eq-bar"
            style={{ height: `${h}%`, animationDelay: `${(i % 7) * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}
