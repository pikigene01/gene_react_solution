import React from 'react'
import dogSvg from '../imgs/1.svg'

export default function Banner() {
  return (
    <section
          className="banner_section banner_style_2 decoration_wrap"
          style=
          {{'backgroundImage': "url('assets/images/banner/shape_banner_bg.svg')"}}
        >
          <div
            className="section_overlay"
            style={{'backgroundImage': "url('assets/images/overlay/shapes_overlay_2.svg')"}}
          ></div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col order-last col-lg-6">
                <div className="banner_image">
                  <img
                    src={dogSvg}
                    alt="Pet Dogs Image"
                  />
                </div>
              </div>
              <div className="col col-lg-6">
                <div className="banner_content">
                  <h1 className="banner_title">
                    <span className="banner_sub_title">We care for your pets</span>
                    We Help You Care for Animals with Nutrition
                  </h1>
                  <p className="banner_description">
                    All offers are subject to availability. Ut tortor pretium
                    viverra suspendisse potenti nullam ac tortor vitae.
                    Consectetur a erat nam at. Potenti nullam ac tortor vitae
                    purus faucibus ornare.
                  </p>
                  <div className="banner_policy_items row">
                    <div className="col">
                      <div className="iconbox_item iconbox_lefticon">
                        <div className="item_icon">
                          <i className="fas fa-shipping-fast"></i>
                        </div>
                        <div className="item_content">
                          <h3 className="item_title mb-0">Trust & Safety</h3>
                          <p className="mb-0">Velit euismod pellentes</p>
                        </div>
                        <a className="item_global_link" href="#"></a>
                      </div>
                    </div>
                    <div className="col">
                      <div className="iconbox_item iconbox_lefticon">
                        <div className="item_icon">
                          <i className="fas fa-badge-percent"></i>
                        </div>
                        <div className="item_content">
                          <h3 className="item_title mb-0">Discounts</h3>
                          <p className="mb-0">Bibendum ut tristique</p>
                        </div>
                        <a className="item_global_link" href="#"></a>
                      </div>
                    </div>
                    <div className="col">
                      <div className="iconbox_item iconbox_lefticon">
                        <div className="item_icon">
                          <i className="fas fa-user-headset"></i>
                        </div>
                        <div className="item_content">
                          <h3 className="item_title mb-0">Support</h3>
                          <p className="mb-0">Egestas quis ipsum velit</p>
                        </div>
                        <a className="item_global_link" href="#"></a>
                      </div>
                    </div>
                    <div className="col">
                      <div className="iconbox_item iconbox_lefticon">
                        <div className="item_icon">
                          <i className="fas fa-shield-check"></i>
                        </div>
                        <div className="item_content">
                          <h3 className="item_title mb-0">Guarantee</h3>
                          <p className="mb-0">Velit euismod pellentes</p>
                        </div>
                        <a className="item_global_link" href="#"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
