import React from "react";

export default function Specials() {
  return (
    <section className="offer_banner_section section_space_md">
      <div className="container">
        <div className="row">
          <div className="col col-lg-8">
            <div
              className="offer_banner_item banner_big align-items-start d-block"
              style={{
                backgroundImage:
                  "url('assets/images/banner/offer_banner_bg_img_1.jpg');",
              }}
            >
              <div className="badge_wrap text-end">
                <div className="badge">Up to 40% Off</div>
              </div>
              <div className="item_content">
                <h3 className="item_title">Сheck Out Our Specials</h3>
                <p>
                  Massa placerat duis ultricies lacus. Aliquet bibendum enim
                  facilisis gravida neque convallis
                </p>
                <a className="btn_unfill" href="/">
                  <span>Shop Now</span>
                  <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col col-lg-4">
            <div className="offer_banner_item">
              <div className="item_image">
                <img
                  src="assets/images/banner/dogs_img_2.png"
                  alt="Pet Dog Image"
                />
              </div>
              <div className="item_content">
                <h3 className="item_title">Luxury Fashion Collection</h3>
                <a className="btn_unfill" href="/">
                  <span>Shop Now</span>
                  <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="offer_banner_item">
              <div className="item_image">
                <img
                  src="assets/images/banner/dogs_img_3.png"
                  alt="Pet Dog Image"
                />
              </div>
              <div className="item_content">
                <h3 className="item_title">Luxury Fashion Collection</h3>
                <a className="btn_unfill" href="/">
                  <span>Shop Now</span>
                  <i className="far fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
