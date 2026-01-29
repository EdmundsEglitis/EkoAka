type ParsedzeItem = {
  id: string;
  name: string;
  specs: string;
  price: number; // EUR
  image?: string; // vēlāk: import un ieliec šeit
  badge?: string;
};

const CATALOG: ParsedzeItem[] = [
  {
    id: "p-1000",
    name: "Pārsedze Ø1000",
    specs: "Betona pārsedze • Standarta",
    price: 55,
    badge: "Populārs",
  },
  {
    id: "p-1000-luka",
    name: "Pārsedze Ø1000 ar lūku",
    specs: "Betona pārsedze • Ar atveri",
    price: 75,
  },
  {
    id: "p-800",
    name: "Pārsedze Ø800",
    specs: "Betona pārsedze • Standarta",
    price: 45,
  },
];

function formatEUR(n: number) {
  return `${n.toFixed(0)} €`;
}

export default function Parsedzes() {
  return (
    <section className="section">
      <div className="container">
        <div className="sectionHeader">
          <h2>PĀRSEDZES</h2>
          <p>
            Šeit ir kataloga sagatave ar cenām. Kad iedosi bildes un precīzus
            izmērus/cenas, ieliksim īsto katalogu.
          </p>
        </div>

        {/* Info cards */}
        <div className="grid3">
          <div className="card">
            <div className="cardTitle">Standarta izmēri</div>
            <div className="cardBody">Diametri, biezumi, svars (aizpildīsim).</div>
          </div>
          <div className="card">
            <div className="cardTitle">Nestspēja</div>
            <div className="cardBody">Pielietojums (gājēji / auto u.c.) (aizpildīsim).</div>
          </div>
          <div className="card">
            <div className="cardTitle">Saderība</div>
            <div className="cardBody">Saderība ar grodiem un vākiem (aizpildīsim).</div>
          </div>
        </div>

        {/* Catalog */}
        <div className="catalogHeader">
          <h3 className="catalogTitle">Pārsedžu katalogs</h3>
          <p className="catalogNote">
            Cenas ir piemērs. Galīgā cena var atšķirties atkarībā no apjoma un piegādes.
          </p>
        </div>

        <div className="catalogGrid">
          {CATALOG.map((item) => (
            <div key={item.id} className="catalogCard">
              <div className="catalogImage">
                {item.badge && <span className="catalogBadge">{item.badge}</span>}

                {/* Placeholder tagad; vēlāk nomainīsi uz <img src={item.image} .../> */}
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
          Lai saņemtu precīzu piedāvājumu, norādi nepieciešamo diametru/veidu un daudzumu.
        </p>
      </div>
    </section>
  );
}
