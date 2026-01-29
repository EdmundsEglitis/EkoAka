import { Link } from "react-router-dom";

import grodiImg from "../assets/Grods.jpg";
import kanalizacijaImg from "../assets/kanalizacija.jpg";
import vaksImg from "../assets/vāks.jpg";
import contactImg from "../assets/contact.png";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container heroInner">
          <div className="heroCopy">
            <h1>Betona grodi, pārsedzes un kanalizācijas risinājumi Latvijā</h1>
            <p>
              Informācija par produkciju un pakalpojumiem. Pielāgosim saturu, kad iedosi
              izmērus, piedāvājumu un kontaktus.
            </p>

            <div className="heroCtas">
              <Link className="btnPrimary" to="/kontakti">Sazināties</Link>
              <Link className="btnSecondary" to="/grodi">Skatīt grodus</Link>
            </div>
          </div>

          <div className="heroCard" aria-label="Ātrā informācija">
            <div className="heroCardTitle">Ko piedāvājam</div>
            <ul className="heroList">
              <li>Grodi un aku risinājumi</li>
              <li>Pārsedzes un vāki</li>
              <li>Kanalizācijas sistēmas</li>
              <li>Apkalpojam visu Latviju</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ✅ BIG 3D PREVIEW ABOVE QUICK NAV */}
      <section className="section sectionTight">
        <div className="container">
          <div className="sectionHeader">
            <h2>3D priekšskatījums</h2>
            <p>Modeli var grozīt un pietuvināt. (Demo piemērs — kanalizācijas sistēma)</p>
          </div>

          <div className="modelCard">
            <div className="modelFrame">
              <iframe
                title="kanalizacija"
                src="https://sketchfab.com/models/313d0bee3af14f038433f82964026288/embed"
                frameBorder="0"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                allowFullScreen
              />
            </div>

            <div className="modelMeta">
              <div className="modelMetaLeft">
                <div className="modelMetaTitle">Kanalizācijas sistēma</div>
                <div className="modelMetaSub">Interaktīvs 3D skats</div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ✅ QUICK NAV WITH IMAGES */}
      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <h2>Ātra navigācija</h2>
            <p>Izvēlies sadaļu, lai redzētu informāciju par produktu grupu.</p>
          </div>

          <div className="quickNavGrid">
            <Link className="quickCard" to="/grodi">
              <div className="quickImgWrap">
                <img className="quickImg" src={grodiImg} alt="Grodi" />
              </div>
              <div className="quickBody">
                <div className="quickTitle">GRODI</div>
                <div className="quickText">Diametri, augstumi, pielietojums.</div>
              </div>
            </Link>

            <Link className="quickCard" to="/parsedzes">
              <div className="quickImgWrap">
                <img className="quickImg" src={vaksImg} alt="Pārsedzes un vāki" />
              </div>
              <div className="quickBody">
                <div className="quickTitle">PĀRSEDZES</div>
                <div className="quickText">Pārsedzes un vāki dažādiem risinājumiem.</div>
              </div>
            </Link>

            <Link className="quickCard" to="/kanalizacijas-sistemas">
              <div className="quickImgWrap">
                <img className="quickImg" src={kanalizacijaImg} alt="Kanalizācijas sistēmas" />
              </div>
              <div className="quickBody">
                <div className="quickTitle">KANALIZĀCIJAS SISTĒMAS</div>
                <div className="quickText">Risinājumi privātmājām un objektiem.</div>
              </div>
            </Link>

            <Link className="quickCard" to="/kontakti">
              <div className="quickImgWrap">
                <img className="quickImg" src={contactImg} alt="Kontakti" />
              </div>
              <div className="quickBody">
                <div className="quickTitle">KONTAKTI</div>
                <div className="quickText">Sazinies, lai saņemtu piedāvājumu.</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
