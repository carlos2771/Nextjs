import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import styles from "../public/styles/layout.module.css"
import Link from 'next/link'
import utilStyles from "../public/styles/utils.module.css"


export default function Layout({ children, title, home }) {
  const name = "Carlos"
  console.log(home);
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>
          {title}
        </title>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/broly.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/img/broly.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <p>no hay nada</p>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <nav>
          <Link href="/">
            Inicio | 
          </Link>
          <Link href="/blog">
            Blog |
          </Link>
          <Link href="/contac">
            Contacto
          </Link>
        </nav>
      <main>
        {children}
      </main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}
