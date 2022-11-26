import { useRef } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import Navbar from '../../components/layout/navbar'

const SignIn = () => {
  const router = useRouter()

  const userNameRef = useRef()
  const passwordRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()

    router.push('/dashboard')

    //if (!userNameRef || !passwordRef) {
    //return
    //}

    //Submit

    // setUserName('')
    // setPassword('')
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden mx-auto">
      <Navbar />

      <div className="card w-96 bg-neutral shadow-xl drop-shadow-xl p-1">
        <form onSubmit={onSubmit} className="card-body">
          <div className="btn-group justify-center mb-8">
            <button
              onClick={() => router.push('/auth/signup')}
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
                  ref={userNameRef}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="۰۹۱۲۲۴۵۳۲۵۸"
                  className="input input-bordered text-center"
                ></input>
                <span className="text-center">شناسه کاربری</span>
              </label>
            </div>

            <div className="mx-auto mt-3 w-5/6">
              <label className="input-group">
                <input
                  type="password"
                  ref={passwordRef}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="● ● ● ● ● ● ● ●"
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
