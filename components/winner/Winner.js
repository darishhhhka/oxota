import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Winner.module.scss";
import {winner} from "@/constants/copyright";
import WinnerCard from "@/components/winnerCard/WinnerCard";
import CustomButton from "@/components/customButton/CustomButton";

export default function Winner({}) {
  return (
    <div className={classNames(styles.winner)}>
      <div className={styles.winner__bg}>
        <div className={styles.winner__shadowBg}></div>
      </div>
      <div className={styles.winner__content}>
        <h2 className={styles.winner__title}>{winner.title}</h2>
        <div className={styles.winner__list}>
          {winner.cards.map((card, index) => (
            <WinnerCard key={`winner-card-${index}`} index={index} {...card} />
          ))}
        </div>
        <CustomButton className={styles.winner__btn} href={winner.button.href} isIcon={false} textColor="black">{winner.button.text}</CustomButton>
      </div>
    </div>
  );
}

Winner.propTypes = {};
