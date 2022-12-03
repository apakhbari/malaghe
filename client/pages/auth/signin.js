import { useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import useRequest from '../../hooks/use-request'

import Navbar from '../../components/layout/navbar/navbar'

import buildClient from '../../api/build-client'

const SignIn = () => {
  const router = useRouter()

  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')

  const { doRequest, errors } = useRequest({
    url: '/api/v1/users/signin',
    method: 'post',
    body: {
      mobile,
      password,
    },
    onSuccess: () => router.push('/dashboard'),
  })

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/auth/signup')
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    doRequest()
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden mx-auto">
      <Navbar />

      <div className="card w-96 bg-neutral shadow-xl drop-shadow-xl p-1">
        <form onSubmit={onSubmit} className="card-body">
          <div className="btn-group justify-center mb-8">
            <button
              onClick={handleClick}
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
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
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
                  value={password}
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

export async function getServerSideProps(context) {
  const client = buildClient(context)
  const { data } = await client.get('/api/v1/users/currentuser')

  if (data) {
    if (data.currentUser) {
      if (data.currentUser.id) {
        return {
          redirect: {
            destination: '/dashboard',
            permanent: false,
          },
        }
      }
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default SignIn
