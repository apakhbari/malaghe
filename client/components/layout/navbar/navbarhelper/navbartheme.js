import IconTheme from '../../../../assets/icons/svg/icontheme'

function NavBarTheme() {
  return (
    <div className="dropdown">
      <div className="btn btn-ghost text-primary-content" tabIndex={0}>
        <IconTheme
          stylingProps1={'w-6 h-6 place-self-center text-primary-content'}
          stylingProps2={
            'w-4 h-4 mt-1 place-self-center opacity-80 text-primary-content'
          }
        />
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
  )
}

export default NavBarTheme
