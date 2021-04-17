import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import { TerminHeaderComponent } from "../components/terminHeaderComponent";
import styles from "./styles.module.css";

function Termin() {
  return (
    <Layout title="Termin">
      <Head>
        <script src="https://api.patient.doctena.de/js/widgetBooking/calendar/build.php"></script>
      </Head>
      <TerminHeaderComponent />
      <section
        data-toggle="doc-calendar"
        data-practice-eid={"65079ecc-2000-4ce5-a605-13ebd5f08427"}
        data-language="de"
        className="iframe-container"
      />
      <div className={clsx(styles.buttons)} />
    </Layout>
  );
}

export default Termin;
