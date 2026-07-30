import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Footer.module.scss";
import {footer} from "@/constants/copyright";
import Picture from "@/components/baseComponents/gui/picture/Picture";
import {safeHTML} from "@PS/frontend";

export default function Footer() {
  return (
    <div className={classNames(styles.footer)}>
      <div className={styles.footer__bg}></div>
      <div className={styles.footer__content}>
        <p className={styles.footer__news}>{safeHTML(footer.news)}</p>
        <a {...footer.linkLoto} className={styles.footer__lotoLogo}>
          <Picture {...footer.logo100Loto} />
        </a>
        <div className={styles.footer__socialMedia}>
          {footer.socialMedia.map((icon, index) => (
            <a
              href={icon.link}
              target="_blank"
              className={styles.footer__socialMediaImg}
              key={`footer-socal-media-${index}`}
            >
              <Picture {...icon} />
            </a>
          ))}
        </div>
        <div className={styles.footer__downloadWrap}>
          <div className={styles.footer__downloadInfo}>
            <p className={classNames(styles.footer__downloadText, styles.footer__downloadText_desk)}>
              {safeHTML(footer.downloadText.desk)}
            </p>
            <p className={classNames(styles.footer__downloadText, styles.footer__downloadText_mob)}>
              {safeHTML(footer.downloadText.mob.title)}
              <span className={styles.footer__downloadSubText}>{safeHTML(footer.downloadText.mob.subTitle)}</span>
            </p>
            <div className={styles.footer__download}>
              <div className={styles.footer__downloadIcons}>
                {footer.downloadButton.icons.map((icon, index) => (
                  <div className={styles.footer__downloadIcon}>
                    <Picture key={`footer-phone-icon-${index}`} {...icon} />
                  </div>
                ))}
              </div>

              {footer.downloadButton.text}
              {/*<Picture {...footer.download} />*/}
            </div>
          </div>
          <div className={styles.footer__qr}>
            <Picture {...footer.qr} />
          </div>
        </div>
        <p className={styles.footer__copyright}>{safeHTML(footer.copyright)}</p>
        <div className={styles.footer__org}>
          <div className={styles.footer__orgImg}>
            <Picture {...footer.organizators.icon} />
          </div>
          {safeHTML(footer.organizators.text)}
        </div>
        <p className={styles.footer__note}>{safeHTML(footer.note)}</p>
      </div>
    </div>
  );
}

Footer.propTypes = {};
