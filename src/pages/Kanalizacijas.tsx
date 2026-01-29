import { useState } from "react";

export default function Kanalizacijas() {
  const [more, setMore] = useState(false);

  return (
    <section className="section">
      <div className="container">
        <div className="sectionHeader">
          <h2>KANALIZĀCIJAS SISTĒMAS</h2>
          <p>
            Kanalizācijas risinājumi privātmājām un objektiem, izmantojot betona grodus
            (nosēdaka/tvertne) un infiltrāciju grunts slānī.
          </p>
        </div>

        {/* 3D preview */}
        <div className="modelCard" style={{ marginBottom: 18 }}>
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
            <div>
              <div className="modelMetaTitle">3D priekšskatījums</div>
              <div className="modelMetaSub">Grozīt / pietuvināt, lai apskatītu sistēmas uzbūvi</div>
            </div>

          </div>
        </div>

        {/* How it works (short) */}
        <div className="grid3">
          <div className="card">
            <div className="cardTitle">Kā tas strādā</div>
            <div className="cardBody">
              Notekūdeņi vispirms nonāk nosēdakā (no grodiem), kur smagākās daļiņas
              nosēžas. Pēc tam daļēji attīrīts ūdens nonāk infiltrācijas zonā.
            </div>
          </div>

          <div className="card">
            <div className="cardTitle">Grodu nosēdaka</div>
            <div className="cardBody">
              Betona grodi veido izturīgu tvertni ar lielu tilpumu. Pareiza hermētika
              palīdz nepieļaut gruntsūdeņu pieplūdi un smaku izplatīšanos.
            </div>
          </div>

          <div className="card">
            <div className="cardTitle">Infiltrācija</div>
            <div className="cardBody">
              Infiltrācijas lauks / aka ļauj ūdenim iesūkties gruntī caur filtrācijas
              slāņiem (šķembas, smilts u. c.), samazinot piesārņojumu.
            </div>
          </div>
        </div>

        {/* Read more toggle */}
        <div style={{ marginTop: 16 }}>
          <button
            className={more ? "contactBtn contactBtnGhost" : "contactBtn"}
            onClick={() => setMore((v) => !v)}
            aria-expanded={more}
          >
            {more ? "Aizvērt" : "Lasīt vairāk"}
          </button>
        </div>

        {more && (
          <div style={{ marginTop: 14 }}>
            <div className="grid3">
              <div className="card">
                <div className="cardTitle">Tipiska uzbūve</div>
                <div className="cardBody">
                  <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
                    <li>Iekšējā kanalizācija → izvada caurule uz āru</li>
                    <li>Nosēdaka no grodiem (2–3 kameras vai viena liela)</li>
                    <li>Pārplūde uz infiltrācijas aku/lauku</li>
                    <li>Ventilācija un revīzijas piekļuve apkopei</li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <div className="cardTitle">Kāpēc infiltrācija</div>
                <div className="cardBody">
                  Infiltrācija palīdz dabiskā veidā papildus attīrīt ūdeni, jo filtrācijas
                  slāņi un grunts mikroorganismi samazina organisko piesārņojumu. Svarīgi
                  ir pareizi izvēlēties vietu, grunts sastāvu un slāņu biezumu.
                </div>
              </div>

              <div className="card">
                <div className="cardTitle">Apkope</div>
                <div className="cardBody">
                  Nosēdaku periodiski izsūknē (atkarīgs no tilpuma un lietošanas). Regulāra
                  apkope paildzina sistēmas mūžu un samazina aizsērējuma risku.
                </div>
              </div>
            </div>

            <div className="card" style={{ marginTop: 14 }}>
              <div className="cardTitle">Svarīgi</div>
              <div className="cardBody">
                Sistēmas risinājums jāpielāgo objektam: iedzīvotāju skaitam, grunts tipam,
                gruntsūdens līmenim un pieejamai platībai. Ja vēlies, iedod savu situāciju
                (adrese/reģions, cilvēku skaits, grunts īpatnības) un sagatavosim ieteikumu.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
