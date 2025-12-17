import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
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
                <a
                  className={clsx(
                    "button button--secondary button--lg",
                    styles.getStarted
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.doctolib.de/einzelpraxis/bochum/orthopaedische-facharztpraxis-roggenland?utm_campaign=website-button&utm_source=orthopaedische-facharztpraxis-roggenland-website-button&utm_medium=referral&utm_content=option-8&utm_term=orthopaedische-facharztpraxis-roggenland"
                >
                  <FaCalendarAlt /> Jetzt Termin vereinbaren
                </a>
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
        {/* {new Date() > new Date("2025-06-16") && (
          <div className="container padding--md">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <div className="alert alert--danger text--center" role="alert">
                  <h2>Brückentag über Fronleichnam</h2>
                  <p>
                    Am Freitag, den 20.06.2025 ist die Praxis geschlossen. Am
                    Montag sind wir wie gewohnt wieder für Sie da.
                  </p>
                 <p>
                  Ab dem 6.1.2025 sind wir wieder zu den{" "}
                  <Link to={useBaseUrl("kontakt")}>gewohnten Zeiten</Link> für
                  Sie da. Wir wünschen Ihnen einen guten Rutsch und alles Gute
                  für das Jahr 2025.
                </p> 
                  <p>
                    In dringenden Fällen wenden Sie sich bitte an den
                    kassenärtzlichen Notdienst erreichbar unter der Nummer{" "}
                    <a href="tel:116117">116117</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}*/}

        <div className="container padding--md">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <div className="alert alert--danger text--center" role="alert">
                <h2>
                  🎉 Erreichbarkeit unserer Praxis über den Jahreswechsel 🎉
                </h2>
                <p>
                  Montag, den 22.12.2025 9:00 - 12:00 Uhr <br />
                  Dienstag, den 23.12.2025 9:00 - 12:00 Uhr <br />
                  Dienstag, den 24.12.2025 - 26.12.2025 geschlossen <br />
                  Montag, den 29.12.2025 9:00 - 12:00 Uhr <br />
                  Montag, den 30.12.2025 9:00 - 12:00 Uhr
                </p>
                <p>
                  Ab dem 2.1.2026 sind wir wieder zu den{" "}
                  <Link to={useBaseUrl("kontakt")}>gewohnten Zeiten</Link> für
                  Sie da. Wir wünschen Ihnen einen guten Rutsch und alles Gute
                  für das Jahr 2026.
                </p>
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
