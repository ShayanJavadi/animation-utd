import React from "react";

const PACKAGE_NAME = "HTML-Content-component";

export default ({ html, classNames = "" }) => 
<link rel="shortcut icon" type="image/ico" href="https://raw.githubusercontent.com/ShayanJavadi/animation-utd/master/assets/images/favicon.ico" />
<div dangerouslySetInnerHTML={{ __html: html }} className={classNames} />;
