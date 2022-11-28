import { useRef } from 'react'

import Navbar from '../components/layout/navbar/navbar'

function ContactUs() {
  const nameRef = useRef()
  const phoneRef = useRef()
  const messageRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()

    if (!userName || !password) {
      return
    }

    //Submit
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
                ref={nameRef}
                placeholder="احسان عبدالهی"
                className="input input-bordered hover:border-slate-400 text-center text-white"
              />
              <span className=" text-white text-center">نام</span>
            </label>

            <label className="input-group mx-auto mt-3 w-5/6 justify-center">
              <input
                type="password"
                ref={phoneRef}
                placeholder="۰۹۱۲۱۰۲۳۴۵۶"
                className="input input-bordered text-center hover:border-slate-400 text-white"
              />
              <span className=" text-white text-center">تلفن تماس</span>
            </label>

            <textarea
              className="textarea textarea-bordered mx-auto mt-4 w-5/6 justify-center"
              ref={messageRef}
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
