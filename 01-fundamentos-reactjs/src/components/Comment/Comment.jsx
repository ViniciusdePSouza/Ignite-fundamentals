import styles from './Comment.module.css'

import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar';

export function Comment({content, onDeleteComment}) {

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
           <Avatar hasBorder={false} src='https://github.com/theo.png'/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vinícius de Paula</strong>
                            <time title="04 de Janeiro de 2023" dateTime='2023-01-04 16:36:00'>Cerca de 1 hora atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Excluir comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
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