import React from 'react';
import './Post.css';

const Post = ({post}) => {
  return(
    <div className='post-box'>
      <article data-cy="post-author" className='post-author'>{post.author}</article>
      <article data-cy="post-date" className='post-date'>{post.created_at}</article>
      <article data-cy="post-content" key={ post._id } className='post-content'>{ post.content }</article>
      <div style={{display: 'flex'}}>
        <img src='thumb-icon.png' className='like-btn' alt='thumb' />
        <article data-cy="post-likes" className='like-number'>{post.number_of_likes}</article>
      </div>
    </div>
  )
}

export default Post;
