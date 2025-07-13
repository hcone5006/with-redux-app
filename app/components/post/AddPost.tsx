import { useState } from 'react';
import styles from './post.module.scss';

export default function AddPost(props: { addPost: (arg0: string, arg1: string) => void; }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    props.addPost(title, body);
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.add_post_form}>
      <h2>Add new Post</h2>
      <div className={styles.input_container}>
        <label htmlFor="title">Title</label>
        <input 
          type="text" 
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="body">Body</label>
        <textarea 
          id="body"
          name="body" 
          value={body} 
          onChange={(e) => setBody(e.target.value)}
          >
          </textarea>
          <button type="submit" className={styles.btn_submit}>Add post</button>
      </div>
    </form>
  )
}