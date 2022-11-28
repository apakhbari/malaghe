function Workflow() {
  return (
    <li class="mb-10 ml-6">
      <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-secondary rounded-full ring-8 ring-accent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-3 h-3 text-secondary-content"
        >
          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
          <path
            fillRule="evenodd"
            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <h3 class="mb-1 text-lg font-semibold text-neutral-content">
        تشخیص خرابی
      </h3>
      <time class="block mb-2 text-sm font-normal leading-none text-primary/70">
        در تاریخ ۱۱ شهریور ۱۴۰۱
      </time>
      <span className="text-neutral-content text-sm font-medium py-0.5">
        م. صنعت‌گر -
      </span>
      <span className="bg-accent text-accent-content text-sm font-medium px-2.5 py-0.5 rounded mr-1">
        کارشناس
      </span>
      <p class="text-base font-normal text-neutral-content/80 mb-2 mt-2">
        طی بررسی‌ها مشخص شد که خرابی از این نقطه است. تصویر قطعه ضمیمه شده است.
      </p>

      <div className="inline-flex items-center btn btn-accent mt-3 justify-evenly">
        <svg
          class="w-4 h-4 ml-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
            clip-rule="evenodd"
          ></path>
        </svg>
        دریافت عکس قطعه خراب
      </div>
    </li>
  )
}

export default Workflow
