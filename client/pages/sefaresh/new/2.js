import { useRef, useEffect } from 'react'

import { useRouter } from 'next/router'

import Navbar from '../../../components/layout/navbar/navbar'

const RequestService2 = (props) => {
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

          <div className="form-control">
            <div className="form-control mx-auto">
              <select
                name="state"
                onChange="CityList(this.value);"
                className="select select-bordered w-full mt-3"
              >
                <option
                  disabled
                  selected
                  value="0"
                  className="text-center content-center"
                >
                  لطفا استان را انتخاب نمایید
                </option>
                <option value="1" className="text-center content-center">
                  تهران
                </option>
                <option value="2">گیلان</option>
                <option value="3">آذربایجان شرقی</option>
                <option value="4">خوزستان</option>
                <option value="5">فارس</option>
                <option value="6">اصفهان</option>
                <option value="7">خراسان رضوی</option>
                <option value="8">قزوین</option>
                <option value="9">سمنان</option>
                <option value="10">قم</option>
                <option value="11">مرکزی</option>
                <option value="12">زنجان</option>
                <option value="13">مازندران</option>
                <option value="14">گلستان</option>
                <option value="15">اردبیل</option>
                <option value="16">آذربایجان غربی</option>
                <option value="17">همدان</option>
                <option value="18">کردستان</option>
                <option value="19">کرمانشاه</option>
                <option value="20">لرستان</option>
                <option value="21">بوشهر</option>
                <option value="22">کرمان</option>
                <option value="23">هرمزگان</option>
                <option value="24">چهارمحال و بختیاری</option>
                <option value="25">یزد</option>
                <option value="26">سیستان و بلوچستان</option>
                <option value="27">ایلام</option>
                <option value="28">کهگلویه و بویراحمد</option>
                <option value="29">خراسان شمالی</option>
                <option value="30">خراسان جنوبی</option>
                <option value="31">البرز</option>
              </select>

              <select
                name="city"
                id="city"
                onChange="CityList(this.value);"
                className="select select-bordered w-full mt-3 mx-auto content-center"
              >
                <option
                  disabled
                  selected
                  value="0"
                  className="text-center content-center"
                >
                  لطفا شهر را انتخاب نمایید
                </option>
              </select>

              <div class="divider"></div>

              <label className="input-group">
                <input
                  type="text"
                  ref={addressRef}
                  placeholder="میدان هروی، خیابان مکران"
                  className="input input-bordered  text-center "
                />
                <span className="text-center">آدرس</span>
              </label>

              <div className="inline-flex items-center btn btn-accent mt-3 justify-evenly">
                {' '}
                پین کردن روی نقشه
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
            </div>
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
