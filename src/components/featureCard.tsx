import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { FeatureItem } from "../models/featureItem";

export function FeatureCard({
  title,
  description,
  items,
  link = "docs/",
}: FeatureItem) {
  return (
    <div
      className="card shadow--md"
      style={{ minHeight: "27rem", marginBottom: "2rem" }}
    >
      <div className="card__header">
        <h3>{title}</h3>
      </div>
      <div className="card__body">
        <p>{description}</p>
        <ul>
          {items
            .sort((a, b) => a.localeCompare(b))
            .map((x, i) => (
              <li key={i}>{x}</li>
            ))}
        </ul>
      </div>
      <div className="card__footer">
        <Link
          className={"button button--outline button--secondary button--block"}
          to={useBaseUrl(link)}
        >
          Mehr erfahren
        </Link>
      </div>
    </div>
  );
}
