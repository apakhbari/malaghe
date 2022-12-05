import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import Navbar from '../../../components/layout/navbar/navbar'

const RequestService3 = () => {
  const router = useRouter()

  //for 1 page
  const [enteredName, setEnteredName] = useState()
  const [enteredDevice, setEnteredDevice] = useState()
  const [enteredMobile, setEnteredMobile] = useState()
  const [enteredServiceKind, setEnteredServiceKind] = useState()
  const [isExpress, setIsExpress] = useState()
  //for 2 page
  const [postalCodeNum, setPostalCodeNum] = useState()
  const [addressStr, setAddressStr] = useState()
  //for this page
  const [enteredPaymentKind, setEnteredPaymentKind] = useState(
    'پرداخت از طریق درگاه بانکی'
  )

  useEffect(() => {
    if (router.isReady) {
      // Code using query
      var passedData = router.query
      console.log(passedData)
      setPostalCodeNum(passedData.postalCode)
      setAddressStr(passedData.address)

      setEnteredName(passedData.enteredName)
      setEnteredDevice(passedData.enteredDevice)
      setEnteredMobile(passedData.enteredMobile)
      setEnteredServiceKind(passedData.enteredServiceKind)
      setIsExpress(passedData.isExpress)
    }
  }, [router.isReady])

  const onSubmit = (e) => {
    e.preventDefault()

    //if (!name || !unitsNumber) {
    //toast('لطفاً مقادیر را پر کنید.')
    //return
    //}

    //Submit

    router.push({
      pathname: '/developing',
      query: {
        enteredName,
        enteredDevice,
        enteredMobile,
        enteredServiceKind,
        isExpress,
        postalCodeNum,
        addressStr,
        enteredPaymentKind,
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

          <select
            className="select select-bordered w-full max-w-xs mt-6"
            onChange={(e) => setEnteredPaymentKind(e.target.value)}
          >
            <option selected className="text-center content-center" dir="rtl">
              پرداخت از طریق درگاه بانکی
            </option>
            <option className="text-center content-center" dir="rtl">
              کارت به کارت
            </option>
            <option className="text-center content-center" dir="rtl">
              پرداخت حضوری
            </option>
          </select>

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

          {enteredPaymentKind === 'کارت به کارت' && (
            <div>
              <h3 className="mt-3" dir="rtl">
                انتقال وجه به کارت بانک پاسارگاد، به نام امین کراچیان با شماره:
              </h3>
              <h3 className="mt-3 text-center font-bold">
                ۵۰۲۲-۲۹۱۰-۶۳۰۰-۴۰۲۰
              </h3>
            </div>
          )}

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              {enteredPaymentKind === 'پرداخت از طریق درگاه بانکی'
                ? 'انتقال به درگاه پرداخت'
                : 'ثبت درخواست'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RequestService3
