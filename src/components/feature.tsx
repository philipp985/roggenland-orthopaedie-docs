import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";
import React from "react";
import styles from "../pages/styles.module.css";

export function Feature({ imageUrl, title, description, isAvatar = false }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <React.Fragment>
          {isAvatar ? (
            <div className="avatar avatar--vertical">
              {imgUrl && (
                <img
                  className="avatar__photo avatar__photo--xxl img__rectangle"
                  src={imgUrl}
                />
              )}
            </div>
          ) : (
            <div className="text--center">
              <img className={styles.featureImage} src={imgUrl} alt={title} />
            </div>
          )}
        </React.Fragment>
      )}

      <h3 className="text--center">{title}</h3>
      <p style={{ textAlign: "justify" }}>{description}</p>
    </div>
  );
}
