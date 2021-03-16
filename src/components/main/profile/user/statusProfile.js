import React, { useState, useEffect } from "react"
import styles from "./user.module.scss"

// const StatusProfileWithHooks = (props) => {
//   let [editMode, setEditMode] = useState(false)
//   let [status, setStatus] = useState(props.status)
//   useEffect(() => {
//     setStatus(props.status)
//   }, [props.status])
//   const activateMode = () => {
//     setEditMode(true)
//   }
//   const deactivateActiveMode = () => {
//     setEditMode(false)
//     props.updateStatus(status)
//   }
//   const onStatusChange = (e) => {
//     setStatus(e.currentTarget.value)
//   }
//   return (
//     <>
//       {!editMode ? (
//         <div onClick={activateMode}>
//           <span>Статус: {props.status || "Нет статуса"}</span>
//         </div>
//       ) : (
//         <div>
//           <input
//             onChange={onStatusChange}
//             autoFocus={true}
//             onBlur={deactivateActiveMode}
//             value={status}
//           />
//         </div>
//       )}
//     </>
//   )
// }

// export default StatusProfileWithHooks

class StatusProfile extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      })
    }
  }
  changeEditMode = () => {
    this.setState({ editMode: !this.state.editMode })
    this.props.updateStatus(this.state.status)
  }
  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value })
  }
  render() {
    return (
      <>
        {!this.state.editMode ? (
          <div>
            <span onClick={this.changeEditMode}>Статус: {this.props.status}</span>
          </div>
        ) : (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={() => this.changeEditMode()}
              type="text"
              value={this.state.status}
            />
          </div>
        )}
      </>
    )
  }
}
export default StatusProfile
