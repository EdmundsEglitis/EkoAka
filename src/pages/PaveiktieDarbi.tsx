import { useEffect, useMemo, useState } from "react";
import portfolioData from "../data/portfolio.json";


type PortfolioItem = {
  id: string;
  title: string;
  location?: string;
  date?: string; // "YYYY-MM"
  category?: string;
  text?: string;
  images: string[];
};

const ITEMS: PortfolioItem[] = portfolioData as PortfolioItem[];

function formatDate(iso?: string) {
  if (!iso) return "";
  // "2025-06" -> "06/2025" (simple)
  const [y, m] = iso.split("-");
  if (!y || !m) return iso;
  return `${m}/${y}`;
}

export default function PaveiktieDarbi() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeImg, setActiveImg] = useState(0);

  const activeItem = useMemo(
    () => (activeId ? ITEMS.find((x) => x.id === activeId) : undefined),
    [activeId]
  );

  useEffect(() => {
    document.title = "Paveiktie darbi — EKO AKA";
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === "Escape") setActiveId(null);
      if (e.key === "ArrowRight") setActiveImg((v) => Math.min(v + 1, activeItem.images.length - 1));
      if (e.key === "ArrowLeft") setActiveImg((v) => Math.max(v - 1, 0));
    };

    document.addEventListener("keydown", onKey);

    // lock scroll when modal open
    if (activeItem) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeItem]);

  function openItem(id: string) {
    setActiveId(id);
    setActiveImg(0);
  }

  function close() {
    setActiveId(null);
    setActiveImg(0);
  }

  return (
    <main className="section">
      <div className="container">
        <div className="sectionHeader">
          <h2>Paveiktie darbi</h2>
          <p>Daži piemēri no mūsu paveiktajiem darbiem. Uzspied uz kartītes, lai apskatītu galeriju.</p>
        </div>

        <div className="portfolioGrid">
          {ITEMS.map((p) => {
            const cover = p.images?.[0];
            return (
              <button
                key={p.id}
                type="button"
                className="portfolioCard"
                onClick={() => openItem(p.id)}
              >
                <div className="portfolioMedia">
                  {cover ? (
                    <img className="portfolioImg" src={cover} alt={p.title} loading="lazy" decoding="async" />
                  ) : (
                    <div className="portfolioPlaceholder">Attēls</div>
                  )}
                  <div className="portfolioChipRow">
                    {p.category ? <span className="portfolioChip">{p.category}</span> : null}
                    {p.date ? <span className="portfolioChip portfolioChipSoft">{formatDate(p.date)}</span> : null}
                  </div>
                </div>

                <div className="portfolioBody">
                  <div className="portfolioTitle">{p.title}</div>
                  {p.location ? <div className="portfolioMeta">{p.location}</div> : null}
                  {p.text ? <div className="portfolioText">{p.text}</div> : null}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {activeItem ? (
        <div className="portfolioModalOverlay" role="dialog" aria-modal="true" aria-label="Darba galerija">
          <div className="portfolioModal" onClick={(e) => e.stopPropagation()}>
            <button className="portfolioClose" type="button" onClick={close} aria-label="Aizvērt">
              ✕
            </button>

            <div className="portfolioModalGrid">
              <div className="portfolioViewer">
                <img
                  className="portfolioViewerImg"
                  src={activeItem.images[activeImg]}
                  alt={`${activeItem.title} — ${activeImg + 1}/${activeItem.images.length}`}
                />

                <div className="portfolioViewerControls">
                  <button
                    type="button"
                    className="portfolioNavBtn"
                    onClick={() => setActiveImg((v) => Math.max(v - 1, 0))}
                    disabled={activeImg === 0}
                  >
                    ←
                  </button>

                  <div className="portfolioCounter">
                    {activeImg + 1}/{activeItem.images.length}
                  </div>

                  <button
                    type="button"
                    className="portfolioNavBtn"
                    onClick={() => setActiveImg((v) => Math.min(v + 1, activeItem.images.length - 1))}
                    disabled={activeImg === activeItem.images.length - 1}
                  >
                    →
                  </button>
                </div>

                {activeItem.images.length > 1 ? (
                  <div className="portfolioThumbs" aria-label="Sīktēli">
                    {activeItem.images.map((src, i) => (
                      <button
                        key={src + i}
                        type="button"
                        className={i === activeImg ? "portfolioThumb portfolioThumbActive" : "portfolioThumb"}
                        onClick={() => setActiveImg(i)}
                        aria-label={`Atvērt ${i + 1}. attēlu`}
                      >
                        <img src={src} alt="" loading="lazy" decoding="async" />
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>

              <aside className="portfolioInfo">
                <div className="portfolioInfoTitle">{activeItem.title}</div>

                <div className="portfolioInfoRow">
                  {activeItem.category ? <span className="portfolioInfoTag">{activeItem.category}</span> : null}
                  {activeItem.location ? <span className="portfolioInfoTag">{activeItem.location}</span> : null}
                  {activeItem.date ? <span className="portfolioInfoTag">{formatDate(activeItem.date)}</span> : null}
                </div>

                {activeItem.text ? <p className="portfolioInfoText">{activeItem.text}</p> : null}

                <div className="portfolioInfoHint">
                  Padoms: vari pārslēgt attēlus ar ← / → un aizvērt ar Esc.
                </div>
              </aside>
            </div>
          </div>

          {/* clicking outside closes */}
          <button className="portfolioBackdropBtn" type="button" onClick={close} aria-label="Aizvērt fonu" />
        </div>
      ) : null}
    </main>
  );
}
