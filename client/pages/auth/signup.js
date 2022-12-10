import { useState, useEffect } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import Navbar from '../../components/layout/navbar/navbar'

import useRequest from '../../hooks/use-request'
import CardComponent from '../../components/layout/card'

var slugify = require('slugify-persian')

const SignUp = () => {
  const router = useRouter()

  const [fiName, setFiName] = useState('نام')
  const [laName, setLaName] = useState('نام خانوادگی')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState()

  const { doRequest, errors } = useRequest({
    url: '/api/v1/users/signup',
    method: 'post',
    body: {
      fiName,
      laName,
      slug: slugify(fiName + ' ' + laName),
      gender,
      mobile,
      password,
    },
    onSuccess: () => router.push('/dashboard'),
  })

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/auth/signin')
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    doRequest()
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden mx-auto">
      <Navbar />
      <CardComponent>
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
                  onChange={(e) => setFiName(e.target.value)}
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
                  onChange={(e) => setLaName(e.target.value)}
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
                  placeholder="۰۹۱۲۲۴۵۳۲۵۸"
                  className="input input-bordered text-center  "
                />
                <span className="  text-center">شماره موبایل</span>
              </label>
            </div>

            <select
              className="select select-bordered mx-auto max-w-xs mt-3 mb-3 w-5/6"
              dir="rtl"
              onChange={(e) => setGender(e.target.value)}
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

            <div className="form-control mx-auto w-5/6 items-center justify-center content-center">
              <label className="input-group">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="● ● ● ● ● ● ● ●"
                  className="input input-bordered  text-center "
                />
                <span className="  text-center">رمز</span>
              </label>
            </div>

            <button type="submit" className="btn btn-primary  mt-6 ">
              ثبت نام
            </button>
          </div>
        </form>
      </CardComponent>
    </div>
  )
}

export default SignUp
