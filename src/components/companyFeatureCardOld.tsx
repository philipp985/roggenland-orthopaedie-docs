import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";
import NumberHelpers from "../helpers/numberHelpers";
import { CompanyFeature } from "../models/companyFeature";

interface IKey {
  order: number;
}

function ImageCol({ imgUrl }) {
  return (
    <div>
      {imgUrl && <img src={imgUrl} className="img__rectangle shadow--md" />}
    </div>
  );
}

function CompanyFeatureCardOld({
  title,
  description,
  imageUrl,
  order,
}: CompanyFeature & IKey) {
  const imgUrl = useBaseUrl(imageUrl);
  console.log(order);
  const isOdd = NumberHelpers.isOdd(order);
  if (isOdd) {
    return (
      <div className="row">
        <div className="col col--5">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="col col--5 col--offset-2">
          <ImageCol imgUrl={imgUrl} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="col col--5">
          <ImageCol imgUrl={imgUrl} />
        </div>
        <div className="col col--5 col--offset-2">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default CompanyFeatureCardOld;
