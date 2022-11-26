import React from 'react'
import { useNavigate } from 'react-router-dom'

function Magazine() {
  let navigate = useNavigate()

  function handleClick() {
    navigate('../')
  }

  return (
    <div className="w-full">
      <div>
        <input
          type="checkbox"
          id="my-modal-6"
          className="modal-toggle"
          checked="checked"
        />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <p className="label text-4xl justify-center place-content-center items-center mb-12 mx-auto">
              ...در حال توسعه
            </p>
            <div className="w-[350px] h-[350px] mx-auto">
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_byuzwmds.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
              {/* https://lottiefiles.com/80248-under-construction */}
            </div>
            <p className="label text-lg justify-center place-content-center items-center"></p>
            <div className="modal-action">
              <label for="my-modal-6" className="btn" onClick={handleClick}>
                صفحه اصلی
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Magazine
