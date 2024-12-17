import Layout from "@theme/Layout";
import clsx from "clsx";
import CompanyFeatureCard from "../components/companyFeatureCard";
import styles from "./styles.module.css";

interface TeamItem {
  imgUrl: string;
  name: string;
  position: string;
}

const team: TeamItem[] = [
  { imgUrl: "/img/team/svetlana.jpg", name: "Sventlana", position: "Empfang" },
  { imgUrl: "/img/team/maria.jpg", name: "Maria", position: "Empfang" },
  { imgUrl: "/img/team/monika.jpg", name: "Monika", position: "Empfang" },
  { imgUrl: "/img/team/zoey.jpg", name: "Zoey", position: "Empfang" },
  { imgUrl: "/img/team/doris.jpg", name: "Doris", position: "Empfang" },
];

function Team() {
  return (
    <Layout title="Team">
      <header
        className={clsx("hero hero--primary heroBgImage", styles.heroBanner)}
      >
        <div className="container">
          <h1 className="hero__title">Unser Team</h1>
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
        </div>
      </section>

      {/* <div className="container">
        <div className="row">
          {team.map((x, i) => (
            <div key={i} className="col col--6">
              <div className="col-demo">
                <Card {...x} />
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </Layout>
  );
}

export default Team;

function Card({ imgUrl, name, position }: TeamItem) {
  return (
    <div className="card shadow--md margin--lg">
      <div className="card__body">
        <div className="avatar avatar--vertical">
          <img className="avatar__photo avatar__photo--xxxl" src={imgUrl} />
          <div className="avatar__intro">
            <h4 className="avatar__name">{name}</h4>
            <small className="avatar__subtitle">{position}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
