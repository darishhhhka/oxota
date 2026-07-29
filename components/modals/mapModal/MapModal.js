import React, {useState} from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./MapModal.module.scss";
import CustomModal from "@/components/baseComponents/gui/customModal/CustomModal";
import Title from "@/components/title/Title";
import {modal} from "@/constants/copyright";
import {safeHTML} from "@PS/frontend";

export default function MapModal({className, children}) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(modal.addresses);

  const textChange  = (e) => {
    setQuery(e.target.value);
    setResult(res => result.filter((address) => address.toLowerCase().includes(query.toLowerCase())));
  }

  return (
    <CustomModal>
      <div className={classNames(styles.mapModal, className)}>
        <Title>{modal.title}</Title>
        <p className={styles.mapModal__subTitle}>{safeHTML(modal.subTitle)}</p>
        <div className={styles.mapModal__content}>
          <div className={styles.mapModal__mapWrap}>
            <iframe
              className={styles.mapModal__map}
              src="https://yandex.ru/map-widget/v1/?ll=37.755531%2C55.746821&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE2NjM5MxIa0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAiCg14eBZCFfUFX0I%2C&z=10.96"
            ></iframe>
          </div>
          <input className={styles.mapModal__input} type={modal.input.type} placeholder={modal.input.placeholder} onChange={textChange} value={query} />
          <div>{result.map((adress, index) => (safeHTML(adress))) }</div>
        </div>
      </div>
    </CustomModal>
  );
}

MapModal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
