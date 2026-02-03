import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logotrans.png";
import ConsentEmbed from "../components/ConsentEmbed";
import mapPreview from "../assets/googlemapspreview.png"; // screenshot or static map image
import { Link} from "react-router-dom";
import ttIcon from "../assets/tt.svg";
import fbIcon from "../assets/fb.svg";

const address = "Kastaņi, Plācis, Straupes pagasts, Cēsu novads, LV-4152";

const lat = 57.360902;
const lng = 24.972722;

// Opens Google Maps (pin)
const googlePlaceUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

// Opens Google Maps directions to the pin
const googleDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;

// Optional: Waze directions
const wazeUrl = `https://waze.com/ul?ll=${lat}%2C${lng}&navigate=yes`;


type NavItem = { label: string; to: string };
function resetExternalMediaConsent() {
  localStorage.removeItem("consent:google-maps");
  localStorage.removeItem("consent:sketchfab");
  // Optional: refresh so embeds go back to blurred state immediately
  window.location.reload();
}

export default function Layout() {
  const navItems: NavItem[] = [
    { label: "GRODI", to: "/grodi" },
    { label: "PĀRSEDZES", to: "/parsedzes" },
    { label: "KANALIZĀCIJAS SISTĒMAS", to: "/kanalizacijas-sistemas" },
    { label: "DZERAMĀ UDENS AKAS", to: "/dzerama-udens-akas" },
    { label: "KONTAKTI", to: "/kontakti" },
    { label: "PAVEIKTIE DARBI", to: "/paveiktie-darbi" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="page">
      <header className="header">
        <div className="container headerInner">
          <NavLink className="brand" to="/">
            <img className="brandLogo" src={logo} alt="EKO AKA logo" />
            <div className="brandText">
              <div className="brandName">EKO AKA</div>
              <div className="brandTag">Latvija • Grodi • Akas • Kanalizācija</div>
            </div>
          </NavLink>

          <nav className="navDesktop" aria-label="Galvenā navigācija">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `navLink ${isActive ? "navLinkActive" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="navToggle"
            aria-label="Atvērt izvēlni"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="hamburger" />
          </button>
        </div>

        {mobileOpen && (
          <div className="mobileMenu" role="dialog" aria-label="Izvēlne">
            <div className="container mobileMenuInner">
              {navItems.map((item) => (
            <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                `mobileLink ${isActive ? "mobileLinkActive" : ""}`
                }
            >
                {item.label}
            </NavLink>
            ))}

            </div>
          </div>
        )}
      </header>

      <main className="main">
        <Outlet />
      </main>


<footer className="footer footer--contact">
  <div className="container">
    <div className="footerTop">
      <div className="footerContact">
        <div className="footerLabel">Adrese</div>

        <a className="footerAddressLink" href={googlePlaceUrl} target="_blank" rel="noreferrer">
          <svg className="footerPin" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12zm0-9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
          </svg>
          <span>{address}</span>
        </a>

        <div className="footerNav">
          <span className="footerNavLabel">Braukt ar</span>

          <a className="footerLink" href={googleDirectionsUrl} target="_blank" rel="noreferrer">
            Google Maps
          </a>

          <span className="footerDot">•</span>

          <a className="footerLink" href={wazeUrl} target="_blank" rel="noreferrer">
            Waze
          </a>
        </div>
      </div>
    </div>

    {/* ✅ Map is inside container => same width as navbar */}
    <div className="footerMap">
        <ConsentEmbed
          storageKey="consent:google-maps"
          title="EKO AKA atrašanās vieta"
          providerName="Google Maps"
          providerPolicyUrl="https://policies.google.com/technologies/cookies"
          src="https://www.google.com/maps?q=57.360902,24.972722&z=16&output=embed"
          previewImageUrl={mapPreview}
          height={360}
        />
    </div>
  </div>

        <div className="footercenter">
        <span>© {new Date().getFullYear()} SIA EKO AKA</span>
        <span className="footerDot"> • </span>
        <span>Darbojamies visā Latvijā</span>
        <span className="footerDot"> • </span>
                  <span className="footerSocialInline">
              <a
                className="footerSocialLink"
                href="https://www.facebook.com/PASTE_YOUR_PAGE"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                title="Facebook"
              >
                <img className="footerSocialIcon" src={fbIcon} alt="" />
              </a>

              <a
                className="footerSocialLink"
                href="https://www.tiktok.com/@PASTE_YOUR_HANDLE"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                title="TikTok"
              >
                <img className="footerSocialIcon" src={ttIcon} alt="" />
              </a>
            </span>

           <span className="footerDot"> • </span>
                   <Link className="footerPolicyLink footerPolicyBtn" to="/privatuma-politika">
            Privātuma politika
        </Link>
        <span className="footerDot"> • </span>
                        <button
                    type="button"
                    className="footerPolicyLink footerPolicyBtn"
                    onClick={resetExternalMediaConsent}
                  >
                  Atiestatīt ārējā satura izvēli
                </button>
      </div>
</footer>
    </div>
  );
}
