import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Title.module.scss";
import {safeHTML} from "@PS/frontend";

export default function Title({className, children}) {
  return (
    <h2 className={classNames(styles.title, className)}>
      {safeHTML(children)}
    </h2>
  );
}

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
