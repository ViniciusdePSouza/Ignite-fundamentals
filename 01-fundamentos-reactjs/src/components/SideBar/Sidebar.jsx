import styles from './Sidebar.module.css';

import devCover from '../../assets/developer-cover.avif';
import pencil from '../../assets/pencil.svg'


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={devCover} alt="" />

            <div className={styles.profile}>
                <img className={styles.avatar} src='https://github.com/ViniciusdePSouza.png' />

                <strong>Vinícius de Paula</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <img className={styles.pencil} src={pencil} alt="" />
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    )
}