import React, { useState } from 'react'
import products from '../staticData/product'


const Organic = () => {
    const [productsList, setProductsList] = useState(products)
    const [productItems, setProductItems] = useState(productsList)

    const handleFilters = (type) => {
        const items = productsList.filter(item => item.type === type)
        setProductItems(items)
    }
    
  return (
    <div className='organic'>
        <div className='organic-wrapper container'>
            <div className='flex container align-center'>  
                <div className='heading-left'>
                    <h6 className='secondary-text'>&#9900; &#9900; &#9900; FRESH FROM OUR FARM</h6>
                    <h2 className='label'>Good Organic Products</h2>
                </div>
                <div className='heading-right'>
                    <button className='active-btn'>All</button>

                    <button onClick={() => handleFilters("vegetable")} className='active-btn'>Vagetables</button>

                    <button onClick={() => handleFilters("fruit")} className='active-btn'>Fruits</button>
                </div>
            </div>

            <div className='organic-wrapper-container'>
                {
                    productItems?.map((item, i) =>
                        <div className='veg-details container' key={i}>
                            <div className='veg-img'>
                                <img src={item?.image} alt={item?.title} />
                            </div>

                            <div className='veg-info'>
                                <div className='text'>
                                    <div>MEATS <span className='disc'>{item?.discount}</span> <br /></div>
                                </div>

                                <div className='veg-others'>
                                    <h6> &#9733;  &#9733;  &#9733;  &#9733; &#9734;</h6>
                                    <h4 className='veg-name'>{item?.name}</h4>
                                    <div className='price'>${item?.currentPrice}<span className='pre-price'>${item?.prevPrice}</span></div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className='button'>
                <button className='primary-btn'>Subscribe &rarr;</button>
            </div>
        </div>
    </div>
  )
}

export default Organic