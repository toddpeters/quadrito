import styles from '../styles.module.css'

export default function Home() {
  return (
    <div className={styles.hello}>
      <head>  
      <title>Quadrito</title>
        <meta property="og:title" content="My page title" key="title" />

      </head>
      <p>Welcome to Quadrito</p>
    </div>
  )
}
