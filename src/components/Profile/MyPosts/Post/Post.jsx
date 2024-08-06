import React from "react";
import c from './Post.module.css';

const Post = (props) => {
  return (
    <div className={c.item}>
      <img src="https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676296366191520185.png" alt="catHack" />
      {props.message}
      <div>
        <span>like {props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post;