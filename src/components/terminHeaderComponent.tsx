import clsx from "clsx";
import React from "react";
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
      </div>
    </header>
  );
}
