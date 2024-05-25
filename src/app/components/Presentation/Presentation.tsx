import styles from './presentation.module.css'
import { TEXT_CONTENT } from '@/consts'

export default function Presentation({ isEnglish }: {isEnglish: boolean}) {

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{isEnglish ? TEXT_CONTENT.presentation.title.en : TEXT_CONTENT.presentation.title.pt_br}</h1>
        <div className={styles.resume}>
          <p>{isEnglish ? TEXT_CONTENT.presentation.p1.en : TEXT_CONTENT.presentation.p1.pt_br}</p>
          <p>{isEnglish ? TEXT_CONTENT.presentation.p2.en : TEXT_CONTENT.presentation.p2.pt_br}</p>
          <p>{isEnglish ? TEXT_CONTENT.presentation.p3.en : TEXT_CONTENT.presentation.p3.pt_br}</p>
          <p>{isEnglish ? TEXT_CONTENT.presentation.p4.en : TEXT_CONTENT.presentation.p4.pt_br}</p>
        </div>
      </div>
    </div>
  )
}