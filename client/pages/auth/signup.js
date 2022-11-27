import { useRef } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import Navbar from '../../components/layout/navbar'

const SignUp = () => {
  const router = useRouter()

  const nameRef = useRef()
  const familyNameRef = useRef()
  const mobileRef = useRef()
  const genderRef = useRef()
  const passwordRef = useRef()

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/auth/signin')
  }

  const onSubmit = (e) => {
    e.preventDefault()

    router.push('/dashboard')

    //if (
    //!nameRef ||
    //!familyNameRef ||
    //!mobileRef ||
    //!genderRef ||
    //!passwordRef
    //) {
    //return
    //}
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden mx-auto">
      <Navbar />

      <div className="card w-96 bg-neutral shadow-xl drop-shadow-xl p-1">
        <form onSubmit={onSubmit} className="card-body">
          <div className="btn-group justify-center mb-8">
            <button className="btn btn-active hover:bg-primary-400  btn-disabled">
              ثبت نام
            </button>
            <button
              onClick={handleClick}
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
                  ref={nameRef}
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
                  ref={familyNameRef}
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
                  ref={mobileRef}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="۰۹۱۲۲۴۵۳۲۵۸"
                  className="input input-bordered text-center  "
                />
                <span className="  text-center">شماره موبایل</span>
              </label>
            </div>

            <select
              className="select select-bordered mx-auto max-w-xs mt-3 mb-3 w-5/6"
              dir="rtl"
            >
              <option disabled selected className="text-center content-center">
                جنسیت
              </option>
              <option className="text-center content-center" dir="rtl">
                مرد
              </option>
              <option className="text-center content-center" dir="rtl">
                زن
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
