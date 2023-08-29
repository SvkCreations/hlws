import React from 'react';
import img1 from '../images/assesment.png';
import img2 from '../images/diagnosis.png';
import img3 from '../images/enhancement.png';
import img4 from '../images/corrective.png';
import img5 from '../images/analysis.png';
import img6 from '../images/LEARN.png';


export default function WhatFengShuiCanDo() {
    return (
        <div>
            <div className='container-fluid do px-4 py-3 p-md-5'>
                <h2 className="display-6 fw-bold mt-5 mx-3 mx-md-5 pt-5" data-aos="flip-down">WHAT FENG-SHUI CAN DO</h2>
                <p className='mx-3 mx-md-5' data-aos="flip-up">The 5 things That Feng-shui can do:</p>
                <div className="container-fluid px-3 px-md-5 pb-5 mb-5" id="custom-cards">
                    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-2" >
                        <div className="col" data-aos="flip-up">
                            <div className="card card-cover h-100 overflow-hidden rounded-4 shadow-lg" style={{ backgroundColor: '#D9D9D9' }}>
                                <div className="d-flex flex-column h-100 p-5 pb-5 text-dark text-shadow-1 align-items-center">
                                    <img src={img1} alt="" className="img-fluid" width='150' />
                                    <h3 className="lh-1 pt-3 fw-bold">ASSESSMENT</h3>
                                    <p className='text-center pt-2'>Assess whether the energy flow or the quality
                                        of the vibration in that area is positive or negative of the building, workspace or home.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col" data-aos="flip-up">
                            <div className="card card-cover h-100 overflow-hidden rounded-4 shadow-lg" style={{ backgroundColor: '#C3AA7D' }}>
                                <div className="d-flex flex-column h-100 p-5 pb-5 text-dark text-shadow-1 align-items-center">
                                    <img src={img2} alt="" className="img-fluid" width='150' />
                                    <h3 className="lh-1 pt-3 fw-bold">DIAGNOSIS</h3>
                                    <p className='text-center pt-2'>Sometimes people are stuck in life. Feng shui can be used to diagnose your energy blocks to understand what the problems are and /or why things are happening.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col" data-aos="flip-up">
                            <div className="card card-cover h-100 overflow-hidden rounded-4 shadow-lg" style={{ backgroundColor: '#D9D9D9' }}>
                                <div className="d-flex flex-column h-100 p-5 pb-5 text-dark text-shadow-1 align-items-center">
                                    <img src={img3} alt="" className="img-fluid" width='150' />
                                    <h3 className="lh-1 pt-3 fw-bold">ENHANCEMENT</h3>
                                    <p className='text-center pt-2'>It can be used to enhance business flow, wealth and certain outcomes of life.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col" data-aos="flip-up">
                            <div className="card card-cover h-100 overflow-hidden rounded-4 shadow-lg" style={{ backgroundColor: '#C3AA7D' }}>
                                <div className="d-flex flex-column h-100 p-5 pb-5 text-dark text-shadow-1 align-items-center">
                                    <img src={img4} alt="" className="img-fluid" width='150' />
                                    <h3 className="lh-1 pt-3 fw-bold">CORRECTIVE</h3>
                                    <p className='text-center pt-2'>Correcting a problem in the right way using Feng-shui. Diagnose the problem correctly and you will be able to use the right system to correct the problem and achieve
                                        what you want to achieve.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col" data-aos="flip-up">
                            <div className="card card-cover h-100 overflow-hidden rounded-4 shadow-lg" style={{ backgroundColor: '#D9D9D9' }}>
                                <div className="d-flex flex-column h-100 p-5 pb-5 text-dark text-shadow-1 align-items-center">
                                    <img src={img5} alt="" className="img-fluid" width='150' />
                                    <h3 className="lh-1 pt-3 fw-bold">PREDICTIVE ANALYSIS</h3>
                                    <p className='text-center pt-2'>As a tool to understand what could be the outcome if you use or continue to use a certain space (could be your work, your office space, your home space)? If you don’t like what you see as an outcome, you can then change it.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card card-cover h-100 overflow-hidden rounded-4" style={{ background: 'none', border: '2px solid black' }}>
                                <div className="d-flex flex-column h-100 p-5 pb-5 text-dark text-shadow-1 align-items-center">
                                    <img src={img6} alt="" className="img-fluid" width='150' />
                                    <h3 className="lh-1 pt-3 fw-bold">LEARN MORE</h3>
                                    <p className='text-center pt-2'>Dive deeper into the art of Feng Shui. Follow us on social media.</p>
                                    <div className="d-flex gap-2">
                                        <button type="button" className="btn tertiary-btn btn-lg me-md-2 d-flex align-items-center justify-content-center"><iconify-icon className='icon' icon="gg:facebook"></iconify-icon></button>
                                        <button type="button" className="btn tertiary-btn btn-lg me-md-2 d-flex align-items-center justify-content-center"><iconify-icon className='icon' icon="mdi:instagram"></iconify-icon></button>
                                        <button type="button" className="btn tertiary-btn btn-lg me-md-2 d-flex align-items-center justify-content-center"><iconify-icon className='icon' icon="mdi:youtube"></iconify-icon></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
