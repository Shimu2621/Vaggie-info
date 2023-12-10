import React from 'react'
import { FaTag } from "react-icons/fa6";


const Store = () => {
  return (
    
    <div className='store'>
      <div className='store-wrapper container'>
        <div className='img-wrapper'>
          <div className='img-container'>
            <h5 className='year'>20 February 2023</h5>
            <img width='200px' height='200px' className='store-img' src="/images/food-store/store-1.png" alt="store-img" />
            <h6>Strategy for Norway's Peion <br /> Fund Global.</h6>
          </div>

          <div className='img-container'>
            <h5 className='year'>20 February 2023</h5>
            <img width='200px' height='200px' className='store-img' src="/images/food-store/store-2.png" alt="store-img" />
            <h6>Strategy for Norway's Peion <br /> Fund Global.</h6>
          </div>
        </div>

        <div className='img-wrapper'>
          <div className='img-container'>
            <h5 className='year'>20 February 2023</h5>
            <img width='200px' height='200px' className='store-img' src="/images/food-store/store-3.png" alt="store-img" />
            <h6>Strategy for Norway's Peion <br /> Fund Global.</h6>
          </div>

          <div className='img-container'>
            <h5 className='year'>20 February 2023</h5>
            <img width='200px' height='200px' className='store-img' src="/images/food-store/store-4.png" alt="store-img" />
            <h6>Strategy for Norway's Peion <br /> Fund Global.</h6>
          </div>
        </div>

        <div className='food-container'>
          <div className='food-wrapper'>
            <h6>&#9900; &#9900; &#9900; FRESH FROM OUR FARM</h6>
            <h1 className='title'>Trusted Organic Food <br /> Store Conscious</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Quisquam dolorum nemo soluta ad inventore porromo <br /> ducimus quam possimus veritatis optio.</p>
          </div>

          <div className='food-icon-container'>
            <div className='icon-list'>
            <h6 className='icon'><FaTag />  <span>Fruits</span></h6>
            <h6 className='icon'><FaTag />  <span>Vaggie</span></h6>
            <h6 className='icon'><FaTag />  <span>Juices</span></h6>
            <h6 className='icon'><FaTag />  <span>Dried</span></h6>
            <h6 className='icon'><FaTag />  <span>Breads</span></h6>
            </div>
            <div className='img-info'>
              <img src="/images/food-store/fruit3.png" alt="food-img" />
            </div>
          </div>
          <div>
            <button className='primary-btn mt-20'>Subscribe &rarr;</button>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Store