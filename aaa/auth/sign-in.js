import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from '../components/Navbar'

const SignIn = () => {
  let navigate = useNavigate()

  const signUpClick = (e) => {
    navigate('../signup')
  }
  const [userName, setUserName] = useState('test')
  const [password, setPassword] = useState('● ● ● ●')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!userName || !password) {
      toast('لطفاً مقادیر را پر کنید.')
      return
    }

    //Submit

    navigate('../dashboard')
    // setUserName('')
    // setPassword('')
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden mx-auto">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Navbar />

      <div className="card w-96 bg-neutral shadow-xl drop-shadow-xl p-1">
        <form onSubmit={onSubmit} className="card-body">
          <div className="btn-group justify-center mb-8">
            <button
              onClick={signUpClick}
              className="btn bg-base-100 text-neutral-content hover:bg-primary/80"
            >
              ثبت نام
            </button>
            <button className="btn btn-active btn-disabled">ورود</button>
          </div>

          <div className="form-control">
            <div className="mx-auto w-5/6">
              <label className="input-group">
                <input
                  type="text"
                  set
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="123456:1"
                  className="input input-bordered text-center"
                ></input>
                <span className="text-center">شناسه کاربری</span>
              </label>
            </div>

            <div className="mx-auto mt-3 w-5/6">
              <label className="input-group">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="● ● ● ●"
                  className="input input-bordered text-center"
                />
                <span className="text-center">رمز عبور</span>
              </label>
            </div>

            <label className="label justify-end place-content-end items-end mt-2">
              <a
                href="#"
                className="label-text-alt link underline link-primary link-hover hover:bg-primary-focus"
              >
                رمزم را فراموش کرده‌ام
              </a>
            </label>

            <button type="submit" className="btn btn-primary  mt-6">
              ورود
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
