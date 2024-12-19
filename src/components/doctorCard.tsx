import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { FaCalendarAlt } from "react-icons/fa";
import ITeamMember from "../models/teamMember";

export function DoctorCard({
  imageUrl,
  name,
  features,
  position,
  id,
}: ITeamMember) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div
      className="card shadow--md"
      style={{ minHeight: "58rem", marginBottom: "2rem" }}
    >
      <div className="card__body">
        <div className="avatar avatar--vertical">
          {imgUrl && (
            <img className="avatar__photo avatar__photo--xxl" src={imgUrl} />
          )}
          <div className="avatar__intro">
            <h4 className="avatar__name">{name}</h4>
            <small className="avatar__subtitle">{position}</small>
          </div>
        </div>
        <ul style={{ paddingTop: "1rem" }}>
          {features.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      </div>
      <div className="card__footer">
        <Link
          className={"button button--outline button--block button--secondary"}
          // to={useBaseUrl("termin" + id)}
          to={useBaseUrl("termin")}
        >
          <FaCalendarAlt /> Termin vereinbaren
        </Link>
      </div>
    </div>
  );
}
