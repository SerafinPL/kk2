import Head from "next/head";
import React, { useState } from "react";

import styles from "../styles/Home.module.scss";

import SietHeader from "components/Header/siteHeader";
import Bio from "components/Bio/Bio";
import ContactForm from "components/ContactForm/ContactForm";
import Footer from "components/Footer/Footer";
import GalleryView from "../../components/GalleryMode/GalleryView";


const Home = (props) => {

  const [drawerState, setDrawerState] = useState(false);

  const clickDrawerHandler = () => {
    setDrawerState(!drawerState);
  }

  return (
    <div className={styles.container} >
      <Head>
        <title>Anita Machura</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Strona malarstwa Anity Mchury znakomitej artystki młodego pokolenia"
        />
        <meta
          name="author"
          content="Code: Kuba Koder , Design: Anita Machura"
        />

        <link href="https://fonts.googleapis.com/css2?family=Eczar:wght@400;500;700&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favico.png" />

      </Head>
      <SietHeader clicked={clickDrawerHandler} state={drawerState} />

      <div className={styles.secondLayer} onClick={() => setDrawerState(false)}>
        <GalleryView blured={drawerState}/> 
        <Bio blured={drawerState} />
        <ContactForm blured={drawerState} />
        <Footer blured={drawerState} />
      </div>
    </div>
  );
};

export default Home;

