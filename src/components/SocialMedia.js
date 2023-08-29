import React from 'react'

export default function SocialMedia() {
    return (
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mx-3 mx-lg-5 my-5">
            <button type="button" className="btn primary-btn btn-lg px-2 px-lg-4 me-md-2">Learn More</button>
            <button type="button" className="btn tertiary-btn btn-lg me-md-2 d-flex align-items-center justify-content-center"><iconify-icon className='icon' icon="gg:facebook"></iconify-icon></button>
            <button type="button" className="btn tertiary-btn btn-lg me-md-2 d-flex align-items-center justify-content-center"><iconify-icon className='icon' icon="mdi:instagram"></iconify-icon></button>
            <button type="button" className="btn tertiary-btn btn-lg me-md-2 d-flex align-items-center justify-content-center"><iconify-icon className='icon' icon="mdi:youtube"></iconify-icon></button>
        </div>
    )
}
