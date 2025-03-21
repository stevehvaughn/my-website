import React from "react";
import * as SiIcons from "react-icons/si";
import styles from "./TechItem.module.scss";

export const TechItem = ({ icon, name }) => {
  const Icon = SiIcons[icon];

  return (
    <div className={styles.techItem}>
      {Icon ? React.createElement(Icon, { size: 24 }) : <span>🚧</span>}
      <span>{name}</span>
    </div>
  );
};
