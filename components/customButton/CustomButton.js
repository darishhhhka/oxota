import React, {forwardRef, useEffect, useState} from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import Button from "../baseComponents/gui/button/Button";
import Icon from "../baseComponents/gui/icon/Icon";
import styles from "./CustomButton.module.scss";
import {safeHTML} from "@PS/frontend";
import {useButtonControl} from "@/components/customButton/utils/hooks/useButtonControl";
import Picture from "@/components/baseComponents/gui/picture/Picture";
import {lightning} from "@/constants/copyright";

const CustomButton = forwardRef(function (
  {
    bgColor = "white",
    textColor = "red",
    isIcon = true,
    colorIcon = "red",
    className,
    children,
    text,
    img,
    icon,
    type = "button",
    onClick: click,
    disabled,
    tag,
    href,
    target,
    timeout,
    eventsData,
    events,
    preventDefault,
    stopPropagation,
    ...rest
  },
  ref,
) {
  const {onClick, isDisabled} = useButtonControl({
    onClick: click,
    timeout,
    preventDefault,
    stopPropagation,
    events,
    eventsData,
  });

  const customButtonClasses = (className ?? "")
    .split(" ")
    .filter(className => className.includes("customButton"))
    .map(className => styles[className]);

  const otherClasses = (className ?? "").split(" ").filter(className => !className.includes("customButton"));

  const iconLightning = colorIcon === "red" ? lightning.red : lightning.white;

  return (
    <Button
      ref={ref}
      type={type}
      className={classNames(
        styles.customButton,
        ...otherClasses,
        ...customButtonClasses,
        styles[`customButton_bg_${bgColor}`],
        styles[`customButton_text_${textColor}`],
      )}
      onClick={onClick}
      disabled={isDisabled || disabled}
      tag={tag}
      href={href}
      target={target}
      {...rest}
    >
      <a className={styles.customButton__link} href="http://stoloto.ru/" target="_blank">
        {isIcon && (
          <div className={styles.customButton__icon}>
            <Picture {...iconLightning} />
          </div>
        )}
        {children}
      </a>
    </Button>
  );
});

CustomButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default CustomButton;
