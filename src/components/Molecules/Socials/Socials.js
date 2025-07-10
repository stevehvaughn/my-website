import React from "react"
import * as ReactIcons from 'react-icons/bi'
import { socialLinks } from "@/utils/data"
import styles from "./Socials.module.scss"

export default function Socials() {
  return (
    <div className={styles.socials}>
      <div className={styles.social_header}>Follow me <strong>@stevehvaughn</strong> on all socials!</div>
      <div className={styles.social_links_wrapper}>
        {socialLinks.map(link => {
          let iconName = "BiLogo" + link.name;
          return (
            <a className={styles.social_link} key={link.name} href={link.url} target="_blank" >{React.createElement(ReactIcons[`${iconName}`], { size: 30 })}</a>
          )
        })}
      </div>
    </div>
  )
}
