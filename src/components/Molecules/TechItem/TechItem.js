import React from "react";
import * as SiIcons from "react-icons/si";
import styles from "./TechItem.module.scss";

export const TechItem = ({ icon, name }) => {
  const Icon = SiIcons[icon];

  return (
    <span className={styles.techTag}>
      {Icon ? React.createElement(Icon, { size: 24 }) : <span>🚧</span>}
      {name}
    </span>
  );
};
