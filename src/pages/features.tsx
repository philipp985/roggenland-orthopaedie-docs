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
    <Layout title="Leistungsspektrum">
      <header
        className={clsx("hero hero--primary heroBgImage", styles.heroBanner)}
      >
        <div className="container">
          <h1 className="hero__title">Unser Leistungsspektrum</h1>
          <p className="hero__subtitle">
            Operative und konservative Orthopädie und Unfallchirurgie <br />
            <Link
              to={useBaseUrl("docs/diagnostik")}
              className="text--secondary"
            >
              Sportmedizin
            </Link>{" "}
            |{" "}
            <Link
              to={useBaseUrl("docs/diagnostik")}
              className="text--secondary"
            >
              Chirotherapie
            </Link>{" "}
            |{" "}
            <Link
              to={useBaseUrl("docs/diagnostik")}
              className="text--secondary"
            >
              Kinderorthopädische Sprechstunde
            </Link>{" "}
            |{" "}
            <Link
              to={useBaseUrl("docs/diagnostik")}
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
