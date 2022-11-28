import Link from 'next/link'
import Image from 'next/image'

import Navbar from '../components/layout/navbar/navbar'
import Footer from '../components/layout/home/footer'

import {
  PhoneIcon,
  ArrowSmLeftIcon,
  ArrowSmRightIcon,
} from '@heroicons/react/outline'
import {
  ChipIcon,
  SupportIcon,
  wrenchScrewdriverIcon,
} from '@heroicons/react/solid'

//import Swiper from '../components/layout/home/swiper'

import supportImg from '../assets/support.jpg'
import Banner from '../components/layout/home/banner'

function Home() {
  return (
    <div className="relative align-self: stretch  pt-12">
      {/*<Banner />*/}
      <Navbar url="/" />

      {/*<div className="pt-12 h-96"><Swiper /></div>*/}

      <div name="home" className="w-full h-screen flex flex-col justify-around">
        <div className="flex flex-col items-center text-center w-full px-2 p-16">
          <p className="text-3xl font-extrabold">راهکارهای صنعتی آشپزخانه</p>
          <h1 className="py-3 text-7xl text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500 animate-pulse font-extrabold">
            سوار بر تکنولوژی
          </h1>
        </div>
        <div className="w-96 rounded-box bg-secondary/50 items-center text-center mx-auto p-12">
          <p dir="rtl" className="text-3xl font-extrabold text-center ">
            دسترسی سریع:
          </p>
          <br />
          <div className="flex justify-around">
            <button type="submit" className="btn btn-primary  ">
              مرحله بعد
            </button>
            <button type="submit" className="btn btn-primary  ">
              مرحله بعد
            </button>
          </div>
        </div>
      </div>

      <div name="support" className="w-full mb-24">
        <div className="w-full h-[700px] bg-gray-900/90 absolute">
          <Image
            className="w-full h-full object-cover mix-blend-overlay"
            src={supportImg}
            alt="/"
          />
        </div>

        <div className="max-w-[1240px] mx-auto text-white relative">
          <div className="px-4 py-12">
            <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
              پشتیبانی
            </h2>
            <h3 className="text-5xl font-bold py-6 text-center">
              پیدا کردن تیم مناسب
            </h3>
            <p className="py-4 text-3xl text-slate-300" dir="rtl">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
            <div className="bg-base-200 rounded-xl shadow-2xl">
              <div className="p-8" dir="rtl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-16 p-4 bg-secondary text-secondary-content rounded-lg mt-[-4rem] mx-auto"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <h3
                  className="font-bold text-2xl my-6 text-center text-base-content"
                  dir="rtl"
                >
                  پاسخگویی ۲۴\۷
                </h3>
                <p className="text-base-content text-xl text-center">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </p>
              </div>
              <div className="bg-base-300 pl-8 py-4">
                <p
                  className="flex items-center text-secondary-focus mr-10 hover:underline hover:cursor-pointer"
                  dir="rtl"
                >
                  ارتباط با ما <ArrowSmLeftIcon className="w-5 ml-2" />
                </p>
              </div>
            </div>
            <div className="bg-base-200 rounded-xl shadow-2xl">
              <div className="p-8" dir="rtl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-16 p-4 bg-secondary text-secondary-content rounded-lg mt-[-4rem] mx-auto"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
                    clipRule="evenodd"
                  />
                  <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
                  <path
                    fillRule="evenodd"
                    d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>

                <h3 className="font-bold text-2xl my-6 text-center text-base-content">
                  خدمات تخصصی
                </h3>
                <p className="text-base-content text-xl text-center">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </p>
              </div>
              <div className="bg-base-300 pl-8] py-4">
                <p
                  className="flex items-center text-secondary-focus mr-10 hover:underline hover:cursor-pointer"
                  dir="rtl"
                >
                  درخواست خدمت
                  <ArrowSmLeftIcon className="w-5 ml-2" />
                </p>
              </div>
            </div>
            <div className="bg-base-200 rounded-xl shadow-2xl">
              <div className="p-8" dir="rtl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-16 p-4 bg-secondary text-secondary-content rounded-lg mt-[-4rem] mx-auto"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>

                <h3 className="font-bold text-2xl my-6 text-center text-base-content">
                  بیش از ۴۰ سال سابقه
                </h3>
                <p className="text-base-content text-xl text-center">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </p>
              </div>
              <div className="bg-base-300 pl-8 py-4">
                <p
                  className="flex items-center text-secondary-focus mr-10 hover:underline hover:cursor-pointer"
                  dir="rtl"
                >
                  ارتباط با ما <ArrowSmLeftIcon className="w-5 ml-2" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
