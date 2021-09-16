import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import { FaFax, FaMapPin, FaPhone, FaRegPaperPlane } from "react-icons/fa";
import { companyData, openingHours } from "../data/companyData";
import styles from "./styles.module.css";

function Kontakt() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="Kontakt & Anfahrt"
      description="Sie finden uns direkt in der Bochuer Innenstadt im City Point"
    >
      <header
        className={clsx("hero hero--primary heroBgImage", styles.heroBanner)}
      >
        <div className="container">
          <h1 className="hero__title">Wir sind für Sie da</h1>
          <p className="hero__subtitle">So erreichen Sie uns</p>
        </div>
      </header>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            <div className="col col--4 col--offset-2">
              <h1>Öffnungszeiten</h1>
              <dl>
                {openingHours.map((x, i) => (
                  <React.Fragment key={i}>
                    <dt>{x.day}</dt>
                    <dd>{x.hours}</dd>
                  </React.Fragment>
                ))}
              </dl>
            </div>
            <div className="col col--4">
              <h1>Anfahrt & Kontakt</h1>
              <dl>
                <dt>
                  <FaMapPin /> Adresse
                </dt>
                <dd>
                  <a href={companyData.addressLink} target="_blank">
                    {companyData.address}
                    {companyData.address2ndLine && (
                      <>
                        <br />
                        {companyData.address2ndLine}
                      </>
                    )}
                  </a>
                </dd>
                <dt>
                  <FaPhone /> Telefon
                </dt>
                <dd>
                  <a href={`tel:${companyData.fon}`}>{companyData.fon}</a>
                </dd>
                <dt>
                  <FaFax /> Fax
                </dt>
                <dd>{companyData.fax}</dd>
                <dt>
                  <FaRegPaperPlane /> Email
                </dt>
                <dd>
                  <a href={`mailto:${companyData.email}`}>
                    {companyData.email}
                  </a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Kontakt;
