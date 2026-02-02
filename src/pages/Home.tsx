import { Link } from "react-router-dom";

import grodiImg from "../assets/Grods.jpg";
import kanalizacijaImg from "../assets/kanalizacija.jpg";
import vaksImg from "../assets/vāks.jpg";
import contactImg from "../assets/contact.png";
import reviewsData from "../data/reviews.json";

import ConsentEmbed from "../components/ConsentEmbed";
import sketchPreview from "../assets/sketchfabpreview.png"; // make a screenshot image


const REVIEWS: { name: string; stars: number; text: string }[] = reviewsData;
function Stars({ value }: { value: number }) {
  const full = Math.max(0, Math.min(5, value));
  return (
    <div className="reviewStars" aria-label={`${full} no 5 zvaigznēm`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < full ? "star starOn" : "star"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container heroInner">
          <div className="heroCopy">
            <h1>Betona grodi un to elementi</h1>
            <h1>Visu veidu kanalizācijas sistēmas</h1>
            <h1>Dzeramā ūdens akas un ūdens apgādes sistēmas.</h1>
            <p></p>

            <div className="heroCtas">
              <Link className="btnPrimary" to="/kontakti">Sazināties</Link>
              <Link className="btnSecondary" to="/grodi">Skatīt grodus</Link>
            </div>
          </div>

          <div className="heroCard" aria-label="Ātrā informācija">
            <div className="heroCardTitle">Ko piedāvājam</div>
            <ul className="heroList">
              <li>Grodi un to elementi</li>
              <li>Kanalizācijas sistēmas</li>
              <li>Dzeramā ūdens akas</li>
              <li>Restaurācija un montāža</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ✅ BIG 3D PREVIEW ABOVE QUICK NAV */}
      <section className="section sectionTight">
        <div className="container">
          <div className="sectionHeader">
            <h2>Kanalizācijas 3D modelis</h2>
            <p>Modeli var grozīt un pietuvināt.</p>
          </div>

          <div className="modelCard">
            <div className="modelFrame">
                <ConsentEmbed
                  storageKey="consent:sketchfab"
                  title="Kanalizācijas sistēmas vizualizācija"
                  providerName="Sketchfab"
                  providerPolicyUrl="https://sketchfab.com/privacy"
                  src="https://sketchfab.com/models/313d0bee3af14f038433f82964026288/embed"
                  previewImageUrl={sketchPreview}
                  height={520}
                />
            </div>

            <div className="modelMeta">
              <div className="modelMetaLeft">
                <div className="modelMetaTitle">Kanalizācijas sistēmas vizualizācija</div>
                
              </div>

            </div>
          </div>
        </div>
      </section>

     {/* ✅ QUICK NAV WITH IMAGES */}
<section className="section">
  <div className="container">
    <div className="sectionHeader">
      <h2>Produktu informācija</h2>
    </div>

    <div className="quickNavGrid">
      <Link className="quickCard" to="/grodi">
        <div className="quickImgWrap">
          <img className="quickImg" src={grodiImg} alt="Grodi" loading="lazy" decoding="async" />
          <div className="quickTitle">GRODI</div>
        </div>
        <div className="quickBody">
          <div className="quickText">Diametri, augstumi, pielietojums.</div>
        </div>
      </Link>

      <Link className="quickCard" to="/parsedzes">
        <div className="quickImgWrap">
          <img className="quickImg" src={vaksImg} alt="Pārsedzes un vāki" loading="lazy" decoding="async" />
          <div className="quickTitle">PĀRSEDZES</div>
        </div>
        <div className="quickBody">
          <div className="quickText">Pārsedzes un vāki dažādiem risinājumiem.</div>
        </div>
      </Link>

      <Link className="quickCard" to="/kanalizacijas-sistemas">
        <div className="quickImgWrap">
          <img className="quickImg" src={kanalizacijaImg} alt="Kanalizācijas sistēmas" loading="lazy" decoding="async" />
          <div className="quickTitle">KANALIZĀCIJAS SISTĒMAS</div>
        </div>
        <div className="quickBody">
          <div className="quickText">Risinājumi privātmājām un objektiem.</div>
        </div>
      </Link>

      <Link className="quickCard" to="/kontakti">
        <div className="quickImgWrap">
          <img className="quickImg" src={contactImg} alt="Kontakti" loading="lazy" decoding="async" />
          <div className="quickTitle">KONTAKTI</div>
        </div>
        <div className="quickBody">
          <div className="quickText">Sazinies, lai saņemtu piedāvājumu.</div>
        </div>
      </Link>
    </div>
  </div>
</section>
<section className="section">
  <div className="container">
    <div className="sectionHeader">
      <h2>Atsauksmes</h2>
      <p>Pavelc uz sāniem, lai redzētu vairāk atsauksmju.</p>
    </div>

    <div className="reviewsRail" role="list">
      {REVIEWS.map((r, idx) => (
        <article className="reviewSlide" key={idx} role="listitem">
          <div className="reviewSlideTop">
            <div className="reviewAvatar" aria-hidden="true">
              {r.name.trim().slice(0, 1).toUpperCase()}
            </div>
            <div className="reviewSlideMeta">
              <div className="reviewName">{r.name}</div>
              <Stars value={r.stars} />
            </div>
          </div>

          <p className="reviewText">“{r.text}”</p>
        </article>
      ))}
    </div>
  </div>
</section>

<section className="section">
  <div className="container">
    <div className="sectionHeader">
      <h2>Par mums</h2>
      <p>
        SIA EKO AKA nodrošina betona grodus, kanalizācijas risinājumus un ūdens apgādes darbus
        visā Latvijā — no konsultācijas līdz uzstādīšanai.
      </p>
    </div>

    <div className="aboutGrid">
      <article className="aboutCard">
        <div className="aboutEyebrow">Mūsu stāsts</div>
        <h3 className="aboutTitle">Pieredze, kvalitāte un darbs “kā sev”</h3>
        <p className="aboutText">
          Mēs strādājam praktiski un vienkārši — palīdzam izvēlēties pareizo risinājumu,
          piegādājam un uzstādām. Mūsu mērķis ir, lai sistēma kalpotu ilgi un bez liekām problēmām.
        </p>
        <p className="aboutText">
          Katru objektu vērtējam individuāli: grunts apstākļi, piekļuve, apjoms un nepieciešamais
          rezultāts. Piedāvājam risinājumus privātmājām, saimniecībām un uzņēmumiem.
        </p>

        <div className="aboutCtas">
          <Link className="btnPrimary" to="/kontakti">Sazināties</Link>
          <Link className="btnSecondary" to="/kanalizacijas-sistemas">Uzzināt vairāk</Link>
        </div>
      </article>

      <div className="aboutSide">
        <article className="aboutMiniCard">
          <div className="aboutMiniTitle">Ko mēs darām</div>
          <ul className="aboutList">
            <li>Betona grodi un elementi</li>
            <li>Kanalizācijas sistēmu izbūve</li>
            <li>Dzeramā ūdens akas un ūdens apgāde</li>
            <li>Piegāde, restaurācija, montāža</li>
          </ul>
        </article>

        <article className="aboutMiniCard">
          <div className="aboutMiniTitle">Mūsu vērtības</div>
          <ul className="aboutList">
            <li>Kvalitāte un drošība pirmajā vietā</li>
            <li>Skaidra komunikācija un termiņi</li>
            <li>Praktiski risinājumi bez liekiem tēriņiem</li>
            <li>Darbs tā, lai varam ieteikt ar pārliecību</li>
          </ul>
        </article>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
