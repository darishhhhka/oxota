import React, {useEffect, useRef} from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Promo.module.scss";
import Title from "@/components/title/Title";
import {promo} from "@/constants/copyright";
import CustomButton from "@/components/customButton/CustomButton";

export default function Promo() {
  const videoWrap = useRef();

  useEffect(() => {
    const callback = (entries, observer) => {
      const video = videoWrap.current;
      video.play();
    };

    const observer = new IntersectionObserver(callback);
    observer.observe(videoWrap.current);
  });

  return (
    <div className={classNames(styles.promo)}>
      <div className={styles.promo__bg}>
        <div className={styles.promo__shadowBg}></div>
      </div>
      <div className={styles.promo__content}>
        <Title className={styles.promo__title}>{promo.title}</Title>
        <div className={styles.promo__videoWrap}>
          <video className={styles.promo__video} {...promo.video.attr} ref={videoWrap}>
            {promo.video.sources.map((item, i) => (
              <source key={`promo-video-source-${i}`} {...item} />
            ))}
          </video>
        </div>
        <CustomButton className={styles.promo__btn} href={promo.button.href}>
          {promo.button.text}
        </CustomButton>
      </div>
    </div>
  );
}

Promo.propTypes = {};
