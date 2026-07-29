import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./App.module.scss";
import Title from "@/components/title/Title";
import {app} from "@/constants/copyright";
import AppCard from "@/components/appCard/AppCard";
import Picture from "@/components/baseComponents/gui/picture/Picture";
import {safeHTML} from "@PS/frontend";
import {baseConsumers} from "@PS/core";

export default function App({className, children}) {

  const handleClick = () => {
    baseConsumers.modalOpen({type:"map"})
  }

  return (
    <div className={classNames(styles.app, className)}>
      <div className={styles.app__bg}>
        <div className={styles.app__shadowBg}></div>
      </div>
      <div className={styles.app__content}>
        <Title className={styles.app__title}>{app.title}</Title>
        <p className={styles.app__subTitle}>{app.subTitle}</p>
        <div className={styles.app__list}>
          {app.cards.map((card, index) => (<AppCard key={`app-card-${index}`} index={index} {...card}/>))}
        </div>
        <div className={styles.app__link} onClick={handleClick}><div className={styles.app__iconLink}><Picture {...app.link.icon}/></div>{safeHTML(app.link.label)}</div>
      </div>
    </div>
  );
}

App.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
