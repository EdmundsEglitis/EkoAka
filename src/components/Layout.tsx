import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo.jpeg";

type NavItem = { label: string; to: string };

export default function Layout() {
  const navItems: NavItem[] = [
    { label: "GRODI", to: "/grodi" },
    { label: "PĀRSEDZES", to: "/parsedzes" },
    { label: "KANALIZĀCIJAS SISTĒMAS", to: "/kanalizacijas-sistemas" },
    { label: "DZERAMĀ UDENS AKAS", to: "/dzerama-udens-akas" },
    { label: "KONTAKTI", to: "/kontakti" },
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

      <footer className="footer">
        <div className="container footerInner">
          <span>© {new Date().getFullYear()} SIA EKO AKA</span>
          <span className="footerDot">•</span>
          <span>Darbojamies visā Latvijā</span>
        </div>
      </footer>
    </div>
  );
}
