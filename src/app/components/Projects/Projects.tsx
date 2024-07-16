import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagramProject, faLink } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import styles from './projects.module.css'
import { TEXT_CONTENT } from '@/consts'

library.add(faDiagramProject, faLink)

export default function Projects({isEnglish}: {isEnglish:boolean}) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{isEnglish ? TEXT_CONTENT.projects.title.en : TEXT_CONTENT.projects.title.pt_br}</h1>
      </div>

      <div className={styles.projectsContainer}>
        <div className={styles.projectsContainerRow1}>
          <div className={styles.projectContainer}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '3px', 
              borderBottom: '2px solid #adadad'}}>
              <FontAwesomeIcon
                icon={faDiagramProject}
                width={15}
                height={15}
              />
              <h4>{isEnglish ? TEXT_CONTENT.projects.project1.title.en : TEXT_CONTENT.projects.project1.title.pt_br}</h4>
            </div>
            <div className={styles.projectContent}>
              <p>{isEnglish ? TEXT_CONTENT.projects.project1.p1.en : TEXT_CONTENT.projects.project1.p1.pt_br}</p>
              <p>
              {isEnglish ? TEXT_CONTENT.projects.project1.p2.en : TEXT_CONTENT.projects.project1.p2.pt_br}
              </p>
              <p style={{ display: 'flex', flexDirection: 'column' }}>
                <a target='_blank' rel="noreferrer" href="https://github.com/Lucashct/testeyoux-react-font-end"><FontAwesomeIcon icon={faLink} width={12} height={12}/>{isEnglish ? TEXT_CONTENT.projects.project1.repository1.en : TEXT_CONTENT.projects.project1.repository1.pt_br}</a> 
                <a target='_blank' rel="noreferrer" href="https://github.com/Lucashct/testeyoux-spring-boot"><FontAwesomeIcon icon={faLink} width={12} height={12}/>{isEnglish ? TEXT_CONTENT.projects.project1.repository2.en : TEXT_CONTENT.projects.project1.repository2.pt_br}</a>
              </p>
            </div>
            <div className={styles.techContent}>
              <div>Java Script</div>
              <div>React JS</div>
              <div>Spring Boot</div>
            </div>
          </div>
          
          <div className={styles.projectContainer}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '3px',
              borderBottom: '2px solid #adadad'}}>
              <FontAwesomeIcon
                icon={faDiagramProject}
                width={15}
                height={15}
              />
              <h4>Match Making</h4>
            </div>
            <div className={styles.projectContent}>
              <p>{isEnglish ? TEXT_CONTENT.projects.project2.p1.en : TEXT_CONTENT.projects.project2.p1.pt_br}</p>
              <p>
              {isEnglish ? TEXT_CONTENT.projects.project2.p2.en : TEXT_CONTENT.projects.project2.p2.pt_br}
              </p>
              <p style={{ display: 'flex', flexDirection: 'column' }}>
                <a target='_blank' rel="noreferrer" href="https://github.com/Lucashct/PersonalizadaLoL"><FontAwesomeIcon icon={faLink} width={12} height={12}/>{isEnglish ? TEXT_CONTENT.projects.project2.repository1.en : TEXT_CONTENT.projects.project2.repository1.pt_br}</a> 
              </p>
            </div>
            <div className={styles.techContent}>
              <div>Java Script</div>
              <div>React JS</div>
            </div>
          </div>
          
          <div className={styles.projectContainer}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '3px',
              borderBottom: '2px solid #adadad'}}>
              <FontAwesomeIcon
                icon={faDiagramProject}
                width={15}
                height={15}
              />
              <h4>{isEnglish ? TEXT_CONTENT.projects.project3.title.en : TEXT_CONTENT.projects.project3.title.pt_br}</h4>
            </div>
            <div className={styles.projectContent}>
              <p>{isEnglish ? TEXT_CONTENT.projects.project3.p1.en : TEXT_CONTENT.projects.project3.p1.pt_br}</p>
              <p>
                {isEnglish ? TEXT_CONTENT.projects.project3.p2.en : TEXT_CONTENT.projects.project3.p2.pt_br}
              </p>
              <p style={{ display: 'flex', flexDirection: 'column' }}>
                <a target='_blank' rel="noreferrer" href="https://github.com/Lucashct/MyFavBlogsPostApp-Frontend"><FontAwesomeIcon icon={faLink} width={12} height={12}/>{isEnglish ? TEXT_CONTENT.projects.project3.repository1.en : TEXT_CONTENT.projects.project3.repository1.pt_br}</a> 
                <a target='_blank' rel="noreferrer" href="https://github.com/Lucashct/MyFavBlogsPostApp-Backend"><FontAwesomeIcon icon={faLink} width={12} height={12}/>{isEnglish ? TEXT_CONTENT.projects.project3.repository2.en : TEXT_CONTENT.projects.project3.repository2.pt_br}</a>
              </p>
            </div>
            <div className={styles.techContent}>
              <div>Java Script</div>
              <div>React JS</div>
              <div>Node JS</div>
            </div>
          </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
          <div className={styles.projectContainer}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '3px',
              borderBottom: '2px solid #adadad'}}>
              <FontAwesomeIcon
                icon={faDiagramProject}
                width={15}
                height={15}
              />
              <h4>{TEXT_CONTENT.projects.project4.title}</h4>
            </div>
            <div className={styles.projectContent}>
              <p>{isEnglish ? TEXT_CONTENT.projects.project4.p1.en : TEXT_CONTENT.projects.project4.p1.pt_br}</p>
              <p>
                {isEnglish ? TEXT_CONTENT.projects.project4.p2.en : TEXT_CONTENT.projects.project4.p2.pt_br}
              </p>
              <p style={{ display: 'flex', flexDirection: 'column' }}>
                <a target='_blank' rel="noreferrer" href="https://github.com/Lucashct/Coust_Front-End"><FontAwesomeIcon icon={faLink} width={12} height={12}/>{isEnglish ? TEXT_CONTENT.projects.project4.repository1.en : TEXT_CONTENT.projects.project4.repository1.pt_br}</a> 
                <a target='_blank' rel="noreferrer" href="https://github.com/Lucashct/Coust_Back-end"><FontAwesomeIcon icon={faLink} width={12} height={12}/>{isEnglish ? TEXT_CONTENT.projects.project4.repository2.en : TEXT_CONTENT.projects.project4.repository2.pt_br}</a>
                <a target='_blank' rel="noreferrer" href="https://coust.netlify.app/"><FontAwesomeIcon icon={faLink} width={12} height={12}/>{isEnglish ? TEXT_CONTENT.projects.project4.prod_link.en : TEXT_CONTENT.projects.project4.prod_link.pt_br}</a>
              </p>
            </div>
            <div className={styles.techContent}>
              <div>Vue 3</div>
              <div>Node JS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}