import React from 'react';
import img1 from '../images/harmony.png';
import img2 from '../images/wealth.png';
import img3 from '../images/positive.png';

export default function WhatIsFengShui() {
    return (
        <div className='container-fluid px-4 px-md-0 what pt-3 pt-md-5 d-flex flex-column align-items-center'>

            <h2 className="display-6 fw-bold mt-2 mt-md-5 pt-5 text-center" data-aos='fade-down'>WHAT IS FENG-SHUI</h2>
            <p className='text-center px-2 px-md-4 px-lg-5 mt-lg-3 col-lg-5' data-aos='fade-up'>It’s a system that talks about how the orientation or location of homes and/or land is influenced by
                the energy surrounding that environment. According to this study, everything in this world has a life
                form or a life force,and if you understand how life force works, then you can harness it to improve
                and transform your life. Generally people use Feng-Shui for:</p>

            <div className="container" id="hanging-icons">
                <div className="row g-3 my-4 row-cols-1 row-cols-lg-3">
                    <div className="col d-flex align-items-center" data-aos='fade-up'>
                        <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center flex-shrink-0 me-3 p-3" style={{backgroundColor:'#c3aa7d', borderRadius:'50%'}}>
                            <img src={img1} width='35' alt="" className="img-fluid" />
                        </div>
                        <div>
                            <h3 className="fs-5">Good harmony at Home</h3>
                        </div>
                    </div>
                    <div className="col d-flex align-items-center" data-aos='fade-up'>
                        <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center flex-shrink-0 me-3 p-3" style={{backgroundColor:'#c3aa7d', borderRadius:'50%'}}>
                            <img src={img2} width='35' alt="" className="img-fluid" />
                        </div>
                        <div>
                            <h3 className="fs-5">To increase the flow of wealth</h3>
                        </div>
                    </div>
                    <div className="col d-flex align-items-center" data-aos='fade-up'>
                        <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center flex-shrink-0 me-3 p-3" style={{backgroundColor:'#c3aa7d', borderRadius:'50%'}}>
                            <img src={img3} width='35' alt="" className="img-fluid" />
                        </div>
                        <div>
                            <h3 className="fs-5">To select an office with positive energy.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
