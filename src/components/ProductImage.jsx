import { useState } from "react";

export function ProductImage({
  src,
  alt,
  className = "",
  priority = false,
  fallbackLabel = "Add image",
  fallbackHint = "Place the file in the configured public folder using the configured name.",
}) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className={`bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.18),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.09),rgba(0,0,0,0.08))] ${className}`}
      >
        <div className="flex h-full items-end p-5">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/45">{fallbackLabel}</p>
            <p className="mt-2 text-sm text-white/55">{fallbackHint}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      onError={() => setHasError(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
