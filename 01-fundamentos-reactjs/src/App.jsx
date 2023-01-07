import { Header } from "./components/Header/Header"
import { Post } from "./components/Post/Post"
import { Sidebar } from "./components/SideBar/Sidebar"

import './global.css' 
import styles from './App.module.css'

function App() {
  const post = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/Noah.png',
        name: 'Noah',
        occupation: 'Web Developer'
      },

      content: [
        {type: 'paragraph', content: 'Fala Galera'},
        {type: 'paragraph', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem nisi quod doloremque laboriosam nemo '},
        {type: 'link', content: 'jane.design/doctorcare'},
      ],

      publishedAt: new Date('2023-05-03 20:00:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/ThomasS.png',
        name: 'Jeremiah',
        occupation: 'CTO Peacky Blinders'
      },

      content: [
        {type: 'paragraph', content: 'Fala Galera'},
        {type: 'paragraph', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem nisi quod doloremque laboriosam nemo '},
        {type: 'link', content: 'jane.design/doctorcare'},
      ],

      publishedAt: new Date('2023-05-28 14:23:00')
    },

  ]
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {post.map(post => {
            return (
              <Post
              key={post.id}
              author={post.author}
              content={post.content}
              published={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

export default App
