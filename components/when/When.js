import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./When.module.scss";
import Picture from "@/components/baseComponents/gui/picture/Picture";
import {when} from "@/constants/copyright";
import {safeHTML} from "@PS/frontend";
import CustomButton from "@/components/customButton/CustomButton";

export default function When({className}) {
  return (
    <div className={classNames(styles.when, className)}>
      <div className={styles.when__content}>
        <div className={styles.when__info}>
          <p className={styles.when__when}>{safeHTML(when.when.text)}</p>
          <div className={styles.when__prize}>
            <p className={styles.when__prizeText}>{safeHTML(when.prize.text)}</p>
            <p className={styles.when__prizeMoney}>{safeHTML(when.prize.money)}</p>
          </div>
          <p className={styles.when__subText}>{safeHTML(when.subtext.text)}</p>
        </div>
        <div className={styles.when__img}>
          <Picture {...when.img} />
        </div>
        <CustomButton className={styles.when__btn} href={when.button.href} bgColor="white" textColor="red" isIcon colorIcon="red">
          {safeHTML(when.button.text)}
        </CustomButton>
      </div>
    </div>
  );
}

When.propTypes = {
  className: PropTypes.string,
};
