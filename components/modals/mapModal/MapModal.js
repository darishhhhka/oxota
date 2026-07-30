import React, {useState} from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./MapModal.module.scss";
import CustomModal from "@/components/baseComponents/gui/customModal/CustomModal";
import Title from "@/components/title/Title";
import {modal} from "@/constants/copyright";
import {safeHTML} from "@PS/frontend";
import Picture from "@/components/baseComponents/gui/picture/Picture";
import {baseConsumers} from "@PS/core";
import Scroll from "@/components/baseComponents/gui/scroll/Scroll";

export default function MapModal({className, children}) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(modal.addresses);
  const [isFocus, setFocus] = useState(false);

  const textChange = e => {
    const value = e.target.value;
    setQuery(value);
    setResult(res => modal.addresses.filter(address => address.toLowerCase().includes(value.toLowerCase())));
  };

  return (
    <CustomModal>
      <div className={classNames(styles.mapModal, className)}>
        <div onClick={() => baseConsumers.modalClose({type: "map"})} className={styles.mapModal__close}>
          <Picture {...modal.crossIcon} />
        </div>
        <div className={styles.mapModal__wrap}>
          <Title className={styles.mapModal__title}>{modal.title}</Title>
          <p className={styles.mapModal__subTitle}>{safeHTML(modal.subTitle)}</p>
          <div className={styles.mapModal__content}>
            <div className={styles.mapModal__mapWrap}>
              <iframe
                className={styles.mapModal__map}
                src="https://yandex.ru/map-widget/v1/?ll=37.755531%2C55.746821&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE2NjM5MxIa0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAiCg14eBZCFfUFX0I%2C&z=10.96"
              ></iframe>
            </div>
            <div className={styles.mapModal__search}>
              <input
                className={styles.mapModal__input}
                type={modal.input.type}
                placeholder={modal.input.placeholder}
                onChange={textChange}
                value={query}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
              />
              <div className={classNames(styles.mapModal__adresses, isFocus && styles.mapModal__adresses_active)}>
                <Scroll>
                  {result.map((adress, index) => (
                    <div onClick={() => setQuery(adress)}>{safeHTML(adress)}</div>
                  ))}
                </Scroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  );
}

MapModal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
