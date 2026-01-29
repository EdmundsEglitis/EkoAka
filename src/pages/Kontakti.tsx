import { useEffect, useMemo, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";


const EMAIL = "nauris@gmail.com";
const PHONE = "+37128490668";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}

export default function Kontakti() {
  const reducedFX = usePrefersReducedMotion();

  const flapRef = useRef<SVGPathElement | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailChars = useMemo(() => EMAIL.split(""), []);
  const phoneChars = useMemo(() => PHONE.split(""), []);

  useEffect(() => {
    document.title = "Kontakti — EKO AKA";

    // Entrance + character stagger
    const tl = anime.timeline({ autoplay: true });
    tl.add({
      targets: ".contactCard",
      opacity: [0, 1],
      translateY: [18, 0],
      duration: 420,
      easing: "easeOutCubic",
    })
      .add(
        {
          targets: ".emailChar",
          translateY: [12, 0],
          opacity: [0, 1],
          delay: anime.stagger(18),
          duration: 280,
          easing: "easeOutCubic",
        },
        "-=160"
      )
      .add(
        {
          targets: ".phoneChar",
          translateY: [12, 0],
          opacity: [0, 1],
          delay: anime.stagger(16),
          duration: 260,
          easing: "easeOutCubic",
        },
        "-=120"
      );

    // Envelope flap loop
    let loop: anime.AnimeInstance | undefined;
    if (!reducedFX && flapRef.current) {
      const flap = flapRef.current;
      // Helps transforms on SVG
      flap.style.transformBox = "fill-box";
      flap.style.transformOrigin = "50% 20%";
      flap.style.transformStyle = "preserve-3d";

      loop = anime({
        targets: flap,
        rotateX: [{ value: -25 }, { value: -12 }],
        duration: 2800,
        direction: "alternate",
        easing: "easeInOutSine",
        loop: true,
      });
    }

    const onVis = () => {
      if (!loop) return;
      if (document.hidden) loop.pause();
      else loop.play();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      tl.pause();
      loop?.pause();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [reducedFX]);

  async function copy(text: string, setFn: (v: boolean) => void, anchorId: string) {
    try {
      await navigator.clipboard.writeText(text);
      setFn(true);
      popConfetti(anchorId);
      window.setTimeout(() => setFn(false), 1200);
    } catch {
      // If clipboard blocked, do nothing (you can add fallback if you want)
    }
  }

  function popConfetti(anchorId: string) {
    const anchor = document.getElementById(anchorId);
    if (!anchor) return;

    const n = 14;
    const host = document.createElement("div");
    host.className = "confettiHost";
    anchor.appendChild(host);

    const frags: HTMLSpanElement[] = [];
    for (let i = 0; i < n; i++) {
      const s = document.createElement("span");
      s.className = "confettiFrag";
      host.appendChild(s);
      frags.push(s);
    }

    anime({
      targets: frags,
      translateX: (_: any, i: number) =>
        Math.cos((i / n) * Math.PI * 2) * (32 + Math.random() * 12),
      translateY: (_: any, i: number) =>
        Math.sin((i / n) * Math.PI * 2) * (32 + Math.random() * 12),
      rotate: (_: any, i: number) => (i / n) * 360,
      scale: [{ value: 1.2, duration: 80 }, { value: 1, duration: 120 }],
      opacity: [{ value: 1 }, { value: 0, delay: 140 }],
      duration: 420,
      easing: "easeOutCubic",
      complete: () => host.remove(),
    });
  }

  function openGmailCompose() {
    const url = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
      EMAIL
    )}&su=${encodeURIComponent("Sveiki — EKO AKA")}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function openMailto() {
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Sveiki — EKO AKA")}`;
  }

  function callNow() {
    window.location.href = `tel:${PHONE.replace(/\s+/g, "")}`;
  }

  function smsNow() {
    window.location.href = `sms:${PHONE.replace(/\s+/g, "")}`;
  }

  return (
    <main className="contactMain">
      <section className="contactCard">
        <header className="contactHeader">
          <h1 className="contactTitle">Kontakti</h1>
          <p className="contactSubtitle">Ātrākais veids — e-pasts vai tālrunis.</p>
        </header>

        <div className="envelopeWrap" aria-hidden="true">
          <Envelope flapRef={flapRef} />
        </div>

        <div className="contactBlock">
          <div className="contactPill" id="email-burst-anchor" title="Spied Kopēt, lai nokopētu e-pastu">
            <span className="pillLabel">E-pasts</span>
            <code className="pillCode">
              {emailChars.map((c, i) => (
                <span key={`e-${i}`} className="emailChar char">
                  {c === " " ? "\u00A0" : c}
                </span>
              ))}
            </code>
            <button
              className="contactBtn"
              onClick={() => copy(EMAIL, setCopiedEmail, "email-burst-anchor")}
            >
              {copiedEmail ? "Nokopēts!" : "Kopēt"}
            </button>
          </div>

          <div className="btnRow">
            <button className="contactBtn" onClick={openGmailCompose}>Atvērt Gmail</button>
          </div>
        </div>

        <div className="divider" />

        <div className="contactBlock">
          <div className="contactPill" id="phone-burst-anchor" title="Spied Kopēt, lai nokopētu tālruni">
            <span className="pillLabel">Tālrunis</span>
            <code className="pillCode">
              {phoneChars.map((c, i) => (
                <span key={`p-${i}`} className="phoneChar char">
                  {c === " " ? "\u00A0" : c}
                </span>
              ))}
            </code>
            <button
              className="contactBtn"
              onClick={() => copy(PHONE, setCopiedPhone, "phone-burst-anchor")}
            >
              {copiedPhone ? "Nokopēts!" : "Kopēt"}
            </button>
          </div>

          <div className="btnRow">
            <button className="contactBtn" onClick={callNow}>Zvanīt</button>
            <button className="contactBtn contactBtnGhost" onClick={smsNow}>Sūtīt SMS</button>
          </div>
        </div>

        <p className="contactHint">
          Vari nokopēt kontaktus vai izmantot pogas, lai uzreiz sāktu ziņu.
        </p>
      </section>
    </main>
  );
}

function Envelope({ flapRef }: { flapRef: React.RefObject<SVGPathElement | null> }) {
  return (
    <svg
      className="envelopeSvg"
      viewBox="0 0 240 160"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect
        x="20"
        y="40"
        width="200"
        height="100"
        rx="12"
        fill="rgba(255,255,255,.55)"
        stroke="rgba(46,76,12,.20)"
      />
      <rect
        x="32"
        y="48"
        width="176"
        height="84"
        rx="8"
        fill="rgba(255,255,255,.65)"
        stroke="rgba(46,76,12,.16)"
      />
      <path d="M24 56 L120 116 L216 56" stroke="rgba(46,76,12,.25)" />
      <path
        ref={flapRef}
        d="M24 56 L120 16 L216 56 L216 56"
        fill="rgba(46,76,12,.18)"
        stroke="rgba(46,76,12,.22)"
      />
    </svg>
  );
}
