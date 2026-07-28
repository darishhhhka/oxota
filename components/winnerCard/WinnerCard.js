import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./WinnerCard.module.scss";
import Picture from "@/components/baseComponents/gui/picture/Picture";
import {safeHTML} from "@PS/frontend";

export default function WinnerCard({className, title, subTitle, bgImg, note, index}) {
  return (
    <div className={classNames(styles.winnerCard, className)}>
      <div className={styles.winnerCard__bg}><Picture {...bgImg}/></div>
      <div className={styles.winnerCard__content}>
        <p className={styles.winnerCard__title}>{safeHTML(title)}</p>
        <p className={styles.winnerCard__subTitle}>{safeHTML(subTitle)}</p>
        <p className={styles.winnerCard__note}>{safeHTML(note)}</p>
      </div>
    </div>
  );
}

WinnerCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
