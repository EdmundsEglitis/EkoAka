export default function PrivatumaPolitika() {
  return (
    <main className="section">
      <div className="container" style={{ paddingBottom: 40 }}>
        <div className="sectionHeader">
          <h2>Privātuma politika</h2>
          <p>
            Šī privātuma politika skaidro, kā mēs apstrādājam personas datus, izmantojot šo
            vietni. Pēdējais atjauninājums: {new Date().toLocaleDateString("lv-LV")}.
          </p>
        </div>

        <div className="card">
          <div className="cardTitle">Pārzinis</div>
          <div className="cardBody">
            <p style={{ marginTop: 0 }}>
              <strong>SIA EKO AKA</strong>
              <br />
              {/* Aizpildi ar savu informāciju */}
              Reģ. Nr.: <em>[ievieto reģistrācijas numuru]</em>
              <br />
              Adrese: <em>[ievieto juridisko adresi]</em>
              <br />
              E-pasts: <em>[ievieto e-pastu]</em>
              <br />
              Tālrunis: <em>[ievieto tālruni]</em>
            </p>
          </div>
        </div>

        <div style={{ height: 14 }} />

        <div className="card">
          <div className="cardTitle">Kādus datus mēs apstrādājam</div>
          <div className="cardBody">
            <ul style={{ marginTop: 0 }}>
              <li>
                <strong>Saziņas dati</strong> (piem., e-pasts, tālrunis), ja jūs sazināties ar mums.
              </li>
              <li>
                <strong>Tehniskie dati</strong> (IP adrese, pārlūka tips, pieprasījuma laiks) –
                parasti to automātiski reģistrē hostinga pakalpojumu sniedzējs drošībai un
                vietnes darbības nodrošināšanai.
              </li>
              <li>
                <strong>Jūsu izvēles par ārējo saturu</strong> (Google Maps / Sketchfab) – mēs
                saglabājam tikai atzīmi jūsu pārlūkā (localStorage), lai atcerētos, vai jūs
                esat ielādējis ārējo saturu.
              </li>
            </ul>
          </div>
        </div>

        <div style={{ height: 14 }} />

        <div className="card">
          <div className="cardTitle">Kādēļ mēs apstrādājam datus</div>
          <div className="cardBody">
            <ul style={{ marginTop: 0 }}>
              <li>Lai atbildētu uz jūsu jautājumiem un sagatavotu piedāvājumu.</li>
              <li>Lai nodrošinātu vietnes drošu un stabilu darbību.</li>
              <li>
                Lai ielādētu <strong>ārējo saturu</strong> (karte/3D modelis) tikai pēc jūsu
                izvēles (“klikšķis, lai ielādētu”).
              </li>
            </ul>
          </div>
        </div>

        <div style={{ height: 14 }} />

        <div className="card">
          <div className="cardTitle">Ārējie pakalpojumi (Google Maps, Sketchfab)</div>
          <div className="cardBody">
            <p style={{ marginTop: 0 }}>
              Vietnē ir pieejams ārējais saturs no trešajām pusēm. Šis saturs netiek ielādēts
              automātiski – tas tiek ielādēts tikai pēc jūsu klikšķa. Ielādējot ārējo saturu,
              trešās puses var iestatīt savas sīkdatnes un apstrādāt tehniskos datus (piem., IP
              adresi).
            </p>

            <p>
              Trešo pušu politikas:
              <ul>
                <li>
                  Google: <em>https://policies.google.com/technologies/cookies</em>
                </li>
                <li>
                  Sketchfab: <em>https://sketchfab.com/privacy</em>
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div style={{ height: 14 }} />

        <div className="card">
          <div className="cardTitle">Jūsu tiesības</div>
          <div className="cardBody">
            <ul style={{ marginTop: 0 }}>
              <li>Pieprasīt piekļuvi saviem datiem un to labošanu.</li>
              <li>Noteiktos gadījumos – pieprasīt dzēšanu vai apstrādes ierobežošanu.</li>
              <li>Iebilst pret apstrādi, ja tā balstīta uz leģitīmām interesēm.</li>
              <li>Iesniegt sūdzību Datu valsts inspekcijā.</li>
            </ul>
            <p>
              Lai izmantotu savas tiesības, sazinieties ar mums: <em>[ievieto e-pastu]</em>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
