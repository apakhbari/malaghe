import Link from 'next/link'

import PropTypes from 'prop-types'

import { useState, useEffect } from 'react'
import FooterNotMain from '../../components/layout/footernotmain'

import tighe from '../../assets/tighe.jpg'
import hamzan from '../../assets/hamzan.jpg'

import { themeChange } from 'theme-change'

import Atropos from 'atropos/react'
import NavBarStore from '../../components/layout/navbarstore'

function Store() {
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

  const [theme, setTheme] = useState(true)
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <div>
      <div class="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <NavBarStore />
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
