import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import { companyData } from "../data/companyData";
import styles from "./styles.module.css";

function Imprint() {
  return (
    <Layout title="Impressum">
      <header
        className={clsx("hero hero--primary heroBgImage", styles.heroBanner)}
      >
        <div className="container">
          <h1 className="hero__title">Impressum</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
          <p>
            Dr. Gerhard Roggenland
            <br />
            {companyData.title}
            <br />
            {companyData.address}
            <br />
            {companyData.address2ndLine}
          </p>
          <h2>Kontakt</h2>
          <p>
            Telefon: {companyData.fon}
            <br />
            Telefax: {companyData.fax}
            <br />
            E-Mail: {companyData.email}
          </p>
          {/* <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
            Umsatzsteuergesetz:
            <br />
            DE999999999
          </p> */}
          <h2>Aufsichtsbeh&ouml;rde</h2>
          <p>
            Landes&auml;rztekammer Westfalen-Lippe
            <br />
            Gartenstra&szlig;e 210-214
            <br />
            48147 M&uuml;nster
          </p>
          <p>
            <a
              href="http://www.aekwl.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.aekwl.de
            </a>
          </p>
          <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p>
            Berufsbezeichnung: Facharzt f&uuml;r Orthop&auml;die
            <br />
            Zust&auml;ndige Kammer: &Auml;rztekammer Westfalen-Lippe
            <br />
            Verliehen in: Deutschland
            <br />
            Es gelten folgende berufsrechtliche Regelungen: Die Berufsordnung
            ist zu beziehen, beziehungsweise einzusehen bei der zust&auml;ndigen
            &Auml;rztekammer
            <br />
            Regelungen einsehbar unter:
            <a href="http://aekwl.de" target="_blank" rel="noopener noreferrer">
              http://aekwl.de
            </a>
          </p>
          {/* <h2>Angaben zur Berufshaftpflichtversicherung</h2>
          <p>
            <strong>Name und Sitz des Versicherers:</strong>
            <br />
            Beispiel Versicherung AG
            <br />
            Musterweg 10
            <br />
            90210 Musterstadt
          </p>
          <p>
            <strong>Geltungsraum der Versicherung:</strong>
            <br />
            Deutschland
          </p> */}
          <h2>Redaktionell Verantwortlicher</h2>
          <p>
            Dr. Gerhard Roggenland
            <br />
            {companyData.address}
            <br />
            {companyData.address2ndLine}
          </p>
          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europ&auml;ische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <h2>
            Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
          </h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
          <h3>Haftung f&uuml;r Inhalte</h3>
          <p>
            Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG
            f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder
            gespeicherte fremde Informationen zu &uuml;berwachen oder nach
            Umst&auml;nden zu forschen, die auf eine rechtswidrige
            T&auml;tigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab
            dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
            m&ouml;glich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
          <h3>Haftung f&uuml;r Links</h3>
          <p>
            Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir
            f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr
            &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist
            stets der jeweilige Anbieter oder Betreiber der Seiten
            verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e
            &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der
            Verlinkung nicht erkennbar.
          </p>
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
          <h3>Urheberrecht</h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
            bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors
            bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r
            den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
          <p>
            Quelle: <a href="https://www.e-recht24.de">eRecht24</a>
          </p>
        </div>
      </main>
    </Layout>
  );
}

export default Imprint;
