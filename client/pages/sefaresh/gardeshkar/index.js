import { useRef } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import Navbar from '../../../components/layout/navbar/navbar'

function GardeshKar() {
  const router = useRouter()

  const idRef = useRef()

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/sefaresh')
  }

  const onSubmit = (e) => {
    e.preventDefault()

    router.push('/sefaresh/gardeshkar/workflow1')

    if (!idRef) {
      router.push('/sefaresh/gardeshkar/workflow1')
    }

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
            <button className="btn btn-active btn-disabled">گردش‌کار</button>
            <button
              className="btn  bg-base-100 text-neutral-content hover:bg-primary/80"
              onClick={handleClick}
            >
              لیست درخواست‌ها
            </button>
          </div>

          <h3 dir="rtl" className="text-xl text-center">
            مشاهده گردش‌کار
          </h3>
          <br />

          <div className=" form-control">
            <div className="mx-auto w-5/6">
              <label className="input-group">
                <input
                  type="text"
                  ref={idRef}
                  placeholder="۱۲۳۴۵۶۷۸"
                  className="input input-bordered text-center"
                ></input>
                <span className="text-center">شماره پیگیری</span>
              </label>
            </div>

            <button type="submit" className="btn btn-primary  mt-6">
              مشاهده
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default GardeshKar
