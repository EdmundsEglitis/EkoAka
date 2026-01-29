import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <div className="sectionHeader">
          <h2>Lapa nav atrasta</h2>
          <p>Šī adrese neeksistē. Atgriezies uz sākumu.</p>
        </div>
        <Link className="btnPrimary" to="/">Uz sākumu</Link>
      </div>
    </section>
  );
}
