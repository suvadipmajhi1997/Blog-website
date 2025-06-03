import React from 'react'

import logoLight from './../../assets/logo-light.png'
import footer1 from './../../assets/footer-1.jpg'
import footer2 from './../../assets/footer-2.jpg'
import footer3 from './../../assets/footer-3.jpg'

const Footer = () => {
  return (
    <>
    <section className="py-2 footer">
        <div className="container">
            <div className="row mt-3">
                <div className="col-lg-4 mb-5">
                    <div className="logo mb-3 d-flex align-items-center mb-3">
                        <h2><span>Quiet</span>Quill</h2>
                        {/* <img src={logoLight} className='footer-logo' alt="" /> */}
                    </div>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nam molestias distinctio sapiente asperiores ut?</p>
                    <h6>Email Us: <a href="#">Info@gmail.com</a> </h6>
                    <h6>Contact: <a href="#">+91 9876543210</a> </h6>
                    <div className="footer-icons d-flex mt-3 gap-3">
                        <i className="ri-facebook-fill"></i>
                        <i className="ri-twitter-fill"></i>
                        <i className="ri-linkedin-fill"></i>
                        <i className="ri-instagram-line"></i>
                        <i className="ri-youtube-fill"></i>
                        <i className="ri-pinterest-line"></i>
                    </div>
                </div>

                <div className="col-lg-4 mb-5">
                    <h5 className="fw-bold mb-4">Top Post</h5>
                    <div className="d-flex mb-3">
                        <img src={footer1} className='f-post me-3' alt="" />
                        <div className='d-flex flex-column'>
                            <span className="mb-1 fw-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
                            <small>January 15, 2025</small>
                        </div>
                    </div>
                    <div className="d-flex mb-3">
                        <img src={footer2} className='f-post me-3' alt="" />
                        <div className='d-flex flex-column'>
                            <span className="mb-1 fw-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
                            <small>January 15, 2025</small>
                        </div>
                    </div>
                    <div className="d-flex mb-3">
                        <img src={footer3} className='f-post me-3' alt="" />
                        <div className='d-flex flex-column'>
                            <span className="mb-1 fw-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
                            <small>January 15, 2025</small>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mb-5">
                    <h5 className="mb-3 fw-bold">Popular Entries</h5>
                    <ul className="list-unstyled">
                        <li className="mb-3"><a href="#">Lorem ipsum dolor sit amet.</a></li>
                        <li className="mb-3"><a href="#">Lorem ipsum dolor sit amet consectetur adipisicing.</a></li>
                        <li className="mb-3"><a href="#">Lorem ipsum dolor sit amet consectetur.</a></li>
                        <li className="mb-3"><a href="#">Lorem ipsum dolor sit amet consectetur.</a></li>
                        <li><a href="#">Lorem ipsum dolor sit amet consectetur.</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="mt-4 text-center pt-2 footer-bottom border-top">
            <p>©Copyright All Rights Reserved by <a href="#">Suvadip</a></p>
        </div>
    </section>
    </>
  )
}

export default Footer