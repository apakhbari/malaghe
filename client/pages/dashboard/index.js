import Link from 'next/link'
import { useRouter } from 'next/router'

import { useEffect } from 'react'

import useRequest from '../../hooks/use-request'

import buildClient from '../../api/build-client'

import { themeChange } from 'theme-change'
import Stat1 from '../../components/layout/dashboard/stat1'
import Stat2 from '../../components/layout/dashboard/stat2'
import IconService from '../../assets/icons/svg/iconservice'
import IconGardeshKar from '../../assets/icons/svg/icongardeshkar'
import IconSefaresh from '../../assets/icons/svg/iconSefaresh'
import IconStar from '../../assets/icons/svg/iconstar'
import IconWallet from '../../assets/icons/svg/iconwallet'
import IconDashboardHome from '../../assets/icons/svg/icondashboardhome'
import IconDashboardMag from '../../assets/icons/svg/icondashboardmag'
import IconDashboardStore from '../../assets/icons/svg/icondashboardstore'
import IconDashboardTheme from '../../assets/icons/svg/icondashboardtheme'
import ThemeDropDown from '../../components/layout/dashboard/themedropdown'
import IconDashboardLogOut from '../../assets/icons/svg/icondashboardlogout'
import CartDropDown from '../../components/layout/navbar/navbarhelper/cartdropdown'
import NotificationDropDown from '../../components/layout/store/notificationdropdown'
import FooterNotMain from '../../components/layout/footernotmain'

function Dashboard({ data }) {
  const router = useRouter()

  console.log(data)

  const { doRequest } = useRequest({
    url: '/api/v1/users/signout',
    method: 'post',
    body: {},
    onSuccess: () => router.push('/'),
  })

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  const onRequstServiceClick = (e) => {
    e.preventDefault()

    router.push(
      {
        pathname: '/sefaresh/new/1',
        query: { accountId: `${data.currentUser.id}` },
      },
      '/sefaresh/new/1'
    )
  }

  const onWorkFlowClick = (e) => {
    e.preventDefault()
    router.push('/sefaresh/gardeshkar')
  }

  const onLogOutClick = (e) => {
    e.preventDefault()

    doRequest()
  }

  const onAccountClick = (e) => {
    e.preventDefault()
    router.push(`/dashboard/${data.currentUser.id}`)
  }

  const onTransactionsClick = (e) => {
    e.preventDefault()
    router.push('/sefaresh/list')
  }
  return (
    <div className="flex flex-col content-center justify-center h-screen bg-neutral">
      <div className=" bg-neutral flex justify-around border-b border-zinc-800 ">
        <div className="flex">
          <NotificationDropDown />

          <CartDropDown
            stylingProps={'text-neutral-content rounded-full text-center'}
          />
        </div>
        <div className="text-2xl place-self-center hover:cursor-default text-neutral-content">
          داشبورد
        </div>
        <Link
          href="/"
          className="normal-case text-3xl hover:underline underline-offset-2 place-self-center text-neutral-content"
        >
          ملاقه
        </Link>
      </div>
      <div className="grid grid-cols-4 h-full">
        <div className="bg-neutral col-span-3 p-2  ">
          <div className="m-8 bg-base-100 rounded-box p-2 flex flex-col text-center items-center max-w-4xl shadow-md drop-shadow-md">
            <Stat2 />
            <div className="divider">خدمات و تعمیرات</div>

            <div
              className="btn btn-primary btn-outline gap-8 mx-16 mb-2 flex justify-center shadow max-w-lg w-full"
              onClick={onRequstServiceClick}
            >
              درخواست خدمات و تعمیرات
              <IconService stylingProps={'w-6 h-6'} />
            </div>

            <div
              className="btn btn-outline btn-primary gap-8 mx-16 mb-2 flex justify-center shadow max-w-lg w-full"
              onClick={onWorkFlowClick}
            >
              مشاهده گردش کار
              <IconGardeshKar stylingProps={'w-6 h-6'} />
            </div>

            <div className="divider">گزارش‌ها</div>

            <div className="btn btn-primary hover:border-slate-400 gap-8 mx-16 mb-2 shadow max-w-lg w-full">
              سفارش‌ها
              <IconSefaresh stylingProps={'w-6 h-6'} />
            </div>

            <div className="btn btn-primary hover:border-slate-400 gap-8 mx-16 mb-2 shadow max-w-lg w-full">
              مورد علاقه‌ها
              <IconStar stylingProps={'w-6 h-6'} />
            </div>

            <div
              className="btn btn-primary hover:border-slate-400 gap-8 mx-16 mb-2 shadow max-w-lg w-full"
              onClick={onTransactionsClick}
            >
              تاریخچه سفارش‌ها و درخواست‌ها
              <IconWallet stylingProps={'w-6 h-6'} />
            </div>
          </div>
        </div>

        <div className="bg-neutral p-2 flex flex-col text-center pt-8 border-l border-zinc-800 justify-evenly">
          <div>
            <div className=" mx-auto m-1">
              <div className="btn btn-ghost normal-case text-xl btn-active w-4/5 hover:cursor-default disabled text-neutral-content">
                داشبورد
                <IconDashboardHome
                  stylingProps={'w-8 h-8 ml-4 stroke-primary'}
                />
              </div>
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
            <div
              className=" transition-colors duration-300 w-4/5 border m-4 rounded-box p-2 hover:bg-neutral-focus hover:cursor-pointer flex justify-center mx-auto hover:border-dashed border-primary-focus"
              onClick={onAccountClick}
            >
              <div className="flex flex-col justify-center mr-3">
                <div
                  className="cursor-pointer content-center justify-center text-neutral-content"
                  dir="rtl"
                >
                  {data.currentUser.gender
                    ? ' خانم ' + data.currentUser.laName
                    : ' آقای ' + data.currentUser.laName}
                </div>
                <div className="text-sm text-neutral-content text-opacity-70">
                  اکانت فعال
                </div>
              </div>

              <div class="avatar online placeholder cursor-pointer">
                <div class="bg-primary-focus text-neutral-content rounded-full w-16">
                  <span class="text-xl text-neutral-content">
                    {data.currentUser.laName}
                  </span>
                </div>
              </div>
            </div>

            <div
              className="btn btn-outline btn-accent normal-case text-xl  w-4/5 flex mx-auto justify-evenly"
              onClick={onLogOutClick}
            >
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
  const { data } = await client.get('/api/v1/users/currentuser')

  if (!data) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    }
  }

  if (!data.currentUser) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    }
  }

  if (!data.currentUser.id) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    }
  }

  return { props: { data } }
}

export default Dashboard
