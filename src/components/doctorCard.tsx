import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";
import TeamMember from "../models/teamMember";

export function DoctorCard({ imageUrl, name, features, position }: TeamMember) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className="card shadow--md">
      <div className="card__body">
        <div className="avatar avatar--vertical">
          {imgUrl && (
            <img className="avatar__photo avatar__photo--xl" src={imgUrl} />
          )}
          <div className="avatar__intro">
            <h4 className="avatar__name">{name}</h4>
            <small className="avatar__subtitle">{position}</small>
          </div>
        </div>
        {/* {imgUrl && (
        <div className="card__image">
          <img src={imgUrl} alt={name} />
        </div>
      )} */}
        <ul style={{ paddingTop: "1rem" }}>
          {features.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
