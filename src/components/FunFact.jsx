import React from 'react'

export default function FunFact() {
  return (
    <section className="funfact_section section_space_md">
    <div className="container">
      <div
        className="funfact_wrapper decoration_wrap"
        style=
        {{'backgroundImage': "url('assets/images/overlay/shapes_overlay_3.svg')"}}

      >
        <div
          className="section_overlay"
          style=
          {{'backgroundImage': "url('assets/images/overlay/shapes_overlay_4.svg')"}}
        ></div>
        <div className="funfact_item">
          <div className="item_icon">
            <img src="assets/images/icon/icon_pets.svg" alt="Pets Icon" />
          </div>
          <div className="item_content">
            <h3 className="counter_text text-white">
              <span className="counter_value">120</span>
              <span className="plus_text">+</span>
            </h3>
            <p className="item_title text-white mb-0">Sutisfide Cliens</p>
          </div>
        </div>
        <div className="funfact_item">
          <div className="item_icon">
            <img
              src="assets/images/icon/icon_medal.svg"
              alt="Pets Icon"
            />
          </div>
          <div className="item_content">
            <h3 className="counter_text text-white">
              <span className="counter_value">20</span>
              <span className="plus_text">+</span>
            </h3>
            <p className="item_title text-white mb-0">Years Experience</p>
          </div>
        </div>
        <div className="funfact_item">
          <div className="item_icon">
            <img
              src="assets/images/icon/icon_canned_food.svg"
              alt="Pets Icon"
            />
          </div>
          <div className="item_content">
            <h3 className="counter_text text-white">
              <span className="counter_value">70</span>
              <span className="plus_text">+</span>
            </h3>
            <p className="item_title text-white mb-0">Brands Available</p>
          </div>
        </div>
        <div className="funfact_item">
          <div className="item_icon">
            <img
              src="assets/images/icon/icon_shopping_bag.svg"
              alt="Pets Icon"
            />
          </div>
          <div className="item_content">
            <h3 className="counter_text text-white">
              <span className="counter_value">200</span>
              <span className="plus_text">+</span>
            </h3>
            <p className="item_title text-white mb-0">Products for pets</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
