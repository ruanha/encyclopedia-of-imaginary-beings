import React from "react"

import Header from "../components/header"
import Content from '../components/content'
import Footer from '../components/footer'
import styles from "./index.module.css"

export default function Home() {
  return (
	  <main className={styles.container}>
	  	<Header />
      <Content />
      <Footer />
	  </main>
  )
}
