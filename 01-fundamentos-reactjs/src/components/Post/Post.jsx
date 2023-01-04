import styles from './Post.module.css'

import { Comment } from '../Comment/Comment'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/ViniciusdePSouza.png" />
                    <div className={styles.authorInfo}>
                        <strong>Vinícius de Paula</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="04 de Janeiro de 2023" dateTime='2023-01-04 16:36:00'>Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Fala Galera</p>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem nisi quod doloremque laboriosam nemo </p>
                <p> -- <a href="">jane.design/doctorcare</a> </p>
                <p> <a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea
                    placeholder='Deixe seu comentário'
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}