import React from "react";

const PACKAGE_NAME = "HTML-Content-component";

export default ({ html, classNames = "" }) => <div dangerouslySetInnerHTML={{ __html: html }} className={classNames} />;
