import { Fragment } from 'react'
import Head from 'next/head'

import Lottie from 'react-lottie-player'
import lottieJson from '/public/loading-animation.json'

function LoadingPage() {
  return (
    <Fragment>
      <Head>
        <title>Loading malaghe</title>
        <meta name="description" content="Send me your messages!" />
      </Head>

      <div className="flex flex-col justify-evenly h-screen mx-auto items-center">
        <div className=" h-40 w-40">
          {/* <Lottie
            loop
            animationData={lottieJson}
            play
            style={{ width: 200, height: 200 }}
  /> */}
        </div>
        <div>
          <div>yousasx</div>
          <div>yousasx</div>
          <div>{process.env.CLIENT_NAME_FA}</div>
          <div>{process.env.CLIENT_VERSION}</div>
        </div>
      </div>
    </Fragment>
  )
}

export default LoadingPage
