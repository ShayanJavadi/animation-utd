import React from "react";
import LinkedinIcon from "react-icons/lib/fa/linkedin-square";
import WebsiteIcon from "react-icons/lib/fa/chain";
import { capitalize } from "lodash";

const PACKAGE_NAME = "officer-section-component";

const Officer = ({
  firstName, lastName, position, linkedin, website, image,
}) => (
  <section className={PACKAGE_NAME}>
    <img src={image} className="officer-image" />
    <div className="officer-information">
      <p className="position">
        {capitalize(position)}
      </p>
      <p className="name">
        {`${capitalize(firstName)} ${capitalize(lastName)}`}
      </p>
      <div className="officer-links">
        <a className="linkedin-icon" href={linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedinIcon />
        </a>
        <a className="website-icon" href={website} target="_blank" rel="noopener noreferrer">
          <WebsiteIcon />
        </a>
      </div>
    </div>
  </section>
);

export default Officer;
