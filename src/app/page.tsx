"use client"
import Image from 'next/image'
import styles from './page.module.css'
import TimeLine from './components/TimeLine/TimeLine'
import Presentation from './components/Presentation/Presentation'
import Projects from './components/Projects/Projects'
import { useState } from 'react'

import { TEXT_CONTENT } from '@/consts'

export default function Home() {
  const [ isEnglish, setIsEnglish ] = useState(false)

  return (
    <div className={styles.mainContainer}>
      <div className={styles.divLanguage}>
        <div>PT-BR</div>
        <div>
          <label className={styles.switch}>
            <input type="checkbox" checked={isEnglish} onChange={e => setIsEnglish(e.target.checked)}/>
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
        </div>
        <div>EN</div>
      </div>
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
            <p className={`${styles.line1} ${styles.typeAnimationLine1}`}>{isEnglish ? TEXT_CONTENT.title_presentantion.line1.en : TEXT_CONTENT.title_presentantion.line1.pt_br}</p>
            <p className={`${styles.line2} ${styles.typeAnimationLine2}`}>{isEnglish ? TEXT_CONTENT.title_presentantion.line2.en : TEXT_CONTENT.title_presentantion.line2.pt_br}</p>
            <p style={{ width: isEnglish ? '19.6em' : '22em' }} className={`${styles.lastLine} ${styles.typeAnimationLine3}`}>{isEnglish ? TEXT_CONTENT.title_presentantion.line3.en : TEXT_CONTENT.title_presentantion.line3.pt_br}</p>
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
          <Presentation isEnglish={isEnglish}/>
          <div style={{ border: '1px solid #dedede', width: '90%', margin: '15px auto' }}/>
          <TimeLine isEnglish={isEnglish}/>
          <div style={{ border: '1px solid #dedede', width: '90%', margin: '15px auto' }}/>
          <Projects isEnglish={isEnglish}/>
        </div>
      </main>
    </div>
  )
}
