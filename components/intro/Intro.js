import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Intro.module.scss";
import Picture from "@/components/baseComponents/gui/picture/Picture";
import {intro} from "@/constants/copyright";
import {safeHTML} from "@PS/frontend";
import CustomButton from "@/components/customButton/CustomButton";

export default function Intro({className}) {
  return (
    <div className={classNames(styles.intro, className)}>
      <div className={styles.intro__bg}>
        <div className={classNames(styles.intro__bgImage, styles.intro__bgItem) }>
          <div className={styles.intro__bgImageBase}>
            <Picture {...intro.bgImage} />
          </div>
         <div className={styles.intro__bgImageAfter}>
           <Picture {...intro.bgImage} />
         </div>
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
          <span className={styles.intro__win_l}>{safeHTML(intro.win.text)}</span>
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
          <CustomButton href={intro.button.href} bgColor="red" textColor="white" isIcon colorIcon="white">
            {intro.button.text}
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

Intro.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
