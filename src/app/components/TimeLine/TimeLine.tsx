import styles from './timeLine.module.css'
import { TEXT_CONTENT } from '@/consts'

export default function TimeLine({isEnglish}: {isEnglish: boolean}) {
  return (
    <div className={styles.container}>
      <div className={styles.title} id='time-line'>
        <h1>{'> Minha experiência / Formação'}</h1>
      </div>

      <div className={styles.timeLineContainer}>
        <div className={styles.checkpoint}>
          <div className={styles.descriptionsContainer}>
            <h2>{isEnglish ? TEXT_CONTENT.experience.square1.title.en : TEXT_CONTENT.experience.square1.title.pt_br}</h2>
            <h4>{isEnglish ? TEXT_CONTENT.experience.square1.sub_title.en : TEXT_CONTENT.experience.square1.sub_title.pt_br}</h4>
            <p>{isEnglish ? TEXT_CONTENT.experience.square1.description.en : TEXT_CONTENT.experience.square1.description.en}</p>
          </div>
        </div>

        <div className={styles.checkpoint}>
          <div className={styles.descriptionsContainer}>
            <h2>{isEnglish ? TEXT_CONTENT.experience.square2.title.en : TEXT_CONTENT.experience.square2.title.pt_br}</h2>
            <h4>{isEnglish ? TEXT_CONTENT.experience.square2.sub_title.en : TEXT_CONTENT.experience.square2.sub_title.pt_br}</h4>
            <p>{isEnglish ? TEXT_CONTENT.experience.square2.description.en : TEXT_CONTENT.experience.square2.description.en}</p>
          </div>
        </div>

        <div className={styles.checkpoint}>
          <div className={styles.descriptionsContainer}>
            <h2>{isEnglish ? TEXT_CONTENT.experience.square3.title.en : TEXT_CONTENT.experience.square3.title.pt_br}</h2>
            <h4>{isEnglish ? TEXT_CONTENT.experience.square3.sub_title.en : TEXT_CONTENT.experience.square3.sub_title.pt_br}</h4>
            <p>{isEnglish ? TEXT_CONTENT.experience.square3.description.en : TEXT_CONTENT.experience.square3.description.en}</p>
          </div>
        </div>
      </div>
    </div>
  )
}