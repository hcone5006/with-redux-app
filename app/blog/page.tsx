"use client";
import { useEffect, useState } from "react";
import AddPost from "../components/post/AddPost";
import Post from "../components/post/Post";
import styles from "./blog.module.scss";

export interface PostObject {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<PostObject[]>([]);

  const fetchPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      // .catch((error) => console.error(error))
  }

  useEffect(() => {
    fetchPosts()
  }, []);

  const addPost = (title: string, body: string) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      setPosts((prevPosts) => [data, ...prevPosts])
    })
  };

  const deletePost = (id: number) => {
    console.log(id);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE'
    })
    .then((response) => {
      if(response.status === 200) {
        setPosts(
          posts.filter((post) => {
            return post.id != id;
          })
        )
      }
    })
  };

  return (
    <main>
      <h1 className={styles.container_title}>Consuming REST api tutorial</h1>
      <AddPost addPost={addPost} />
      <section className={styles.posts_container}>
        <h2>Posts</h2>
        {posts.map((post: PostObject) => 
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            deletePost={deletePost}
          ></Post>
        )}
      </section>
    </main>
  )
}
