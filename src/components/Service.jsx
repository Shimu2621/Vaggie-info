import React from 'react'

const Service = () => {
  return (
    <div className='service'>
        <div className='service-wrapper container'>
            <div className='service-icon'>
                <img src="/images/service-icon/payment.png" alt="service-icon" />
                <h5>Payment</h5>
                <h5>secure System</h5>
            </div>

            <div className='service-icon'>
            <img src="/images/service-icon/delivery.png" alt="service-icon" />
            <h5>Free Delivery</h5>
            <h5>from $50</h5>
            </div>

            <div className='service-icon'>
            <img src="/images/service-icon/days.png" alt="service-icon" />
            <h5>365 Days</h5>
            <h5>For free return</h5>
            </div>

            <div className='service-icon'>
            <img src="/images/service-icon/customer.png" alt="service-icon" />
            <h5>99% Customer</h5>
            <h5>Feedbacks</h5>
            </div>

            <div className='service-icon'>
            <img src="/images/service-icon/best.png" alt="service-icon" />
            <h5>Only Best</h5>
            <h5>Brands</h5>
            </div>
        </div>
    </div>
)
}

export default Service