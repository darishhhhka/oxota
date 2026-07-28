import React, {useState} from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./AboutCard.module.scss";
import Picture from "@/components/baseComponents/gui/picture/Picture";
import {safeHTML} from "@PS/frontend";

export default function AboutCard({className, index, title, icon, content}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={classNames(styles.aboutCard, className, styles[`aboutCard_${index}`], isOpen && styles.aboutCard_open)}
      onClick={() => setIsOpen(state => !isOpen)}
    >
      {index === 0 && (
        <>
          <div className={styles.aboutCard__bg}>
            <div className={styles.aboutCard__bgPhone}>
              <Picture {...content.bgPhone}/>
            </div>
          </div>
          <div className={classNames(styles.aboutCard__content, )}>
            <p className={styles.aboutCard__contentTitle}>{safeHTML(content.title)}</p>
            <div className={styles.aboutCard__list}>
              {content.list.map((item, index) => (
                <div
                  className={classNames(styles.aboutCard__text, styles.aboutCard__itemList)}
                  key={`about-list-item_${index}`}
                >
                  <span className={classNames(styles.aboutCard__itemNumber, styles.aboutCard__contentTitle)}>
                    {index + 1}
                  </span>
                  {safeHTML(item.text)}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {index === 1 && (
        <>
          <div className={styles.aboutCard__bg}>
            <div className={styles.aboutCard__bgCrown}>
              <Picture {...content.bgCrown} />
            </div>
            <div className={styles.aboutCard__bgCup}>
              <Picture {...content.bgCup} />
            </div>
          </div>
          <div className={styles.aboutCard__content}>
            <div className={styles.aboutCard__wrapLine}>
              <p className={styles.aboutCard__contentTitle}>{safeHTML(content.title)}</p>
              <p className={styles.aboutCard__text}>{safeHTML(content.description)}</p>
            </div>
            <div className={styles.aboutCard__wrapNote}>
              <div className={styles.aboutCard__icon}>
                <Picture {...content.icon} />
              </div>
              <div>
                <p className={classNames(styles.aboutCard__text, styles.aboutCard__text_b)}>
                  {safeHTML(content.subtext.title)}
                </p>
                <p className={classNames(styles.aboutCard__text_sm, styles.aboutCard__text)}>
                  {safeHTML(content.subtext.description)}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
      {index === 2 && (
        <div className={styles.aboutCard__content}>
          <p className={styles.aboutCard__text}>{safeHTML(content.textLight)}</p>
          <p className={styles.aboutCard__text_b}>{safeHTML(content.textBold)}</p>
        </div>
      )}

      {index === 3 && (
        <div className={styles.aboutCard__content}>
          <div className={styles.aboutCard__list3}>{content.features.map((f, index) => safeHTML(f.text))}</div>
          <div className={styles.aboutCard__tableImg}>
            <Picture {...content.tableImg} />
          </div>
        </div>
      )}
      <div className={styles.aboutCard__cover}>
        <div className={styles.aboutCard__img}>
          <Picture {...icon} />
        </div>
        <p className={styles.aboutCard__coverTitle}>{safeHTML(title)}</p>
      </div>
    </div>
  );
}

AboutCard.propTypes = {
  className: PropTypes.string,
  index: PropTypes.number,
  title: PropTypes.string,
  icon: PropTypes.object,
};
