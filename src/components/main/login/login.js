import React from "react"
import { connect } from "react-redux"
import { reduxForm, Field } from "redux-form"
import { required } from "../../../utils/validators/validators"
import { login } from "../../../redux/auth-reducer"
import { Redirect } from "react-router-dom"
import styled from "styled-components"
import { CreateField } from "../../../hoc/FormsInstance"
const Error = styled.div`
  display: none;
  ${({ error }) => error && `display: block;`}
  color: red;
`
const LoginForm = ({ error, handleSubmit, captchaUrl }) => {
  console.log(error)
  return (
    <form onSubmit={handleSubmit}>
      <div>{CreateField("email", [required], "input", "email", "input")}</div>
      <div>
        {CreateField("password", [required], "input", "password", "password")}
      </div>
      <div>
        <label>
          {CreateField("rememberMe", [required], "input", null, "checkbox")}
          remember me
        </label>
        {captchaUrl && <img src={captchaUrl} />}
        {captchaUrl && CreateField("captcha", [required], "input", "text", "text")}
      </div>
      <Error error={error}>{error}</Error>
      <div>
        <button>submit</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    let { email, password, rememberMe, captcha } = formData
    props.login(email, password, rememberMe, captcha)
  }
  if (props.isAuth) {
    return <Redirect to={"profile"} />
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  )
}
const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  captchaUrl: state.authReducer.isAuth,
})
export default connect(mapStateToProps, { login })(Login)
