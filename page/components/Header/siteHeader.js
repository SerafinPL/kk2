import React, { useState } from "react";

import styles from "@/styles/Home.module.scss";
import CloseButtonNew from "../Menu/CloseButton/CloseButtonNew";

import Menu from "../Menu/Menu";
const sietHeader = (props) => {

  return (
    <React.Fragment>
      <Menu open={props.state} />
      <CloseButtonNew clicked={props.clicked} state={props.state} />
      <span className={`${styles.anitaText} ${props.state ? styles.positionOpen : styles.positionNormal}`}>Anita Machura</span>
      <header className={`${styles.siteHeader} ${props.state && styles.blur}`}></header>
    </React.Fragment>
  );
};

export default sietHeader;
