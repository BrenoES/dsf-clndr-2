import Head from 'next/head'
import React, { Fragment, useState } from 'react'
import AppLogo from '../component/AppLogo'
import FacebookLogo from '../component/FacebookLogo'
import TheeDotsLogo from '../component/TheeDotsLogo'
import TwitterLogo from '../component/TwitterLogo'
import YoutubeLogo from '../component/YoutubeLogo'

import styles from '../styles/Home.module.scss'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <Head>
        <title>Dsf clndr 2</title>
      </Head>

      <div className={styles.container}>
        <header className={`${styles.header} ${isOpen && styles.open}`} >
          <button onClick={() => setIsOpen(!isOpen)}>
            <TheeDotsLogo className={styles.treeDotsLogo} />
          </button>
          <nav className={styles.menu}>
            <section>
              <AppLogo className={styles.appLogo} />
              <div>
                <h2>zutterman</h2>
                <h4>Measure Tapes</h4>
              </div>
            </section>
            <ul>
              <li><a href="#">ABOUT US</a></li>
              <li><a href="#">MODELS</a></li>
              <li><a href="#">GUARANTEE</a></li>
            </ul>
          </nav>
        </header>

        <section className={styles.mensureRoll}>
          <h2>Meansuring everything</h2>
          <figure />
        </section >
        <section className={styles.mensure}>
          <div className={styles.presentation}>
            <div className={styles.mensureRollPicBg} />
            <h2>We are Leader in Measure Tapes</h2>
            <p>There are 5x the circumference of planet earth in metric tapes.</p>
          </div>
          <figure className={styles.imageBg}></figure>
        </section>
        <footer className={styles.footer}>
          <aside>
            <h3>Follow Us</h3>
            <a href="#">
              <FacebookLogo />
            </a>
            <a href="#">
              <YoutubeLogo />
            </a>
            <a href="#">
              <TwitterLogo />
            </a>
          </aside>
          <aside style={{ padding: "0 2rem" }}>
            <h3>Contact</h3>
            <p>2490 Leisure Lane
              San Luis Obispo
              California</p>
          </aside>
        </footer>
      </div>
    </Fragment>
  )
}
