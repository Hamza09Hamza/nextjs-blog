import styles from '../styles/SignIn.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <img className={styles.floatings1} src='./controller.png' />
      <img className={styles.floatings2} src='./mouse.png' />
        <div className={styles.card}>
            <img src='/logo.png' />
            <h1>Se Connecter</h1>
            <input placeholder='Email' />
            <input placeholder='Mot de Passe' />   
            <a href="" className={styles.btn}>Se Connecter</a>
            <div className={styles.line}></div>
            <div className={styles.btnsw}>
              <div className={styles.btnw}><img src='./google.png' /></div>
              <div className={styles.btnw}><img src='./facebook.png' /></div>
              <div className={styles.btnw}><img src='./apple-logo.png' /></div>
            </div>           
        </div>
        
    </div>
  )
}
