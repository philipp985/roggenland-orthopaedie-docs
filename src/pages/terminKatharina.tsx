import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import React from "react";
import { TerminHeaderComponent } from "../components/terminHeaderComponent";

function TerminKatharina() {
  const doctorId = "fb6dd2ac-c62f-4fa4-9c7c-2d4de35cf563";

  return (
    <Layout title="Termin">
      <Head>
        <script src="https://api.patient.doctena.de/js/widgetBooking/calendar/build.php"></script>
      </Head>

      <TerminHeaderComponent />
      <section
        data-toggle="doc-calendar"
        data-picture="1"
        data-doctor-eid={doctorId}
        data-language="de"
        style={{ minHeight: "600px" }}
      />
    </Layout>
  );
}

export default TerminKatharina;
