import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I am Guan-Tse. A graduate in IT majoring in software development.
          Find more of my projects on my{" "}
          <a href="https://github.com/boss26649561">Github</a>
        </p>
        <p></p>
      </section>
    </Layout>
  );
}
