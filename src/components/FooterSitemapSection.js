import styles from "@styles/FooterSitemapSection.module.scss";

export default function footerSitemapSection({ links }) {
  let headerTitle = links.at(0).name;
  let linksArr = links.slice(1, -1);

  return (
    <section className={styles.footer_sitemap_section}>
      <div className={styles.footer_sitemap_section_header}>{headerTitle}</div>
      <div className={styles.links_wrapper}>
        {linksArr.map(link => {
          return (
            <a key={link.name} href={link.path}>{link.name}</a>
          )
        })}
      </div>
    </section>
  )
}
