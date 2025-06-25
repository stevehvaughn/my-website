import { useState } from "react";
import styles from "./TechGroup.module.scss";
import { TechItem } from "@components/Molecules/TechItem/TechItem";

export const TechGroup = ({ items }) => {
  const categories = Object.keys(items);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <div className={styles.techGroupWrapper}>
      <div role="tablist" aria-label="Technology categories" className={styles.tabList}>
        {categories.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={activeTab === category}
            className={`${styles.tabButton} ${activeTab === category ? styles.active : ""}`}
            onClick={() => setActiveTab(category)}
            id={`tab-${category}`}
            aria-controls={`tabpanel-${category}`}
          >
            {category}
          </button>
        ))}
      </div>

      {categories.map((category) => (
        <div
          key={category}
          role="tabpanel"
          id={`tabpanel-${category}`}
          aria-labelledby={`tab-${category}`}
          hidden={activeTab !== category}
          className={styles.panel}
        >
          <div className={styles.techList}>
            {items[category].map((tech) => (
              <TechItem key={tech.name} {...tech} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
