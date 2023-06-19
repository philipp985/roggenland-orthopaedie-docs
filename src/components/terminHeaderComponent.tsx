import clsx from "clsx";
import React from "react";
import styles from "../pages/styles.module.css";
import Link from "@docusaurus/Link";

export function TerminHeaderComponent() {
  return (
    <>
      <header
        className={clsx("hero hero--primary heroBgImage", styles.heroBanner)}
      >
        <div className="container">
          <h1 className="hero__title">Vereinbaren Sie jetzt einen Termin</h1>
          <p className="hero__subtitle">
            Zusätzlich und in dringenden Fällen sind wir auch telefonisch
            erreichbar.
          </p>
        </div>
      </header>

      <div className="container padding--md">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="alert alert--danger" role="alert">
              Die Online-Terminvergabe ist derzeit nicht verfügbar. Bitte melden
              Sie sich <Link to="/Kontakt">telefonisch</Link>, um einen Termin
              zu erhalten.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
