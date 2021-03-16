import React from "react"
import usersStyles from "./users.module.scss"
import UsersItem from "./users-item"
import Paginator from "../../common/paginator/paginator"
const Users = ({
  currentPage,
  onPageChanged,
  pageSize,
  totalUsersCount,
  ...props
}) => {
  return (
    <section className={usersStyles.wrapper}>

        <h2 className={usersStyles.title}>Users</h2>
        {props.users.map((item) => {
          return <UsersItem key={item.id} {...item} {...props} />
        })}
        <Paginator
          totalUsersCount={totalUsersCount}
          currentPage={currentPage}
          onPageChanged={onPageChanged}
          pageSize={pageSize}
        />

    </section>
  )
}

export default Users
