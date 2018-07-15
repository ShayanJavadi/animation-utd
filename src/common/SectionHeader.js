import React from "react";
import propTypes from "prop-types";
import { startCase } from "lodash";
import classNames from "classnames";
import Row from "./Row";
import Column from "./Column";

const PACKAGE_NAME = "section-header-component";
const DEFAULT_TITLE_CLASSNAME = "title";
const SECONDARY_TITLE_CLASSNAME = "title-secondary";

const SectionHeader = ({ children, text, isSecondary, className }) => {
  const componentClasses = classNames(
    PACKAGE_NAME,
    className,
  );

  const titleClasses = classNames(
    DEFAULT_TITLE_CLASSNAME,
    isSecondary && SECONDARY_TITLE_CLASSNAME,
  );
  
  console.log(startCase(text));

  return (
    <Row className={componentClasses}>
      <Column className="container">
        <h1 className={titleClasses}>
          {startCase(text)}
        </h1>
        {children}
      </Column>
    </Row>
  );
};

SectionHeader.propTypes = {
  text: propTypes.string,
};

export default SectionHeader;
