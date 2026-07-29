import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Winner.module.scss";
import {winner} from "@/constants/copyright";
import WinnerCard from "@/components/winnerCard/WinnerCard";
import CustomButton from "@/components/customButton/CustomButton";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.css"
import Picture from "@/components/baseComponents/gui/picture/Picture";
import {Navigation} from "swiper/modules";
import Title from "@/components/title/Title";

export default function Winner({}) {

  const settingsSwiper = {
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    modules: [Navigation],
    navigation: {
      prevEl: "#arrow-left",
      nextEl: "#arrow-right",
    },
    className: styles.winner__swiper
  }

  return (
    <div className={classNames(styles.winner)}>
      <div className={styles.winner__bg}>
        <div className={styles.winner__shadowBg}></div>
      </div>
      <div className={styles.winner__content}>
        <Title className={styles.winner__title}>{winner.title}</Title>
        <div className={classNames(styles.winner__list, styles.winner__list_desk)}>
          {winner.cards.map((card, index) => (
            <WinnerCard key={`winner-card-${index}`} index={index} {...card} />
          ))}
        </div>
        <div className={classNames(styles.winner__list, styles.winner__list_mob)}>
          <Swiper {...settingsSwiper}>
            {winner.cards.map((card, index) => (
              <SwiperSlide key={`winner-card-${index}`}>
                <WinnerCard index={index} {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.winner__navigation}>
            <div id="arrow-left" className={classNames(styles.winner__arrow, styles.winner__arrow_left)}>
              <Picture {...winner.arrow}/>
            </div>
            <div id="arrow-right" className={classNames(styles.winner__arrow, styles.winner__arrow_right)}>
              <Picture {...winner.arrow}/>
            </div>
          </div>
        </div>
        <CustomButton className={styles.winner__btn} href={winner.button.href} isIcon={false} textColor="black">
          {winner.button.text}
        </CustomButton>
      </div>
    </div>
  );
}

Winner.propTypes = {};
