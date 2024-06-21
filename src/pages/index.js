import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SocialLinks from "../components/social-links"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Pablo Picassiette" />
    <div className={styles.textCenter}>
      <h1>Pablo Picassiette</h1>
      <StaticImage
        src="../images/Pablo-picassiette.webp"
        loading="eager"
        width={250}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Logo Pablo"
        style={{ marginBottom: `var(--space-3)` }}
      />
      <p>Developpeur Web Junior, Etudiant en Alternance</p>
      <SocialLinks />
    </div>
  </Layout>
)

export default IndexPage
