import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
  const postElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

  const newPostElement = React.createRef(); // create reference with textarea

  const addPost = () => {
    props.addPost();
  }

  const onchangeTextArea = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
      <div className={c.postBlock}>
        <h3>My Posts</h3>
        <div>
          <div>
            <textarea onChange={onchangeTextArea} ref={newPostElement} value={props.newPostText}/>
          </div>
          <div>
            <button onClick={addPost}>Add post</button>
          </div>
        </div>
        <div className={c.posts}>
          {postElement}
        </div>
      </div>
  )
}

export default MyPosts;