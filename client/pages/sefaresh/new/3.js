import { useRef, useEffect } from 'react'

import { useRouter } from 'next/router'

import Navbar from '../../../components/layout/navbar/navbar'

const RequestService3 = () => {
  const router = useRouter()

  const addressRef = useRef()

  useEffect(() => {
    //nameRef, serviceRef, mobileRef
    console.log(router.query.nameRef)
  }, [router.query.nameRef])

  const onSubmit = (e) => {
    e.preventDefault()

    //if (!name || !unitsNumber) {
    //toast('لطفاً مقادیر را پر کنید.')
    //return
    //}

    //Submit

    router.push({
      pathname: '/sefaresh/new/3',
      query: {
        nameRef: 'nameref',
        serviceRef: 'serviceRef',
        mobileRef: 'mobileRef',
      },
    })
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen mx-auto">
      <Navbar />

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
                <p className=" text-xl">مبلغ :</p>
                <p className=" text-xl">۲۵,۰۰۰ تومان</p>
              </div>
            </div>
            <br />
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
