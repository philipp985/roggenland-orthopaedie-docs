import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Feature } from "../components/feature";
import { baseServices } from "../components/services";
import styles from "./styles.module.css";

const features = [
  {
    title: "Erfahren",
    imageUrl: "img/undraw_injured.svg",
    description: (
      <>
        Seit mehr als 20 Jahren behandeln wir in unserer orthopädischen Praxis
        Patienten operativ und konservativ.
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
        Wir begrüßen Sie in unserer Praxis im City Point, die nach dem neuesten
        Stand der Technik ausgestattet ist.
      </>
    ),
  },
];

function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Operative und konservative orthopädische Therapien seit mehr als 20 Jahren in Bochum. Online Terminvergabe jederzeit möglich."
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
              <div className={clsx(styles.buttons)}>
                <Link
                  className={clsx(
                    "button button--secondary button--lg",
                    styles.getStarted
                  )}
                  to={useBaseUrl("Termin")}
                >
                  <FaCalendarAlt /> Jetzt Termin vereinbaren
                </Link>
              </div>
            </div>
            <div className="col col--5">
              {/* <Image
                img={require("../../static/img/hero_cropped.jpg")}
                className="img__rectangle"
              /> */}
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
        <div className="row">
          <div className="col col--4 col--offset-4">
            <div className="col-demo">
              <div
                className="alert alert--secondary margin--md"
                role="alert"
                style={{ backgroundColor: "rgba(255, 92, 0, 0.8)" }}
              >
                <h4>Geänderte Öffnungszeiten an Karneval</h4>
                Liebe Patienten am Rosenmontag, den 20.02.2023, hat unsere
                Praxis nur bis 13:00 Uhr für Sie geöffnet geöffnet.
              </div>
            </div>
          </div>
        </div>
        <div className="container text--center">
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
        )}
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
