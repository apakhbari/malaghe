import Link from 'next/link'
import { useRouter } from 'next/router'

import { useEffect, useState } from 'react'

import { themeChange } from 'theme-change'

import axios from 'axios'

import useRequest from '../../hooks/use-request'

import IconDashboardHome from '../../assets/icons/svg/icondashboardhome'
import IconDashboardMag from '../../assets/icons/svg/icondashboardmag'
import IconDashboardStore from '../../assets/icons/svg/icondashboardstore'
import ThemeDropDown from '../../components/layout/dashboard/themedropdown'
import IconDashboardLogOut from '../../assets/icons/svg/icondashboardlogout'
import IconEditingAccount from '../../assets/icons/svg/iconeditingaccount'
import IconDoneEditingAccount from '../../assets/icons/svg/icondoneedittingaccount'
import IconGeoLocation from '../../assets/icons/svg/icongeolocation'
import CartDropDown from '../../components/layout/navbar/navbarhelper/cartdropdown'
import NotificationDropDown from '../../components/layout/store/notificationdropdown'

import BuildClient from '../../api/build-client'

import RemoveUndefinedsToPleaseNext from '../../hooks/removeUndefineds'
import IconGearAccount from '../../assets/icons/svg/icongearaccount'

function Account({ data }) {
  const router = useRouter()

  const [editing, setEditing] = useState(true)

  const [firstName, setFirstName] = useState(data.fiName)
  const [lastName, setLastName] = useState(data.laName)
  const [mobileNum, setMobileNum] = useState(data.mobile)
  const [phoneNum, setPhoneNum] = useState(data.phone)
  const [emailStr, setEmailStr] = useState(data.email)
  const [postalCodeNum, setPostalCodeNum] = useState(data.postalCode)
  const [addressStr, setAddressStr] = useState(data.address)

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  const handleEditCheckBox = (e) => {
    e.preventDefault()
    setEditing(!editing)
  }

  const onPinClick = (e) => {
    e.preventDefault()
    router.push('/developing')
  }

  const { doRequest, errors } = useRequest({
    url: `/api/v1/users/${data.id}`,
    method: 'put',
    body: {
      id: data.id,
      fiName: firstName,
      laName: lastName,
      email: emailStr,
      mobile: mobileNum,
      phone: phoneNum,
      address: addressStr,
      postalCode: postalCodeNum,
    },
    onSuccess: () => router.push('/dashboard'),
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setEditing(true)
    doRequest()
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
        <div className="bg-neutral col-span-3 p-2">
          <div className="m-8 bg-base-100 rounded-box p-3 flex flex-col shadow-md drop-shadow-md w-3/5 mx-auto">
            <div className="grid grid-cols-2 gap-4 w-full mx-auto">
              <div className="ml-6 flex">
                <div className="avatar online placeholder cursor-default">
                  <div className="bg-primary-focus text-neutral-content rounded-full w-16">
                    <span className="text-xl text-neutral-content">
                      {firstName + lastName}
                    </span>
                  </div>
                </div>
                {!editing && (
                  <IconGearAccount stylingProps={'w-6 h-6 text-secondary'} />
                )}
              </div>

              <label
                className="btn btn-secondary justify-self-end my-auto mr-6 px-4"
                onClick={handleEditCheckBox}
              >
                {editing && (
                  <div className="flex place-items-center justify-evenly">
                    ویرایش
                    <IconEditingAccount
                      stylingProps={'w-5 h-5 outline-primary-content ml-3'}
                    />
                  </div>
                )}
                {!editing && (
                  <div className="flex place-items-center justify-evenly ">
                    اتمام ویرایش
                    <IconDoneEditingAccount
                      stylingProps={'w-5 h-5 outline-primary-content ml-3'}
                    />
                  </div>
                )}
              </label>

              <div dir="rtl">
                <label className="input-group input-group-vertical">
                  <span className="justify-center">نام خانوادگی</span>
                  <input
                    type="text"
                    value={lastName === 'تخصیص داده نشده' ? '' : lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    disabled={editing ? 'disabled' : ''}
                    placeholder={lastName}
                    className="input input-bordered justify-center text-center"
                  />
                </label>
              </div>

              <div dir="rtl">
                <label className="input-group input-group-vertical">
                  <span className="justify-center">نام</span>
                  <input
                    type="text"
                    value={firstName === 'تخصیص داده نشده' ? '' : firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    disabled={editing ? 'disabled' : ''}
                    placeholder={firstName}
                    className="input input-bordered justify-center text-center"
                  />
                </label>
              </div>

              <div dir="rtl">
                <label className="input-group input-group-vertical">
                  <span className="justify-center">شماره تلفن</span>
                  <input
                    type="number"
                    value={phoneNum === 'تخصیص داده نشده' ? '' : phoneNum}
                    onChange={(e) => setPhoneNum(e.target.value)}
                    disabled={editing ? 'disabled' : ''}
                    placeholder={phoneNum}
                    className="input input-bordered justify-center text-center"
                  />
                </label>
              </div>

              <div dir="rtl">
                <label className="input-group input-group-vertical">
                  <span className="justify-center">شماره موبایل</span>
                  <input
                    type="number"
                    value={mobileNum === 'تخصیص داده نشده' ? '' : mobileNum}
                    onChange={(e) => setMobileNum(e.target.value)}
                    disabled={editing ? 'disabled' : ''}
                    placeholder={mobileNum}
                    className="input input-bordered justify-center text-center"
                  />
                </label>
              </div>

              <div dir="rtl">
                <label className="input-group input-group-vertical">
                  <span className="justify-center">کدپستی</span>
                  <input
                    type="number"
                    value={
                      postalCodeNum === 'تخصیص داده نشده' ? '' : postalCodeNum
                    }
                    onChange={(e) => setPostalCodeNum(e.target.value)}
                    disabled={editing ? 'disabled' : ''}
                    placeholder={postalCodeNum}
                    className="input input-bordered justify-center text-center"
                  />
                </label>
              </div>

              <div dir="rtl">
                <label className="input-group input-group-vertical">
                  <span className="justify-center">ایمیل</span>
                  <input
                    type="email"
                    value={emailStr === 'تخصیص داده نشده' ? '' : emailStr}
                    onChange={(e) => setEmailStr(e.target.value)}
                    disabled={editing ? 'disabled' : ''}
                    placeholder={emailStr}
                    className="input input-bordered justify-center text-center"
                  />
                </label>
              </div>

              <div dir="rtl" className="col-span-2">
                <label className="input-group input-group-vertical">
                  <span className="justify-center">آدرس</span>
                  <input
                    type="text"
                    value={addressStr === 'تخصیص داده نشده' ? '' : addressStr}
                    onChange={(e) => setAddressStr(e.target.value)}
                    disabled={editing ? 'disabled' : ''}
                    placeholder={addressStr}
                    className="input input-bordered justify-center text-center"
                  />
                </label>
              </div>

              <div dir="rtl" className="flex justify-evenly content-center">
                <label className="label cursor-default">
                  <span className="label-text">اکانت فعال است.</span>
                </label>
                <label className="label cursor-default">
                  <input
                    type="checkbox"
                    checked
                    className="toggle toggle-primary"
                    disabled={editing ? 'disabled' : ''}
                  />
                </label>
              </div>

              <div
                className="inline-flex items-center btn btn-accent mx-auto justify-evenly"
                disabled={editing ? 'disabled' : ''}
                onClick={onPinClick}
              >
                پین کردن آدرس روی نقشه
                <IconGeoLocation stylingProps={'w-6 h-6'} />
              </div>

              {!editing && (
                <label
                  className="btn btn-primary my-auto mx-4 col-span-2"
                  onClick={handleSubmit}
                >
                  اعمال تغییرات
                </label>
              )}
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
  const accountId = context.params.accountId

  const client = BuildClient(context)

  const { data } = await client.get(`/api/v1/users/${accountId}`)
  return {
    props: RemoveUndefinedsToPleaseNext({ data }),
  }
}

export default Account
