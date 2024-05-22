import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagramProject, faLink } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import styles from './projects.module.css'

library.add(faDiagramProject, faLink)

export default function() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{'> Projetos'}</h1>
      </div>

      <div className={styles.projectsContainer}>
        <div className={styles.projectContainer}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '3px', 
            borderBottom: '2px solid #adadad'}}>
            <FontAwesomeIcon
              icon={faDiagramProject}
              width={15}
              height={15}
            />
            <h4>Teste Youx</h4>
          </div>
          <div className={styles.projectContent}>
            <p>Teste qualificatório para a empresa Youx</p>
            <p>
              Sistema cadastral com foco em reproduzir um CRUD de cadastro de pacientes enfermeiros e médicos,
              permite também observar quantos pacientes foram cadastrados em cada estado do Brasil com a biblioteca
              de mapas Leaflet
            </p>
            <p style={{ display: 'flex', flexDirection: 'column' }}>
              <a target='_blank' rel="noreferrer" href="https://github.com/Lucashct/testeyoux-react-font-end"><FontAwesomeIcon icon={faLink} width={12} height={12}/> Repositório Font-End</a> 
              <a target='_blank' rel="noreferrer" href="https://github.com/Lucashct/testeyoux-spring-boot"><FontAwesomeIcon icon={faLink} width={12} height={12}/> Repositório Back-End</a>
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
            <p>Sistema de match making para o jogo League of Legends.</p>
            <p>
              Desenvolvido com React JS, uma plataforma que se conecta API REST disponibilizada pela RIOT GAMES
              permite selecionar 10 jogadores da própria base de dados do jogo e balancear em dois times.
            </p>
            <p style={{ display: 'flex', flexDirection: 'column' }}>
              <a target='_blank' rel="noreferrer" href="https://github.com/Lucashct/PersonalizadaLoL"><FontAwesomeIcon icon={faLink} width={12} height={12}/> Repositório</a> 
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
            <h4>Teste Devnology</h4>
          </div>
          <div className={styles.projectContent}>
            <p>Teste qualificatório da empresa Devnology</p>
            <p>
              Sistema de webscraping com a biblioteca JS puppeteer, o desafio consistia em criar uma página web
              alimentada por um back-end que varria seu website favorito salvando alguns posts em um banco de dados.
            </p>
            <p style={{ display: 'flex', flexDirection: 'column' }}>
              <a target='_blank' rel="noreferrer" href="https://github.com/Lucashct/MyFavBlogsPostApp-Frontend"><FontAwesomeIcon icon={faLink} width={12} height={12}/> Repositório Font-End</a> 
              <a target='_blank' rel="noreferrer" href="https://github.com/Lucashct/MyFavBlogsPostApp-Backend"><FontAwesomeIcon icon={faLink} width={12} height={12}/> Repositório Back-End</a>
            </p>
          </div>
          <div className={styles.techContent}>
            <div>Java Script</div>
            <div>React JS</div>
            <div>Node JS</div>
          </div>
        </div>
      </div>
    </div>
  )
}