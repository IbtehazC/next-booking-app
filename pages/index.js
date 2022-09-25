import Head from "next/head";
import styles from "../styles/Home.module.css";
import HomeComponent from "../components/HomeComponent";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <HomeComponent />
      </Layout>
    </div>
  );
}
