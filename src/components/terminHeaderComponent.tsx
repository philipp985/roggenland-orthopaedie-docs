import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "../pages/styles.module.css";

export function TerminHeaderComponent() {
  return (
    <header
      className={clsx("hero hero--primary heroBgImage", styles.heroBanner)}
    >
      <div className="container">
        <h1 className="hero__title">Vereinbaren Sie jetzt einen Termin</h1>
        <p className="hero__subtitle">
          Zusätzlich und in dringenden Fällen sind wir auch telefonisch
          erreichbar.
        </p>
        <div className="container padding--md">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <div
                className="alert alert--danger"
                role="alert"
                style={{ fontSize: "x-large" }}
              >
                Die Online-Terminvergabe ist derzeit nur eingeschränkt
                verfügbar. Insbesondere für Termine bei Frau Roggenland melden
                Sie sich bitte <Link to="/kontakt">telefonisch</Link>, um einen
                Termin zu erhalten.
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
