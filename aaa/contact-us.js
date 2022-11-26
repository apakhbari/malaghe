import React, { useState } from 'react'

//import Navbar from '../components/Navbar'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ContactUs() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!userName || !password) {
      toast('لطفاً مقادیر را پر کنید.')
      return
    }

    //Submit

    setUserName('')
    setPassword('')
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden mx-auto">
      <Navbar />

      <div className="card w-96 bg-neutral shadow-xl drop-shadow-xl p-1">
        <form onSubmit={onSubmit} className="card-body">
          <div className="form-control">
            <h3 dir="rtl" className="text-2xl mb-2 text-neutral-content">
              تماس با ما
            </h3>

            <label className="input-group mx-auto w-5/6 justify-center">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="احسان عبدالهی"
                className="input input-bordered hover:border-slate-400 text-center text-white"
              />
              <span className=" text-white text-center">نام</span>
            </label>

            <label className="input-group mx-auto mt-3 w-5/6 justify-center">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="۰۹۱۲۱۰۲۳۴۵۶"
                className="input input-bordered text-center hover:border-slate-400 text-white"
              />
              <span className=" text-white text-center">تلفن تماس</span>
            </label>

            <label className="input-group mx-auto mt-3 w-5/6 justify-center">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="abdollahi@gmail.com"
                className="input input-bordered text-center hover:border-slate-400 text-white"
              />
              <span className=" text-white text-center">ایمیل</span>
            </label>

            <textarea
              className="textarea textarea-bordered mx-auto mt-4 w-5/6 justify-center"
              placeholder="پیام:"
              dir="rtl"
            ></textarea>

            <button
              type="submit"
              className="btn btn-primary hover:border-slate-400 mt-6"
            >
              ثبت
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
