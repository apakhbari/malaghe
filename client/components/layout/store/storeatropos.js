import Image from 'next/image'
import { useRouter } from 'next/router'

import Atropos from 'atropos/react'

import hamzan from '../../../assets/images/store/hamzan.jpg'

function StoreAtropos() {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/store/hamzan')
  }

  return (
    <Atropos rotateXMax={5} rotateYMax={5}>
      <div class="group rounded-md flex items-center justify-center">
        <div
          class="card w-96 bg-neutral hover:opacity-90 hover:shadow-2xl cursor-pointer group-hover:bg-neutral-focus"
          onClick={handleClick}
          data-atropos-offset="-5"
        >
          <figure>
            <Image
              className="aspect-square group-hover:opacity-80"
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
              <span className="group-hover:scale-105">دستگاه هم‌زن</span>
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
              data-atropos-offset="6"
              dir="rtl"
            >
              تومن ۲۰۰,۰۰۰
              <span className="line-through text-xs">۲۵۰,۰۰۰</span>
            </h2>
            <p dir="rtl" data-atropos-offset="6">
              <div className="text-neutral-content" dir="rtl">
                به همراه ویدیو مقایسه در مجله
              </div>
            </p>
            <div class="card-actions justify-start" data-atropos-offset="6">
              <div class="badge badge-success" dir="rtl">
                + ویدیو
              </div>
              <div class="badge badge-outline">تولید چین</div>
              <div class="badge badge-outline badge-primary">دستگاه</div>
            </div>
          </div>
        </div>
      </div>
    </Atropos>
  )
}

export default StoreAtropos
