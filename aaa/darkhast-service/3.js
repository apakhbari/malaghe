import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../components/Navbar'

const RequestService3 = () => {
  let navigate = useNavigate()
  const { state } = useLocation()
  //const { name, unitsNumber, address} = state;
  //console.log(name)
  //console.log(unitsNumber)
  console.log(state)

  const signUpClick = (e) => {
    console.log(e)
  }
  const [managerName, setManagerName] = useState('۲۵,۰۰۰ تومان')
  const [managerID, setManagerID] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    //if (!managerName || !managerID) {
    //toast('لطفاً مقادیر را پر کنید.')
    //return
    //}

    //Submit

    setManagerName('')
    setManagerID('')

    navigate('../createbuilding/2', { replace: true }, { state: {} })
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen mx-auto">
      <Navbar />

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

      <div className="card w-96 bg-neutral shadow-xl drop-shadow-xl p-1">
        <form onSubmit={onSubmit} className="card-body">
          <h3 dir="rtl" className="text-2xl mb-2 text-neutral-content">
            ثبت درخواست تعمیر
          </h3>
          <ul className="steps">
            <li
              data-content="3"
              className="step step-primary text-neutral-content"
            >
              پرداخت
            </li>
            <li
              data-content="2"
              className="step step-primary text-neutral-content"
            >
              آدرس
            </li>
            <li
              data-content="1"
              className="step step-primary text-neutral-content"
            >
              اطلاعات پایه
            </li>
          </ul>

          <div className="form-control">
            <div className="form-control mx-auto text-neutral-content">
              <div dir="rtl" className="flex justify-between mt-6">
                <h2>مبلغ :</h2>
                <h2>۲۵,۰۰۰ تومان</h2>
              </div>

              <label className="input-group mt-6 mx-auto mb-3">
                <input
                  type="text"
                  value={managerName}
                  onChange={(e) => setManagerName(e.target.value)}
                  placeholder="۲۵,۰۰۰ تومان"
                  className="input input-bordered text-center"
                  disabled
                />
                <span className="text-center">مبلغ</span>
              </label>
            </div>
          </div>
          <div>
            <div className="form-control">
              <div className="relative w-full justify-center text-center">
                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                  اعمال کد تخفیف
                </button>
                <input
                  type="text"
                  placeholder="کد تخفیف"
                  class="input input-bordered w-full pr-16"
                />
              </div>
            </div>
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              انتقال به درگاه پرداخت
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RequestService3
