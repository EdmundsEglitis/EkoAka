type GrodsItem = {
  id: string;
  name: string;
  specs: string;
  price: number; // EUR
  image?: string; // later: import and pass here
  badge?: string;
};

const CATALOG: GrodsItem[] = [
  {
    id: "g-1000-500",
    name: "Grods Ø1000 / H500",
    specs: "Betona grods • Standarta",
    price: 45,
    badge: "Populārs",
  },
  {
    id: "g-1000-1000",
    name: "Grods Ø1000 / H1000",
    specs: "Betona grods • Pastiprināts",
    price: 75,
  },
  {
    id: "g-800-500",
    name: "Grods Ø800 / H500",
    specs: "Betona grods • Standarta",
    price: 35,
  },


];

function formatEUR(n: number) {
  // simple formatting: 45 -> "45 €"
  return `${n.toFixed(0)} €`;
}

export default function Grodi() {
  return (
    <section className="section">
      <div className="container">
        <div className="sectionHeader">
          <h2>GRODI</h2>
          <p>
            Šeit ir kataloga sagatave ar cenām. Kad iedosi bildes un precīzus
            izmērus/cenas, ieliksim īsto katalogu.
          </p>
        </div>

        {/* Info cards (your existing) */}
        <div className="grid3">
          <div className="card">
            <div className="cardTitle">Standarta izmēri</div>
            <div className="cardBody">Diametri, augstumi, svars (aizpildīsim).</div>
          </div>
          <div className="card">
            <div className="cardTitle">Pielietojums</div>
            <div className="cardBody">Akas, drenāža, lietus ūdens u.c.</div>
          </div>
          <div className="card">
            <div className="cardTitle">Piegāde Latvijā</div>
            <div className="cardBody">Reģioni, termiņi, izkraušana (ja attiecas).</div>
          </div>
        </div>

        {/* Catalog */}
        <div className="catalogHeader">
          <h3 className="catalogTitle">Grodu katalogs</h3>
          <p className="catalogNote">
            Cenas ir piemērs. Galīgā cena var atšķirties atkarībā no apjoma un piegādes.
          </p>
        </div>

        <div className="catalogGrid">
          {CATALOG.map((item) => (
            <div key={item.id} className="catalogCard">
              <div className="catalogImage">
                {item.badge && <span className="catalogBadge">{item.badge}</span>}

                {/* Placeholder now; later swap to <img src={item.image} .../> */}
                <div className="imagePlaceholder">
                  <span>Attēls</span>
                </div>
              </div>

              <div className="catalogBody">
                <div className="catalogName">{item.name}</div>
                <div className="catalogSpecs">{item.specs}</div>

                <div className="catalogRow">
                  <div className="catalogPrice">
                    {item.price > 0 ? formatEUR(item.price) : "Pēc vienošanās"}
                    {item.price > 0 && <span className="catalogVat"> + PVN</span>}
                  </div>

                  <a className="catalogCta" href="/kontakti">
                    Sazināties
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="catalogFooterNote">
          Lai saņemtu precīzu piedāvājumu, norādi nepieciešamo diametru, augstumu un daudzumu.
        </p>
      </div>
    </section>
  );
}
