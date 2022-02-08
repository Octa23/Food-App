import { createContext, useEffect, useState } from 'react'

import Swal from 'sweetalert2'
import axios from 'axios'

const body = {
  email: 'challenge@alkemy.org',
  password: 'react'
}
const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('')
  //
  useEffect(() => {
    (!user) && (setUser({ token: window.localStorage.getItem('token'), name: window.localStorage.getItem('name') }))
  }, [])
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  // Error Modal
  const errorMessage = (message) => {
    Swal.fire({
      title: 'Error!',
      text: message,
      icon: 'error',
      confirmButtonText: 'Ok'
    })
  }
  // Success Modal
  const successMessage = () => {
    Swal.fire({
      title: 'Success!',
      text: 'Have a great night',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
    fetch('http://challenge-react.alkemy.org/',
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(body)
      })
      .then(res => (res.json())).then(res => {
        setUser({ ...user, ...res })
        window.localStorage.setItem('token', res.token)
        window.localStorage.setItem('name', user.name)
      })
  }

  // Send a modal with login response
  const handleSubmit = (e) => {
    e.preventDefault()
    !user.email || !user.password || !user.name
      ? errorMessage('Complete all the inputs ')
      : (user.password.length < 3) ? errorMessage('Your password is too short') : successMessage()
  }

  const data = { user, setUser, handleSubmit, handleChange }
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

export { UserProvider }
export default UserContext
