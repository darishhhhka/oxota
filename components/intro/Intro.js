import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Intro.module.scss";
import Picture from "@/components/baseComponents/gui/picture/Picture";
import {intro} from "@/constants/copyright";
import {safeHTML} from "@PS/frontend";

export default function Intro({className}) {
  return (
    <div className={classNames(styles.intro, className)}>
      <div className={styles.intro__bg}>
        <div className={classNames(styles.intro__bgImage, styles.intro__bgItem) }>
          <Picture {...intro.bgImage} />
        </div>
        <div className={classNames(styles.intro__bgMen, styles.intro__bgItem)}>
          <Picture {...intro.menImg} />
        </div>
        <div className={classNames(styles.intro__bgBottomShadow, styles.intro__bgItem) }></div>
      </div>
      <div className={styles.intro__content}>
        <div className={styles.intro__header}>
          <div className={styles.intro__logoOxota}>
            <Picture {...intro.logoOxota}/>
          </div>
          <div className={styles.intro__logoLoto}>
            <Picture {...intro.lotoLogo}/>
          </div>
        </div>
        <p className={styles.intro__win}>
          <span className={styles.intro__win_b}>{safeHTML(intro.win.text)}</span>
          {safeHTML(intro.win.textBold)}
        </p>
        <div className={styles.intro__info}>
          <h1 className={styles.intro__title}>{intro.title.text}</h1>
          <p className={styles.intro__infoNumber}>
            {safeHTML(intro.title.number)}
          </p>
          <p className={styles.intro__infoSub}>
            {safeHTML(intro.subtitle.text)}
          </p>
        </div>
      </div>
    </div>
  );
}

Intro.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
