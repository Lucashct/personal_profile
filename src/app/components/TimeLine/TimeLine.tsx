import styles from './timeLine.module.css'

export default function TimeLine() {
  return (
    <div className={styles.container}>
      <div className={styles.title} id='time-line'>
        <h1>{'> Minha experiência / Formação'}</h1>
      </div>

      <div className={styles.timeLineContainer}>
        <div className={styles.checkpoint}>
          <div className={styles.descriptionsContainer}>
            <h2>Formação Técnica em Desenvolvimento de Sistemas</h2>
            <h4>Instituto Federal do Piauí / 2019 - 2021</h4>
            <p>Curso técnico voltado para programação e desenvolvimento de sistemas em geral.</p>
          </div>
        </div>

        <div className={styles.checkpoint}>
          <div className={styles.descriptionsContainer}>
            <h2>Desenvolvedor Full Stack</h2>
            <h4>Concept Tecnlogia e Eng. de Software / 2021 - Atualmente</h4>
            <p>Atuando como Desenvolvedor Full Stack utilizando tecnologias como JavaScript, Java, MySQL, HTML e CSS</p>
          </div>
        </div>

        <div className={styles.checkpoint}>
          <div className={styles.descriptionsContainer}>
            <h2>Formação Superior em Análise e Desenvolvimento de Sistemas</h2>
            <h4>Unifacid Wyden / 2023 - Atualmente</h4>
            <p>Curso superior voltado a programação, projetos e Desenvolvimento de Software.</p>
          </div>
        </div>
      </div>
    </div>
  )
}