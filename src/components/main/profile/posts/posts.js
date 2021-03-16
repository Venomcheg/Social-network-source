import React from "react"

import PostFormContainer from "./post-form"
import PostItem from "./post-item"
import styles from './posts.module.scss'
class Posts extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.setState({ a: 12 })
    }, 3000)
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps != this.props || nextState != this.state
  // }

  render() {
    return (
      <div>
        <PostFormContainer />
        <h2 className={styles.title}>Last posts</h2>
        {this.props.posts.map((item) => {
          return (
            <PostItem
              key={item.id}
              text={item.text}
              img={item.img}
              likesCount={item.likesCount}
            />
          )
        })}
      </div>
    )
  }
}

export default Posts
