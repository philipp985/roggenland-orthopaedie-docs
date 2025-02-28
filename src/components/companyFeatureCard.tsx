import useBaseUrl from "@docusaurus/useBaseUrl";
import NumberHelpers from "../helpers/numberHelpers";
import { CompanyFeature } from "../models/companyFeature";

interface IKey {
  order: number;
}

function CompanyFeatureCard({
  title,
  description,
  imageUrl,
  order,
}: CompanyFeature & IKey) {
  const imgUrl = useBaseUrl(imageUrl);
  console.log(order);
  const isOdd = NumberHelpers.isOdd(order);
  return (
    <div className="card shadow--md">
      <div className="card__image">
        <img
          src={imgUrl}
          alt="Team"
          title="Logo Title Text 1"
          style={{ width: "100%" }}
        />
      </div>
      <div className="card__body">
        <h4 className="text--center">{title}</h4>
      </div>
    </div>
  );
}

export default CompanyFeatureCard;
