import React from 'react';
import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from './LinkButton';
function Home() {
    return (
        <section className={styles.home_container}>
            <h1>
                Bem-vindo ao <span>Costs</span>
            </h1>
            <p>Gerencie os seus projetos agora mesmo!</p>
           <LinkButton to='/newproject' text='Criar novo projeto' />
            <img src={savings} alt='costs'></img>
        </section>
    )
}
export default Home;