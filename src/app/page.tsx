import Image from 'next/image'
import styles from './page.module.css'
import TimeLine from './components/TimeLine/TimeLine'
import Presentation from './components/Presentation/Presentation'
import Projects from './components/Projects/Projects'

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
        <div className={styles.presentationContainerDiv}>
          <div className={styles.presentationDiv}>
            <p className={`${styles.line1} ${styles.typeAnimationLine1}`}>Olá, seja bem vindo ao meu perfil profissional :)</p>
            <p className={`${styles.line2} ${styles.typeAnimationLine2}`}>Sou desevolvedor front end e back end com {`${new Date().getFullYear() - 2021} anos`} de experiência</p>
            <p className={`${styles.lastLine} ${styles.typeAnimationLine3}`}>E você pode encontrar meus contatos aqui!</p>
          </div>
        </div>
        <div className={styles.contactsButtonsContainer}>
          <a href='https://www.linkedin.com/in/lucas-henrique-6108981a4/' target='_blank' rel="noreferrer">
            <Image
              src='./linkedin.svg'
              width={30}
              height={30}
              alt="Picture linkedin link"
            />
          </a>
          <a href='https://github.com/Lucashct' target='_blank' rel="noreferrer">
            <Image
              src='./github.svg'
              width={30}
              height={30}
              alt="Picture github link"
            />
          </a>
          <a href='mailto:lucashct15@hotmail.com' target='_blank' rel="noreferrer">
            <Image
              src='./envelope-solid.svg'
              width={30}
              height={30}
              alt="Picture mailto link"
            />
          </a>
        </div>
      </header>
      
      <main className={styles.contentContainer}>
        <div>
          <Presentation/>
          <div style={{ border: '1px solid #dedede', width: '90%', margin: '15px auto' }}/>
          <TimeLine/>
          <div style={{ border: '1px solid #dedede', width: '90%', margin: '15px auto' }}/>
          <Projects/>
        </div>
      </main>
    </div>
  )
}
