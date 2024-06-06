import styles from './Sobre.module.css'

import html from './imagens/icon-html.svg'
import css from './imagens/icon-css.svg'
import sql from './imagens/icon-sql.svg'
import avatar from './imagens/avatar.png'

function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
            <img src={avatar} alt="Avatar" className={styles.avatar} />
                
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Juliana Gleice</span> <br />
                    <strong>Dev Full Stack</strong> </p>

                    <p>E.</p>

            
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" /> 
                    <img src={css} alt="Ícone do css" />
                    <img src={sql} alt="Ícone do sql" />
                </div>
            </div>

        </section>
    )
}
export default Sobre;