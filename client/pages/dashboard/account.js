import Link from 'next/link'
import { useRouter } from 'next/router'

import { useEffect } from 'react'

import { themeChange } from 'theme-change'

import axios from 'axios'

import IconDashboardHome from '../../assets/icons/svg/icondashboardhome'
import IconDashboardMag from '../../assets/icons/svg/icondashboardmag'
import IconDashboardStore from '../../assets/icons/svg/icondashboardstore'
import IconDashboardTheme from '../../assets/icons/svg/icondashboardtheme'
import ThemeDropDown from '../../components/layout/dashboard/themedropdown'
import IconDashboardLogOut from '../../assets/icons/svg/icondashboardlogout'
import CartDropDown from '../../components/layout/navbar/navbarhelper/cartdropdown'
import NotificationDropDown from '../../components/layout/store/notificationdropdown'

import buildClient from '../../api/build-client'
import useRequest from '../../hooks/use-request'

import RemoveUndefinedsToPleaseNext from '../../hooks/removeUndefineds'

function Account({ data }) {
  const router = useRouter()

  console.log({ data })

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  const onAccountClick = (e) => {
    e.preventDefault()
    router.push('/dashboard/account')
  }

  return (
    <div className="flex flex-col content-center justify-center">
      <div className=" bg-neutral flex justify-around border-b border-zinc-800 ">
        <div className="flex">
          <NotificationDropDown />

          <CartDropDown
            stylingProps={'text-neutral-content rounded-full text-center'}
          />
        </div>
        <div className="text-2xl place-self-center hover:cursor-default text-neutral-content">
          اطلاعات اکانت
        </div>
        <Link
          href="/"
          className="normal-case text-3xl hover:underline underline-offset-2 place-self-center text-neutral-content"
        >
          ملاقه
        </Link>
      </div>
      <div className="grid grid-cols-4 h-full">
        <div className="bg-neutral col-span-3 p-2  h-screen">
          <div className="m-8 bg-base-100 rounded-2xl p-3 flex flex-col shadow-md drop-shadow-md w-3/5 mx-auto">
            <div className="grid grid-cols-2 gap-4 w-full mx-auto">
              <div className="ml-6 flex">
                <div className="avatar online placeholder cursor-default">
                  <div className="bg-primary-focus text-neutral-content rounded-full w-16">
                    <span className="text-xl text-neutral-content"></span>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer text-secondary hover:text-secondary-focus"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>

              <label className="swap btn btn-secondary justify-self-end my-auto mr-6 px-4">
                <input type="checkbox" />
                <div className="swap-on flex place-items-center justify-evenly">
                  ویرایش
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 outline-primary-content ml-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </div>
                <div className="swap-off flex place-items-center justify-evenly ">
                  اتمام ویرایش
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
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </label>

              <div dir="rtl">
                <label className="input-group input-group-vertical">
                  <span className="justify-center">نام خانوادگی</span>
                  <input
                    disabled
                    type="text"
                    placeholder="تست"
                    className="input input-bordered justify-center text-center"
                  />
                </label>
              </div>

              <div dir="rtl">
                <label className="input-group input-group-vertical">
                  <span className="justify-center">نام</span>
                  <input
                    disabled
                    type="text"
                    placeholder="تست"
                    className="input input-bordered justify-center text-center"
                  />
                </label>
              </div>

              <div dir="rtl">
                <label className="input-group input-group-vertical">
                  <span className="justify-center">شماره تلفن</span>
                  <input
                    disabled
                    type="text"
                    placeholder="۰۲۱-۲۲۹۵۱۰۲۰"
                    className="input input-bordered justify-center text-center"
                  />
                </label>
              </div>

              <div dir="rtl">
                <label className="input-group input-group-vertical">
                  <span className="justify-center">شماره موبایل</span>
                  <input
                    disabled
                    type="text"
                    placeholder="۰۹۱۲۱۰۰۱۰۲۰"
                    className="input input-bordered justify-center text-center"
                  />
                </label>
              </div>

              <div dir="rtl" className="col-span-2">
                <label className="input-group input-group-vertical">
                  <span className="justify-center">آدرس</span>
                  <input
                    disabled
                    type="text"
                    placeholder="تهران - میدان هروی - خیابان توحیدی"
                    className="input input-bordered justify-center text-center"
                  />
                </label>
              </div>

              <div>
                <div className="btn-group justify-center mb-8">
                  <button className="btn bg-base-100 text-neutral-content hover:bg-primary/80">
                    اکانت تجاری
                  </button>
                  <button className="btn btn-active btn-disabled">
                    اکانت حقیقی
                  </button>
                </div>
              </div>

              <div
                dir="rtl"
                className="flex justify-evenly content-center mb-8"
              >
                <label className="label cursor-pointer">
                  <span className="label-text">اکانت فعال است.</span>
                </label>
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    checked
                    className="toggle toggle-primary"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral p-2 flex flex-col text-center pt-8 border-l border-zinc-800 justify-evenly">
          <div>
            <div className=" mx-auto m-1">
              <Link
                href="/dashboard"
                className="btn btn-ghost normal-case text-xl w-4/5 text-neutral-content"
              >
                داشبورد
                <IconDashboardHome
                  stylingProps={'w-8 h-8 ml-4 stroke-primary'}
                />
              </Link>
            </div>

            <div className=" mx-auto m-1">
              <Link
                href="/store"
                className="btn btn-ghost normal-case text-xl w-4/5 text-neutral-content"
              >
                فروشگاه
                <IconDashboardStore
                  stylingProps={'w-8 h-8 ml-4 stroke-primary'}
                />
              </Link>
            </div>

            <div>
              <Link
                href="/mag"
                className="btn btn-ghost normal-case text-xl  w-4/5 text-neutral-content"
              >
                مجله
                <IconDashboardMag
                  stylingProps={'w-8 h-8 ml-4 stroke-primary'}
                />
              </Link>
            </div>
            <div className="divider"></div>

            <ThemeDropDown />
          </div>

          <div className="bottom-3/4">
            <div className="btn btn-outline btn-accent normal-case text-xl  w-4/5 flex mx-auto justify-evenly">
              خروج
              <IconDashboardLogOut stylingProps={'w-6 h-6'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const client = buildClient(context)
  const { data2 } = await client.get('/api/v1/users/currentuser')

  const { data } = await client.get('/api/v1/users/638b333d6b904200836044d8')
  return {
    props: RemoveUndefinedsToPleaseNext({ data }),
  }
  //return { props: { data, res } }
}

export default Account
