import styles from './Presentation.module.css'
export default function Presentation() {
    return <section className={styles.section}>
        <h1 className='title'> Présentation</h1>
        <div className='container'>
            <span>
                C'est quoi MVVB?
            </span>
            <p>
                Le plus grand événement de l'année est presque arrivé. Comme le veut la tradition, nous organisons de 
                nouveau mvvb pour rassembler et sensibiliser nos invites sur comment Mieux Vivre․ c’est un lieu idéal 
                pour des personnes soucieuses de leur bien être.
            </p>
            <p>
                Une fois de plus, nous nous rencontrons en pensant que le soutien mutuel et la force unie peuvent nous 
                être bénéfiques à tous. Venez nous rejoindre 
            </p>
            <div className={styles.buttons}>
                <button type='button'>Participer</button>
                <button type='button'>Plus de details</button>
            </div>
        </div>
    </section>
}