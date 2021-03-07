import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import React from "react";
import { TerminHeaderComponent } from "../components/terminHeaderComponent";

function TerminGerhard() {
  const doctorId = "8dbfc4b5-5167-4b7a-9d94-7c4e967e3732";

  console.log(doctorId);
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

export default TerminGerhard;
