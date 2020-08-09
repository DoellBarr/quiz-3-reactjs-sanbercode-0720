import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import fakeAuth from './fakeAuth.js'

const LoginPage = () => {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || {from : {pathname: '/'}};
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from)
    })
  }

  return (
    <div>
      <p>Anda harus log in terlebih dahulu untuk bisa mengakses halaman ini</p>
      <button onClick = {login}>Log in</button>
    </div>
  )
}

export default LoginPage
