import { useEffect, useRef, useState } from "react";

type Props = {
  title: string;
  src: string;
  className?: string;
  height?: number;
};

export default function LazyIframe({ title, src, className, height = 520 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => entries[0]?.isIntersecting && setShow(true),
      { rootMargin: "250px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={{ minHeight: height }}>
      {show ? (
        <iframe
          title={title}
          src={src}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          style={{ width: "100%", height, border: 0, display: "block" }}
        />
      ) : (
        <div style={{ width: "100%", height, display: "grid", placeItems: "center" }}>
          Ielādējam…
        </div>
      )}
    </div>
  );
}
