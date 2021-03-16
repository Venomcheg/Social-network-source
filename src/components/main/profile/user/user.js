import React from "react"
import Preloader from "../../../common"

import Block from "./user.module.scss"
import StatusProfile from "./statusProfile"
const User = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />
  }
  const mainPhotoSelectedOn = (e) => {
    if (e.target.files.length && e.target.files.length > 0) {
      savePhoto(e.target.files[0])
    }
  }
  return (
    <section className={Block.profile}>
      <div className={Block.img_wrapper}>
        <img
          className={Block.img}
          src={
            profile.photos.large
              ? profile.photos.large
              : "https://i.pinimg.com/originals/8a/8b/ce/8a8bcebc18991720dde80d09a183840b.jpg"
          }
          alt=""
        />
        {isOwner && (<><input id={'file-input'} className={Block.input_img} type="file" onChange={mainPhotoSelectedOn} />
            <label className={Block.Upload} for={"file-input"}>
              Photo
            </label></>
        )}
      </div>

      <div className={Block.list_block}>
        <h3>{profile.fullName}</h3>
        <ul className={Block.list}>
          <li className={Block.list_item}>
            Где меня найти:&nbsp;{profile.contacts.vk}
          </li>
          <li className={Block.list_item}>
            {profile.lookingForAJob ? "Ищу работу!!" : "Нее, не ищу работу"}
          </li>
          <li className={Block.list_item}>
            Ищу работу:&nbsp;
            {profile.lookingForAJobDescription}
          </li>

          <li className={Block.list_item}>Обо мне:&nbsp; {profile.aboutMe}</li>
        </ul>
        <StatusProfile status={status} updateStatus={updateStatus} />
      </div>
    </section>
  )
}
export default User
