import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function WorkFlow() {
  let navigate = useNavigate()
  const [userName, setUserName] = useState('123456:1')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!userName) {
      return
    }

    //Submit

    navigate('../workflow1')
    // setUserName('')
    // setPassword('')
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden mx-auto">
      <Navbar />
      <div className="card w-96 bg-neutral shadow-xl drop-shadow-xl p-1">
        <form onSubmit={onSubmit} className="card-body">
          <div className="form-control">
            <div className="mx-auto w-5/6">
              <label className="input-group">
                <input
                  type="text"
                  set
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="123456:1"
                  className="input input-bordered  text-center "
                ></input>
                <span className=" ">شناسه پیگیری</span>
              </label>
            </div>

            <button type="submit" className="btn btn-primary  mt-6">
              پیگیری
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default WorkFlow
