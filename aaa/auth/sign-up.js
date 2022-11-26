import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from '../components/Navbar'

const SignUp = () => {
  let navigate = useNavigate()

  const signInClick = (e) => {
    navigate('../signin')
  }
  const [name, setName] = useState('')
  const [familyName, setFamilyName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!name || !familyName || !mobile || !email) {
      toast('لطفاً مقادیر را پر کنید.')
      return
    }

    navigate('../createbuilding', {
      state: { name: name, familyName: familyName },
    })

    setName('')
    setFamilyName('')
    setMobile('')
    setEmail('')
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
            <button className="btn btn-active hover:bg-primary-400  btn-disabled">
              ثبت نام
            </button>
            <button
              onClick={signInClick}
              className="btn bg-base-100 hover:bg-primary/80"
            >
              ورود
            </button>
          </div>

          <div className="form-control">
            <div className="form-control mx-auto w-5/6 items-center justify-center content-center">
              <label className="input-group">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="شهاب"
                  className="input input-bordered  text-center "
                />
                <span className="  text-center">نام</span>
              </label>
            </div>

            <div className="form-control mx-auto mt-3 w-5/6">
              <label className="input-group">
                <input
                  type="text"
                  value={familyName}
                  onChange={(e) => setFamilyName(e.target.value)}
                  placeholder="آواژ"
                  className="input input-bordered text-center  "
                />
                <span className="  text-center">نام خانوادگی</span>
              </label>
            </div>

            <div className="form-control mx-auto mt-3 w-5/6">
              <label className="input-group">
                <input
                  type="number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="09121005080"
                  className="input input-bordered text-center  "
                />
                <span className="  text-center">شماره موبایل</span>
              </label>
            </div>

            <div className="form-control mx-auto mt-3 w-5/6">
              <label className="input-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="shahabavazh@gmail.com"
                  className="input input-bordered text-center  "
                />
                <span className="  text-center">آدرس ایمیل</span>
              </label>
            </div>

            <select
              className="select select-bordered mx-auto max-w-xs mt-3 mb-3 w-5/6"
              dir="rtl"
            >
              <option disabled selected className="text-center content-center">
                نوع اکانت
              </option>
              <option className="text-center content-center" dir="rtl">
                شخصی
              </option>
              <option className="text-center content-center" dir="rtl">
                تجاری
              </option>
            </select>

            <button type="submit" className="btn btn-primary  mt-6 ">
              ثبت نام
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
