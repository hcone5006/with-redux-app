import { Button } from '@/stories/Button';
import styles from './post.module.scss';

export default function Post(props: any) {

  return (
    <div className={styles.post_card}>
      <h3 className={styles.post_title}>{props.title}</h3>
      <p className={styles.post_body}>{props.body}</p>
      {/* <button
        className={styles.btn_delete}
        onClick={() => {
          props.deletePost(props.id)
        }}
      >Delete</button> */}
      <Button 
        label="Delete" 
        onClick={() => {
            props.deletePost(props.id)
          }}
      />
    </div>
  )
}