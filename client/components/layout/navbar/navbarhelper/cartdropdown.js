import IconCart from '../../../../assets/icons/svg/iconcart'

function CartDropDown(props) {
  return (
    <div className="dropdown">
      <div className="rounded-full p-2 hover:cursor-pointer" tabIndex={0}>
        <div class="avatar placeholder cursor-pointer">
          <div class={props.stylingProps}>
            <IconCart stylingProps={'w-6 h-6'} />
          </div>
        </div>
      </div>
      <div
        tabIndex={0}
        className="dropdown-content card card-compact w-64 p-2 shadow bg-secondary text-primary-content"
      >
        <div className="card-body">
          <h3 className="card-title text-secondary-content" dir="rtl">
            سبد خرید شما خالیست!
          </h3>
        </div>
      </div>
    </div>
  )
}

export default CartDropDown
