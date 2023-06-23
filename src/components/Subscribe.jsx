import React from 'react'
import img1 from '../imgs/5.svg'
import img2 from '../imgs/5.svg'

export default function Subscribe() {
  return (
    <section className="subscribe_section section_space_md">
          <div className="container">
            <div className="subscribe_wrap decoration_wrap">
              <div className="content_wrap">
                <h2 className="title_text">
                  Get 20% Off Your First Purchase When You Use Petco Credit Card
                </h2>
                <p className="description_text">
                  Sapien nec sagittis aliquam malesuada bibendum arcu vitae
                  elementum. Ligula ullamcorper malesuada proin libero nunc
                  consequat interdum varius sit.
                </p>
                <form action="#">
                  <div className="form_item mb-0">
                    <input type="email" name="email" placeholder="Type your Email"/>
                    <button className="btn btn_warning" type="submit">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
              <div className="overlay" style={{"backgroundImage": "url('assets/images/overlay/shapes_overlay_5.svg')"}}></div>
              <div className="decoration_item shape_image_1">
                <img src="assets/images/shape/shape_path_5.svg" alt="Shape Image"/>
              </div>
              <div className="decoration_item shape_image_2">
                <img src="assets/images/shape/shape_circle_1.svg" alt="Shape Image"/>
              </div>
              <div className="decoration_item pet_image_1">
                <img src={img1} alt="Pet Image"/>
              </div>
              <div className="decoration_item pet_image_2">
                <img src="assets/images/about/about_img_5.png" alt="Pet Image"/>
              </div>
            </div>
          </div>
        </section>
  )
}
