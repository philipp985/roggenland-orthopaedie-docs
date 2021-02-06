import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import { DoctorCard } from "../components/doctorCard";
import { getTeam } from "../data/teamData";
import styles from "./styles.module.css";

function Doctors() {
  return (
    <Layout title="Team">
      <header
        className={clsx("hero hero--primary heroBgImage", styles.heroBanner)}
      >
        <div className="container">
          <h1 className="hero__title">Unser Team</h1>
          <p className="hero__subtitle">Kompetenz & Erfahrung</p>
        </div>
      </header>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {getTeam().map((x, i) => (
              <div className="col col--6" key={i}>
                <DoctorCard {...x} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Doctors;
