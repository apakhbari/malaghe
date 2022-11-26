import React from 'react'

import { Link, useLocation, useNavigate } from 'react-router-dom'

import PropTypes from 'prop-types'

import { useState, useEffect } from 'react'
import FooterExceptMain from '../components/FooterExceptMain'

import tighe from '../assets/tighe.jpg'
import hamzan from '../assets/hamzan.jpg'

import { themeChange } from 'theme-change'

import Atropos from 'atropos/react'

function Store() {
  let navigate = useNavigate()

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  function handleHamZanClick() {
    navigate('../hamzan')
  }

  function handleTigheClick() {
    navigate('../tighe')
  }

  const location = useLocation()
  const [theme, setTheme] = useState(true)
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <div>
      <div class="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          {/* NavaBar Starts */}
          <div className="fixed inset-x-0 top-0 object-center mt-2 mx-3 z-50">
            <div className="navbar bg-primary rounded-box px-4 shadow-lg drop-shadow-lg">
              <div className="navbar-start">
                <div className="sm:hidden">
                  <div className="dropdown">
                    <label
                      className="btn btn-circle swap swap-rotate bg-primary border-none"
                      tabindex="0"
                    >
                      <input
                        type="checkbox"
                        value={menuIsOpen}
                        onChange={(e) => setMenuIsOpen(e.currentTarget.checked)}
                      />

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-primary-content"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    </label>
                    <ul
                      tabindex="0"
                      class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        {location.pathname !== ('/signIn' || '/signup') && (
                          <Link
                            to="/signIn"
                            className="btn btn-outline m-1 normal-case text-xl mx-4"
                          >
                            داشبورد
                          </Link>
                        )}
                      </li>
                      <li>
                        <Link
                          to="/Magazine"
                          className="btn btn-ghost normal-case text-xl"
                        >
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
                              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                            />
                          </svg>
                          مجله
                        </Link>
                      </li>
                      <li>
                        <div className="btn btn-ghost" tabIndex={-1}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 place-self-center text-base-content"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 mt-1 place-self-center opacity-80 text-base-content"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </div>
                        <ul
                          tabIndex={-1}
                          className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52"
                        >
                          <li>
                            <div
                              className="btn btn-ghost"
                              data-set-theme="wireframe"
                            >
                              پیش فرض
                            </div>
                          </li>
                          <li>
                            <div
                              className="btn btn-ghost"
                              data-set-theme="darktheme"
                              data-act-class="ACTIVECLASS"
                            >
                              اقیانوس
                            </div>
                          </li>
                          <li>
                            <div
                              className="btn btn-ghost"
                              data-set-theme="black"
                              data-act-class="ACTIVECLASS"
                            >
                              نیمه‌شب
                            </div>
                          </li>
                          <li>
                            <div
                              className="btn btn-ghost"
                              data-set-theme="lemonade"
                              data-act-class="ACTIVECLASS"
                            >
                              لیموناد
                            </div>
                          </li>
                          <li>
                            <div
                              className="btn btn-ghost"
                              data-set-theme="coffee"
                              data-act-class="ACTIVECLASS"
                            >
                              قهوه
                            </div>
                          </li>
                          <li>
                            <div
                              className="btn btn-ghost"
                              data-set-theme="pastel"
                              data-act-class="ACTIVECLASS"
                            >
                              پاستل
                            </div>
                          </li>
                          <li>
                            <div
                              className="btn btn-ghost"
                              data-set-theme="retro"
                              data-act-class="ACTIVECLASS"
                            >
                              دهه ۵۰
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="hidden sm:flex">
                  <div className="dropdown">
                    <div className="btn btn-ghost" tabIndex={0}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 place-self-center text-primary-content"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 mt-1 place-self-center opacity-80 text-primary-content"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52"
                    >
                      <li>
                        <div
                          className="btn btn-ghost"
                          data-set-theme="wireframe"
                        >
                          پیش فرض
                        </div>
                      </li>
                      <li>
                        <div
                          className="btn btn-ghost"
                          data-set-theme="darktheme"
                          data-act-class="ACTIVECLASS"
                        >
                          اقیانوس
                        </div>
                      </li>
                      <li>
                        <div
                          className="btn btn-ghost"
                          data-set-theme="black"
                          data-act-class="ACTIVECLASS"
                        >
                          نیمه‌شب
                        </div>
                      </li>
                      <li>
                        <div
                          className="btn btn-ghost"
                          data-set-theme="lemonade"
                          data-act-class="ACTIVECLASS"
                        >
                          لیموناد
                        </div>
                      </li>
                      <li>
                        <div
                          className="btn btn-ghost"
                          data-set-theme="coffee"
                          data-act-class="ACTIVECLASS"
                        >
                          قهوه
                        </div>
                      </li>
                      <li>
                        <div
                          className="btn btn-ghost"
                          data-set-theme="pastel"
                          data-act-class="ACTIVECLASS"
                        >
                          پاستل
                        </div>
                      </li>
                      <li>
                        <div
                          className="btn btn-ghost"
                          data-set-theme="retro"
                          data-act-class="ACTIVECLASS"
                        >
                          دهه ۵۰
                        </div>
                      </li>
                    </ul>
                  </div>

                  <Link
                    to="/signIn"
                    className="btn btn-outline normal-case text-xl mx-4 text-primary-content"
                  >
                    داشبورد
                  </Link>

                  <Link
                    to="/Magazine"
                    className="btn btn-ghost normal-case text-xl text-primary-content"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mr-2 text-primary-content"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                      />
                    </svg>
                    مجله
                  </Link>
                </div>

                <div className="dropdown">
                  <div
                    className="rounded-full p-2 hover:cursor-pointer"
                    tabIndex={0}
                  >
                    <div class="avatar placeholder cursor-pointer">
                      <div class="text-primary-content rounded-full text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="dropdown-content card card-compact w-64 p-2 shadow bg-secondary text-primary-content"
                  >
                    <div className="card-body">
                      <h3
                        className="card-title text-secondary-content"
                        dir="rtl"
                      >
                        سبد خرید شما خالیست!
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="navbar-end">
                <div>
                  <Link
                    to="/"
                    className="normal-case text-3xl hover:underline text-primary-content"
                  >
                    ملاقه
                  </Link>
                </div>
                <div>
                  <label
                    for="my-drawer-4"
                    class="drawer-button btn btn-circle btn-outline normal-case text-xl mx-4 text-primary-content"
                  >
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
                        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                      />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* NavBar Ends */}

          {/*Contents Starts */}

          <div class="p-8 pt-28">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8"
              dir="rtl"
            >
              <Atropos activeOffset={10} rotateXMax={5} rotateYMax={5}>
                <div
                  class="group rounded-md flex items-center justify-center"
                  activeOffset={10}
                >
                  <div
                    class="card w-96 bg-neutral cursor-pointer group-hover:bg-neutral-focus"
                    onClick={handleTigheClick}
                    data-atropos-offset="-5"
                    activeOffset={10}
                  >
                    <figure>
                      <img src={tighe} alt="tighe" ata-atropos-offset="0" />
                    </figure>
                    <div
                      class="card-body"
                      data-atropos-offset="5"
                      activeOffset="40"
                      shadowScale="1.05"
                      highlight="true"
                      shadow="true"
                    >
                      <h2
                        className="card-title"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        <span
                          className="group-hover:scale-105 text-neutral-content"
                          data-atropos-offset="6"
                        >
                          تیغه
                        </span>
                        <div
                          className="badge badge-secondary"
                          dir="rtl"
                          data-atropos-offset="6"
                        >
                          ۱۵٪ تخفیف
                        </div>
                      </h2>

                      <h2
                        className="card-title text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        تومن ۲۰۰,۰۰۰
                        <span className="line-through text-xs">۲۵۰,۰۰۰</span>
                      </h2>

                      <p
                        className="text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        تیغه ساخت ایران با کیفیت بالا
                      </p>
                      <div
                        class="card-actions justify-start"
                        data-atropos-offset="6"
                      >
                        <div class="badge badge-outline">تولید ایران</div>
                        <div class="badge badge-outline badge-primary">
                          قطعه
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Atropos>

              <Atropos rotateXMax={5} rotateYMax={5}>
                <div class="group rounded-md flex items-center justify-center">
                  <div
                    class="card w-96 bg-neutral hover:opacity-90 cursor-pointer group-hover:bg-neutral-focus"
                    onClick={handleHamZanClick}
                    data-atropos-offset="-5"
                  >
                    <figure>
                      <img
                        className="aspect-square"
                        src={hamzan}
                        alt="tighe"
                        ata-atropos-offset="0"
                      />
                    </figure>
                    <div
                      class="card-body"
                      data-atropos-offset="6"
                      activeOffset="40"
                      shadowScale="1.05"
                      highlight="true"
                      shadow="true"
                    >
                      <h2
                        class="card-title text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        <span className="group-hover:scale-105">
                          دستگاه هم‌زن
                        </span>
                      </h2>
                      <h2
                        className="card-title text-neutral-content"
                        data-atropos-offset="6"
                        dir="rtl"
                      >
                        تومن ۲,۵۰۰,۰۰۰
                      </h2>
                      <p dir="rtl" data-atropos-offset="6">
                        <div className="text-neutral-content" dir="rtl">
                          به همراه ویدیو مقایسه در مجله
                        </div>
                      </p>
                      <div
                        class="card-actions justify-start"
                        data-atropos-offset="6"
                      >
                        <div class="badge badge-success" dir="rtl">
                          + ویدیو
                        </div>
                        <div class="badge badge-outline">تولید چین</div>
                        <div class="badge badge-outline badge-primary">
                          دستگاه
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Atropos>

              <Atropos activeOffset={10} rotateXMax={5} rotateYMax={5}>
                <div
                  class="group rounded-md flex items-center justify-center"
                  activeOffset={10}
                >
                  <div
                    class="card w-96 bg-neutral cursor-pointer group-hover:bg-neutral-focus"
                    onClick={handleTigheClick}
                    data-atropos-offset="-5"
                    activeOffset={10}
                  >
                    <figure>
                      <img src={tighe} alt="tighe" ata-atropos-offset="0" />
                    </figure>
                    <div
                      class="card-body"
                      data-atropos-offset="5"
                      activeOffset="40"
                      shadowScale="1.05"
                      highlight="true"
                      shadow="true"
                    >
                      <h2
                        className="card-title"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        <span
                          className="group-hover:scale-105 text-neutral-content"
                          data-atropos-offset="6"
                        >
                          تیغه
                        </span>
                        <div
                          className="badge badge-secondary"
                          dir="rtl"
                          data-atropos-offset="6"
                        >
                          ۱۵٪ تخفیف
                        </div>
                      </h2>

                      <h2
                        className="card-title text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        تومن ۲۰۰,۰۰۰
                        <span className="line-through text-xs">۲۵۰,۰۰۰</span>
                      </h2>

                      <p
                        className="text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        تیغه ساخت ایران با کیفیت بالا
                      </p>
                      <div
                        class="card-actions justify-start"
                        data-atropos-offset="6"
                      >
                        <div class="badge badge-outline">تولید ایران</div>
                        <div class="badge badge-outline badge-primary">
                          قطعه
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Atropos>

              <Atropos rotateXMax={5} rotateYMax={5}>
                <div class="group rounded-md flex items-center justify-center">
                  <div
                    class="card w-96 bg-neutral hover:opacity-90 cursor-pointer group-hover:bg-neutral-focus"
                    onClick={handleHamZanClick}
                    data-atropos-offset="-5"
                  >
                    <figure>
                      <img
                        className="aspect-square"
                        src={hamzan}
                        alt="tighe"
                        ata-atropos-offset="0"
                      />
                    </figure>
                    <div
                      class="card-body"
                      data-atropos-offset="6"
                      activeOffset="40"
                      shadowScale="1.05"
                      highlight="true"
                      shadow="true"
                    >
                      <h2
                        class="card-title text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        <span className="group-hover:scale-105">
                          دستگاه هم‌زن
                        </span>
                      </h2>
                      <h2
                        className="card-title text-neutral-content"
                        data-atropos-offset="6"
                        dir="rtl"
                      >
                        تومن ۲,۵۰۰,۰۰۰
                      </h2>
                      <p dir="rtl" data-atropos-offset="6">
                        <div className="text-neutral-content" dir="rtl">
                          به همراه ویدیو مقایسه در مجله
                        </div>
                      </p>
                      <div
                        class="card-actions justify-start"
                        data-atropos-offset="6"
                      >
                        <div class="badge badge-success" dir="rtl">
                          + ویدیو
                        </div>
                        <div class="badge badge-outline">تولید چین</div>
                        <div class="badge badge-outline badge-primary">
                          دستگاه
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Atropos>
              <Atropos activeOffset={10} rotateXMax={5} rotateYMax={5}>
                <div
                  class="group rounded-md flex items-center justify-center"
                  activeOffset={10}
                >
                  <div
                    class="card w-96 bg-neutral cursor-pointer group-hover:bg-neutral-focus"
                    onClick={handleTigheClick}
                    data-atropos-offset="-5"
                    activeOffset={10}
                  >
                    <figure>
                      <img src={tighe} alt="tighe" ata-atropos-offset="0" />
                    </figure>
                    <div
                      class="card-body"
                      data-atropos-offset="5"
                      activeOffset="40"
                      shadowScale="1.05"
                      highlight="true"
                      shadow="true"
                    >
                      <h2
                        className="card-title"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        <span
                          className="group-hover:scale-105 text-neutral-content"
                          data-atropos-offset="6"
                        >
                          تیغه
                        </span>
                        <div
                          className="badge badge-secondary"
                          dir="rtl"
                          data-atropos-offset="6"
                        >
                          ۱۵٪ تخفیف
                        </div>
                      </h2>

                      <h2
                        className="card-title text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        تومن ۲۰۰,۰۰۰
                        <span className="line-through text-xs">۲۵۰,۰۰۰</span>
                      </h2>

                      <p
                        className="text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        تیغه ساخت ایران با کیفیت بالا
                      </p>
                      <div
                        class="card-actions justify-start"
                        data-atropos-offset="6"
                      >
                        <div class="badge badge-outline">تولید ایران</div>
                        <div class="badge badge-outline badge-primary">
                          قطعه
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Atropos>

              <Atropos rotateXMax={5} rotateYMax={5}>
                <div class="group rounded-md flex items-center justify-center">
                  <div
                    class="card w-96 bg-neutral hover:opacity-90 cursor-pointer group-hover:bg-neutral-focus"
                    onClick={handleHamZanClick}
                    data-atropos-offset="-5"
                  >
                    <figure>
                      <img
                        className="aspect-square"
                        src={hamzan}
                        alt="tighe"
                        ata-atropos-offset="0"
                      />
                    </figure>
                    <div
                      class="card-body"
                      data-atropos-offset="6"
                      activeOffset="40"
                      shadowScale="1.05"
                      highlight="true"
                      shadow="true"
                    >
                      <h2
                        class="card-title text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        <span className="group-hover:scale-105">
                          دستگاه هم‌زن
                        </span>
                      </h2>
                      <h2
                        className="card-title text-neutral-content"
                        data-atropos-offset="6"
                        dir="rtl"
                      >
                        تومن ۲,۵۰۰,۰۰۰
                      </h2>
                      <p dir="rtl" data-atropos-offset="6">
                        <div className="text-neutral-content" dir="rtl">
                          به همراه ویدیو مقایسه در مجله
                        </div>
                      </p>
                      <div
                        class="card-actions justify-start"
                        data-atropos-offset="6"
                      >
                        <div class="badge badge-success" dir="rtl">
                          + ویدیو
                        </div>
                        <div class="badge badge-outline">تولید چین</div>
                        <div class="badge badge-outline badge-primary">
                          دستگاه
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Atropos>
              <Atropos activeOffset={10} rotateXMax={5} rotateYMax={5}>
                <div
                  class="group rounded-md flex items-center justify-center"
                  activeOffset={10}
                >
                  <div
                    class="card w-96 bg-neutral cursor-pointer group-hover:bg-neutral-focus"
                    onClick={handleTigheClick}
                    data-atropos-offset="-5"
                    activeOffset={10}
                  >
                    <figure>
                      <img src={tighe} alt="tighe" ata-atropos-offset="0" />
                    </figure>
                    <div
                      class="card-body"
                      data-atropos-offset="5"
                      activeOffset="40"
                      shadowScale="1.05"
                      highlight="true"
                      shadow="true"
                    >
                      <h2
                        className="card-title"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        <span
                          className="group-hover:scale-105 text-neutral-content"
                          data-atropos-offset="6"
                        >
                          تیغه
                        </span>
                        <div
                          className="badge badge-secondary"
                          dir="rtl"
                          data-atropos-offset="6"
                        >
                          ۱۵٪ تخفیف
                        </div>
                      </h2>

                      <h2
                        className="card-title text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        تومن ۲۰۰,۰۰۰
                        <span className="line-through text-xs">۲۵۰,۰۰۰</span>
                      </h2>

                      <p
                        className="text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        تیغه ساخت ایران با کیفیت بالا
                      </p>
                      <div
                        class="card-actions justify-start"
                        data-atropos-offset="6"
                      >
                        <div class="badge badge-outline">تولید ایران</div>
                        <div class="badge badge-outline badge-primary">
                          قطعه
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Atropos>

              <Atropos rotateXMax={5} rotateYMax={5}>
                <div class="group rounded-md flex items-center justify-center">
                  <div
                    class="card w-96 bg-neutral hover:opacity-90 cursor-pointer group-hover:bg-neutral-focus"
                    onClick={handleHamZanClick}
                    data-atropos-offset="-5"
                  >
                    <figure>
                      <img
                        className="aspect-square"
                        src={hamzan}
                        alt="tighe"
                        ata-atropos-offset="0"
                      />
                    </figure>
                    <div
                      class="card-body"
                      data-atropos-offset="6"
                      activeOffset="40"
                      shadowScale="1.05"
                      highlight="true"
                      shadow="true"
                    >
                      <h2
                        class="card-title text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        <span className="group-hover:scale-105">
                          دستگاه هم‌زن
                        </span>
                      </h2>
                      <h2
                        className="card-title text-neutral-content"
                        data-atropos-offset="6"
                        dir="rtl"
                      >
                        تومن ۲,۵۰۰,۰۰۰
                      </h2>
                      <p dir="rtl" data-atropos-offset="6">
                        <div className="text-neutral-content" dir="rtl">
                          به همراه ویدیو مقایسه در مجله
                        </div>
                      </p>
                      <div
                        class="card-actions justify-start"
                        data-atropos-offset="6"
                      >
                        <div class="badge badge-success" dir="rtl">
                          + ویدیو
                        </div>
                        <div class="badge badge-outline">تولید چین</div>
                        <div class="badge badge-outline badge-primary">
                          دستگاه
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Atropos>
              <Atropos activeOffset={10} rotateXMax={5} rotateYMax={5}>
                <div
                  class="group rounded-md flex items-center justify-center"
                  activeOffset={10}
                >
                  <div
                    class="card w-96 bg-neutral cursor-pointer group-hover:bg-neutral-focus"
                    onClick={handleTigheClick}
                    data-atropos-offset="-5"
                    activeOffset={10}
                  >
                    <figure>
                      <img src={tighe} alt="tighe" ata-atropos-offset="0" />
                    </figure>
                    <div
                      class="card-body"
                      data-atropos-offset="5"
                      activeOffset="40"
                      shadowScale="1.05"
                      highlight="true"
                      shadow="true"
                    >
                      <h2
                        className="card-title"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        <span
                          className="group-hover:scale-105 text-neutral-content"
                          data-atropos-offset="6"
                        >
                          تیغه
                        </span>
                        <div
                          className="badge badge-secondary"
                          dir="rtl"
                          data-atropos-offset="6"
                        >
                          ۱۵٪ تخفیف
                        </div>
                      </h2>

                      <h2
                        className="card-title text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        تومن ۲۰۰,۰۰۰
                        <span className="line-through text-xs">۲۵۰,۰۰۰</span>
                      </h2>

                      <p
                        className="text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        تیغه ساخت ایران با کیفیت بالا
                      </p>
                      <div
                        class="card-actions justify-start"
                        data-atropos-offset="6"
                      >
                        <div class="badge badge-outline">تولید ایران</div>
                        <div class="badge badge-outline badge-primary">
                          قطعه
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Atropos>

              <Atropos rotateXMax={5} rotateYMax={5}>
                <div class="group rounded-md flex items-center justify-center">
                  <div
                    class="card w-96 bg-neutral hover:opacity-90 cursor-pointer group-hover:bg-neutral-focus"
                    onClick={handleHamZanClick}
                    data-atropos-offset="-5"
                  >
                    <figure>
                      <img
                        className="aspect-square"
                        src={hamzan}
                        alt="tighe"
                        ata-atropos-offset="0"
                      />
                    </figure>
                    <div
                      class="card-body"
                      data-atropos-offset="6"
                      activeOffset="40"
                      shadowScale="1.05"
                      highlight="true"
                      shadow="true"
                    >
                      <h2
                        class="card-title text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        <span className="group-hover:scale-105">
                          دستگاه هم‌زن
                        </span>
                      </h2>
                      <h2
                        className="card-title text-neutral-content"
                        data-atropos-offset="6"
                        dir="rtl"
                      >
                        تومن ۲,۵۰۰,۰۰۰
                      </h2>
                      <p dir="rtl" data-atropos-offset="6">
                        <div className="text-neutral-content" dir="rtl">
                          به همراه ویدیو مقایسه در مجله
                        </div>
                      </p>
                      <div
                        class="card-actions justify-start"
                        data-atropos-offset="6"
                      >
                        <div class="badge badge-success" dir="rtl">
                          + ویدیو
                        </div>
                        <div class="badge badge-outline">تولید چین</div>
                        <div class="badge badge-outline badge-primary">
                          دستگاه
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Atropos>
              <Atropos activeOffset={10} rotateXMax={5} rotateYMax={5}>
                <div
                  class="group rounded-md flex items-center justify-center"
                  activeOffset={10}
                >
                  <div
                    class="card w-96 bg-neutral cursor-pointer group-hover:bg-neutral-focus"
                    onClick={handleTigheClick}
                    data-atropos-offset="-5"
                    activeOffset={10}
                  >
                    <figure>
                      <img src={tighe} alt="tighe" ata-atropos-offset="0" />
                    </figure>
                    <div
                      class="card-body"
                      data-atropos-offset="5"
                      activeOffset="40"
                      shadowScale="1.05"
                      highlight="true"
                      shadow="true"
                    >
                      <h2
                        className="card-title"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        <span
                          className="group-hover:scale-105 text-neutral-content"
                          data-atropos-offset="6"
                        >
                          تیغه
                        </span>
                        <div
                          className="badge badge-secondary"
                          dir="rtl"
                          data-atropos-offset="6"
                        >
                          ۱۵٪ تخفیف
                        </div>
                      </h2>

                      <h2
                        className="card-title text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        تومن ۲۰۰,۰۰۰
                        <span className="line-through text-xs">۲۵۰,۰۰۰</span>
                      </h2>

                      <p
                        className="text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        تیغه ساخت ایران با کیفیت بالا
                      </p>
                      <div
                        class="card-actions justify-start"
                        data-atropos-offset="6"
                      >
                        <div class="badge badge-outline">تولید ایران</div>
                        <div class="badge badge-outline badge-primary">
                          قطعه
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Atropos>

              <Atropos rotateXMax={5} rotateYMax={5}>
                <div class="group rounded-md flex items-center justify-center">
                  <div
                    class="card w-96 bg-neutral hover:opacity-90 cursor-pointer group-hover:bg-neutral-focus"
                    onClick={handleHamZanClick}
                    data-atropos-offset="-5"
                  >
                    <figure>
                      <img
                        className="aspect-square"
                        src={hamzan}
                        alt="tighe"
                        ata-atropos-offset="0"
                      />
                    </figure>
                    <div
                      class="card-body"
                      data-atropos-offset="6"
                      activeOffset="40"
                      shadowScale="1.05"
                      highlight="true"
                      shadow="true"
                    >
                      <h2
                        class="card-title text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        <span className="group-hover:scale-105">
                          دستگاه هم‌زن
                        </span>
                      </h2>
                      <h2
                        className="card-title text-neutral-content"
                        data-atropos-offset="6"
                        dir="rtl"
                      >
                        تومن ۲,۵۰۰,۰۰۰
                      </h2>
                      <p dir="rtl" data-atropos-offset="6">
                        <div className="text-neutral-content" dir="rtl">
                          به همراه ویدیو مقایسه در مجله
                        </div>
                      </p>
                      <div
                        class="card-actions justify-start"
                        data-atropos-offset="6"
                      >
                        <div class="badge badge-success" dir="rtl">
                          + ویدیو
                        </div>
                        <div class="badge badge-outline">تولید چین</div>
                        <div class="badge badge-outline badge-primary">
                          دستگاه
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Atropos>
              <Atropos activeOffset={10} rotateXMax={5} rotateYMax={5}>
                <div
                  class="group rounded-md flex items-center justify-center"
                  activeOffset={10}
                >
                  <div
                    class="card w-96 bg-neutral cursor-pointer group-hover:bg-neutral-focus"
                    onClick={handleTigheClick}
                    data-atropos-offset="-5"
                    activeOffset={10}
                  >
                    <figure>
                      <img src={tighe} alt="tighe" ata-atropos-offset="0" />
                    </figure>
                    <div
                      class="card-body"
                      data-atropos-offset="5"
                      activeOffset="40"
                      shadowScale="1.05"
                      highlight="true"
                      shadow="true"
                    >
                      <h2
                        className="card-title"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        <span
                          className="group-hover:scale-105 text-neutral-content"
                          data-atropos-offset="6"
                        >
                          تیغه
                        </span>
                        <div
                          className="badge badge-secondary"
                          dir="rtl"
                          data-atropos-offset="6"
                        >
                          ۱۵٪ تخفیف
                        </div>
                      </h2>

                      <h2
                        className="card-title text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        تومن ۲۰۰,۰۰۰
                        <span className="line-through text-xs">۲۵۰,۰۰۰</span>
                      </h2>

                      <p
                        className="text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        تیغه ساخت ایران با کیفیت بالا
                      </p>
                      <div
                        class="card-actions justify-start"
                        data-atropos-offset="6"
                      >
                        <div class="badge badge-outline">تولید ایران</div>
                        <div class="badge badge-outline badge-primary">
                          قطعه
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Atropos>

              <Atropos rotateXMax={5} rotateYMax={5}>
                <div class="group rounded-md flex items-center justify-center">
                  <div
                    class="card w-96 bg-neutral hover:opacity-90 cursor-pointer group-hover:bg-neutral-focus"
                    onClick={handleHamZanClick}
                    data-atropos-offset="-5"
                  >
                    <figure>
                      <img
                        className="aspect-square"
                        src={hamzan}
                        alt="tighe"
                        ata-atropos-offset="0"
                      />
                    </figure>
                    <div
                      class="card-body"
                      data-atropos-offset="6"
                      activeOffset="40"
                      shadowScale="1.05"
                      highlight="true"
                      shadow="true"
                    >
                      <h2
                        class="card-title text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        <span className="group-hover:scale-105">
                          دستگاه هم‌زن
                        </span>
                      </h2>
                      <h2
                        className="card-title text-neutral-content"
                        data-atropos-offset="6"
                        dir="rtl"
                      >
                        تومن ۲,۵۰۰,۰۰۰
                      </h2>
                      <p dir="rtl" data-atropos-offset="6">
                        <div className="text-neutral-content" dir="rtl">
                          به همراه ویدیو مقایسه در مجله
                        </div>
                      </p>
                      <div
                        class="card-actions justify-start"
                        data-atropos-offset="6"
                      >
                        <div class="badge badge-success" dir="rtl">
                          + ویدیو
                        </div>
                        <div class="badge badge-outline">تولید چین</div>
                        <div class="badge badge-outline badge-primary">
                          دستگاه
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Atropos>
              <Atropos activeOffset={10} rotateXMax={5} rotateYMax={5}>
                <div
                  class="group rounded-md flex items-center justify-center"
                  activeOffset={10}
                >
                  <div
                    class="card w-96 bg-neutral cursor-pointer group-hover:bg-neutral-focus"
                    onClick={handleTigheClick}
                    data-atropos-offset="-5"
                    activeOffset={10}
                  >
                    <figure>
                      <img src={tighe} alt="tighe" ata-atropos-offset="0" />
                    </figure>
                    <div
                      class="card-body"
                      data-atropos-offset="5"
                      activeOffset="40"
                      shadowScale="1.05"
                      highlight="true"
                      shadow="true"
                    >
                      <h2
                        className="card-title"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        <span
                          className="group-hover:scale-105 text-neutral-content"
                          data-atropos-offset="6"
                        >
                          تیغه
                        </span>
                        <div
                          className="badge badge-secondary"
                          dir="rtl"
                          data-atropos-offset="6"
                        >
                          ۱۵٪ تخفیف
                        </div>
                      </h2>

                      <h2
                        className="card-title text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        تومن ۲۰۰,۰۰۰
                        <span className="line-through text-xs">۲۵۰,۰۰۰</span>
                      </h2>

                      <p
                        className="text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        تیغه ساخت ایران با کیفیت بالا
                      </p>
                      <div
                        class="card-actions justify-start"
                        data-atropos-offset="6"
                      >
                        <div class="badge badge-outline">تولید ایران</div>
                        <div class="badge badge-outline badge-primary">
                          قطعه
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Atropos>

              <Atropos rotateXMax={5} rotateYMax={5}>
                <div class="group rounded-md flex items-center justify-center">
                  <div
                    class="card w-96 bg-neutral hover:opacity-90 cursor-pointer group-hover:bg-neutral-focus"
                    onClick={handleHamZanClick}
                    data-atropos-offset="-5"
                  >
                    <figure>
                      <img
                        className="aspect-square"
                        src={hamzan}
                        alt="tighe"
                        ata-atropos-offset="0"
                      />
                    </figure>
                    <div
                      class="card-body"
                      data-atropos-offset="6"
                      activeOffset="40"
                      shadowScale="1.05"
                      highlight="true"
                      shadow="true"
                    >
                      <h2
                        class="card-title text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        <span className="group-hover:scale-105">
                          دستگاه هم‌زن
                        </span>
                      </h2>
                      <h2
                        className="card-title text-neutral-content"
                        data-atropos-offset="6"
                        dir="rtl"
                      >
                        تومن ۲,۵۰۰,۰۰۰
                      </h2>
                      <p dir="rtl" data-atropos-offset="6">
                        <div className="text-neutral-content" dir="rtl">
                          به همراه ویدیو مقایسه در مجله
                        </div>
                      </p>
                      <div
                        class="card-actions justify-start"
                        data-atropos-offset="6"
                      >
                        <div class="badge badge-success" dir="rtl">
                          + ویدیو
                        </div>
                        <div class="badge badge-outline">تولید چین</div>
                        <div class="badge badge-outline badge-primary">
                          دستگاه
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Atropos>
              <Atropos activeOffset={10} rotateXMax={5} rotateYMax={5}>
                <div
                  class="group rounded-md flex items-center justify-center"
                  activeOffset={10}
                >
                  <div
                    class="card w-96 bg-neutral cursor-pointer group-hover:bg-neutral-focus"
                    onClick={handleTigheClick}
                    data-atropos-offset="-5"
                    activeOffset={10}
                  >
                    <figure>
                      <img src={tighe} alt="tighe" ata-atropos-offset="0" />
                    </figure>
                    <div
                      class="card-body"
                      data-atropos-offset="5"
                      activeOffset="40"
                      shadowScale="1.05"
                      highlight="true"
                      shadow="true"
                    >
                      <h2
                        className="card-title"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        <span
                          className="group-hover:scale-105 text-neutral-content"
                          data-atropos-offset="6"
                        >
                          تیغه
                        </span>
                        <div
                          className="badge badge-secondary"
                          dir="rtl"
                          data-atropos-offset="6"
                        >
                          ۱۵٪ تخفیف
                        </div>
                      </h2>

                      <h2
                        className="card-title text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        تومن ۲۰۰,۰۰۰
                        <span className="line-through text-xs">۲۵۰,۰۰۰</span>
                      </h2>

                      <p
                        className="text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        تیغه ساخت ایران با کیفیت بالا
                      </p>
                      <div
                        class="card-actions justify-start"
                        data-atropos-offset="6"
                      >
                        <div class="badge badge-outline">تولید ایران</div>
                        <div class="badge badge-outline badge-primary">
                          قطعه
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Atropos>

              <Atropos rotateXMax={5} rotateYMax={5}>
                <div class="group rounded-md flex items-center justify-center">
                  <div
                    class="card w-96 bg-neutral hover:opacity-90 cursor-pointer group-hover:bg-neutral-focus"
                    onClick={handleHamZanClick}
                    data-atropos-offset="-5"
                  >
                    <figure>
                      <img
                        className="aspect-square"
                        src={hamzan}
                        alt="tighe"
                        ata-atropos-offset="0"
                      />
                    </figure>
                    <div
                      class="card-body"
                      data-atropos-offset="6"
                      activeOffset="40"
                      shadowScale="1.05"
                      highlight="true"
                      shadow="true"
                    >
                      <h2
                        class="card-title text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        <span className="group-hover:scale-105">
                          دستگاه هم‌زن
                        </span>
                      </h2>
                      <h2
                        className="card-title text-neutral-content"
                        data-atropos-offset="6"
                        dir="rtl"
                      >
                        تومن ۲,۵۰۰,۰۰۰
                      </h2>
                      <p dir="rtl" data-atropos-offset="6">
                        <div className="text-neutral-content" dir="rtl">
                          به همراه ویدیو مقایسه در مجله
                        </div>
                      </p>
                      <div
                        class="card-actions justify-start"
                        data-atropos-offset="6"
                      >
                        <div class="badge badge-success" dir="rtl">
                          + ویدیو
                        </div>
                        <div class="badge badge-outline">تولید چین</div>
                        <div class="badge badge-outline badge-primary">
                          دستگاه
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Atropos>
              <Atropos activeOffset={10} rotateXMax={5} rotateYMax={5}>
                <div
                  class="group rounded-md flex items-center justify-center"
                  activeOffset={10}
                >
                  <div
                    class="card w-96 bg-neutral cursor-pointer group-hover:bg-neutral-focus"
                    onClick={handleTigheClick}
                    data-atropos-offset="-5"
                    activeOffset={10}
                  >
                    <figure>
                      <img src={tighe} alt="tighe" ata-atropos-offset="0" />
                    </figure>
                    <div
                      class="card-body"
                      data-atropos-offset="5"
                      activeOffset="40"
                      shadowScale="1.05"
                      highlight="true"
                      shadow="true"
                    >
                      <h2
                        className="card-title"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        <span
                          className="group-hover:scale-105 text-neutral-content"
                          data-atropos-offset="6"
                        >
                          تیغه
                        </span>
                        <div
                          className="badge badge-secondary"
                          dir="rtl"
                          data-atropos-offset="6"
                        >
                          ۱۵٪ تخفیف
                        </div>
                      </h2>

                      <h2
                        className="card-title text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        تومن ۲۰۰,۰۰۰
                        <span className="line-through text-xs">۲۵۰,۰۰۰</span>
                      </h2>

                      <p
                        className="text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        تیغه ساخت ایران با کیفیت بالا
                      </p>
                      <div
                        class="card-actions justify-start"
                        data-atropos-offset="6"
                      >
                        <div class="badge badge-outline">تولید ایران</div>
                        <div class="badge badge-outline badge-primary">
                          قطعه
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Atropos>

              <Atropos rotateXMax={5} rotateYMax={5}>
                <div class="group rounded-md flex items-center justify-center">
                  <div
                    class="card w-96 bg-neutral hover:opacity-90 cursor-pointer group-hover:bg-neutral-focus"
                    onClick={handleHamZanClick}
                    data-atropos-offset="-5"
                  >
                    <figure>
                      <img
                        className="aspect-square"
                        src={hamzan}
                        alt="tighe"
                        ata-atropos-offset="0"
                      />
                    </figure>
                    <div
                      class="card-body"
                      data-atropos-offset="6"
                      activeOffset="40"
                      shadowScale="1.05"
                      highlight="true"
                      shadow="true"
                    >
                      <h2
                        class="card-title text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        <span className="group-hover:scale-105">
                          دستگاه هم‌زن
                        </span>
                      </h2>
                      <h2
                        className="card-title text-neutral-content"
                        data-atropos-offset="6"
                        dir="rtl"
                      >
                        تومن ۲,۵۰۰,۰۰۰
                      </h2>
                      <p dir="rtl" data-atropos-offset="6">
                        <div className="text-neutral-content" dir="rtl">
                          به همراه ویدیو مقایسه در مجله
                        </div>
                      </p>
                      <div
                        class="card-actions justify-start"
                        data-atropos-offset="6"
                      >
                        <div class="badge badge-success" dir="rtl">
                          + ویدیو
                        </div>
                        <div class="badge badge-outline">تولید چین</div>
                        <div class="badge badge-outline badge-primary">
                          دستگاه
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Atropos>
              <Atropos activeOffset={10} rotateXMax={5} rotateYMax={5}>
                <div
                  class="group rounded-md flex items-center justify-center"
                  activeOffset={10}
                >
                  <div
                    class="card w-96 bg-neutral cursor-pointer group-hover:bg-neutral-focus"
                    onClick={handleTigheClick}
                    data-atropos-offset="-5"
                    activeOffset={10}
                  >
                    <figure>
                      <img src={tighe} alt="tighe" ata-atropos-offset="0" />
                    </figure>
                    <div
                      class="card-body"
                      data-atropos-offset="5"
                      activeOffset="40"
                      shadowScale="1.05"
                      highlight="true"
                      shadow="true"
                    >
                      <h2
                        className="card-title"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        <span
                          className="group-hover:scale-105 text-neutral-content"
                          data-atropos-offset="6"
                        >
                          تیغه
                        </span>
                        <div
                          className="badge badge-secondary"
                          dir="rtl"
                          data-atropos-offset="6"
                        >
                          ۱۵٪ تخفیف
                        </div>
                      </h2>

                      <h2
                        className="card-title text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        تومن ۲۰۰,۰۰۰
                        <span className="line-through text-xs">۲۵۰,۰۰۰</span>
                      </h2>

                      <p
                        className="text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        تیغه ساخت ایران با کیفیت بالا
                      </p>
                      <div
                        class="card-actions justify-start"
                        data-atropos-offset="6"
                      >
                        <div class="badge badge-outline">تولید ایران</div>
                        <div class="badge badge-outline badge-primary">
                          قطعه
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Atropos>

              <Atropos rotateXMax={5} rotateYMax={5}>
                <div class="group rounded-md flex items-center justify-center">
                  <div
                    class="card w-96 bg-neutral hover:opacity-90 cursor-pointer group-hover:bg-neutral-focus"
                    onClick={handleHamZanClick}
                    data-atropos-offset="-5"
                  >
                    <figure>
                      <img
                        className="aspect-square"
                        src={hamzan}
                        alt="tighe"
                        ata-atropos-offset="0"
                      />
                    </figure>
                    <div
                      class="card-body"
                      data-atropos-offset="6"
                      activeOffset="40"
                      shadowScale="1.05"
                      highlight="true"
                      shadow="true"
                    >
                      <h2
                        class="card-title text-neutral-content"
                        dir="rtl"
                        data-atropos-offset="6"
                      >
                        <span className="group-hover:scale-105">
                          دستگاه هم‌زن
                        </span>
                      </h2>
                      <h2
                        className="card-title text-neutral-content"
                        data-atropos-offset="6"
                        dir="rtl"
                      >
                        تومن ۲,۵۰۰,۰۰۰
                      </h2>
                      <p dir="rtl" data-atropos-offset="6">
                        <div className="text-neutral-content" dir="rtl">
                          به همراه ویدیو مقایسه در مجله
                        </div>
                      </p>
                      <div
                        class="card-actions justify-start"
                        data-atropos-offset="6"
                      >
                        <div class="badge badge-success" dir="rtl">
                          + ویدیو
                        </div>
                        <div class="badge badge-outline">تولید چین</div>
                        <div class="badge badge-outline badge-primary">
                          دستگاه
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Atropos>
            </div>
          </div>
        </div>
        {/*Contents End */}

        <div class="drawer-side">
          <label for="my-drawer-4" class="drawer-overlay"></label>
          <div class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <div className="divider">بر اساس تخفیف</div>

            <div class="form-control">
              <label class="label cursor-pointer">
                <input type="radio" name="radio-6" class="radio" checked />
                <span class="label-text">نمایش همه</span>
              </label>
            </div>
            <div class="form-control">
              <label class="label cursor-pointer">
                <input type="radio" name="radio-6" class="radio" checked />
                <span class="label-text">نمایش تخفیف خورده‌ها</span>
              </label>
            </div>

            <div className="divider">بر اساس امتیاز</div>

            <div class="rating">
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
            </div>
            <div className="divider">بر اساس نوع</div>

            <div className="divider">بر اساس برند</div>

            <button
              type="submit"
              className="btn btn-primary hover:border-slate-400 mt-6"
            >
              اعمال فیلتر
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Store
