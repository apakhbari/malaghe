import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import RemoveUndefinedsToPleaseNext from '../../../hooks/removeUndefineds'

import Navbar from '../../../components/layout/navbar/navbar'
import IconGeoLocation from '../../../assets/icons/svg/icongeolocation'

const RequestService2 = () => {
  const router = useRouter()

  //for this page
  const [postalCodeNum, setPostalCodeNum] = useState()
  const [addressStr, setAddressStr] = useState()

  //for last page
  const [enteredName, setEnteredName] = useState()
  const [enteredDevice, setEnteredDevice] = useState()
  const [enteredMobile, setEnteredMobile] = useState()
  const [enteredServiceKind, setEnteredServiceKind] = useState()
  const [isExpress, setIsExpress] = useState()

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

  //console.log(data)

  const onSubmit = (e) => {
    e.preventDefault()

    //if (!name || !unitsNumber) {
    //toast('لطفاً مقادیر را پر کنید.')
    //return
    //}

    //Submit

    router.push(
      {
        pathname: '/sefaresh/new/3',
        query: {
          enteredName,
          enteredDevice,
          enteredMobile,
          enteredServiceKind,
          isExpress,
          postalCodeNum,
          addressStr,
        },
      },
      '/sefaresh/new/3'
    )
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
            <li data-content="3" className="step text-neutral-content">
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

          <div className="form-control mx-auto mt-6">
            <label className="input-group">
              <input
                type="text"
                value={addressStr === 'تخصیص داده نشده' ? '' : addressStr}
                placeholder="میدان هروی، خیابان مکران"
                className="input input-bordered  text-center "
              />
              <span className="text-center">آدرس</span>
            </label>
          </div>

          <div className="form-control mx-auto">
            <label className="input-group">
              <input
                type="number"
                value={postalCodeNum === 'تخصیص داده نشده' ? '' : postalCodeNum}
                placeholder="1668737864"
                className="input input-bordered  text-center "
              />
              <span className="text-center">کد پستی</span>
            </label>
          </div>

          <div className="inline-flex items-center btn btn-accent mt-3 mx-auto justify-evenly">
            پین کردن آدرس روی نقشه
            <IconGeoLocation stylingProps={'w-6 h-6'} />
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              مرحله بعد
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RequestService2
