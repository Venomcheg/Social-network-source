import React from "react"

import PostStyle from "./post-item.module.scss"

const PostItem = ({ text, img, likesCount }) => {
  return (
    <section className={PostStyle.wrapper}>
      <img className={PostStyle.img} src={img} alt="" />
      <p className={PostStyle.text}>
        {text}
        <span className={PostStyle.likes}>
          {likesCount}
        </span>

      </p>
    </section>
  )
}

export default PostItem
