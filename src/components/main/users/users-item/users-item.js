import React from "react"
import UsersItemStyles from "./users-item.module.scss"
import userPhoto from "../../../../assets/img/userPhoto.jpg"
import { NavLink } from "react-router-dom"
const UsersItem = (state) => {
  return (

    <article className={UsersItemStyles.wrapper}>

      <NavLink to={`/profile/${state.id}`}>
        <div className={UsersItemStyles.content}>
          <div className={UsersItemStyles.img_wrap}>
            <img
              className={UsersItemStyles.profile_img}
              src={state.photos.small != null ? state.photos.small : userPhoto}
              alt="User photo"
            />

          </div>
          <div className={UsersItemStyles.data_wrap}>
            <div className={UsersItemStyles.personal_data}>
              <p className={UsersItemStyles.text_bold}>
                {state.name}
              </p>
            </div>
          </div>
        </div>

      </NavLink>
        <div>
          {state.followed ? (
            <button
              disabled={state.followingInProgress.some((id) => id === state.id)}
              onClick={() => state.unFollow(state.id)} className={UsersItemStyles.btn_unfollow}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={state.followingInProgress.some((id) => id === state.id)}
              onClick={() => state.follow(state.id)} className={'btn'}
            >
              Follow
            </button>
          )}
        </div>

    </article>

  )
}
export default UsersItem
