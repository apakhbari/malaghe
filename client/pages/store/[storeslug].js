import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'

import { themeChange } from 'theme-change'

import BuildClient from '../../api/build-client'
import RemoveUndefinedsToPleaseNext from '../../hooks/removeUndefineds'
import Navbar from '../../components/layout/navbar/navbar'
import NotificationDropDown from '../../components/layout/store/notificationdropdown'
import CartDropDown from '../../components/layout/navbar/navbarhelper/cartdropdown'
import Link from 'next/link'
import ThemeDropDown from '../../components/layout/dashboard/themedropdown'
import NavBarTheme from '../../components/layout/navbar/navbarhelper/navbartheme'
import IconDashboardTheme from '../../assets/icons/svg/icondashboardtheme'
import IconMag from '../../assets/icons/svg/iconmag'
import CartsContext from '../../store/cart-context'

function StoreSlug({ data }) {
  const router = useRouter()

  const cartsCtx = useContext(CartsContext)

  cartsCtx.useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  console.log(data)
  return (
    <div className="grid grid-cols-3 h-screen">
      <div className="bg-neutral col-span-2 overflow-scroll overscroll-contain">
        <div className="flex justify-around">
          <div className="flex">
            <NavBarTheme
              stylingProps1={'w-6 h-6 place-self-center text-neutral-content'}
              stylingProps2={
                'w-4 h-4 mt-1 place-self-center opacity-80 text-neutral-content'
              }
            />

            <CartDropDown
              stylingProps={'text-neutral-content rounded-full text-center'}
            />
          </div>
          <Link
            href="/store"
            className="normal-case text-2xl hover:underline underline-offset-2 place-self-center text-neutral-content"
          >
            فروشگاه
          </Link>
          <Link
            href="/"
            className="normal-case text-3xl hover:underline underline-offset-2 place-self-center text-neutral-content"
          >
            ملاقه
          </Link>
        </div>

        <div className="flex flex-col">
          <h3
            className="mt-5 text-2xl font-extrabold text-neutral-content p-4 pb-0 items-start mx-4"
            dir="rtl"
          >
            {data.title}
          </h3>

          <h3
            className="mt-5 text-xl text-neutral-content p-4 items-start mx-4 border-y-4 border-accent"
            dir="rtl"
          >
            {data.summary}
          </h3>

          <h3
            className="mt-5 text-xl text-neutral-content p-4 pt-0 items-start mx-4 border-b-4 border-accent"
            dir="rtl"
          >
            توضیحات: {data.description}
          </h3>

          <h3
            className="mt-5 text-xl text-neutral-content p-4 pt-0 items-start mx-4 border-b-4 border-accent"
            dir="rtl"
          >
            طول: {data.volumes.length} سانتی‌متر، عرض: {data.volumes.width}{' '}
            سانتی‌متر، ارتفاع: {data.volumes.height}سانتی‌متر، وزن:{' '}
            {data.volumes.weight} گرم
          </h3>
        </div>
      </div>

      <div className="flex flex-col mt-5 bg-base-100">
        <div
          className="stats stats-vertical bg-base-content text-base-100  justify-center lg:stats-horizontal shadow-2xl m-3"
          dir="rtl"
        >
          <div className="stat">
            <div className="stat-title">قیمت (تومن)</div>
            <div className="stat-value">
              {data.hasDiscount && (
                <h2 className="card-title" dir="rtl">
                  {data.discountKind === 'درصد'
                    ? `${Math.round(
                        ((100 - data.discountedPrice) * data.price) / 100
                      )}`
                    : `${data.discountedPrice}`}
                  <span className="line-through text-xs">{data.price}</span>
                </h2>
              )}
              {!data.hasDiscount && (
                <h2 className="card-title" data-atropos-offset="6" dir="rtl">
                  {data.price}
                </h2>
              )}
            </div>
            <div className="stat-desc">
              {data.hasDiscount && (
                <h2 dir="rtl">
                  {data.discountKind === 'درصد'
                    ? `${data.discountedPrice}% ↘︎`
                    : `${data.price - data.discountedPrice} ↘︎`}
                </h2>
              )}
            </div>
          </div>

          <div className="divider lg:divider-horizontal"></div>

          <div className="stat text-base">
            <div className="stat-title text-base-100">ساخت</div>
            <div className="stat-value">{data.madeIn}</div>
            <div className="stat-desc">{data.goodKind}</div>
          </div>
        </div>

        {data.hasMag && (
          <div className="btn btn-secondary mx-3 shadow mt-1" dir="rtl">
            <IconMag stylingProps={'w-6 h-6 ml-2'} />
            مشاهده در مجله
          </div>
        )}

        <div className="btn btn-primary mx-3 shadow mt-4" dir="rtl">
          + اضافه به سبد خرید
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  //const accountId = context.params
  var id = context.query.id

  const client = BuildClient(context)
  const { data } = await client.get(`/api/v1/store/${id}`)
  return {
    props: RemoveUndefinedsToPleaseNext({ data }),
  }
}

export default StoreSlug
