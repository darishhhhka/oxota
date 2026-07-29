import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./AppCard.module.scss";
import Picture from "@/components/baseComponents/gui/picture/Picture";
import {safeHTML} from "@PS/frontend";

export default function AppCard({className, title, description, icon, index}) {
  return (
    <div className={classNames(styles.appCard, className, styles[`appCard_${index}`])}>
      <div className={styles.appCard__bg}></div>
      <div className={styles.appCard__content}>
        <div className={styles.appCard__header}>
          <div className={styles.appCard__icon}>
            <Picture {...icon}/>
          </div>
          <p className={styles.appCard__title}>{safeHTML(title)}</p>
        </div>
        <p className={styles.appCard__description}>{safeHTML(description)}</p>
      </div>
    </div>
  );
}

AppCard.propTypes = {
  className: PropTypes.string,
};
