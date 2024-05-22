import styles from './presentation.module.css'

export default function Presentation() {

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{'> Resumo'}</h1>
        <div className={styles.resume}>
          <p>Olá! Sou o Lucas, um apaixonado por tecnologia desde a adolescência. Minha formação técnica em desenvolvimento de sistemas pelo Instituto de Tecnologia do Piauí me proporcionou uma base sólida em programação e design de sistemas.</p>
          <p>Tenho {`${new Date().getFullYear() - 2021} anos`} anos de experiência em desenvolvimento web, atuando tanto no front-end quanto no back-end. Trabalho com tecnologias como HTML, CSS, JavaScript, Node.js e Java, sempre buscando criar soluções eficazes e inovadoras.</p>
          <p>O que mais amo na minha profissão são os desafios que ela oferece. Superar obstáculos e ver os projetos ganharem vida me enche de entusiasmo e me motiva a continuar aprendendo e crescendo.</p>
          <p>Se você compartilha essa paixão por tecnologia ou tem um projeto desafiador, vamos nos conectar e criar algo incrível juntos!</p>
        </div>
      </div>
    </div>
  )
}