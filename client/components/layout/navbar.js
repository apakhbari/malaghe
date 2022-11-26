import PropTypes from 'prop-types'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { useState, useEffect } from 'react'

import { themeChange } from 'theme-change'

const Navbar = ({ url }) => {
  const router = useRouter()
  const [theme, setTheme] = useState(true)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [paletteIsClicked, setpaletteIsClicked] = useState()

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 object-center mt-2 mx-7 z-50">
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
                {router.pathname !== ('/signin' || '/signup') && (
                  <li>
                    <Link
                      href="/auth/signin"
                      className="btn btn-outline btn-secondary m-1 normal-case text-xl mx-4"
                    >
                      داشبورد
                    </Link>
                  </li>
                )}
                <li>
                  {router.pathname !== '/store' && (
                    <Link
                      href="/store"
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
                          d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                        />
                      </svg>
                      فروشگاه
                    </Link>
                  )}
                </li>
                <li>
                  {router.pathname !== '/buyMana' && (
                    <Link
                      href="/Magazine"
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
                  )}
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
                      <div className="btn btn-ghost" data-set-theme="wireframe">
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
                  <div className="btn btn-ghost" data-set-theme="wireframe">
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

            {router.pathname !== ('/auth/signin' || '/auth/signup') && (
              <Link
                href="/auth/signin"
                className="btn btn-outline normal-case text-xl mx-4 text-primary-content"
              >
                داشبورد
              </Link>
            )}
            {router.pathname !== '/store' && (
              <Link
                href="/store"
                className="btn btn-ghost normal-case text-xl text-primary-content"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                  />
                </svg>
                فروشگاه
              </Link>
            )}
            {router.pathname !== '/buyMana' && (
              <Link
                href="/Magazine"
                className="btn btn-ghost normal-case text-xl text-primary-content"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
                مجله
              </Link>
            )}
          </div>
        </div>

        <div className="navbar-end">
          <div>
            <Link
              href="/"
              className="normal-case text-3xl hover:underline text-primary-content"
            >
              ملاقه
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  url: '/',
}

Navbar.propTypes = {
  url: PropTypes.string.isRequired,
}

export default Navbar
