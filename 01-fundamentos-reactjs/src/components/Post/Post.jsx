import styles from './Post.module.css'
import ptBR from 'date-fns/locale/pt-BR';

import { useState } from 'react';

import format from 'date-fns/format'
import { formatDistanceToNow } from 'date-fns'

import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar';

export function Post({ author, content, publishedAt }) {

    const publishedDateFormat = format(new Date(), "dd 'de' LLLL às HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateToNowRelative = formatDistanceToNow(new Date(), {
        locale: ptBR,
        addSuffix: true
    })

    function handleSubmitComment(event) {
        event.preventDefault()

        setComments([...comments, newComment])

        setNewComment('')
    }

    const [comments, setComments] = useState([])

    const [newComment, setNewComment] = useState('')

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.occupation}</span>
                    </div>
                </div>

                <time title={publishedDateFormat} dateTime='2023-01-04 16:36:00'>{publishedDateToNowRelative}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={Math.random()*1000}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={Math.random()*1000}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleSubmitComment} className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea
                    placeholder='Deixe seu comentário'
                    value={newComment}
                    onChange={event => setNewComment(event.target.value)}

                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={Math.random()*1000} content={comment}/>
                })}
            </div>
        </article>
    )
}