import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./About.module.scss";
import {about} from "@/constants/copyright";
import AboutCard from "@/components/aboutCard/AboutCard";
import CustomButton from "@/components/customButton/CustomButton";

export default function About({}) {
  return (
    <div className={classNames(styles.about)}>
      <div className={styles.about__bg}>
        <div className={styles.about__shadowBg}></div>
      </div>
      <div className={styles.about__content}>
        <div className={styles.about__list}>
          {about.cards.map((card, index) => (
            <AboutCard
              key={`about-card-${index}`}
              index={index}
              title={card.title}
              icon={card.icon}
              content={card.content}
            />
          ))}
        </div>
        <CustomButton className={styles.about__btn} href={about.button.href} colorIcon="red">
          {about.button.text}
        </CustomButton>
      </div>
    </div>
  );
}

About.propTypes = {};
