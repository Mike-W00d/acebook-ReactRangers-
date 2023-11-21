import React from "react";
import { useState } from "react";

const LikeButton = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(props.postId)
    fetch(`/api/post/${props.postId}`, {
      method: "PUT",
      body: JSON.stringify({ likes: props.userIDList }),
    });


    if (props.userIDList.includes(props.userId)){
      const index = props.userIDList.indexOf(props.userId);
      if (index > -1) { // only splice array when item is found
        props.userIDList.splice(index, 1); // 2nd parameter means remove one item only
      }
    } else {
      props.userIDList.push(props.userId)
    }
    props.setUserIDList(props.userIDList);
  }

  
    return (
      <form onSubmit={handleSubmit}>
        <button type='submit'><img src='thumb-icon.png' className='like-btn' alt='thumb' /></button>
      </form>
    )
}


export default LikeButton;