import React, {useRef} from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./WinnerCard.module.scss";
import Picture from "@/components/baseComponents/gui/picture/Picture";
import {safeHTML} from "@PS/frontend";
import {MouseParallax} from "react-just-parallax";

export default function WinnerCard({className, title, subTitle, bgImg, coins, note, index}) {
  const ref = useRef(null);

  return (
    <div className={classNames(styles.winnerCard, styles[`winnerCard_${index}`], className)} ref={ref}>
      <div className={styles.winnerCard__bg}>
        <Picture {...bgImg} />
        {coins.map((coin, i) => (
          <div
            className={classNames(styles.winnerCard__itemBg, styles[`winnerCard__bgCoin${index + 1}-${i + 1}`])}
            key={`winner-card-coin-${i}`}
          >
            <MouseParallax
              enableOnTouchDevice={false}
              lerpEase={0.03 * (i + 1)}
              isAbsolutelyPositioned
              strength={-0.01 * (i + 1)}
            >
              <Picture {...coin} />
            </MouseParallax>
          </div>
        ))}
      </div>
      <div className={styles.winnerCard__content}>
        <div className={styles.winnerCard__header}>
          <p className={styles.winnerCard__title}>{safeHTML(title)}</p>
          <p className={styles.winnerCard__subTitle}>{safeHTML(subTitle)}</p>
        </div>
        <p className={styles.winnerCard__note}>{safeHTML(note)}</p>
      </div>
    </div>
  );
}

WinnerCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
