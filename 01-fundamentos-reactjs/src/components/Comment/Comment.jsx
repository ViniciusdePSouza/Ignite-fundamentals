import styles from './Comment.module.css'

import { Trash, ThumbsUp } from 'phosphor-react'

export function Comment() {

    return (
        <div className={styles.comment}>
            <img src="https://github.com/ViniciusdePSouza.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vinícius de Paula</strong>
                            <time title="04 de Janeiro de 2023" dateTime='2023-01-04 16:36:00'>Cerca de 1 hora atrás</time>
                        </div>

                        <button title="Excluir comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns !</p>
                </div>
                <footer>
                    <button>
                    <ThumbsUp size={20} />
                    Aplaudir <span>02</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}