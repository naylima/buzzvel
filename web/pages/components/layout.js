import styles from "../../styles/Layout.module.css"

export default function Layout({children}) {
  return (
    <main className={styles.wrapper}>{children}</main>
  )
}