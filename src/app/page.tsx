import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <header className={styles.mainHeader}>
        <div className={styles.completeDiv}>
        </div>
        <div className={styles.titleContainer}>
          <div className={styles.titleBox}>
            <span>Lucas H.</span>            
            <p>Full Stack Developer</p>
          </div>
        </div>
        <div className={styles.presentationDiv}>
          <p className={`${styles.line1} ${styles.typeAnimationLine1}`}>Olá, seja bem vindo ao meu perfil profissional :)</p>
          <p className={`${styles.line2} ${styles.typeAnimationLine2}`}>Sou desevolvedor front end e back end com {`${new Date().getFullYear() - 2021} anos`} de experiência</p>
          <p className={`${styles.lastLine} ${styles.typeAnimationLine3}`}>E você pode encontrar meus contatos aqui!</p>
        </div>
      </header>
      
      <main>
        
      </main>
    </div>
  )
}
