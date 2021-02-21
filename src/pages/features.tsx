import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import { FeatureCard } from "../components/featureCard";
import { featuresData } from "../data/featuresData";
import styles from "./styles.module.css";

function Team() {
  return (
    <Layout
      title="Leistungsspektrum"
      description="Unser Leistungsspektrum umfasst Diagnostik, Schmerztherapie und physikalische Therapie"
    >
      <header
        className={clsx("hero hero--primary heroBgImage", styles.heroBanner)}
      >
        <div className="container">
          <h1 className="hero__title">Unser Leistungsspektrum</h1>
          <p className="hero__subtitle">
            Operative und konservative Orthopädie und Unfallchirurgie <br />
            <Link
              to={useBaseUrl("docs/sportmedizin")}
              className="text--secondary"
            >
              Sportmedizin
            </Link>{" "}
            |{" "}
            <Link
              to={useBaseUrl("docs/chirotherapie")}
              className="text--secondary"
            >
              Chirotherapie
            </Link>{" "}
            |{" "}
            <Link
              to={useBaseUrl("docs/kinder-orthopaedie")}
              className="text--secondary"
            >
              Kinderorthopädische Sprechstunde
            </Link>{" "}
            |{" "}
            <Link
              to={useBaseUrl("docs/schmerztherapie/akupunktur")}
              className="text--secondary"
            >
              Akupunktur
            </Link>
          </p>
        </div>
      </header>
      <main>
        {featuresData && featuresData.length > 0 && (
          <div>
            <section className={clsx("bg--secondary-lighter", styles.features)}>
              <div className="container">
                <div className="row">
                  {featuresData.map((props, idx) => (
                    <div key={idx} className="col col--4">
                      <FeatureCard {...props} />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}
      </main>
    </Layout>
  );
}

export default Team;
