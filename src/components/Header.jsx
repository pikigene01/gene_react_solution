import React from 'react'

export default function Header() {
  return (
    <div> 
    <header className="header_section header_transparent">
        <div className="container">
          <div className="site_logo">
            <a href="/"
              ><img
                className="logo_before"
                src="assets/images/logo/logo.svg"
                alt="Petopia Logo"
            /></a>
          </div>
          <nav className="main_menu navbar navbar-expand-lg">
            <div
              className="main_menu_inner collapse navbar-collapse"
              id="main_menu_dropdown"
            >
              <ul className="main_menu_list unorder_list_center">
                <li className="active">
                  <a
                    className="nav-link"
                    href="#"
                    id="home_submenu"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >Home</a
                  >
                </li>
                <li className="">
                  <a
                    className="nav-link"
                    href="#"
                    id="service_submenu"
                    role="button"
                    >Services</a
                  >
                </li>
                <li>
                  <a
                    className="nav-link"
                    href="#"
                    id="shop_submenu"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >Shop</a
                  >
                </li>
                <li>
                  <a
                    className="nav-link"
                    href="#"
                    id="blog_submenu"
                    >Blog</a
                  >
                </li>
                <li>
                  <a
                    className="nav-link"
                    href="#"
                    id="pages_submenu"
                    >Pages</a>
                </li>
              </ul>
            </div>
          </nav>
          <ul className="header_btns_group unorder_list_right">
            <li>
              <button
                className="mobile_menu_btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#main_menu_dropdown"
                aria-controls="main_menu_dropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="far fa-bars"></i>
              </button>
            </li>
            <li className="dropdown">
              <button
                className="cart_btn"
                type="button"
                id="cart_dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-shopping-cart"></i>
                <small className="cart_counter">2</small> <span>item</span>
              </button>
              <div
                className="cart_dropdown dropdown-menu"
                aria-labelledby="cart_dropdown"
              >
                <ul className="cart_items_list unorder_list_block">
                  <li>
                    <a className="item_image" href="/"
                      ><img
                        src="assets/images/cart/cart_img_1.jpg"
                        alt="Pet Care Service"
                    /></a>
                    <div className="item_content">
                      <h3 className="item_title">
                        <a href="shop_details.html"
                          >Flying Fish Cat Scratching</a
                        >
                      </h3>
                      <span className="item_price">1 × $12.35</span>
                    </div>
                    <button className="remove_btn" type="button">
                      <i className="fal fa-times"></i>
                    </button>
                  </li>
                  <li>
                    <a className="item_image" href="shop_details.html"
                      ><img
                        src="assets/images/cart/cart_img_2.jpg"
                        alt="Pet Care Service"
                    /></a>
                    <div className="item_content">
                      <h3 className="item_title">
                        <a href="shop_details.html">Pet Bed</a>
                      </h3>
                      <span className="item_price">1 × $58.16</span>
                    </div>
                    <button className="remove_btn" type="button">
                      <i className="fal fa-times"></i>
                    </button>
                  </li>
                </ul>
                <hr />
                <div className="total_price">
                  <span>Total</span> <strong>$70.51</strong>
                </div>
                <a className="btn border_primary" href="#">Update Cart</a>
                <a className="btn btn_primary" href="#">Checkout</a>
              </div>
            </li>
          </ul>
        </div>
      </header>
   </div>
  )
}
