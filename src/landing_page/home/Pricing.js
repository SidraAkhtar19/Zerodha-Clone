import React from 'react';

function Pricing() {
    return ( 
        <div className = 'container'>
        <div className = 'row'>
           <div className='col-5'>
            <h2 className='mb-3'>Unbeatable pricing</h2>
            <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <a href="" style={{ textDecoration: "none" }}>
                See pricing{" "}
                <i class="fa-light fa-arrow-right"></i>
              </a>
           </div>
           <div className='col-7'>
            <div className='row mt-4'>
            <div className='col-4 d-flex align-items-center'>
    <img src="images/pricing-eq1.svg" style={{ width: "120px", marginRight: "10px" }} />
    <p className='text-muted mb-0' style={{ fontSize: "14px" }}>
        Free account opening
    </p>
</div>

<div className='col-4 d-flex align-items-center'>
    <img src="images/pricing-eq1.svg" style={{ width: "120px", marginRight: "10px" }} />
    <p className='text-muted mb-0' style={{ fontSize: "14px" }}>
        Free equity delivery <br/>and direct mutual funds
    </p>
</div>

<div className='col-4 d-flex align-items-center'>
    <img src="images/other-trades2.svg" style={{ width: "120px", marginRight: "10px" }} />
    <p className='text-muted mb-0' style={{ fontSize: "14px" }}>
        Intraday and F&O
    </p>
</div>


             </div>
           </div>
        </div>
    </div>
     );
}

export default Pricing;