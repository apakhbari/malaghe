import { Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const NotFound = () => {
  let navigate = useNavigate()

  const router = useRouter()

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
            <p className="label text-4xl justify-center place-content-center items-center mb-12">
              !صفحه پیدا نشد
            </p>
            <lottie-player
              src="https://assets1.lottiefiles.com/temp/lf20_0txt7u.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
            {/* https://lottiefiles.com/4047-404-animation */}
            <p className="label text-lg justify-center place-content-center items-center"></p>
            <div className="modal-action">
              <label
                for="my-modal-6"
                className="btn"
                onClick={() => router.back()}
              >
                صفحه اصلی
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
