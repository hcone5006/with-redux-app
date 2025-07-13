import styles from './post.module.scss';

export default function Post(props: any) {

  return (
    <div className={styles.post_card}>
      <h3 className={styles.post_title}>{props.title}</h3>
      <h6>{props.id}</h6>
      <p className={styles.post_body}>{props.body}</p>
      <button
        className={styles.btn_delete}
        onClick={() => {
          props.deletePost(props.id)
        }}
      >Delete</button>
    </div>
  )
}