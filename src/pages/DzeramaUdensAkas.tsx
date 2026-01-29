import { useState } from "react";

const PRICE_PER_RING_EUR = 300; // <- nomaini uz savu cenu par 1 ieraktu grodu

function formatEUR(n: number) {
  return `${n.toFixed(0)} €`;
}

export default function DzeramaUdensAkas() {
  const [more, setMore] = useState(false);

  return (
    <section className="section">
      <div className="container">
        <div className="sectionHeader">
          <h2>DZERAMĀ ŪDENS AKAS</h2>
          <p>
            Dzeramā ūdens aka parasti tiek izbūvēta no betona grodiem, veidojot drošu un
            ilgmūžīgu konstrukciju. Zemāk — īss pārskats par izbūvi, materiāliem un
            apkopes/restaurācijas iespējām.
          </p>
        </div>

        {/* Cena */}
        <div className="card" style={{ marginBottom: 14 }}>
          <div className="cardTitle">Cena</div>
          <div className="cardBody">
            <strong>{formatEUR(PRICE_PER_RING_EUR)}</strong> <span>+ PVN</span>{" "}
            <span>par katru ierakto grodu</span>
            <div style={{ marginTop: 6, color: "var(--muted)" }}>
              * Cena ir piemērs — gala summa var mainīties atkarībā no dziļuma, grunts,
              piekļuves un papilddarbiem.
            </div>
          </div>
        </div>

        {/* Īsais skaidrojums */}
        <div className="grid3">
          <div className="card">
            <div className="cardTitle">Izbūves process</div>
            <div className="cardBody">
              Parasti sāk ar vietas sagatavošanu, grodu ielikšanu/ierakšanu līdz ūdens
              slānim un šuvju/savienojumu sakārtošanu. Pēc tam veic tīrīšanu un
              sagatavošanu ekspluatācijai.
            </div>
          </div>

          <div className="card">
            <div className="cardTitle">Kvalitāte un drošība</div>
            <div className="cardBody">
              Svarīga ir grodu kvalitāte, stabila ģeometrija un pareizi savienojumi.
              Kvalitatīvi materiāli palīdz nodrošināt ilgmūžību un samazina risku, ka
              virszemes ūdeņi nonāk akā.
            </div>
          </div>

          <div className="card">
            <div className="cardTitle">Apkope un profilakse</div>
            <div className="cardBody">
              Regulāra tīrīšana, nosēdumu izņemšana un dezinfekcija palīdz uzturēt ūdens
              kvalitāti. Ieteicams periodiski pārbaudīt ūdens analīzes.
            </div>
          </div>
        </div>

        {/* Lasīt vairāk */}
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
                <div className="cardTitle">Kas ietekmē ūdens kvalitāti</div>
                <div className="cardBody">
                  <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
                    <li>Grunts sastāvs un ūdens slānis (dziļums)</li>
                    <li>Akas hermētiskums augšdaļā (pret virszemes ūdeņiem)</li>
                    <li>Atrašanās vieta (attālumi līdz kanalizācijai, kūtīm u.c.)</li>
                    <li>Regulāra tīrīšana un ūdens analīzes</li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <div className="cardTitle">Apkopes darbi</div>
                <div className="cardBody">
                  <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
                    <li>Akas izsūknēšana un nosēdumu izņemšana</li>
                    <li>Sienu/mehāniska tīrīšana</li>
                    <li>Dezinfekcija (pēc nepieciešamības)</li>
                    <li>Vāka/pārsedzes pārbaude un nomaiņa</li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <div className="cardTitle">Restaurācija / remonts</div>
                <div className="cardBody">
                  <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
                    <li>Šuvju atjaunošana un noplūžu novēršana</li>
                    <li>Grodu izlīdzināšana / papildus grodu pievienošana</li>
                    <li>Augšdaļas hermetizācija pret virszemes ūdeņiem</li>
                    <li>Filtrācijas slāņa sakārtošana (ja tas ir paredzēts)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card" style={{ marginTop: 14 }}>
              <div className="cardTitle">Svarīgi</div>
              <div className="cardBody">
                Dzeramā ūdens aku risinājums jāpielāgo objektam un vietējiem apstākļiem.
                Pirms lietošanas ieteicams veikt ūdens analīzes, kā arī nodrošināt pareizu
                vāku/pārsedzi un drošu piekļuvi.
              </div>
            </div>

            <p className="catalogFooterNote">
              Ja atsūtīsi aptuveno dziļumu / atrašanās vietu un vēlamo akas diametru, varam
              sagatavot precīzāku piedāvājumu.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
