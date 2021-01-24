import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";
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
      style={{ height: "25rem", marginBottom: "2rem" }}
    >
      <div className="card__header">
        <h3>{title}</h3>
      </div>
      <div className="card__body">
        {/*  <div className="avatar avatar--vertical">
          {imgUrl && (
            <img className="avatar__photo avatar__photo--xl" src={imgUrl} />
          )}
          <div className="avatar__intro">
            <h4 className="avatar__name">{name}</h4>
            <small className="avatar__subtitle">{position}</small>
          </div>
        </div> */}
        {/* {imgUrl && (
        <div className="card__image">
          <img src={imgUrl} alt={name} />
        </div>
      )} */}
        <p>{description}</p>
        <ul>
          {items.map((x, i) => (
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
