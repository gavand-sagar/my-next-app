"use client"
import styles from './page.module.css'

export default function Home() {
  function handleClick(){
    alert("hh")
  }
  return (
    <main className={styles.main}>
        <span onClick={handleClick}>hiiie</span>
    </main>
  )
}
