import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import CompanyFeatureCard from "../components/companyFeatureCard";
import { getCompanyFeatures } from "../data/companyFeatureData";
import styles from "./styles.module.css";

function Praxis() {
  return (
    <Layout
      title="Praxis"
      description="Wir begrüßen Sie in unserer Praxis im City Point, die nach dem neuesten Stand der Technik ausgestattet ist."
    >
      <header
        className={clsx("hero hero--primary heroBgImage", styles.heroBanner)}
      >
        <div className="container">
          <h1 className="hero__title">Unsere Praxis</h1>
          <p className="hero__subtitle">Modern & Innovativ</p>
        </div>
      </header>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {getCompanyFeatures().map((x, i) => (
              <div className="col col--6  padding-vert--md" key={i}>
                <CompanyFeatureCard order={i} {...x} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <section className={styles.features}>
        <div className="container">
          {getCompanyFeatures().map((x, i) => (
            <CompanyFeatureCardOld key={i} order={i} {...x} />
          ))}
        </div>
      </section> */}
    </Layout>
  );
}

export default Praxis;
