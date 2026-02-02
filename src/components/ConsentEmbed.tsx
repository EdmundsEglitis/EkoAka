import { useEffect, useState } from "react";

type ConsentEmbedProps = {
  storageKey: string;            // e.g. "consent:google-maps"
  title: string;                 // iframe title
  src: string;                   // iframe src
  providerName: string;          // "Google Maps" / "Sketchfab"
  providerPolicyUrl?: string;    // optional privacy/cookie link
  previewImageUrl: string;       // local image asset or remote static preview
  height?: number;               // iframe height
  className?: string;
};

export default function ConsentEmbed({
  storageKey,
  title,
  src,
  providerName,
  providerPolicyUrl,
  previewImageUrl,
  height = 700,
  className,
}: ConsentEmbedProps) {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(localStorage.getItem(storageKey) === "1");
  }, [storageKey]);

  const allow = () => {
    localStorage.setItem(storageKey, "1");
    setAllowed(true);
  };

  const revoke = () => {
    localStorage.removeItem(storageKey);
    setAllowed(false);
  };

  return (
    <div className={`consentEmbed ${className ?? ""}`} style={{ ["--h" as any]: `${height}px` }}>
      {allowed ? (
        <>
          <iframe
            title={title}
            src={src}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allow="fullscreen; autoplay; xr-spatial-tracking"
            allowFullScreen
          />
          <button type="button" className="consentEmbedRevoke" onClick={revoke}>
            Atsaukt {providerName} ielādi
          </button>
        </>
      ) : (
        <div className="consentEmbedCover">
          <img
            src={previewImageUrl}
            alt={`${providerName} priekšskatījums`}
            className="consentEmbedPreview"
            loading="lazy"
            decoding="async"
          />

          <div className="consentEmbedOverlay">
            <div className="consentEmbedText">
              <div className="consentEmbedTitle">{providerName}</div>
              <div className="consentEmbedDesc">
                Noklikšķinot <strong>“Ielādēt”</strong>, tiks ielādēts trešās puses saturs un var tikt
                iestatītas trešo pušu sīkdatnes.
              </div>

              <div className="consentEmbedActions">
                <button type="button" className="consentEmbedBtn" onClick={allow}>
                  Ielādēt
                </button>

                {providerPolicyUrl ? (
                  <a className="consentEmbedLink" href={providerPolicyUrl} target="_blank" rel="noreferrer">
                    Uzzināt vairāk
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
