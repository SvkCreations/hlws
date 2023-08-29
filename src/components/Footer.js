import React from 'react';
import logo from '../images/logo.png'

export default function Footer() {
    return (
        <div className="container-fluid px-5 pt-5 pb-5 p-lg-5" style={{ background: '#818e6b' }}>
            <footer className="pt-5">
                <div className="row px-0 px-lg-5">
                    <div className="col-6 col-md-4 mb-3 d-flex flex-column align-items-center">
                        <img src={logo} width='150' alt="" className="img-fluid" />
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Sections</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Why Feng Shui</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">What is Feng Shui</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">What Feng Shui Can Do</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About Smita</a></li>
                        </ul>
                    </div>

                    <div className="col-md-5 mb-3 mt-4 mt-md-0">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label htmlFor="newsletter1" className="visually-hidden">Enter your e-mail address</label>
                                <input id="newsletter1" type="text" className="form-control rounded-5 shadow-none" placeholder="Enter your e-mail address.." />
                                <button className="btn tertiary-btn" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between mt-5 m-0 mt-md-5 mx-md-5 pt-4 copyright">
                    <p>© 2023 HarmoniousLivingWithSmithaa. All rights reserved.</p>
                    <ul className="list-unstyled d-flex gap-2">
                        <li className="ms-3"><a className="btn d-flex justify-content-center align-items-center tertiary-btn" href="#"><iconify-icon className='icon' icon="gg:facebook" style={{fontSize:'25px'}}></iconify-icon></a></li>
                        <li className="ms-3"><a className="btn d-flex justify-content-center align-items-center tertiary-btn" href="#"><iconify-icon className='icon' icon="mdi:instagram" style={{fontSize:'25px'}}></iconify-icon></a></li>
                        <li className="ms-3"><a className="btn d-flex justify-content-center align-items-center tertiary-btn" href="#"><iconify-icon className='icon' icon="mdi:youtube" style={{fontSize:'25px'}}></iconify-icon></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}
