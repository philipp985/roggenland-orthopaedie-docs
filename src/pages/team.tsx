import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import CompanyFeatureCard from "../components/companyFeatureCard";
import styles from "./styles.module.css";

function Team() {
  return (
    <Layout title="Team">
      <header
        className={clsx("hero hero--primary heroBgImage", styles.heroBanner)}
      >
        <div className="container">
          <h1 className="hero__title">Unser Team</h1>
          {/* <p className="hero__subtitle">Kompetenz & Erfahrung</p> */}
        </div>
      </header>
      <section className={styles.features}>
        <div className="container">
          <CompanyFeatureCard
            imageUrl="img/team.jpg"
            title="Unser Team"
            description=""
            order={1}
          />
          {/* <div className="row">
            {getTeam().map((x, i) => (
              <div className="col col--6" key={i}>
                <DoctorCard {...x} />
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </Layout>
  );
}

export default Team;
