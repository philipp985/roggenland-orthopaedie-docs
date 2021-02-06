import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import { Feature } from "../components/feature";
import { baseServices } from "../components/services";
import styles from "./styles.module.css";

const features = [
  {
    title: "Erfahren",
    imageUrl: "img/undraw_injured.svg",
    description: (
      <>
        Unsere orthopädische Praxis zeichnet sich durch mehr als 20 Jahre
        praktische und operative Erfahrung aus.
      </>
    ),
  },
  {
    title: "Kompetent",
    imageUrl: "img/undraw_medical_research.svg",
    description: (
      <>
        Durch regelmäßige Fort- und Weiterbildungen behandeln wir Sie nach dem
        neusten Stand der Wissenschaft.
      </>
    ),
  },
  {
    title: "Modern",
    imageUrl: "img/undraw_fitness_stats.svg",
    description: (
      <>
        Wir begrüßen Sie in unseren modernen neu gestalteten und ausgestateten
        Praxisräumlichkeiten im City Point.
      </>
    ),
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header
        className={clsx("hero hero--primary heroBgImage", styles.heroBanner)}
      >
        <div className="container container--fluid">
          <div className="row">
            <div className="col col--7 padding-vert--lg">
              <h1 className="hero__title">
                {siteConfig.title}
                <br />
                Roggenland
              </h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>

              {/* <div className="row">
                <div className="col col--6">
                  <div className={clsx(styles.buttons)}>
                    <Link
                      className={clsx(
                        "button button--secondary button--lg",
                        styles.getStarted
                      )}
                      to={useBaseUrl("contact")}
                    >
                      Jetzt Termin vereinbaren
                    </Link>
                  </div>
                </div>
                <div className="col col--6">
                  <div className={styles.buttons}>
                    <Link
                      className={clsx(
                        "button button--outline button--secondary button--lg",
                        styles.getStarted
                      )}
                      to={useBaseUrl("contact/")}
                    >
                      Kontakt
                    </Link>
                  </div>
                </div>
              </div> */}
              <div className={clsx(styles.buttons)}>
                <Link
                  className={clsx(
                    "button button--secondary button--lg",
                    styles.getStarted
                  )}
                  to={useBaseUrl("contact")}
                >
                  Jetzt Termin vereinbaren
                </Link>
              </div>
            </div>
            <div className="col col--5">
              <img
                alt="Team"
                src={useBaseUrl("img/hero_cropped.jpg")}
                className="img__rectangle"
              />
            </div>
          </div>
        </div>
      </header>
      <main>
        {/* <div className="container text--center">
          <h1 style={{ paddingTop: "2rem" }}>Was uns auszeichnet</h1>
        </div>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )} */}
        {baseServices && baseServices.length > 0 && (
          <div>
            <div className="container text--center">
              <h1 style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
                Leistungsspektrum
              </h1>
            </div>
            <section>
              <div className="container">
                <div className="row" style={{ marginBottom: "3rem" }}>
                  {baseServices.map((props, idx) => (
                    <Feature isAvatar key={idx} {...props} />
                  ))}
                </div>
                <div
                  className={styles.buttons}
                  style={{ paddingBottom: "5rem" }}
                >
                  <Link
                    className={clsx(
                      "button button--outline button--secondary button--lg",
                      styles.getStarted
                    )}
                    to={useBaseUrl("features/")}
                  >
                    Mehr erfahren
                  </Link>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>
    </Layout>
  );
}

export default Home;
